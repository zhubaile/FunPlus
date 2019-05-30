import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Select,Table,Pagination ,Message } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import moment from "moment/moment";
import IceContainer from '@icedesign/container';
import '../../index.css';
import { Dialog } from "@alifd/next/lib/index";
import BusinessPaymentBatch from '../BusinessPaymentBatch';

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['淘小宝', '淘二宝'][random(0, 1)],
      level: ['普通会员', '白银会员', '黄金会员', 'VIP 会员'][random(0, 3)],
      balance: random(10000, 100000),
      accumulative: random(50000, 100000),
      regdate: `2018-12-1${random(1, 9)}`,
      birthday: `1992-10-1${random(1, 9)}`,
      store: ['余杭盒马店', '滨江盒马店', '西湖盒马店'][random(0, 2)],
      z: ['支付宝'],
    };
  });
};

export default class Orderrefund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        selectiontime: '创建时间',
        startdate: '',
        paymentchannel: '全部',
        paymentstatus: '全部',
        ordernumber: '',
      },
      current: 1,
      isLoading: false,
      data: [],
    };
  }
  // 表单的值
  formChange = (value) => {
    debugger;
    this.setState({
      value,
    });
  };
  // 重置按钮
  handleReset() {
    this.setState({
      value: {
        selectiontime: '创建时间',
        startdate: '',
        paymentchannel: '全部',
        paymentstatus: '全部',
        ordernumber: '',
      },
    });
  }
  btnClick() {
    // console.log(this.input.value,this);
    // ;
    this.props.editor(this.input.getInputNode().value);
  }
  // 更新的数据
  componentDidMount() {
    this.fetchData();
  }

  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据
      }, 600);
    });
  };

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.mockApi(len).then((data) => { // data 里面为数据
          this.setState({
            data,
            isLoading: false,
          });
        });
      }
    );
  };

  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleFilterChange = () => { // gengxin 5条新数据
    this.fetchData(5);
  };

  handleDelete = () => {
    Dialog.confirm({
      title: '提示',
      content: '确认删除吗',
      onOk: () => {
        this.fetchData(10);
      },
    });
  };

  handleDetail = () => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持查看详情',
    });
  };

  renderOper = () => {
    return (
      <div>
        <a
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          详情
        </a>
      </div>
    );
  };
  render() {
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    const selectiontime = [
      { value: '创建时间', label: '创建时间' },
      { value: '完成时间', label: '完成时间' },
    ];
    const paymentchannel = [
      { value: '全部', label: '全部' },
      { value: '支付宝wap', label: '支付宝wap' },
      { value: '微信扫一扫', label: '微信扫一扫' },
      { value: '支付宝当面付', label: '支付宝当面付' },
      { value: '微信APP', label: '微信APP' },
      { value: '支付宝手机跳转', label: '支付宝手机跳转' },
    ];
    const paymentstatus = [
      { value: '全部', label: '全部' },
      { value: '待处理', label: '待处理' },
      { value: '成功', label: '成功' },
      { value: '失败', label: '失败' },
      { value: '拒绝', label: '拒绝' },
      { value: '规则拒绝', label: '规则拒绝' },
    ];
    const { isLoading, data, current } = this.state;
    return (
      <div className='expendordbat'>
        <Tab shape='pure' className='expendordbat-tab'>
          <Tab.Item title="企业付款API">
            <div>
              <FormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
                ref="form"
              >
                <Row wrap gutter="20" style={styles.formRow}>
                  <Col l="24">
                    <div style={styles.formItem}>
                      <span style={styles.formLabel}>选择时间</span>
                      <FormBinder name="selectiontime"
                        required
                        message="请输入正确的名称"
                        autoWidth={false}
                      >
                        <Select style={styles.formSelect} dataSource={selectiontime} />
                      </FormBinder>
                      <FormBinder name='startdate'>
                        <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
                      </FormBinder>
                      <span style={styles.formLabel}>付款渠道</span>
                      <FormBinder name='paymentchannel'>
                        <Select style={styles.formSelect} dataSource={paymentchannel} />
                      </FormBinder>
                    </div>
                  </Col>
                  <Col l="24">
                    <div style={styles.formItem}>
                      <span style={styles.formLabel}>付款状态</span>
                      <FormBinder name='paymentstatus'>
                        <Select style={styles.formSelect} dataSource={paymentstatus} />
                      </FormBinder>
                      <span style={styles.formLabel}>订单号</span>
                      <FormBinder name='ordernumber'>
                        <Input placeholder='输入订单号' hasClear />
                      </FormBinder>
                      <Button className='bg' size="large" type="secondary">搜索</Button>
                      <Button className='bg' size="large" type="secondary" onClick={this.handleReset.bind(this)}>重置</Button>
                      <Button className='bg right' size="large" type="secondary">导出表格</Button>
                    </div>
                  </Col>
                </Row>
              </FormBinderWrapper>
            </div>
            <span>本次搜索付款总额：5555</span>
            <div className='expendordbat-tabs-border' />

            <IceContainer>
              <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="创建时间、完成时间" dataIndex="name" />
                <Table.Column title="商户订单号平台流水号" dataIndex="level" />
                <Table.Column title="付款状态" dataIndex="balance" />
                <Table.Column title="付款金额" dataIndex="accumulative" />
                <Table.Column title="批次号" dataIndex="regdate" />
                <Table.Column title="付款渠道" dataIndex="birthday" />
                <Table.Column
                  title="操作"
                  width={200}
                  dataIndex="oper"
                  cell={this.renderOper}
                />
              </Table>
              <Pagination
                style={styles.pagination}
                current={current}
                onChange={this.handlePaginationChange}
              />
            </IceContainer>
            <Button className='orderposab'>发起单笔付款</Button>
          </Tab.Item>

          <Tab.Item title="企业批量退款">
            <BusinessPaymentBatch />
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}
const styles = {
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },
  formItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  formLabel: {
    minWidth: '80px',
    marginLeft: '10px',
    textAlign: 'center',
  },
  formSelect: {
    width: '200px',
    margin: '0 10px',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};

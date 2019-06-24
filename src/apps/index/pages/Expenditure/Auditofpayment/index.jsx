import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Select,Table,Pagination ,Message } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import moment from "moment/moment";
import IceContainer from '@icedesign/container';
import '../../index.css';
import { Dialog } from "@alifd/next/lib/index";
import Batchrefund from '../Batchrefund';

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
        refundstatus: '全部',
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
        refundstatus: '全部',
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
        <Button
          style={styles.tBtn}
          size='large'
          type="primary"
          onClick={this.handleDetail}
        >
          通过
        </Button>
      </div>
    );
  };
  render() {
    const { isLoading, data, current } = this.state;
    return (
      <div className='auditofpayment'>
        <Tab shape='pure' className='auditofpayment-tab'>
          <Tab.Item title="出款审核">
            <div style={{ position: 'absolute', right: 15, top: 100 }}>
              <div style={styles.divRadius}>今日总收￥1232323</div>
              <div style={styles.divRadius}>今日付款￥234234</div>
              <div style={styles.divRadius}>今日退款￥234232</div>

              {/*              <Button style={styles.btnRadius}>今日总收￥1232323</Button>
              <Button style={styles.btnRadius}>今日付款￥234234</Button>
              <Button style={styles.btnRadius}>今日退款￥234232</Button> */}
            </div>

            <div className='message'>
              <Message title="title" closeable type='error' className='message-e'>
                付款累计金额大于今日总收，请联系超级管理员，开启允许超额付款权限！
              </Message>
              <Message title="title" closeable type='error' className='message-e'>
                批量付款累计金额大于今日总收，请联系超级管理员，开启允许超额退款权限！
              </Message>
              <Message title="title" closeable type='error' className='message-e'>
                批量退款累计金额大于今日总收，请联系超级管理员，开启允许超额退款权限！
              </Message>
              <Message title="title" closeable type='error' className='message-e'>
                退款金额大于实际付款金额，请联系超级管理员，开启允许超额退款权限！
              </Message>
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

          </Tab.Item>
        </Tab>
      </div>
    );
  }
}

const styles = {
  divRadius: {
    display: 'inline-block',
    padding: '6px',
    borderRadius: '6px',
    marginRight: '15px',
    border: ' 1px solid #A3D0FD',
    backgroundColor: '#E2EDFF',
    color: '#419DFA',
  },
  btnRadius: {
    borderRadius: '6px',
    marginRight: '15px',
    borderColor: '#A3D0FD',
    backgroundColor: '#E2EDFF',
    color: '#419DFA',
  },
  tBtn: {
    borderRadius: '6px',
    height: '28px',
  },
  /*  containerTitle: {
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
  }, */
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};

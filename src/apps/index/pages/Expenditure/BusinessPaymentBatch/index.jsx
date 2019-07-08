import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Select,Table,Pagination ,Message } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../index.css';
import IceContainer from '@icedesign/container';
import moment from "moment/moment";

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
export default class Enterprise extends Component {
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
  btn() {
    this.props.history.push('/admin/expenditure/enterprisepaymentapi');
  }
  render() {
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2019-05-08', 'YYYY-MM-DD', true);
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
    const refundstatus = [
      { value: '全部', label: '全部' },
      { value: '待处理', label: '待处理' },
      { value: '成功', label: '成功' },
      { value: '失败', label: '失败' },
      { value: '待发送', label: '待发送' },
      { value: '已取消', label: '已取消' },
      { value: '已退票', label: '已退票' },
    ];
    const { isLoading, data, current } = this.state;
    return (
      <div className='expendordbat'>
        <Tab shape='pure' className='expendordbat-tab' defaultActiveKey='2'>
          <Tab.Item title="企业付款API" key='1 ' onClick={this.btn.bind(this)} >

          </Tab.Item>

          <Tab.Item title="企业批量退款" key='2'>
            <div>
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
                      <div style={styles.formItemTwo}>
                        <span style={styles.formLabel}>退款状态</span>
                        <FormBinder name='refundstatus'>
                          <Select style={styles.formSelect} dataSource={refundstatus} />
                        </FormBinder>
                        <span style={styles.formLabel}>订单号</span>
                        <FormBinder name='ordernumber'>
                          <Input className='input-bg' placeholder='输入订单号' hasClear />
                        </FormBinder>
                        <Button className='btn-all bg' size="large" type="secondary">搜索</Button>
                        <Button className='btn-all bg' size="large" type="secondary" onClick={this.handleReset.bind(this)}>重置</Button>
                      </div>
                    </Col>
                  </Row>
                </FormBinderWrapper>
              </div>
              <div className='expendordbat-tabs-border' />
              <IceContainer>
                <Table loading={isLoading} dataSource={data} hasBorder={false}>
                  <Table.Column title="创建时间、完成时间" dataIndex="name" />
                  <Table.Column title="商户订单号平台流水号" dataIndex="level" />
                  <Table.Column title="退款状态" dataIndex="balance" />
                  <Table.Column title="退款金额" dataIndex="accumulative" />
                  <Table.Column title="实付金额" dataIndex="regdate" />
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
              {/*        <Button className='btn-all orderposab' size='large' type='secondary'>批量企业付款</Button> */}
            </div>
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
  },
  formItemTwo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
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

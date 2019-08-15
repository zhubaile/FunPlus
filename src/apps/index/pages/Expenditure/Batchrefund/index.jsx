import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Select,Table,Pagination ,Message } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { actions, reducers, connect } from '@indexStore';
import { batchRefundList } from '@indexApi';
import IceContainer from '@icedesign/container';
import moment from "moment/moment";
import '../../index.css';

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
export default class Submerchants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        dateType: 'createdAt',
        startdate: [],
      },
      total: 0, // 总数据
      pageSize: 10, // 一页条数
      current: 1, // 页码
      isLoading: false,
      datas: [], // 列表数据
      results2: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (values,arrivalDate) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const pages = this.state.current;
        const pageSize = this.state.pageSize;
        batchRefundList({
          pages,
          pageSize,
          ...values,
          arrivalDate,
        }).then(({ status,data })=>{
          if (data.errCode == 0) {
            this.setState({
              datas: data.data.result,
              results2: data.data.result2,
              isLoading: false,
              total: data.data.totalCount,
            });
          }else {
            Message.success(data.message);
          }
        });
      }
    );
  }
  btnClick() {
    this.props.editor(this.input.getInputNode().value);
  }
  // 重置
  handleReset() {
    this.setState({
      value: {
        dateType: 'createdAt',
        startdate: [],
      },
    });
  }
  renderOper = () => {
    return (
      <div>
        <a
          type="primary"
          style={{ marginRight: '5px',cursor: 'pointer' }}
          onClick={this.handleDetail}
        >
          详情
        </a>
      </div>
    );
  };
  btn() {
    this.props.history.push('/admin/expenditure/orderrefund');
  }
  // 搜索
  search(e) {
    const { validateFields } = this.refs.form;
    validateFields((errors,values)=>{
      const arrivalDate = [];
      if (values.startdate.length == 2) {
        const startdatestart = moment(values.startdate[0]._d).valueOf();
        const startdateend = moment(values.startdate[1]._d).valueOf();
        arrivalDate.push(startdatestart);
        arrivalDate.push(startdateend);
      }
      this.fetchData(values,arrivalDate);
    });
  }
  createdAt=(e)=>{
    const createdAt = moment(e).format('YYYY-MM-DD HH:mm:ss');
    return (
      <p>{createdAt}</p>
    );
  }
  updatedAt=(e)=>{
    const updatedAt = moment(e).format('YYYY-MM-DD HH:mm:ss');
    return (
      <p>{updatedAt}</p>
    );
  }
  result=(e)=>{
    return (
      <p>成功{e.success}，失败{e.fail}，处理中{e.pend}</p>
    );
  }
  render() {
    const { isLoading, datas, current,results2,pageSize ,total } = this.state;
    const dateType = results2.dateType;
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    return (
      <div className='expendordbat'>
        <Tab shape='pure' className='expendordbat-tab' defaultActiveKey='2'>
          <Tab.Item title="订单退款" onClick={this.btn.bind(this)} key='1'>
          </Tab.Item>

          <Tab.Item title="批量退款" key='2'>
            <div className='expendbatchre'>
              <Message type='notice' className='message-all expendbatchre-message'>
                应用直连：使用您直接申请的渠道支付参数或我们代为您申请的渠道参数进行交易，所有资金有微信，支付宝，银联，持牌方清算
              </Message>
              <div style={styles.formItem}>
                <FormBinderWrapper
                  value={this.state.value}
                  onChange={this.formChange}
                  ref="form"
                >
                  <span style={styles.formLabel}>选择时间</span>
                  <FormBinder name="dateType"
                    required
                    message="请输入正确的名称"
                    autoWidth={false}
                  >
                    <Select style={styles.formSelect} dataSource={dateType} />
                  </FormBinder>
                  <FormBinder name='startdate'>
                    <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
                  </FormBinder>
                </FormBinderWrapper>
                <Button className='btn-all bg' size="large" type="secondary" onClick={this.search.bind(this)}>搜索</Button>
                <Button className='btn-all bg' size="large" type="secondary" onClick={this.handleReset.bind(this)}>重置</Button>
                <Button className='btn-all orderposab' size='large' type='secondary' >批量退款</Button>
              </div>
              {/* <div className='expendordbat-tabs-border' /> */}

              <IceContainer>
                <Table loading={isLoading} dataSource={datas} hasBorder={false}>
                  <Table.Column title="创建时间" dataIndex="createdAt" cell={this.createdAt} />
                  <Table.Column title="完成时间" dataIndex="updatedAt" cell={this.updatedAt} />
                  <Table.Column title="批量退款编号" dataIndex="batchNumber" />
                  <Table.Column title="退款总笔数" dataIndex="refundNumber" />
                  <Table.Column title="退款总金额" dataIndex="refundAmount" />
                  <Table.Column title="结果" dataIndex="result" cell={this.result} />
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
                  pageSize={pageSize} // 界面展示多少条数据
                  total={total} // 一共多少条数据
                />
              </IceContainer>
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
    flexWrap: 'wrap',
    width: '100%',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: 'ba(16, 16, 16, 1)',
    fontSize: '14px',
    boxShadow: '0px 2px 6px 0px rgba(229, 229, 229, 1)',
    border: '1px solid rgba(255, 255, 255, 0)',
    padding: '20px 0',
    marginTop: '20px',
  },
  formLabel: {
    minWidth: '80px',
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

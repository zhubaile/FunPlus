/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio, Select , Grid, Form ,Button,Pagination,Table, Message,Tab } from '@alifd/next';
import Customerservice from "../components/Customerservice";
import { withRouter, Link } from 'react-router-dom';
import { invoiceList,invoiceDelete,InvoiceOperation } from '@indexApi';
import Applyticket from './Applyticket';
import '../../index.css';
import moment from 'moment';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
};
class Controloverinvoices extends Component {
  static displayName = 'Controloverinvoices';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      total: 0, // 总数据
      pageSize: 10, // 一页条数
      current: 1, // 页码
      isLoading: false,
      datas: [], // 列表数据
      InvoiceInfo: {}, // 开票信息
      MailAddress: [], // 地址信息
      TotalAmount: '', // 总金额
      ConsumptionAmount: '', // 已开票金额
      retreatTicket: [], // 申请退票的发票错误类型
    };
  }
  /* 设置定时器用 */
  componentDidMount() {
    this.fetchData();
  }

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const pages = this.state.current;
        const pageSize = this.state.pageSize;
        invoiceList({
          page: pages,
          pageSize,
        }).then(({ status,data })=>{
          debugger;
          if (data.errCode == 0) {
            this.setState({
              datas: data.data.result,
              InvoiceInfo: data.data.invoiceInfo,
              MailAddress: data.data.mailAddress,
              TotalAmount: data.data.totalAmount,
              ConsumptionAmount: data.data.consumptionAmount,
              isLoading: false,
              total: data.data.totalCount,
              retreatTicket: data.data.retreatTicket,
            });
          } else {
            Message.success(data.message);
          }
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
  /* // 删除
  handleDelete = (id) => {
    debugger;
    const { datas } = this.state;
    invoiceDelete({
      _id: id,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        let index = -1;
        datas.forEach((item, i) => {
          debugger;
          if (item._id === id) {
            index = i;
          }
        });
        if (index !== -1) {
          datas.splice(index, 1);
          this.setState({
            datas,
          });
        }
      }
    });
  }; */
  // 申请退票
  Applyticketbtn(record) {
    const retreatTicket = this.state.retreatTicket;
    this.Applyticket.applyticketopen(record,retreatTicket);
  }
  // 申请撤销
  Applyrevokebtn(id) {
    InvoiceOperation({
      _id: id,
      operation: 2,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        Message.success(data.message);
      } else {
        Message.success(data.message);
      }
    });
  }
  // 查看详情的跳转
  invoicebtn(record) {
    this.props.history.push({ pathname: '/admin/personal/invoicedetails', state: { record } });
  }
  // 时间转换
  datatime=(e)=>{
    const updatedAt = moment(e).format('YYYY-MM-DD HH:mm:ss');
    return (
      <p>{updatedAt}</p>
    );
  }
  // 操作的数据
  renderOper = (value, index, record) => {
    return (
      <div>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px', borderRight: '2px solid #999999',cursor: 'pointer' }}
          onClick={this.invoicebtn.bind(this,record)}
        >
          <FormattedMessage id="app.btn.detail" />
        </a>
        {/* 删除的 */}
        {/* <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px' }}
          onClick={this.handleDelete.bind(this,record._id)}
        >InvoiceOperation
          <FormattedMessage id="app.btn.delete" />
        </a> */}
        {value.includes(2) ? (
          <a
            style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px',cursor: 'pointer' }}
            onClick={this.Applyrevokebtn.bind(this,record._id)}
          >
            申请撤销
          </a>
        ) : null}
        {value.includes(3) ? (
          <a
            style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px',cursor: 'pointer' }}
            onClick={this.Applyticketbtn.bind(this,record)}
          >
            申请退票
          </a>
        ) : null}
      </div>
    );
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    const { isLoading, datas, current,total,pageSize, MailAddress, InvoiceInfo, TotalAmount, ConsumptionAmount } = this.state;
    return (
      <div className="controloverinvoices">
        <Applyticket ref={ node => this.Applyticket = node } fetchData={this.fetchData.bind(this)} />
        <Tab>
          <Tab.Item shape='pure' title='发票管理'>

            <div className='controloverinvoices-top'>

              <div className='controloverinvoices-top-onecontent'>
                <div>
                  <img src={require('../../../../../assets/img/houtai/personal/008.png')} alt="" />
                  <div>
                    <p style={{ fontSize: '14px' ,color: 'rgba(34, 90, 225, 0.9)' , marginLeft: '20px' }}>可开票金额</p>
                    <strong>{TotalAmount}元</strong>
                  </div>
                </div>
                {/* <p style={{ fontSize: '16px' }}>可用于支付待申请服务费用等</p> */}
                <span>
                  <p>已经开票金额</p>
                  <p>{ConsumptionAmount}元</p>
                </span>

                <Button type='primary' size="large" style={{ borderRadius: '5px' }}><Link to='/admin/personal/applyforaticket' style={{ color: '#fff' }}>申请开票</Link></Button>
              </div>
              <div className='controloverinvoices-top-twocontent'>
                <div>
                  {/*    <img src={require('../../../../../assets/img/houtai/personal/009.png')} alt="" /> */}
                  <div className='controloverinvoices-topright-content'>
                    <p style={{ fontSize: '14px' ,color: 'rgba(34, 90, 225, 0.9)' }}>开票信息</p>
                    <div>
                      {
                          !InvoiceInfo ? (
                            <span className='topright-inner'>
                              <p>公司名称：</p>
                              <p>开户行：</p>
                              <p>开户账号：</p>
                              <p>税号：</p>
                            </span>
                          ) : (
                            <span className='topright-inner'>
                              <p>公司名称：{InvoiceInfo.company}</p>
                              <p>开户行：{InvoiceInfo.bank}</p>
                              <p>开户账号：{InvoiceInfo.userId}</p>
                              <p>税号：{InvoiceInfo.taxNumber}</p>
                            </span>
                          )
                        }
                      {
                          !MailAddress ? (
                            <span className='topright-inner'>
                              <p>收件联系人：</p>
                              <p>地址：</p>
                              <p>联系方式：</p>
                            </span>
                          ) : (
                            <span className='topright-inner'>
                              <p>收件联系人：{MailAddress.name}</p>
                              <p>地址：{MailAddress.mailAddress}</p>
                              <p>联系方式：{MailAddress.phone}</p>
                            </span>
                          )
                        }
                    </div>

                  </div>
                </div>


              </div>
            </div>
            <div className='controloverinvoices-bottom'>
              <Table loading={isLoading} dataSource={datas} hasBorder={false}>
                <Table.Column title="发票ID" dataIndex="invoiceNo" />
                <Table.Column title="申请日期" dataIndex="createdAt" cell={this.datatime} />
                <Table.Column title="发票抬头" dataIndex="invoiceTitle" />
                <Table.Column title="发票类型" dataIndex="invoiceTypeName" />
                <Table.Column title="开票金额" dataIndex="fee" />
                {/* <Table.Column title="订单号" dataIndex="_id" /> */}
                <Table.Column title="发票状态" dataIndex="invoiceStatusName" />
                <Table.Column
                  title="操作"
                  dataIndex="operation"
                  cell={this.renderOper}
                />
              </Table>
              <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
                pageSize={pageSize} // 界面展示多少条数据
                total={total}
              />
              {/*            <h2>笔记：</h2>
            <div className='controloverinvoices-bottom-left'>
              <p>所有账户将在收到发票7天内支付。通过支票或信用卡支付或在线直接支付</p>
              <p>如果在7天内未支付账户。则作为确认工作提供的详细信息将按上述商定的报价收取</p>
            </div>
            <div className='controloverinvoices-bottom-right'>
              <p>小计： <strong>￥4142.00</strong></p>
              <p>增值税（12.5）：<strong>￥515.00</strong></p>
            </div> */}
            </div>
            <Customerservice />
          </Tab.Item>
        </Tab>

      </div>
    );
  }
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
};

export default injectIntl(Controloverinvoices);

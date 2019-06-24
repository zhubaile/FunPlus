/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio, Select , Grid, Form ,Button,Pagination,Table, Dialog } from '@alifd/next';
import Customerservice from "../components/Customerservice";
import { withRouter, Link } from 'react-router-dom';
import { invoiceList,invoiceDelete } from '@indexApi';
// import Qrcode, { Panel } from '@icedesign/qrcode'; // 二维码
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
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      invoiceid: ['CZ1558581363296'],
      applicationdate: ['2019-05-16 12:36:32'],
      trackingnumber: ['13612345678'],
      invoice: ['上海'],
      invoiceamount: ['￥1799.00'],
      invoicestatus: ['已出票'],
      oper: [''],
    };
  });
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
      InvoiceInfo: [], // 开票信息
      MailAddress: [], // 地址信息
      TotalAmount: '', // 总金额
      ConsumptionAmount: '', // 已开票金额

    };
  }
  /* 设置定时器用 */
  componentDidMount() {
    this.fetchData();
  }

  /*  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据  resolve(应该写ajax方法)
      }, 600);
    });
  }; */

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
            });
          }
        });
        /* this.mockApi(len).then((data) => { // data 里面为数据
          this.setState({
            data,
            isLoading: false,
          });
        }); */
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

  /* balancerecharge() {
    this.Recharge.open();
  } */

  handleDelete = (id) => {
    /* Dialog.confirm({
      title: '提示',
      content: '确认删除吗',
      onOk: () => {
        this.fetchData(10);
      },
    }); */
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
  };

  handleDetail = () => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持查看详情',
    });
  };

  datatime=(e)=>{
    const updatedAt = moment(e).format('YYYY-MM-DD HH:mm:ss');
    return (
      <p>{updatedAt}</p>
    );
  }
  renderOper = (value, index, record) => {
    return (
      <div>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px', borderRight: '2px solid #999999' }}
          onClick={this.handleDetail}
        >
          <FormattedMessage id="app.btn.detail" />
        </a>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px' }}
          onClick={this.handleDelete.bind(this,record._id)}
        >
          <FormattedMessage id="app.btn.delete" />
        </a>
      </div>
    );
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    const { isLoading, datas, current,total,pageSize, MailAddress, InvoiceInfo, TotalAmount, ConsumptionAmount } = this.state;
    return (
      <div>
        <div className='personal-top'>
          <span>发票管理</span>
          <div className='personal-top-border' />
        </div>
        <div className="controloverinvoices">
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

              <Button type='primary' style={{ borderRadius: '5px' }}><Link to='/admin/personal/applyforaticket' style={{ color: '#fff' }}>申请开票</Link></Button>
            </div>
            <div className='controloverinvoices-top-twocontent'>
              <div>
                {/*    <img src={require('../../../../../assets/img/houtai/personal/009.png')} alt="" /> */}
                <div className='controloverinvoices-topright-content'>
                  <p style={{ fontSize: '14px' ,color: 'rgba(34, 90, 225, 0.9)' , marginLeft: '20px' }}>开票信息</p>
                  {/* <strong>0.00元</strong> */}
                 {/* <span>
                    <p>公司名称：{InvoiceInfo.company}</p>
                    <p>开户行：{InvoiceInfo.bank}</p>
                    <p>开户账号：{InvoiceInfo.userId}</p>
                    <p>税号：{InvoiceInfo.taxNumber}</p>
                  </span>
                  <span className='topright-inner'>
                    <p>收件联系人：{MailAddress.contacts}</p>
                    <p>地址：{MailAddress.mailAddress}</p>
                    <p>联系方式：{MailAddress.phone}</p>
                  </span>*/}
                </div>
              </div>
            </div>
          </div>
          <div className='controloverinvoices-bottom'>
            <Table loading={isLoading} dataSource={datas} hasBorder={false}>
              <Table.Column title="发票ID" dataIndex="invoiceNumber" />
              <Table.Column title="申请日期" dataIndex="updatedAt" cell={this.datatime} />
              <Table.Column title="快递单号" dataIndex="userId" />
              <Table.Column title="发票抬头" dataIndex="invoiceTitle" />
              <Table.Column title="开票金额" dataIndex="totalFee" />
              <Table.Column title="发票状态" dataIndex="invoiceStatus" />
              <Table.Column
                title="操作"
                dataIndex="oper"
                cell={this.renderOper}
              />
            </Table>
            <Pagination
              style={{ marginTop: '20px', textAlign: 'right' }}
              current={current}
              onChange={this.handlePaginationChange}
              pageSize={10} // 界面展示多少条数据
              total={total} // 一共多少条数据
            />
            <h2>笔记：</h2>
            <div className='controloverinvoices-bottom-left'>
              <p>所有账户将在收到发票7天内支付。通过支票或信用卡支付或在线直接支付</p>
              <p>如果在7天内未支付账户。则作为确认工作提供的详细信息将按上述商定的报价收取</p>
            </div>
            <div className='controloverinvoices-bottom-right'>
              <p>小计： <strong>￥4142.00</strong></p>
              <p>增值税（12.5）：<strong>￥515.00</strong></p>
            </div>
          </div>
          <Customerservice />
        </div>
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

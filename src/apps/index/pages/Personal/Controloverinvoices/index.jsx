/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio, Select , Grid, Form ,Button,Pagination,Table, Dialog } from '@alifd/next';
import Customerservice from "../components/Customerservice";
import { withRouter, Link } from 'react-router-dom';
// import Qrcode, { Panel } from '@icedesign/qrcode'; // 二维码
import '../../index.css';

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
      current: 1,
      isLoading: false,
      data: [],
    };
  }
  /* 设置定时器用 */
  componentDidMount() {
    this.fetchData();
  }

  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据  resolve(应该写ajax方法)
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

  /* balancerecharge() {
    this.Recharge.open();
  } */

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
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px', borderRight: '2px solid #999999' }}
          onClick={this.handleDetail}
        >
          <FormattedMessage id="app.btn.detail" />
        </a>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px' }}
          onClick={this.handleDelete}
        >
          <FormattedMessage id="app.btn.delete" />
        </a>

        {/*        <Button
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          <FormattedMessage id="app.btn.detail" />
        </Button>
        <Button type="normal" warning onClick={this.handleDelete}>
          <FormattedMessage id="app.btn.delete" />
        </Button> */}
      </div>
    );
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    const { isLoading, data, current } = this.state;
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
                  <strong>0.00元</strong>
                </div>
              </div>
              {/* <p style={{ fontSize: '16px' }}>可用于支付待申请服务费用等</p> */}
              <span>
                <p>已经开票金额</p>
                <p>0.00元</p>
              </span>

              <Button type='primary'><Link to='/admin/personal/applyforaticket'>申请开票</Link></Button>
            </div>
            <div className='controloverinvoices-top-twocontent'>
              <div>
                {/*    <img src={require('../../../../../assets/img/houtai/personal/009.png')} alt="" /> */}
                <div className='controloverinvoices-topright-content'>
                  <p style={{ fontSize: '14px' ,color: 'rgba(34, 90, 225, 0.9)' , marginLeft: '20px' }}>开票信息</p>
                  {/* <strong>0.00元</strong> */}
                  <span>
                    <p>公司名称：与认证公司绑定</p>
                    <p>开户行：</p>
                    <p>开户账号：</p>
                    <p>税号：与认证公司绑定</p>
                  </span>
                  <span className='topright-inner'>
                    <p>收件联系人：xiaoxx</p>
                    <p>地址：</p>
                    <p>联系方式：</p>
                  </span>
                </div>
              </div>
              {/* <p style={{ fontSize: '16px' }}>默认显示所有消费总额</p> */}
              <Button type='primary'>修改开票信息</Button>
            </div>
            {/*            <div className='controloverinvoices-top-left'>
              <div style={{ width: '30px', height: '30px' ,borderRadius: '50%', background: 'rgba(161,222,238,1)' }} />
              <h2>你好，朱柏乐</h2>
              <p>请在下面找到最近完成的工作成本细目，请尽快付款，如有任何问题，请随时与我联系</p>
              <div className='controloverinvoices-top-left-bottom'>
                <div className='box'>
                  <h2>账单地址</h2>
                  <p>asdddddddddddddddddddd</p>
                  <p>asdddddddddddddddddddd</p>
                  <p>asdddddddddddddddddddd</p>
                  <p>asdddddddddddddddddddd</p>
                </div>
                <div className='box'>
                  <h2>收件地址</h2>
                  <p>asdddddddddddddddddddd</p>
                  <p>asdddddddddddddddddddd</p>
                  <p>asdddddddddddddddddddd</p>
                  <p>asdddddddddddddddddddd</p>
                </div>
              </div>
            </div>
            <div className='controloverinvoices-top-right'>
              <Form style={{ }} {...formItemLayout}>
                <FormItem label="订单日期：">
                  <p>2016年5月16日</p>
                </FormItem>
                <FormItem label="订单状态：">
                  <Button>付费</Button>
                </FormItem>
                <FormItem label="订单编号：">
                  <p>#123456</p>
                </FormItem>
              </Form>
              <img src={require('../../../../../assets/img/houtai/personal/008.png')} style={{ width: '100px' , height: '100px' }} alt="" />
               <Panel value="https://www.taobao.com" text="使用手机淘宝扫码查看" />
            </div> */}


            {/* 通过绝对定位控制二维码 */}
            {/* <div>
            <img src={require('../../../../../assets/img/houtai/personal/008.png')} style={{ width: '100px' , height: '100px'}} alt="" />
          </div> */}
          </div>
          <div className='controloverinvoices-bottom'>
            <Table loading={isLoading} dataSource={data} hasBorder={false}>
              <Table.Column title="发票ID" dataIndex="invoiceid" />
              <Table.Column title="申请日期" dataIndex="applicationdate" />
              <Table.Column title="快递单号" dataIndex="trackingnumber" />
              <Table.Column title="发票抬头" dataIndex="invoice" />
              <Table.Column title="开票金额" dataIndex="invoiceamount" />
              <Table.Column title="发票状态" dataIndex="invoicestatus" />
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

/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio, Select , Grid, Form ,Button,Pagination,Table } from '@alifd/next';
import Customerservice from "../components/Customerservice";
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
      name: ['BS200'],
      level: ['5'],
      rule: ['￥1799.00'],
      oper: ['￥1799.00'],
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
            <div className='controloverinvoices-top-left'>
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
              {/* <Panel value="https://www.taobao.com" text="使用手机淘宝扫码查看" /> */}
            </div>
            {/* 通过绝对定位控制二维码 */}
            {/* <div>
            <img src={require('../../../../../assets/img/houtai/personal/008.png')} style={{ width: '100px' , height: '100px'}} alt="" />
          </div> */}
          </div>
          <div className='controloverinvoices-bottom'>
            <Table loading={isLoading} dataSource={data} hasBorder={false}>
              <Table.Column title="项目" dataIndex="name" />
              <Table.Column title="数量" dataIndex="level" />
              <Table.Column title="成本单位" dataIndex="rule" />
              <Table.Column
                title="总计"
                dataIndex="oper"
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

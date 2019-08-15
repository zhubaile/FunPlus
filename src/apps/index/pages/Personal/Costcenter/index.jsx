/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import { withRouter, Link } from 'react-router-dom';
import { Message, Radio, Tab , Button, Grid, Form, DatePicker,Table,Pagination } from '@alifd/next';
import Customerservice from "../components/Customerservice";
import { rechargeList,deductionList } from '@indexApi';
import Recharges from './Recharge';
import '../../index.css';
import moment from "moment/moment";

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['BS200'],
      level: ['2019-02-22 12:26:33'],
      rule: ['￥1799.00'],
      oper: ['成功'],
      qudao: ['支付宝'],
    };
  });
};
@withRouter
class Costcenter extends Component {
  static displayName = 'Costcenter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      total: 0,
      current: 1,
      isLoading: false,
      datas: [],
      datass: [],
      Deduction: '', // 累计扣费
      balance: '', // 账户余额
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const page = this.state.current;
        const pageSize = this.state.pageSize;
        rechargeList({
          page,
          pageSize,
        }).then(({ status,data })=>{
          debugger;
          if (data.errCode == 0) {
            this.setState({
              datas: data.data.result,
              balance: data.data.balance,
              Deduction: data.data.Deduction,
              isLoading: false,
              total: data.data.totalCount,
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
  balancerecharge() {
    this.Recharges.open();
  }
  detailsdeduction() {
    this.props.history.push('/admin/personal/detailsofdeduction');
  }
  // 时间转换
  datatime=(e)=>{
    const updatedAt = moment(e).format('YYYY-MM-DD HH:mm:ss');
    return (
      <p>{updatedAt}</p>
    );
  }
  // 扣费记录信息列表
  deductionbtn() {
    const page = this.state.current;
    const pageSize = this.state.pageSize;
    deductionList({
      page,
      pageSize,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        this.setState({
          datass: data.data.result,
        });
      }
    });
  }
  render() {
    const { isLoading, datas, current,pageSize ,total,datass,balance,Deduction } = this.state;
    const {
      intl: { formatMessage },
    } = this.props;
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    return (
      <div className="costcenter">
        <Recharges ref={ node => this.Recharges = node } />
        <Tab>
          <Tab.Item shape='pure' title='费用中心'>
            {/* <div className='costcenter-top'>
            <span>时间：</span>
            <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
            <span className='twospan'>总金额：<strong>￥0.00</strong></span>
          </div> */}
            <div className='costcenter-conter'>
              <div className='costcenter-conter-onecentent'>
                <div>
                  <img src={require('@img/houtai/personal/008.png')} alt="" />
                  <div>
                    <p style={{ fontSize: '14px' ,color: 'rgba(34, 90, 225, 0.9)' , marginLeft: '20px' }}>账户余额</p>
                    <strong>{balance}元</strong>
                  </div>
                </div>
                <p style={{ fontSize: '16px' }}>可用于支付待申请服务费用等</p>
                <Button className='btn-all' size="large" type='primary ' style={styles.btnRadius} onClick={this.balancerecharge.bind(this)}>点击充值</Button>
              </div>
              <div className='costcenter-conter-twocentent'>
                <div>
                  <img src={require('@img/houtai/personal/009.png')} alt="" />
                  <div>
                    <p style={{ fontSize: '14px' ,color: 'rgba(34, 90, 225, 0.9)' , marginLeft: '20px' }}>累计扣费</p>
                    <strong>{Deduction}元</strong>
                  </div>
                </div>
                <p style={{ fontSize: '16px' }}>默认显示所有消费总额</p>
                <Button className='btn-all' size="large" type='primary' style={styles.btnRadius} onClick={this.detailsdeduction.bind(this)}>查询明细</Button>
              </div>
            </div>
            <div className='costcenter-bottom'>
              {/* <span style={{ fontSize: '20px', color: '#6C757D' }}>消费记录</span>
            <Input hasClear placeholder='输入订单号' aria-label="please input" ref={node=>this.applicationID = node} style={{ marginLeft: '100px', width: '300px' }} />
            <Button className='bg' size="large" type="primary">查询</Button> */}
              <Tab shape='pure' className='tab'>
                <Tab.Item title="充值记录">
                  <Table loading={isLoading} dataSource={datas} hasBorder={false}>
                    <Table.Column title="订单号" dataIndex="orderNumber" />
                    <Table.Column title="交易时间" dataIndex="createdAt" cell={this.datatime} />
                    <Table.Column title="金额" dataIndex="totalFee" />
                    <Table.Column
                      title="支付状态"
                      dataIndex="rechargeStatus"
                    />
                    <Table.Column title="支付渠道" dataIndex="payChannel" />
                  </Table>
                  <Pagination
                    style={{ marginTop: '20px', textAlign: 'right' }}
                    current={current}
                    onChange={this.handlePaginationChange}
                    pageSize={pageSize} // 界面展示多少条数据
                    total={total} // 一共多少条数据
                  />
                </Tab.Item>
                <Tab.Item title="扣费记录" onClick={this.deductionbtn.bind(this)}>
                  <Table loading={isLoading} dataSource={datass} hasBorder={false}>
                    <Table.Column title="订单号" dataIndex="orderNo" />
                    <Table.Column title="交易时间" dataIndex="createdAt" />
                    <Table.Column title="金额" dataIndex="deductionFee" />
                    {/* <Table.Column
                    title="支付状态"
                    dataIndex="orderStatusName"
                  /> */}
                    <Table.Column title="支付渠道" dataIndex="channelName" />
                  </Table>
                  <Pagination
                    style={{ marginTop: '20px', textAlign: 'right' }}
                    current={current}
                    onChange={this.handlePaginationChange}
                    pageSize={pageSize} // 界面展示多少条数据
                    total={total}
                  />
                </Tab.Item>
              </Tab>
            </div>
            <Customerservice />
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}

const styles = {
  btnRadius: {
    marginTop: '15px',
    borderRadius: '4px',
  },
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

export default injectIntl(Costcenter);

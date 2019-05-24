/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import { Input, Radio, Select , Button, Grid, Form, DatePicker,Table,Pagination } from '@alifd/next';
import Customerservice from "../components/Customerservice";
import Recharge from './Recharge';
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
    };
  });
};

class Costcenter extends Component {
  static displayName = 'Costcenter';

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
  balancerecharge() {
    this.Recharge.open();
  }
  render() {
    const { isLoading, data, current } = this.state;
    const {
      intl: { formatMessage },
    } = this.props;
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    return (
      <div>
        <Recharge ref={ node => this.Recharge = node } />
        <div className='personal-top'>
          <span>费用中心</span>
          <div className='personal-top-border' />
        </div>
        <div className="costcenter">
          <div className='costcenter-top'>
            <span>时间：</span>
            <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
            <span className='twospan'>总金额：<strong>￥0.00</strong></span>
          </div>
          <div className='costcenter-conter'>
            <div className='costcenter-conter-onecentent'>
              <div>
                <img src={require('../../../../../assets/img/houtai/personal/008.png')} alt="" />
                <strong>0.00元</strong>
              </div>
              <p><strong>账户余额</strong>(可用于支付待申请服务费用等)</p>
              <Button type='primary' onClick={this.balancerecharge.bind(this)}>点击充值</Button>
            </div>
            <div className='costcenter-conter-twocentent'>
              <div>
                <img src={require('../../../../../assets/img/houtai/personal/009.png')} alt="" />
                <strong>0.00元</strong>
              </div>
              <p><strong>抵用券余额</strong>(用于3FunPlus平台消费抵扣)</p>
              <p>（添加与查看记录请至抵用券目录）</p>
            </div>
          </div>
          <div className='costcenter-bottom'>
            <span style={{ fontSize: '20px', color: '#6C757D' }}>消费记录</span>
            <Input hasClear placeholder='输入订单号' aria-label="please input" ref={node=>this.applicationID = node} style={{ marginLeft: '100px', width: '300px' }} />
            <Button className='bg' size="large" type="primary">查询</Button>
            <Table loading={isLoading} dataSource={data} hasBorder={false}>
              <Table.Column title="产品" dataIndex="name" />
              <Table.Column title="交易时间" dataIndex="level" />
              <Table.Column title="金额" dataIndex="rule" />
              <Table.Column
                title="支付状态"
                dataIndex="oper"
              />
            </Table>
            <Pagination
              style={{ marginTop: '20px', textAlign: 'right' }}
              current={current}
              onChange={this.handlePaginationChange}
            />
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

export default injectIntl(Costcenter);

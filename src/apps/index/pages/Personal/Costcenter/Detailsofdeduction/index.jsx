/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio , Button, Grid, Form, Message, Tab, Table, DatePicker, Pagination, Select } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';

import Customerservice from "../../../Personal/components/Customerservice";

const { RangePicker } = DatePicker;
import moment from "moment/moment";

const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      requesttime: ['CZ15581363296'],
      requestaddress: ['2019-02-22 12:26:32'],
      responsestatuscode: ['￥1799.00'],
      requestip: ['支付成功'],
      requestmethod: ['BeePay微信扫码'],
    };
  });
};
const { Row, Col } = Grid;

export default class Recharges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      isLoading: false,
      data: [],
      value: {
        selectiontime: '全部交易类型',
        paymentchannel: '全部扣费类型',
      },

    };
  }

  btnClick() {
    this.props.editor(this.input.getInputNode().value);
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

  render() {
    const { isLoading, data, current } = this.state;

    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2019-05-08', 'YYYY-MM-DD', true);

    const selectiontime = [
      { value: '全部交易类型', label: '全部交易类型' },
    ];
    const paymentchannel = [
      { value: '全部扣费类型', label: '全部扣费类型' },
    ];

    return (
      <div className='deduction-details'>

        <Tab shape='pure' className=''>
          <Tab.Item title='扣费明细'>
            <div className='deduction-details-topcontent'>
              <Button className='btn-all bg' size="large" type="secondary">本月</Button>
              <Button className='btn-all bg' size="large" type="secondary">上月</Button>
              <FormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
                ref="form"
              >
                <FormBinder name='startdate'>
                  <RangePicker style={{ marginLeft: '20px' }} showTime resetTime defaultValue={[startValue,endValue]} />
                </FormBinder>

                <FormBinder name="selectiontime"
                  required
                  message="请输入正确的名称"
                  autoWidth={false}
                >
                  <Select style={styles.formSelect} dataSource={selectiontime} />
                </FormBinder>
                <FormBinder name='paymentchannel'>
                  <Select style={styles.formSelect} dataSource={paymentchannel} />
                </FormBinder>

              </FormBinderWrapper>
            </div>

            <div className='deduction-details-middlecontent'>
              <p>按已选交易类型汇总：<span>出账合计0.00元</span></p>
            </div>

            <div className='deduction-details-bottomcontent'>
              <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="订单号" dataIndex="requesttime" />
                <Table.Column title="交易时间" dataIndex="requestaddress" />
                <Table.Column title="金额" dataIndex="responsestatuscode" />
                <Table.Column title="支付状态" dataIndex="requestip" />
                <Table.Column title="支付渠道" dataIndex="requestmethod" />
                {/*     <Table.Column
                  title="操作"
                  width={200}
                  dataIndex="oper"
                  cell={this.renderOper}
                /> */}
              </Table>
              <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
              />
            </div>

          </Tab.Item>
        </Tab>
        <Customerservice />
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

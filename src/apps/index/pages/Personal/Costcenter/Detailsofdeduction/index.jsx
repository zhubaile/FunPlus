/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio , Button, Grid, Form, Message, Tab, Table, DatePicker, Pagination, Select } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';

import Customerservice from "../../../Personal/components/Customerservice";

const { RangePicker } = DatePicker;
import moment from "moment/moment";
import { deductionList } from '@indexApi';

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
      pageSize: 10,
      total: 0,
      current: 1,
      isLoading: false,
      datass: [],
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

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
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
              isLoading: false,
            });
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

  render() {
    const { isLoading, datass, current,pageSize,total } = this.state;

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
              <Table loading={isLoading} dataSource={datass} hasBorder={false}>
                <Table.Column title="订单号" dataIndex="orderNo" />
                <Table.Column title="交易时间" dataIndex="createdAt" />
                <Table.Column title="金额" dataIndex="deductionFee" />
                <Table.Column
                  title="支付状态"
                  dataIndex="orderStatusName"
                />
                <Table.Column title="支付渠道" dataIndex="channelName" />
              </Table>
              <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
                pageSize={pageSize} // 界面展示多少条数据
                total={total} // 一共多少条数据
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

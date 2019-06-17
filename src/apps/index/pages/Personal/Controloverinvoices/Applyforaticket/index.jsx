/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio , Button, Grid, Form, Message, Tab, Table, DatePicker, Pagination, Select, Step, Icon } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';
import ApplyBilling from './ApplyBilling';
import BillingInformation from './BillingInformation';
import AddAddress from './AddAddress';
import Customerservice from "../../../Personal/components/Customerservice";
import IceContainer from '@icedesign/container';

const { RangePicker } = DatePicker;
import moment from "moment/moment";

const { Item: StepItem } = Step;
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

export default class Applyforaticket extends Component {
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
  applyforacticketopen() {
    this.ApplyBilling.applybillingopen();
  }
  applyforacticketopenone() {
    this.BillingInformation.billinginformationopen();
  }
  applyforacticketopentwo() {
    this.AddAddress.addaddressopen();
  }


  render() {
    const { isLoading, data, current } = this.state;
    const { currentStep } = this.state;
    /*    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2019-05-08', 'YYYY-MM-DD', true);

    const selectiontime = [
      { value: '全部交易类型', label: '全部交易类型' },
    ];
    const paymentchannel = [
      { value: '全部扣费类型', label: '全部扣费类型' },
    ]; */

    return (
      <div className='apply-billing'>
        <ApplyBilling ref={ node => this.ApplyBilling = node } />
        <BillingInformation ref={ node => this.BillingInformation = node } />
        <AddAddress ref={ node => this.AddAddress = node } />
        <Tab shape='pure' className='apply-billing-topcontent'>
          <Tab.Item title='申请开票'>
            <div className='deduction-details-topcontent'>
              <Message type='notice' className='tab-contenttwo-left-message'>
                <ol>
                  <li>1.目前只支持纸质发票，暂不支持电子发票。在您提交开票申请后，我们将在5个工作日内为您开发票并用顺丰快递邮寄给您（不包括快递运输时间），请您耐心等待。</li>
                  <li>2.预付费，后付费，续费订单都可开票，开具的发票内容为信息技术服务云服务费。</li>
{/*                  <li>你可能还想了解： <span>发票税点及类目</span> <span>如何选择发票类型</span> <span>不可开发票的费用有哪些</span></li>*/}
                </ol>
{/*                <p>1.目前只支持纸质发票，暂不支持电子发票。在您提交开票申请后，我们将在5个工作日内为您开发票并用顺丰快递邮寄给您（不包括快递运输时间），请您耐心等待。</p>
                <p>2.预付费，后付费，续费订单都可开票，开具的发票内容为信息技术服务云服务费。</p>
                <p>你可能还想了解： <span>发票税点及类目</span> <span>如何选择发票类型</span> <span>不可开发票的费用有哪些</span></p>*/}
              </Message>
              {/* <FormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
                ref="form"
              >
                <FormBinder name='startdate'>
                  <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
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
              </FormBinderWrapper> */}
            </div>
            {/*            <div className='apply-billing-middlecontent'>
              <IceContainer title="纸质发票开票流程：">
                <Step current={currentStep}>
                  <StepItem title="申请开票" onClick={this.onClick} />
                  <StepItem title="财务开票" onClick={this.onClick} />
                  <StepItem title="寄出发票" onClick={this.onClick} />
                  <StepItem title="线下签收" onClick={this.onClick} />
                </Step>
              </IceContainer>
            </div> */}
            <div className='apply-billing-bottomcontent'>
              <div className='innerone'>
                <ul>
                  <li>按消费可开票金额</li>
                  <li>0.00元</li>
                </ul>

                <Button className='apply-billing-btn' size="medium" type="secondary" onClick={this.applyforacticketopen.bind(this)}>申请开票</Button>
              </div>

              <div className='innertwo'>
                <p><Icon type='edit' size='large' style={{ paddingRight: '5px' }} />您还未填写开票信息   <a onClick={this.applyforacticketopenone.bind(this)}><span>现在填写</span></a></p>
              </div>

              <div className='innerthree'>
                <p><Icon type='edit' size='large' style={{ paddingRight: '5px' }} />您还未添加邮寄信息  <a onClick={this.applyforacticketopentwo.bind(this)}><span>现在添加</span></a></p>
              </div>

            </div>

{/*            <div className='apply-billing-footercontent'>
              <div className='footer-innerone'>
                <ul>
                  <li>按消费可开票金额</li>
                  <li>0.00元</li>
                </ul>
                <p>按消费可开票金额</p>
                <p>0.00元</p>
                <Button className='footer-apply-billing-btn' size="medium" type="secondary" onClick={this.applyforacticketopen.bind(this)}>申请开票</Button>
              </div>

              <div className='footer-innertwo'>
                <p><Icon type='edit' size='large' /><a onClick={this.applyforacticketopenone.bind(this)}><span>修改开票信息</span></a></p>
              </div>

              <div className='footer-innerthree'>
                <p><Icon type='edit' size='large' /><a onClick={this.applyforacticketopentwo.bind(this)}><span>修改邮寄信息</span></a></p>
              </div>

            </div>*/}

            {/*    <div className='deduction-details-bottomcontent'>
              <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="订单号" dataIndex="requesttime" />
                <Table.Column title="交易时间" dataIndex="requestaddress" />
                <Table.Column title="金额" dataIndex="responsestatuscode" />
                <Table.Column title="支付状态" dataIndex="requestip" />
                <Table.Column title="支付渠道" dataIndex="requestmethod" />
              </Table>
              <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
              />
            </div> */}

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

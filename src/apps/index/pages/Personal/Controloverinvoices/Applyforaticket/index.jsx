/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio , Button, Grid, Form, Message, Tab, Table, DatePicker, Pagination, Select, Step, Icon } from '@alifd/next';
import { invoiceDataInfo,openInvoice } from '@indexApi';
import '../../../index.css';
import ApplyBilling from './ApplyBilling';
import BillingInformation from './BillingInformation';
import AddAddress from './AddAddress';
import Customerservice from "../../../Personal/components/Customerservice";
import IceContainer from '@icedesign/container';

const { RangePicker } = DatePicker;
// import moment from "moment/moment";

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
      InvoiceInfo: [], // 开票信息
      MailAddress: [], // 地址信息
      InvoiceType: [], // 多选框
      TotalAmount: '', // 可开票总金额
      City: [], // 城市数据
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

  /* mockApi = (len) => {
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
        invoiceDataInfo().then(({ status,data })=>{
          debugger;
          if (data.errCode == 0) {
            this.setState({
              InvoiceInfo: data.data.invoiceInfo,
              MailAddress: data.data.mailAddress,
              InvoiceType: data.data.invoiceType,
              TotalAmount: data.data.totalAmount,
              City: data.data.city,
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
  applyforacticketopen() {
    const TotalAmounts = this.state.TotalAmount;
    this.ApplyBilling.applybillingopen(TotalAmounts);
  }
  applyforacticketopenone() {
    const InvoiceInfos = this.state.InvoiceInfo;
    const InvoiceTypes = this.state.InvoiceType;
    this.BillingInformation.billinginformationopen(InvoiceInfos,InvoiceTypes);
  }
  // 添加地址
  applyforacticketopentwo() {
    const MailAddresss = this.state.MailAddress;
    const City = this.state.City;
    const messageaddress = 'Addto';
    this.AddAddress.addaddressopen(MailAddresss,City,messageaddress);
  }


  render() {
    const { isLoading, data, current, InvoiceInfo, MailAddress, TotalAmount } = this.state;
    const { currentStep } = this.state;

    return (
      <div className='apply-billing'>
        <ApplyBilling ref={ node => this.ApplyBilling = node } />
        <BillingInformation ref={ node => this.BillingInformation = node } fetchData={this.fetchData.bind(this)} />
        <AddAddress ref={ node => this.AddAddress = node } fetchData={this.fetchData.bind(this)} />
        <Tab shape='pure' className='apply-billing-topcontent'>
          <Tab.Item title='申请开票'>
            <div className='deduction-details-topcontent'>
              <Message type='notice' className='tab-contenttwo-left-message'>
                <ol>
                  <li>1.目前只支持纸质发票，暂不支持电子发票。在您提交开票申请后，我们将在5个工作日内为您开发票并用顺丰快递邮寄给您（不包括快递运输时间），请您耐心等待。</li>
                  <li>2.预付费，后付费，续费订单都可开票，开具的发票内容为信息技术服务云服务费。</li>
                </ol>
              </Message>
            </div>
            <div className='apply-billing-bottomcontent'>
              <div className='innerone'>
                <ul>
                  <li>按消费可开票金额</li>
                  <li>{TotalAmount}元</li>
                </ul>
                <div>
                  {!InvoiceInfo || InvoiceInfo.length == 0 || !MailAddress || MailAddress.length == 0 ? (
                    <Button className='apply-billing-btn' size="medium" type="secondary" style={{ background: '#E5E5E5', marginTop: '-15px' }}>申请开票</Button>
                  ) : (
                    <Button className='apply-billing-btn' size="medium" type="secondary" style={{ background: '#1A55E2', marginTop: '-15px' }} onClick={this.applyforacticketopen.bind(this)}>申请开票</Button>
                    )}
                </div>
              </div>

{/*              <div className='innertwo'>
                <p><Icon type='edit' size='large' style={{ paddingRight: '5px' }} />
                  {!InvoiceInfo || InvoiceInfo.length == 0 ? (<a onClick={this.applyforacticketopenone.bind(this)}>您还未填写开票信息<span>现在填写</span></a>) : (<a onClick={this.applyforacticketopenone.bind(this)}><span>修改开票信息</span></a>)}
                </p>
              </div>

              <div className='innerthree'>
                <p><Icon type='edit' size='large' style={{ paddingRight: '5px' }} />
                  {!MailAddress || MailAddress.length == 0 ? (<a onClick={this.applyforacticketopentwo.bind(this)}>您还未添加邮寄信息 <span>现在添加</span></a>) : (<a onClick={this.applyforacticketopentwo.bind(this)}><span>添加邮寄信息</span></a>)}
                </p>
              </div>*/}

              <div className='innertwo'>
                <p><Icon type='edit' size='large' style={{ paddingRight: '5px' }} />您还未填写开票信息
                  {!InvoiceInfo || InvoiceInfo.length == 0 ? (<span onClick={this.applyforacticketopenone.bind(this)}>现在填写</span>) : (<span onClick={this.applyforacticketopenone.bind(this)}>修改开票信息</span>)}
                </p>
              </div>

              <div className='innerthree'>
                <p><Icon type='edit' size='large' style={{ paddingRight: '5px' }} />您还未添加邮寄信息
                  {!MailAddress || MailAddress.length == 0 ? (<span onClick={this.applyforacticketopentwo.bind(this)}>现在添加</span>) : (<span onClick={this.applyforacticketopentwo.bind(this)}>添加邮寄信息</span>)}
                </p>
              </div>

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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox, Form, Upload } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { changeDefaultValue,openInvoice, invoiceDataInfo, mailAddressDelete } from '@indexApi';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import ApplyBilling from '../ApplyBilling';
import BillingInformation from '../BillingInformation';
import AddAddress from '../AddAddress';
import '../../../../index.css';

const { Row, Col } = Grid;

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
};
/* function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(data, file) {
  console.log('onSuccess callback : ', file);
}

function onError(file) {
  console.log('onError callback : ', file);
} */

export default class ApplyBillingNext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      City: null,
      open: false,
      content: null,
      confirm: null,
      InvoiceType: [],
      InvoiceInfo: [], // 发票抬头地址
      MailAddress: [], // 发票邮寄地址
      Invoiceamount: '',
    };
  }

  applybillingnextclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  applybillingnextopen(Invoiceamount) {
    this.setState({
      open: true,
      Invoiceamount, // 上一步传的数值
    });
    this.confirmCallBack = confirm;
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (len) => {
    invoiceDataInfo().then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        this.setState({
          City: data.data.city,
          InvoiceInfo: data.data.invoiceInfo,
          MailAddress: data.data.mailAddress,
          InvoiceType: data.data.invoiceType,
        });
      }
    });
  };
  // 上一步
  applybillingpreviousopen() {
    this.applybillingnextclose();
    // this.ApplyBilling.applybillingopen();
  }
  // 确认开票
  confirminfobtn() {
    const vcontent = this.radiosDefalutValue; // 开票地址
    const InvoiceInfo = this.state.InvoiceInfo; // 抬头
    const Invoiceamount = this.state.Invoiceamount; // 金额
    openInvoice({
      ...vcontent,
      ...InvoiceInfo,
      totalFee: Invoiceamount,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        Message.success(data.message);
        location.reload();
      }else{
        Message.success(data.message);
      }
    });
  }
  formChange = (value) => {
    this.setState({
      value,
    });
  };
  /* modify=(e)=>{
    return (
      <a
        style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px', borderRight: '2px solid #999999' }}
        onClick={this.handleDetail}
      >
        修改
      </a>
    );
  }; */
  // 修改发票抬头
  modifybilling() {
    const InvoiceInfo = this.state.InvoiceInfo;
    const InvoiceType = this.state.InvoiceType;
    debugger;
    this.BillingInformation.billinginformationopen(InvoiceInfo,InvoiceType);
  }
  // 修改默认地址
  radiostatus=(value, index, record)=>{
    debugger;
    /* if (value === true) {
      debugger;
      this.setState({
        values: record,
      });
    } */
    if (value === true) {
      this.radiosDefalutValue = record; // 默认选中的地址
    }
    return (
      <Radio defaultChecked={value} onChange={this.changeDefaultValues.bind(this, value, index, record)} />
    );
  }
  changeDefaultValues(value, index, record) {
    const _id = record._id;
    changeDefaultValue({
      _id,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        /* this.setState({
          values: record,
        }); */
        this.radiosDefalutValue = record;
        this.fetchData();
      }
    });
  }
  // 添加邮寄地址
  addaddress() {
    const MailAddress = this.state.MailAddress;
    const city = this.state.City;
    const messageaddress = 'Addto';
    this.AddAddress.addaddressopen(MailAddress,city,messageaddress);
  }
  // 修改邮寄地址
  Modifyaddress=(record)=>{
    const city = this.state.City;
    const messageaddress = 'Modify';
    this.AddAddress.addaddressopen(record,city,messageaddress);
  };
  // 删除地址
  onRemove = (id) => {
    const { MailAddress } = this.state;
    // 写一个删除的请求
    mailAddressDelete({
      _id: id,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        let index = -1;
        MailAddress.forEach((item, i) => {
          debugger;
          if (item._id === id) {
            index = i;
          }
        });
        if (index !== -1) {
          MailAddress.splice(index, 1);
          this.setState({
            MailAddress,
          });
        }
        Message.success(data.message);
      }
      Message.success(data.message);
    });
  };
  renderOper = (value, index, record) => {
    return (
      <div>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px', borderRight: '2px solid #999999' }}
          onClick={this.Modifyaddress.bind(this,record)}
        >
          修改
        </a>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px' }}
          onClick={this.onRemove.bind(this, record._id)}
        >
          删除
        </a>
      </div>
    );
  };

  render() {
    const { InvoiceInfo,MailAddress } = this.state;
    if (!this.state.open) return null;
    return (
      <div className='apply-billing-next-bulletbox'>
        <AddAddress ref={ node => this.AddAddress = node } fetchData={this.fetchData.bind(this)} />
        <ApplyBilling ref={ node => this.ApplyBilling = node } />
        <BillingInformation ref={ node => this.BillingInformation = node } fetchData={this.fetchData.bind(this)} />
        <h2>申请开票</h2>
        <span className='x-span' onClick={this.applybillingnextclose.bind(this)}>×</span>
        <FormBinderWrapper
          // value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div>
            <Message type='notice' className='message'>
              <ul>
                <li>1.目前只支持纸质发票，暂不支持电子发票。在您提交开票申请后，我们将在5个工作日内为您开发票并用顺丰快递邮寄给您（不包括快递运输时间），请您耐心等待。</li>
                <li>2.预付费，后付费，续费订单都可开票，开具的发票内容为信息技术服务云服务费。</li>
              </ul>
            </Message>
          </div>
          <h2 style={{ display: 'block' }}>选择发票抬头</h2>
          <div className='Invoicepayable' style={{ display: 'inline-block' }}>
            <ul style={{ width: '40%' }}>
              <li>发票类型</li>
              <li>{InvoiceInfo.invoiceTypeName}</li>
            </ul>
            <ul style={{ width: '44%' }}>
              <li>发票抬头</li>
              <li>{InvoiceInfo.invoiceTitle}</li>
            </ul>
            <ul style={{ width: '15%' }}>
              <li>操作</li>
              <li style={{ color: 'rgb(26, 85, 226)', cursor: 'pointer' }} onClick={this.modifybilling.bind(this)}>修改</li>
            </ul>
          </div>
          <h2 style={{ display: 'block' }}>选择邮寄信息</h2>
          <div className='apply-billing-next-box' style={{ display: 'inline-block' }}>
            <Table dataSource={MailAddress} hasBorder={false}>
              <Table.Column title="" align='center' dataIndex="status" cell={this.radiostatus} style={{ width: '30px' }} />
              <Table.Column title="收件人" dataIndex="contacts" style={{ width: '130px' }} />
              <Table.Column title="联系方式" dataIndex="phone" style={{ width: '140px' }} />
              <Table.Column title="收件地址" dataIndex="mailAddress" style={{ width: '270px' }} />
              <Table.Column
                title="操作"
                dataIndex="oper"
                align='center'
                style={{ width: '180px' , cursor: 'pointer' }}
                cell={this.renderOper}
              />
            </Table>
          </div>
          <a href="javascript:;" onClick={this.addaddress.bind(this)}>+添加邮寄地址</a>
        </FormBinderWrapper>
        <div style={{ marginTop: '15px' }}>
          <Button style={styles.previousbtn} type='secondary' size='large' onClick={this.applybillingpreviousopen.bind(this)}>上一步</Button>
          <Button style={styles.confirmbtn} type='primary' size='large' onClick={this.confirminfobtn.bind(this)}>确认开票</Button>
        </div>
      </div>
    );
  }
}

const styles = {
  defaultbtn: {
    borderRadius: '6px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    marginLeft: '190px',
    display: 'inline-block',
  },
  modifybtn: {
    borderRadius: '6px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    display: 'inline-block',
    margin: '10px 15px 0px 70px',
  },
  deletebtn: {
    borderRadius: '6px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    display: 'inline-block',
    margin: '10px 0px 0px 15px',
  },
  previousbtn: {
    display: 'inline-block',
    margin: '10px 20px 0px 210px',
    borderRadius: '5px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    width: '90px',
    height: '30px',
  },
  confirmbtn: {
    display: 'inline-block',
    margin: '10px 20px 0px 20px',
    borderRadius: '5px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    width: '90px',
    height: '30px',
    textAlign: 'center',
  },
};
/*
changeDefaultValues(value, index, record) {
  debugger;
  const _id = record._id;
  if (value) {
    changeDefaultValue({
      _id,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        this.setState((preState)=>{
          preState.MailAddress = preState.MailAddress.map((v,i)=>{
            if (i == index) {
              v.status = true;
            } else {
              v.status = false;
            }
            // 上面简写
            // v.status=(i==index)
            return v;
          });
          return preState;
          // values: record,
        });
        this.fetchData();
      }
    });
  }
} */

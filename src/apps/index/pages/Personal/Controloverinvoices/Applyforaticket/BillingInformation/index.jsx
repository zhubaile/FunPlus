import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, Form, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { openInvoice,changeInvoiceInfo } from '@indexApi';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../../index.css';

const FormItem = Form.Item;

const { Row, Col } = Grid;
const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
};
export default class BillingInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: {
        // company: '',
        invoiceType: '',
        invoiceTitle: '',
        bank: '',
        bankNumber: '',
        // taxNumber: '',
      },
      confirm: null,
      value: {
        // companyname: '',
        invoicetype: '',
        invoice: '',
        bank: '',
        accountopening: '',
        // taxnumber: '',
      },
    };
  }

  billinginformationclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  billinginformationopen(content,confirm) {
    debugger;
    this.setState({
      open: true,
      content,
      confirm,
    });
    this.confirmCallBack = confirm;
  }
  formChange = (value) => {
    this.setState({
      value,
    });
  };

  SubInvoiceinfo(r,v) {
    const _id = this.state.content._id;
    changeInvoiceInfo({
      _id,
      ...r,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        Message.success(data.message);
        this.billinginformationclose();
        this.props.fetchData();
      }
    });
    /* this.refs.form.validateAll((errors, values) => {
      debugger;
    }) */
  }
  render() {
    const { content, confirm } = this.state;
    debugger;
    const zbl = [
      { label: 'asd',value: 1 },
      { label: 'qqq',value: 2 },
      { label: 'www',value: 3 },
      { label: 'aeeesd',value: 4 },
    ];
    const asd = confirm;
    console.log(confirm)
    if (!this.state.open) return null;
    return (
      <div className='billing-information-bulletbox'>
        <h2>开票信息</h2>
        <Message type='notice' className='message'>
          提示：因税务新政要求，申请开具企业增值普通发票的用户开票时必须提供“纳税人识别号”信息。
        </Message>
        <Form className='form'>
        {/*  <FormItem
            label='公司名称'
            {...formItemLayout}
          >
            <Input name='company' placeholder='请填写有效的名称' defaultValue={content.company} />
          </FormItem>*/}
          <FormItem
            label='发票类型'
            {...formItemLayout}
          >
            <Select name='invoiceType' style={{ width: '100%' }} dataSource={asd} defaultValue={content.invoiceType} />
          </FormItem>
          <FormItem
            label='发票抬头'
            {...formItemLayout}
            asterisk
          >
            <Input name="invoiceTitle" placeholder="请填写有效的发票抬头" defaultValue={content.invoiceTitle} />
            <p style={{ color: '#999999', fontSize: '2px' }}>
              温馨提示：若发票抬头为公司名称，请申请企业增值税普通发票或企业增值税专用发票，并填写 纳税人识别号
              等相关信息，以免影响发票后续的正常使用。若您有疑问，建议联系贵司财务确认后再申请开票。
            </p>
          </FormItem>

          <FormItem
            label='开户行'
            {...formItemLayout}
          >
            <Input name="bank" placeholder='请填写有效的开户行' defaultValue={content.bank} />
          </FormItem>

          <FormItem
            label='开户账号'
            {...formItemLayout}
          >
            <Input name="bankNumber" placeholder="请填写有效的开户账户" defaultValue={content.bankNumber} />
          </FormItem>

          {/*<FormItem
            label='税号'
            {...formItemLayout}
          >
            <Input name="taxNumber" placeholder="请填写有效的税号" defaultValue={content.taxNumber} />
          </FormItem>*/}
          <FormItem wrapperCol={{ offset: 6 }} >
            <Form.Reset style={styles.cancelbtn} onClick={this.billinginformationclose.bind(this)}>取消</Form.Reset>
            <Form.Submit style={styles.submitbtn} validate type="primary" onClick={(v, e) => this.SubInvoiceinfo(v,e)}>提交</Form.Submit>
          </FormItem>
          {/* <Button type='secondary'style={styles.cancelbtn} siza='large' onClick={this.billinginformationclose.bind(this)}>取消</Button> */}
          {/* <Button type='primary'style={styles.submitbtn} siza='large' onClick={this.SubInvoiceinfo.bind(this)}>提交</Button> */}
        </Form>

      </div>
    );
  }
}

const styles = {
  cancelbtn: {
    display: 'inline-block',
    margin: '0px 60px 0px 130px',
    width: '80px',
    height: '28px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    borderRadius: '6px',
  },
  submitbtn: {
    display: 'inline-block',
    width: '80px',
    height: '28px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    borderRadius: '6px',
  },
};

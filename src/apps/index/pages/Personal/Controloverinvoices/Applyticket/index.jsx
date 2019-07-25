import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, Form , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { openInvoice,changeInvoiceInfo,InvoiceOperation } from '@indexApi';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';

const FormItem = Form.Item;

const { Row, Col } = Grid;
const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
};
export default class Applyticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: null,
      confirm: null,
      value: {
        retreatTicket: '',
        courierCompany: '',
        courierNumber: '',
      },
    };
  }

  applyticketclose() {
    this.setState({
      open: false,
      content: null,
      value: {
        retreatTicket: '',
        courierCompany: '',
        courierNumber: '',
      },
    });
  }
  applyticketopen(content,confirm) {
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
    InvoiceOperation({
      _id,
      operation: 3,
      ...r,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        Message.success(data.message);
        this.applyticketclose();
        this.props.fetchData();
      } else {
        Message.success(data.message);
      }
    });
  }
  render() {
    const { content, confirm } = this.state;
    // const retreatTicket = this.state.confirm;
    if (!this.state.open) return null;
    debugger;
    return (
      <div className='applyticket-box'>
        <h2>申请退票</h2>
        <span className='x-span' onClick={this.applyticketclose.bind(this)}>x</span>
        <Form className='form' value={this.state.value}>
          <FormItem
            label='退票原因'
            {...formItemLayout}
          >
            <Select name='retreatTicket' style={{ width: '100%' }} dataSource={confirm} />
          </FormItem>
          <FormItem
            label='材料要求 '
            {...formItemLayout}
          >
            <span>请将发票原件寄给</span>
            <div className='mailmessage'>
              <p> 收件人：{content.name}</p>
              <p> 电话：{content.phone}</p>
              <p>地址：{content.mailAddress}</p>
            </div>
            {/* defaultValue={content.invoiceType}  */}
            {/* <Input name='company' placeholder='请填写有效的名称' /> */}
          </FormItem>
          <FormItem
            label='快递公司'
            {...formItemLayout}
            asterisk
          >
            <Input name="courierCompany" placeholder="请填写有效的发票抬头" />
            <p style={{ color: '#999999', fontSize: '2px' }}>
              温馨提示：若发票抬头为公司名称，请申请企业增值税普通发票或企业增值税专用发票，并填写 纳税人识别号
              等相关信息，以免影响发票后续的正常使用。若您有疑问，建议联系贵司财务确认后再申请开票。
            </p>
          </FormItem>

          <FormItem
            label='运单号'
            {...formItemLayout}
          >
            <Input name="courierNumber" placeholder='请填写有效的开户行' />
          </FormItem>
          <FormItem wrapperCol={{ offset: 6 }} >
            <Form.Reset style={styles.cancelbtn} onClick={this.applyticketclose.bind(this)}>取消</Form.Reset>
            <Form.Submit style={styles.submitbtn} validate type="primary" onClick={(v, e) => this.SubInvoiceinfo(v,e)}>提交</Form.Submit>
          </FormItem>
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

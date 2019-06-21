import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../../index.css';
import ApplyBillingNext from "../ApplyBillingNext";


const { Row, Col } = Grid;

export default class ApplyBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: null,
      confirm: null,
      InvoiceTypes: null,
      TotalAmounts: '', // 总金额
      Invoiceamount: '', // 输入框得值
      Checkboxstatus: false, // 复选框状态
    };
  }

  applybillingclose() {
    this.setState({
      open: false,
      content: null,
      Invoiceamount: '',
    });
  }

  applybillingopen(TotalAmounts) {
    this.setState({
      open: true,
      TotalAmounts,
    });
    this.confirmCallBack = confirm;
  }
  formChange = (value) => {
    this.setState({
      value,
    });
  };
  // 下一步的界面
  applybillingbtnopen() {
    const TotalAmount = this.state.TotalAmounts; // 可开票总金额
    const Invoiceamount = this.state.Invoiceamount; // 本次开票金额
    // const InvoiceInfos = this.state.content;
    // const MailAddresss = this.state.confirm;
    // const InvoiceType = this.state.InvoiceTypes;
    if (!Invoiceamount) {
      return (Message.success('开票金额不能为空'));
    } else if (Invoiceamount > TotalAmount) {
      return (Message.success('本次开票金额不足'));
    }else if (Invoiceamount < 0) {
      return (Message.success('开票金额不能为负数'));
    }
    this.ApplyBillingNext.applybillingnextopen(Invoiceamount);
  }
  // 输入框
  invoiceamountinput(v,e) {
    this.setState({
      Invoiceamount: v,
    });
  }
  // 复选框状态
  Whether(v,e) {
    const TotalAmount = this.state.TotalAmounts;
    this.setState({
      Checkboxstatus: v,
    });
    if (v == true) {
      debugger;
      this.setState({
        Invoiceamount: TotalAmount,
      });
    }
  }
  render() {
    const { TotalAmounts,Checkboxstatus,Invoiceamount } = this.state;
    if (!this.state.open) return null;
    return (
      <div className='apply-billing-bulletbox'>
        <ApplyBillingNext ref={ node => this.ApplyBillingNext = node } />
        <h2>申请开票</h2>
        <span className='x-span' onClick={this.applybillingclose.bind(this)}>x</span>

        <div>
          <Message type='notice' className='message'>
            <ul>
              <li>1.目前只支持纸质发票，暂不支持电子发票。在您提交开票申请后，我们将在5个工作日内为您开发票并用顺丰快递邮寄给您（不包括快递运输时间），请您耐心等待。</li>
              <li>2.预付费，后付费，续费订单都可开票，开具的发票内容为信息技术服务云服务费。</li>
            </ul>
          </Message>
        </div>
        <p style={{ marginLeft: '15px'}}>可开票金额：{TotalAmounts}元</p>
        <span>本次开票金额：</span>
        <Input name='Invoiceamount' htmlType='number' onChange={this.invoiceamountinput.bind(this)} style={styles.inputsize} value={Invoiceamount} hasClear />
        <span>元</span>
        <Checkbox style={styles.checkbox} label='将可开票金额全部开票' defaultChecked={Checkboxstatus} onChange={this.Whether.bind(this)} />
        <Button style={styles.nextbtn} type='primary' size='large' onClick={this.applybillingbtnopen.bind(this)}>下一步</Button>
      </div>
    );
  }
}
const styles = {
  inputsize: {
    width: '130px',
    height: '30px',
    margin: '0px 10px',
    /*    borderLeft: 'none', */
  },
  checkbox: {
    display: 'block',
    margin: '15px 100px',
  },
  nextbtn: {
    display: 'block',
    margin: '15px 90px',
    width: '80px',
    height: '30px',
    borderRadius: '5px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
  },
};

/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio , Button, Grid, Form, Message } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import Demopay from '../../../../../Website/pages/Demo/Demopay';
import Wxpaypopup from './Wxpaypopup';
import '../../../index.css';

const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

export default class Recharges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: null,
      payvalue: '',
    };
  }
  close() {
    this.setState({
      open: false,
      content: null,
    });
  }
  open(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }

  onNestChange(value) {
    this.setState({
      payvalue: value,
    });
  }
  paybtn() {
    const payinputvalue = this.payinputvalue.value;
    const payvalues = this.state.payvalue;
    const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if (!reg.test(payinputvalue) || !payinputvalue) {
      alert('请输入充值金额');
    } else if (payvalues == 'zfb') {
      this.Demopay.open(payinputvalue);
    } else if (payvalues == 'wx') {
      this.Wxpaypopup.open(payinputvalue);
    } else {
      alert('请选择支付方式');
    }
  }
  render() {
    if (!this.state.open) return null;
    return (
      <div className="Recharge">
        <Demopay ref={node=>this.Demopay = node} />
        <Wxpaypopup ref={node=>this.Wxpaypopup = node} />
        <div className='Recharge-top'>
          账户余额充值
          <a href='javascript:;' onClick={this.close.bind(this)}>×</a>
        </div>
        <div className='Recharge-bottom'>
          <div className='Recharge-bottom-top'>
            <span>充值金额</span>
            <input type="text" placeholder='输入金额' ref={node=>this.payinputvalue = node} />元
          </div>
          <div className='paymode'>
            <span>充值渠道</span>
            <div className='paymode-main'>
              <p>平台支付</p>
              <RadioGroup shape="button" size="large" value={this.state.payvalue} onChange={this.onNestChange.bind(this)}>
                <Radio id="zfb" value="zfb">
                  <img src={require('../../../../../../assets/img/houtai/personal/008.png')} style={{ width: '25px' , height: '25px' }} alt="" />
                  <p>支付宝</p>
                </Radio>
                <Radio id="wx" value="wx">
                  <img src={require('../../../../../../assets/img/houtai/personal/008.png')} style={{ width: '25px' , height: '25px' }} alt="" />
                  <p>微信支付</p>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className='Recharge-spanbtn'>
            <span>账户充值属于预消费，不可退款，请确认后操作</span>
            <Button size="large" type="primary" style={{ width: '100px', marginTop: '50px', borderRadius: '5px' }} onClick={this.paybtn.bind(this)}>立即支付</Button>
            <span>请在1小时内完成支付，超出1小时再支付可能导致充值失败，需重新充值。</span>
          </div>
        </div>
      </div>
    );
  }
}

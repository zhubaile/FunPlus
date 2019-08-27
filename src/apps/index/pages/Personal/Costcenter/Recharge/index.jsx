/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio , Button, Grid, Form, Message } from '@alifd/next';
// import { Link,withRouter } from 'react-router-dom';
import { recharge } from '@indexApi';
// import Demopay from '../../../../../Website/pages/Demo/Demopay';
// import Demopayendpopup from '../../../../../Website/pages/Demo/Demopay/Demopayendpopup'; // 引用这个会有样式冲突,下面的为替换
import Demopayendpopup from './Zfbpaypopup';
import Wxpaypopup from './Wxpaypopup';
// import Zfbpaypopup from './Zfbpaypopup';
import '../../../index.css';

const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

// @withRouter
export default class Recharges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: null,
      payvalue: '',
      // lianjie: 'http://www.baidu.com',
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
    const payinputvalue = this.payinputvalue.getInputNode().value; // 充值的金额
    const payvalues = this.state.payvalue; // 判断是支付宝还是微信
    const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    debugger;
    if (!reg.test(payinputvalue) || !payinputvalue) {
      Message.success('请输入充值金额');
    } else if (payvalues == 'zfb') {
      recharge({
        payChannel: payvalues,
        totalFee: payinputvalue,
      }).then(({ status,data })=>{
        if (data.errCode == 0) {
          this.Demopayendpopup.zfboveropen();
          window.open(data.data);
          // this.Zfbpaypopup.open(data.data);
          /* this.setState({
            // lianjie: data.data,
          }); */
        }
        // parent.location.href = data.data;
        // this.props.history.push(data.data);
      });
      // this.Demopay.zfbopen(payinputvalue);
    } else if (payvalues == 'wx') {
      this.Wxpaypopup.open(payinputvalue);
    } else {
      Message.success('请选择支付方式');
    }
  }
  render() {
    if (!this.state.open) return null;
    console.log(this.state.lianjie);
    return (
      <div className="Recharge">
        {/* <Demopay ref={node=>this.Demopay = node} /> */}
        <Demopayendpopup ref={node=>this.Demopayendpopup = node} />
        <Wxpaypopup ref={node=>this.Wxpaypopup = node} />
        {/* <Zfbpaypopup ref={node=>this.Zfbpaypopup = node} /> */}
        {/* <iframe src={this.state.lianjie} frameBorder="0" style={{ position: 'fixed', width: '1000px', height: '800px', top: '50%', left: '50%', marginTop: '-400px', marginLeft: '-500px', zIndex: '8899', border: '2px solid red' }} /> */}
        <div className='Recharge-top'>
          账户余额充值
          <a href='javascript:;' onClick={this.close.bind(this)}>×</a>
        </div>
        <div className='Recharge-bottom'>
          <div className='Recharge-bottom-top'>
            <span>充值金额</span>
            <Input style={styles.myInput} type="number" placeholder='输入金额' ref={node=>this.payinputvalue = node} />元
          </div>
          <div className='paymode'>
            <span>充值渠道</span>
            <div className='paymode-main'>
              <p>平台支付</p>
              <RadioGroup shape="button" size="large" value={this.state.payvalue} onChange={this.onNestChange.bind(this)}>
                <Radio id="zfb" value="zfb">
                  <img src={require('@img/demopay/zlogo.png')} style={{ }} alt="" />
                </Radio>
                <Radio id="wx" value="wx">
                  <img src={require('@img/demopay/wx.png')} style={{ }} alt="" />
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className='Recharge-spanbtn'>
            <span style={styles.promptInformation}>账户充值属于预消费，不可退款，请确认后操作</span>
            <div>
              <Button size="large" type="primary" style={styles.btnRadius} onClick={this.paybtn.bind(this)}>立即支付</Button>
              <span style={styles.alertInformation}>请在1小时内完成支付，超出1小时再支付可能导致充值失败，需重新充值。</span>
              {/* <Message className='warningInfo' type='warning'>请在1小时内完成支付，超出1小时再支付可能导致充值失败，需重新充值。</Message> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  btnRadius: {
    width: '100px',
    borderRadius: '4px',
    margin: '20px 0px',
  },
  promptInformation: {
    fontSize: '12px',
    color: 'rgba(108, 117, 125, 0.7)',
    fontFamily: 'SourceHanSansSC-regular',
  },
  alertInformation: {
    fontSize: '12px',
    color: 'rgba(16, 16, 16, 1)',
    fontFamily: 'SourceHanSansSC-regular',
    marginLeft: '20px',
  },
  myInput: {
    margin: '0px 20px',
  },
};


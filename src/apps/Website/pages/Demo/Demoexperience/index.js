import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav, Tab } from '@alifd/next';
import HelpcenterHeader from '../../Components/HelpcenterHeader';
import { Link } from 'react-router-dom';
import Demopay from '../Demopay';
import '../../index.css';


export default class Demoexperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HHcontent: '-DEMO体验',
      HPcontent: 'DEMO体验支付',
    };
  }
  zfbpay() {
    this.Demopay.open();
  }
  render() {
    return (
      <div className='demoience'>
        <Demopay ref={ (node) => this.Demopay = node } />
        <HelpcenterHeader  HHcontent={this.state.HHcontent} HPcontent={this.state.HPcontent} />
        {/* 导航下面的展示内容 */}
        <div className='demoience-main'>
          <div className='demoience-main-updown'>
            <div className='demoience-main-updown-left'>
              <p>商品名称：会员充值</p>
              <p>订单编号：E2019040817530514113</p>
            </div>
            <div className='demoience-main-updown-right'>
              订单金额： <input type="text" value='10' style={{ width: '50px' ,height: '30px', textAlign: 'center'}} />元
            </div>
          </div>
          <div className='demoience-main-center'>
            <h2>支付方式</h2>
            <div className='demoience-main-center-box'>
              <ul>
                <li>
                  <img src={require('../../../../../assets/img/demoience/zfb.png')}style={{ width: '36px' , height: '26px'}} alt="" />
                  <p>支付宝扫码</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/zfb.png')}style={{ width: '36px' , height: '26px'}} alt="" />
                  <p>钉钉红包</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/d.wx.png')} style={{ width: '40px' , height: '32px'}} alt="" />
                  <p>微信扫码</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/qq.png')} style={{ width: '29px' , height: '35px'}} alt="" />
                  <p>QQ钱包扫码</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/qq.png')}style={{ width: '29px' , height: '35px'}} alt="" />
                  <p>QQ钱包H5</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/yl.png')} alt="" />
                  <p>银联支付</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/yl.png')} alt="" />
                  <p>银联扫码</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/yl.png')} alt="" />
                  <p>快捷支付</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/jd.png')}style={{ width: '42px' , height: '17px'}} alt="" />
                  <p>京东支付</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/demoience/yl.png')} alt="" />
                  <p>网关WAP</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='demoience-main-updown'>
            <div className='demoience-main-updown-left'>
            </div>
            <div className='demoience-main-updown-right'>
              需支付： <strong>10.0</strong>元 &nbsp; &nbsp; &nbsp;
              <Button size='large' type='primary' onClick={ this.zfbpay.bind(this)}>立即支付</Button>
              {/*<button><Link to='/demo/pay'>立即支付</Link></button>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav } from '@alifd/next';
import '../../index.css';

export default class Ceshi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='prodect'>
        {/* 导航下面的展示内容 */}
        <div className='nav-belowimg' style={{ backgroundImage: `url(${require("../../../../../assets/img/shouye/bg1.png")})` }}>
          <div className='nav-belowimg-conter'>
            <div className='nav-belowimg-conter-left'>
              <h1>-支付服务</h1>
              <p>我们为数百万小微商户及垂直行业的公司提供各种支付服务。
                我们的解决方案能够为客户提供无缝、便捷及安全的支付服务。</p>
            </div>
            <div className='nav-belowimg-conter-right'>
            </div>
          </div>
        </div>
        {/* 聚合支付 */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <h1 style={{ textAlign: 'center' }}>聚合支付，让支付和收款更简单</h1>
                <p style={{ fontSize: '20px' , opacity: '0.8' }}>聚合支付SDK，在任何平台和场景都能够轻松接入支付功能</p>
              </div>
            </div>
            <div className='service-conter-botton'>
             <Img
               src={require('../../../../../assets/img/prodect/mode/add.png')}
               type="contain"
               style={{ width: '100%' }}
             />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='commonly-left'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <div className='commonly-conter-left-box'>
                扫码支付
                <div />
              </div>
              <p>用户通过扫描商家二维码完成支付，或商家通过收银设备扫描用户的付款二维码/条码完成收款。</p>
            </div>
            <div className='commonly-conter-right'>
              <img
                src={require('../../../../../assets/img/prodect/mode/sm.png')}
              />
            </div>
          </div>
        </div>

        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img
                src={require('../../../../../assets/img/prodect/mode/PC.png')}
              />
            </div>
            <div className='commonly-conter-right'>
              <div className='commonly-conter-right-box'>
                PC网页支付
                <div />
              </div>
              <p>为 PC 网页提供全套支付解决方案，接入后即可使用支付宝、微信、银联等支付方式完成 PC 网页的交易。</p>
            </div>
          </div>
        </div>
        <div className='commonly-left'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <div className='commonly-conter-left-box'>
                APP支付
                <div />
              </div>
              <p>只需一个聚合支付 SDK 即可在手机 App 内接入所有主流支付渠道和分期渠道，满足用户多样化的支付需求。</p>
            </div>
            <div className='commonly-conter-right'>
              <img
                src={require('../../../../../assets/img/prodect/mode/APP.png')}
              />
            </div>
          </div>
        </div>

        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img
                src={require('../../../../../assets/img/prodect/mode/gz.png')}
              />
            </div>
            <div className='commonly-conter-right'>
              <div className='commonly-conter-right-box'>
                公众号支付
                <div />
              </div>
              <p>用户在微信中打开商户的 H5 页面，可调起多种支付渠道完成支付。</p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='footer' style={{ backgroundImage: `url(${require("../../../../../assets/img/prodect/administration/sy4.png")})` }}>
          <div className='footer-conter-left'>
            <h1 style={{ color: '#000' }}>代扣</h1>
            <p style={{ marginTop: '50px' , width: '55%' }}>支持微信、支付宝和 QQ 钱包代扣接口，满足免密支付、自动扣费等委托代扣需求场景。</p>
          </div>
        </div>
      </div>
    );
  }
}

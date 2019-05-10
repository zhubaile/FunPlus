import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
// import IceImg from '@icedesign/img';
import { Button, Icon, Nav } from '@alifd/next';
import './index.css';
// import Bg1 from '../../../../assets/img/shouye/bg1.png';

export default class Ceshi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='shouye'>
        {/* 导航下面的展示内容 */}
        <div className='nav-belowimg' style={{ backgroundImage: `url(${require("../../../../assets/img/shouye/bg1.png")})` }}>
          <div className='nav-belowimg-conter'>
            <div className='nav-belowimg-conter-left'>
              <h1>3FunPlus/一站式全球支付服务商</h1>
              <h3>让支付接口对接前所未有的简单</h3>
              <p>无需后端开发，一个SDK即可接入一套完整的支付系统，高速集成主流支付 接口，以更稳定的接口、更快的速度直达支付。</p>
              <Button style={{ borderRadius: '20px' , color: '#00a292', marginTop: '50px', width: '150px', height: '43px' }}>了解更多</Button>
            </div>
            <div className='nav-belowimg-conter-right'>
              <img
                src={require('../../../../assets/img/shouye/s1.png')}
              />
            </div>
          </div>
        </div>
        {/* 依托的内容 */}
        <div className='rely'>
          <div className='rely-conter'>
            <div className='rely-conter-left'>
              <h1>依托</h1>
              <p>蓝牙、NFC及二维码等多种连接方式，商户可通过我们自有移动应用程序及移动POS配件在智能手机上完成支付交易。</p>
            </div>
            <div className='rely-conter-right'>
              <img
                style={{ width: '100%' }}
                src={require('../../../../assets/img/shouye/sy01.png')}
              />
            </div>
          </div>
        </div>
        {/* 产品服务 */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <img src={require('../../../../assets/img/shouye/small.png')} style={{ width: '60px' }} alt="云" />
                <strong>产</strong>品与服务
                <p className='text'>-PRODUCT SERVICE-</p>
              </div>

            </div>
            <div className='service-conter-botton'>
              <ul>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../assets/img/shouye/sy04.png')} alt="" />
                  <h2>财务对账</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #EB6100' }} />
                  <p>相近的订单统计
                    企业收支一目了然
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../assets/img/shouye/sy05.png')} alt="" />
                  <h2>商务系统</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #E5DB4C' }} />
                  <p>添加商户账号
                    为交易实现分账功能
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../assets/img/shouye/sy06.png')} alt="" />
                  <h2>接口申请</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #009944' }} />
                  <p>全支付场景覆盖
                    主流支付接口支持
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../assets/img/shouye/sy07.png')} alt="" />
                  <h2>二维码支付</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #AE5DA1' }} />
                  <p>专业收款工具
                    线下商户经营必备
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='rely'>
          <div className='rely-conter'>
            <div className='rely-conter-left'>
              <img
                src={require('../../../../assets/img/shouye/sy09.png')}
                style={{ width: '80%' }}
              />
            </div>
            <div className='rely-conter-right'>
              <p style={{ width: '50%' }}>金融科技创新支付产品，通过统一支付SDK封装终端、渠道、币种和语言差异，面向商户和开发者输出强大的统一支付解决能力。</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='rely'>
          <div className='rely-conter'>
            <div className='rely-conter-left'>
              <h1>平滑</h1>
              <h2 style={{ textIndent: '2em' }}>连续而完整</h2>
              <p style={{ marginTop: '20px' }}>跨场景提供平滑、连续和完整的支付解决方案，基于pc
                端场景、手机端场景和O2O场景提供端到端三位一体的
                全流程支付体验。
              </p>
            </div>
            <div className='rely-conter-right'>
              <img
                src={require('../../../../assets/img/shouye/b.png')}
                style={{ backgroundSize: '100% 100%' , width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='son'>
          <div className='son-conter'>
            <div className='son-conter-left'>
              <img
                style={{ backgroundSize: '100% 100%', width: '100%' }}
                src={require('../../../../assets/img/shouye/sy02.png')}
              />
            </div>
            <div className='son-conter-right'>
              <div>
                <h1>安全服务</h1>
                <h2>完全管善</h2>
                <p>平台提供了多项安全服务，综合了业务安全服务、基础安全服务、身份认证产品和数据风控产品。从多个维度出发，为客户的网站提供量身打造的安全解决方案，全面保障用户的网络安全。</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='rely'>
          <div className='rely-conter'>
            <div className='rely-conter-left'>
              <img
                src={require('../../../../assets/img/shouye/sy08.png')}
                style={{ width: '80%' }}
              />
            </div>
            <div className='rely-conter-right'>
              <div className='rely-conter-right-box'>
                <h1 style={{ marginLeft: '5%' }}>强大</h1>
                <h2 style={{ marginLeft: '8%' }}>技术能力</h2>
                <p style={{ width: '60%' }}>行业一流的团队以大数据、云计算、风控、人工智能、区块链技术为核心，提供便捷、稳定和安全的技术服务，为客户提从接入测试、上线到后期系统运维、管理平台使用等 全方位专业服务。</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='rely'>
          <div className='rely-conter'>
            <div className='rely-conter-left'>
              <h1>服务</h1>
              <h2 style={{ textIndent: '2em' }}>全流程且专业</h2>
              <p style={{ marginTop: '20px' }}>为客户提从接入、测试、上线到后期系统运维、管理平台使用等 全方位专业服务；供存管账户管理服务时向其提供技术及运营支持；同时具备客户身份验证功能，可实现全天候远程验证。</p>
            </div>
            <div className='rely-conter-right'>
              <img
                style={{ width: '100%' }}
                src={require('../../../../assets/img/shouye/sy03.png')}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='footer' style={{ backgroundImage: `url(${require("../../../../assets/img/shouye/bg2.png")})` }}>
          <div className='footer-conter-left'>
            <h1 style={{ color: '#000' }}>智能</h1>
            <h3 style={{ textIndent: '2em', color: '#fff' }}>方便且快捷</h3>
            <p style={{ marginTop: '30px' , width: '40%' }}>一站式接入覆盖全球一百多个国家和地区全智能化应用推广；高效、迅速地获取用户；广告一站式投放通达全球范围。先进的技术、精准的本地化运营、强大的数据分析，帮助客户快速提升收益。</p>
          </div>
        </div>
      </div>
    );
  }
}

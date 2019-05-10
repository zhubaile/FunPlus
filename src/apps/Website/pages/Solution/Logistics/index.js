import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav, Slider } from '@alifd/next';
import SolutionFooter from '../components/SolutionFooter';
import '../../index.css';

export default class Logistics extends Component {
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
              <h1>-物流行业解决方案 </h1>
              <p>
                基于物流行业信息化水平滞后、资金管理缺位等问题，深度快速搭建一站式支付系统有效提升
                电子化信息水平、资金安全及运营管理效率，实现互联网+业务转型
              </p>
            </div>
            <div className='nav-belowimg-conter-right' />
          </div>
        </div>
        {/* 电商 */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <div style={{ backgroundImage: `url(${require("../../../../../assets/img/solution/logistics/wl2.png")})`,width: '395px', height: '60px', textAlign: 'center', lineHeight: '60px',fontWeight: '400',fontSize: '36px' }}>物流行业解决方案</div>
                <p style={{ fontSize: '20px' , opacity: '0.8' }}>(适用场景：面向中国消费者收费)</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img
                src={require('../../../../../assets/img/solution/logistics/wl0.png')}
              />
            </div>
            <div className='commonly-conter-right'>
              <p style={{ width: '380px', textIndent: '2em' }}>小额、大宗物流货款自动归集，加快企业变现速度 多物流网点交易信息实时匹配，降低收款风险 全流程式支付管理，使物流贸易更加便捷、高效 提升财务对账效率，降低企业运营成本。</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <img src={require('../../../../../assets/img/solution/retailers/small.png')} style={{ width: '60px' }} alt="" />
                <strong>需</strong>要解决的问题
                <p className='text'>-problem to be solved-</p>
              </div>
            </div>
            <div className='service-conter-botton'>
              <img src={require('../../../../../assets/img/solution/logistics/wl4.png')} style={{ width: '100%' }} alt="" />
              <p>基于银行账户，为物流平台、企业搭建一整套交易资金总分账户体系，通过提供SAAS化服务，统一汇集和管理
                企业经由银行通道的资金，</p>
              <p>向物流平台及平台上的企业提供支付、账户开立、资金管理、税务合规、对账清
                结算、增收、金融等服务。</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='scene'>
          <div className='scene-conter'>
            <div className='scene-conter-top'>
              <div>
                <h1>解决方案构架图</h1>
              </div>
            </div>
            <div className='scene-conter-xxl'>
              <img src={require('../../../../../assets/img/solution/logistics/wl5.png')} style={{ width: '100%' }} alt="" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <h1>解决方案构优势</h1>
              </div>
            </div>
            <div className='service-conter-botton'>
              <ul>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/logistics/wl6.png')} alt="" />
                  <h2>聚合支付</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #EB6100' }} />
                  <p>
                    全渠道电子化支付服务
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/logistics/wl7.png')} alt="" />
                  <h2>降低成本</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #E5DB4C' }} />
                  <p>
                    提供SAAS化服务
                    减少平台对接工作量
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/logistics/wl8.png')} alt="" />
                  <h2>功能齐全</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #009944' }} />
                  <p>
                    账户管理、资金管理
                    权限管理、交易审核等
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/logistics/wl9.png')} alt="" />
                  <h2>增收服务</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #AE5DA1' }} />
                  <p>为平台提供多种
                    新的盈利点
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <SolutionFooter />
      </div>
    );
  }
}

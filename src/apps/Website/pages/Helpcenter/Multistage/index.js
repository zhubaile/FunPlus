import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav } from '@alifd/next';
// import SolutionFooter from '../components/SolutionFooter';
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
              <h1>-电商行业解决方案 </h1>
              <p>专为各类电商平台打造的一套完整企业资金管理解决方案，
                可帮企业一站式解决资金存管、支付、 二清、 税务、余额增值、投融资问题。</p>
            </div>
            <div className='nav-belowimg-conter-right'>
            </div>
          </div>
        </div>
        {/* 电商 */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <div style={{ backgroundImage: `url(${require("../../../../../assets/img/solution/logistics/wl2.png")})`,width: '395px', height: '60px', textAlign: 'center', lineHeight: '60px',fontWeight: '400',fontSize: '36px' }}>电商行业解决方案</div>
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
                src={require('../../../../../assets/img/solution/retailers/ds1.png')}
              />
            </div>
            <div className='commonly-conter-right'>
              <p style={{ width: '380px', textIndent: '2em' }}>围绕电商平台业务高并发、层级复杂、支付营销多样化等特点提供从系统、支付到售后的全流程定制服务实现商品交易、订单分发、会员管理等一站式精细化运营满足多层次交易、分销、分润需求，降低企业运营成本提升管理效率和用户黏性，最大化商户营收。</p>
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
              <img src={require('../../../../../assets/img/solution/retailers/ds2.png')} style={{ width: '100%' }} alt="" />
              <p>专为各类电商平台打造的一套完整企业资金管理解决方案</p>
              <p> 可帮企业一站式解决资金存管、支付、 二清、 税务、余额增值、投融资问题。</p>
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
              <img src={require('../../../../../assets/img/solution/retailers/ds3.png')} style={{ width: '100%' }} alt="" />
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
                  <img src={require('../../../../../assets/img/solution/retailers/ds4.png')} alt="" />
                  <h2>精准化营销</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #EB6100' }} />
                  <p>
                    解决会员管理与用户沉淀难题
                    实现付费渗透与支付营销闭环
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/retailers/ds5.png')} alt="" />
                  <h2>智能分析与展现</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #E5DB4C' }} />
                  <p>
                    为商户提供效果统计、走势分析
                    全方位把控付费情况与用户黏性
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/retailers/ds6.png')} alt="" />
                  <h2>多级分润系统</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #009944' }} />
                  <p>提供多方全程的电子化分润服务
                    节省商户运营成本,加快资金流转效率
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/retailers/ds7.png')} alt="" />
                  <h2>安全的风控体系</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #AE5DA1' }} />
                  <p>系统承载量可达10亿级
                    全方位保障电商交易安全
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
       {/*  */}
        {/*<SolutionFooter />*/}
      </div>
    );
  }
}

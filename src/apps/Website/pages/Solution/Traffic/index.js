import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav } from '@alifd/next';
import SolutionFooter from '../components/SolutionFooter';
import '../../index.css';


export default class Traffic extends Component {
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
              <h1>-交通出行行业解决方案 </h1>
              <p>
                借助于领先的技术优势和市场洞察力，为二手车电商平台提供量身定制的行业解决方案, 帮助
                平台应用全新的信息技术服务，轻松领跑交通出行行业市场。
              </p>
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
                <div style={{ backgroundImage: `url(${require("../../../../../assets/img/solution/logistics/wl2.png")})`,width: '395px', height: '60px', textAlign: 'center', lineHeight: '60px',fontWeight: '400',fontSize: '36px' }}>交通出行行业解决方案</div>
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
                src={require('../../../../../assets/img/solution/traffic/jt1.png')}
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
                <strong>产</strong>品服务
                <p className='text'>-PRODUCT SERVICE-</p>
              </div>
            </div>
            <div className='service-conter-botton'>
              <img src={require('../../../../../assets/img/solution/traffic/jt2.png')} style={{ width: '100%' }} alt="" />
              <p>完善区域内各类功能，减少交通出行压力，发挥自身互联网技术和海量数</p>
              <p>据优势，以及庞大的用户触达能力，为公众提供更好的智慧出行服务，为交通政企提供智慧运营服务。</p>
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
              <img src={require('../../../../../assets/img/solution/traffic/jt3.png')} style={{ width: '100%' }} alt="" />
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
                  <img src={require('../../../../../assets/img/solution/traffic/jt4.png')} alt="" />
                  <h2>安全可靠</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #EB6100' }} />
                  <p>
                    数据加密和容灾方案
                    7*24不间断服务
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/traffic/jt5.png')} alt="" />
                  <h2>高拓展性</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #E5DB4C' }} />
                  <p>
                    专业合理的技术架构
                    轻松应对复杂业务模式
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/traffic/jt6.png')} alt="" />
                  <h2>极速响应</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #009944' }} />
                  <p>
                    对接成本低、周期短
                    全方位服务极速响应
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/traffic/jt7.png')} alt="" />
                  <h2>精细化运营</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #AE5DA1' }} />
                  <p>收付款、订单管理、数据分析
                    在线客服等精细化支付后端服务
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

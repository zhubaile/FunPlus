import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav, Tab } from '@alifd/next';
import SolutionFooter from '../components/SolutionFooter';
import '../../index.css';


export default class Border extends Component {
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
              <h1>跨境支付</h1>
              <p>我们专注的每一面
                <br />
                都是为了给你更好的体验
                <br />
                支持全球6大主流结算币种，多元化产品为你提供一站式支付服务
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
                <div style={{ backgroundImage: `url(${require("../../../../../assets/img/solution/logistics/wl2.png")})`,width: '395px', height: '60px', textAlign: 'center', lineHeight: '60px',fontWeight: '400',fontSize: '36px' }}>跨境支付解决方案</div>
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
                src={require('../../../../../assets/img/solution/border/kj1.png')}
              />
            </div>
            <div className='commonly-conter-right'>
              <p style={{ width: '380px', textIndent: '2em' }}>为跨境电商多平台卖家提供一站式平台收款解决方案，在满足海外平台卖家货物回款的基本需求上，对收款产品进行了创新与升级，为跨境电商卖家打造一站式平台收款与分发体系，为更多的应用场景提供高效的资金处理能力。</p>
            </div>
          </div>
        </div>
        {/* 写到这个位置了 */}
        <div className='solution-border'>
          <div className='solution-border-top'>
            <img src={require('../../../../../assets/img/solution/retailers/small.png')} style={{ width: '60px' }} alt="" />
            <strong style={{ fontSize: '36px',marginLeft: '-15px' }}>产</strong>品服务
            <p>多元化产品为你提供一站式支付服务
                给你更好的提供安全、专业、便捷的收款解决方案。
            </p>
          </div>
          <div className='solution-border-botton'>
            <Tab shape='wrapped' tabPosition='left'>
              <Tab.Item title="提现到账" key="1">
                <div className='solution-border-botton-tab'>
                  <ul>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj11.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>最快2s到账</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>7*24小时极速提现
                        <br />最快2s到账
                      </p>
                    </li>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj12.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>全年无假期</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>无假期无账期
                        <br />365天随时随地提现
                      </p>
                    </li>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj13.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>提现有保障</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>有具体详细的账单
                        <br />保证提现安全稳定
                      </p>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
              <Tab.Item title="系统架构" key="2">
                <div className='solution-border-botton-tab'>
                  <ul>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj14.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>全面化系统</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>确保服务稳定拥有国
                        <br />际卡支付行业安全认证
                      </p>
                    </li>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj15.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>安全稳定</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>7*24小时实时全面的
                        <br />系统及业务监控
                      </p>
                    </li>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj16.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>行业权威认可</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>荣誉不断在增加
                        <br />优秀跨境电商服务商
                      </p>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
              <Tab.Item title="供应商付款" key="3">
                <div className='solution-border-botton-tab'>
                  <ul>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj17.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>高效省时</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>收付一体，无需提现
                        <br />批量操作一步到位
                      </p>
                    </li>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj18.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>消灭汇损</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>告别多次汇率转换
                        <br />立享限时免费体验
                      </p>
                    </li>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj19.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>资金合规</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>资金运转更高效
                        <br />财务更合规
                      </p>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
              <Tab.Item title="跨境付款" key="4">
                <div className='solution-border-botton-tab'>
                  <ul>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj20.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>极速提现</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>高效的全球资金网络
                        <br />提现实时到账
                      </p>
                    </li>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj21.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>汇率无损</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>锁定中行实时汇率
                        <br />真正的0汇损
                      </p>
                    </li>
                    <li>
                      <img src={require('../../../../../assets/img/solution/border/kj22.png')} />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}>资金安全</p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}>银行级别的安全
                        <br />为资金保驾护航
                      </p>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
            </Tab>
          </div>
        </div>
        {/*  */}
        <div className='solution-border'>
          <div className='solution-border-top'>
            <img src={require('../../../../../assets/img/solution/retailers/small.png')} style={{ width: '60px' }} alt="" />
            <strong style={{ fontSize: '36px',marginLeft: '-15px' }}>产</strong>品服务
            <p>多元化产品为你提供一站式支付服务
              给你更好的提供安全、专业、便捷的收款解决方案。
            </p>
          </div>
          <div className='solution-border-botton'>
            <div className='solution-border-botton-business'>
              <div>
                <img src={require('../../../../../assets/img/solution/border/06.png')} />
                <p style={{ fontSize: '18px' , lineHeight: '18px' }}>1 注册</p>
                <p style={{ fontSize: '14px' , lineHeight: '14px' }}>注册3FunPlus账号
                </p>
              </div>
              <img src={require('../../../../../assets/img/solution/border/kj9.png')} />
              <div>
                <img src={require('../../../../../assets/img/solution/border/07.png')} />
                <p style={{ fontSize: '18px' , lineHeight: '18px' }}>2 绑定</p>
                <p style={{ fontSize: '14px' , lineHeight: '14px' }}>绑定账号，便捷收款
                </p>
              </div>
              <img src={require('../../../../../assets/img/solution/border/kj9.png')} />
              <div>
                <img src={require('../../../../../assets/img/solution/border/08.png')} />
                <p style={{ fontSize: '18px' , lineHeight: '18px' }}>3 提现</p>
                <p style={{ fontSize: '14px' , lineHeight: '14px' }}>收款提现
                </p>
              </div>
            </div>
          </div>
        </div>
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
                  <img src={require('../../../../../assets/img/solution/border/kj2.png')} />
                  <h2>快速提现</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #EB6100' }} />
                  <p>
                    最快2S提现
                    7*24不间断服务提现开创者
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/border/kj3.png')} />
                  <h2>安全合规</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #E5DB4C' }} />
                  <p>
                    经国家外汇管理局许可
                    受国外权威监管机构监管
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/border/kj4.png')} />
                  <h2>全球覆盖</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #009944' }} />
                  <p>
                    对接成本低、周期短
                    全方位服务极速响应
                  </p>
                </li>
                <li className='service-conter-botton-box'>
                  <img src={require('../../../../../assets/img/solution/border/kj5.png')} />
                  <h2>灵活扩展</h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #AE5DA1' }} />
                  <p>收付款、订单管理、数据分析
                    在线客服等精细化支付后端服务
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <SolutionFooter />
      </div>
    );
  }
}

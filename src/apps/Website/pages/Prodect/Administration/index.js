import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav, Tab } from '@alifd/next';
import '../../index.css';

export default class Ceshi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    /* const detachedContentStyle = {
      border: '1px solid #DCDEE3',
      padding: '20px',
    };
    contentStyle={detachedContentStyle} */
    return (
      <div className='prodect'>
        {/* 导航下面的展示内容 */}
        <div className='nav-belowimg' style={{ backgroundImage: `url(${require("../../../../../assets/img/shouye/bg1.png")})` }}>
          <div className='nav-belowimg-conter'>
            <div className='nav-belowimg-conter-left'>
              <h1>-商业智能</h1>
              <p>针对企业客户推出的商业智能系统，对企业支付数据，产品数据，客户
                行为数据进行深度挖掘，提供轻量化，可视化的，全流程的客户营销管理与产品推荐服务。
              </p>
            </div>
            <div className='nav-belowimg-conter-right' />
          </div>
        </div>
        {/* 聚合支付 */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <h1 style={{ textAlign: 'center' }}>商业智能，让数据更清晰</h1>
                <p style={{ fontSize: '20px' , opacity: '0.8' }}>帮助企业梳理主数据和元数据体系，展现技术进行数据分析以实现商业价值。</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img
                src={require('../../../../../assets/img/prodect/administration/sy2.png')}
              />
            </div>
            <div className='commonly-conter-right'>
              <p>商业智能拥有多维数据库，利用内存多维数据库技术快速处理、快速访问、实时计算、实时查询等特性。为企业节省运维成本， 提供更安全、更稳定、更专业的服务。</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='scene'>
          <div className='scene-conter'>
            <div className='scene-conter-top'>
              <div>
                <img src={require('../../../../../assets/img/prodect/administration/small.png')} style={{ width: '60px' }} alt="云" />
                <strong>适</strong>用场景
              </div>
            </div>
            <div className='scene-conter-botton'>
              <Tab shape='wrapped' tabPosition='left'>
                <Tab.Item title="电商行业" key="1">
                  <div className='scene-conter-botton-tab'>
                    <p>适用于B2C交易模式，面向中国消费者消费</p>
                    <img
                      src={require('../../../../../assets/img/prodect/administration/scene-ds.png')}
                    />
                  </div>
                </Tab.Item>
                <Tab.Item title="物流行业" key="2">
                  <div className='scene-conter-botton-tab'>
                    <p>适用于B2C交易模式，面向中国消费者消费</p>
                    <img
                      src={require('../../../../../assets/img/prodect/administration/scene-wl.png')}
                    />
                  </div>
                </Tab.Item>
                <Tab.Item title="零售行业" key="3">
                  <div className='scene-conter-botton-tab'>
                    <p>适用于B2C交易模式，面向中国消费者消费</p>
                    <img
                      src={require('../../../../../assets/img/prodect/administration/scene-ls.png')}
                    />
                  </div>
                </Tab.Item>
                <Tab.Item title="金融行业" key="4">
                  <div className='scene-conter-botton-tab'>
                    <p>适用于B2C交易模式，面向中国消费者消费</p>
                    <img
                      src={require('../../../../../assets/img/prodect/administration/scene-jr.png')}
                    />
                  </div>
                </Tab.Item>
              </Tab>
            </div>
          </div>
        </div>
        {/**/}
        <div className='scene'>
          <div className='scene-conter'>
            <div className='scene-conter-top'>
              <div>
                <img src={require('../../../../../assets/img/prodect/administration/small.png')} style={{ width: '60px' }} alt="云" />
                <strong>产</strong>品特性
              </div>
            </div>
          </div>
          <div className='scene-botton'>
            <div className='scene-botton-left'>
              <ul>
                <li><i><img src={require('../../../../../assets/img/prodect/administration/sy0.png')} alt="" /></i>有效性高，持续性强</li>
                <li><i><img src={require('../../../../../assets/img/prodect/administration/sy0.png')} alt="" /></i>降低运营成本提高运营转化率</li>
                <li><i><img src={require('../../../../../assets/img/prodect/administration/sy0.png')} alt="" /></i>低学习成本的操作界面与使用流程</li>
                <li><i><img src={require('../../../../../assets/img/prodect/administration/sy0.png')} alt="" /></i>支持深度定制满足企业业务流程</li>
              </ul>
            </div>
            <div className='scene-botton-right'>
              <img src={require('../../../../../assets/img/prodect/administration/sy3.png')} style={{ width: '100%' }} alt="" />
            </div>
          </div>
        </div>
        {/**/}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <img src={require('../../../../../assets/img/prodect/administration/small.png')} style={{ width: '60px' }} alt="云" />
                <strong>产</strong>品功能
              </div>

            </div>
            <div className='service-conter-botton'>
              <ul>
                <li className='service-conter-botton-son'>
                  <img src={require('../../../../../assets/img/prodect/administration/cp1.png')} alt="" />
                  <p>用统计分析方法对收集的大量数据进行分析，提取信息和形成结论，对数据加以详细研究
                  </p>
                </li>
                <li className='service-conter-botton-son'>
                  <img src={require('../../../../../assets/img/prodect/administration/cp2.png')} alt="" />
                  <p>质量评估数据质量是分析和利用大数据的前提,是获取大数据价值的重要保障
                  </p>
                </li>
                <li className='service-conter-botton-son'>
                  <img src={require('../../../../../assets/img/prodect/administration/cp3.png')} alt="" />
                  <p>为辅助各位商家准确、快速发现并处理安全隐患问题，以确保最大利益和维护最高权益
                  </p>
                </li>
                <li className='service-conter-botton-son'>
                  <img src={require('../../../../../assets/img/prodect/administration/cp4.png')} alt="" />
                  <p>加大对商业智能的扶持力度，促进智能体系的快速发展，以提高效益并减少各种安全隐患问题
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='footer' style={{ backgroundImage: `url(${require("../../../../../assets/img/prodect/administration/sy4.png")})` }}>
          <div className='footer-conter-left'>
            <h1 style={{ color: '#fff' }}>商业智能</h1>
            <p style={{ marginTop: '50px' , width: '55%' }}>提供使企业迅速分析数据的技术和方法，包括收集、管理和分析数据，将这些数据转化为有用的信、
              息，然后分发到企业各处。
            </p>
          </div>
        </div>
      </div>
    );
  }
}

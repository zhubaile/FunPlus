import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import { Button, Icon, Nav, Tab } from '@alifd/next';
import SolutionFooter from '../components/SolutionFooter';
import '../../index.css';

@injectIntl
export default class Border extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    return (
      <div className='prodect'>
        {/* 导航下面的展示内容 */}
        <div className='headers'>
          <div className="circles1" />
          <div className="circles2" />
          <div className="circles3" />
          <div className='headers-content'>
            <div className='headers-content-left'>
              <h1><FormattedMessage id='app.website.jjborder.header.h1' /></h1>
              <p><FormattedMessage id='app.website.jjborder.header.p1' />
                <br />
                <FormattedMessage id='app.website.jjborder.header.p2' />
                <br />
                <FormattedMessage id='app.website.jjborder.header.p3' />
              </p>
            </div>
            {/*            <div className='headers-content-right' /> */}
          </div>
        </div>
        <div className="outer_boxs">
          <div className="inner_boxs" />
        </div>
        {/* 电商 */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <div
                  className="headline"
                  // style={{ backgroundImage: `url(${require("@img/solution/logistics/wl2.png")})`,width: '395px', height: '60px', textAlign: 'center', lineHeight: '60px',fontWeight: '400',fontSize: '36px' }}
                >
                  <FormattedMessage id='app.website.jjborder.service1.div' />
                </div>
                <p style={{ fontSize: '20px' , opacity: '0.8' }}> <FormattedMessage id='app.website.jjborder.service1.p' /></p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img src={require('@img/solution/border/kj_1.png')} alt="" />
            </div>
            <div className='commonly-conter-right'>
              <p style={{ width: '380px', textIndent: '2em' }}><FormattedMessage id='app.website.jjborder.commonlyright.p' /></p>
            </div>
          </div>
        </div>
        {/* 写到这个位置了 */}
        <div className='solution-border'>
          <div className='solution-border-top'>
            <img src={require('@img/solution/retailers/small.png')} style={{ width: '60px' }} alt="" />
            <strong style={{ fontSize: '36px',marginLeft: '-15px' }}><FormattedMessage id='app.website.jjborder.solution.topstrong' /></strong><FormattedMessage id='app.website.jjborder.solution.topstrongsize' />
            <p><FormattedMessage id='app.website.jjborder.solution.topp' /></p>
          </div>
          <div className='solution-border-botton'>
            <Tab shape='wrapped' tabPosition='left'>
              <Tab.Item title={formatMessage({ id: 'app.website.jjborder.tab.title1' })} key="1">
                <div className='solution-border-botton-tab'>
                  <ul>
                    <li>
                      <img src={require('@img/solution/border/kj11.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab1.li1p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab1.li1p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab1.li1p1' />
                      </p>
                    </li>
                    <li>
                      <img src={require('@img/solution/border/kj12.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab1.li2p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab1.li2p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab1.li2p3' />
                      </p>
                    </li>
                    <li>
                      <img src={require('@img/solution/border/kj13.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab1.li3p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab1.li3p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab1.li3p3' />
                      </p>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
              <Tab.Item title={formatMessage({ id: 'app.website.jjborder.tab.title2' })} key="2">
                <div className='solution-border-botton-tab'>
                  <ul>
                    <li>
                      <img src={require('@img/solution/border/kj14.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab2.li1p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab2.li1p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab2.li1p3' />
                      </p>
                    </li>
                    <li>
                      <img src={require('@img/solution/border/kj15.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab2.li2p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab2.li2p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab2.li2p3' />
                      </p>
                    </li>
                    <li>
                      <img src={require('@img/solution/border/kj16.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab2.li3p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab2.li3p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab2.li3p3' />
                      </p>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
              <Tab.Item title={formatMessage({ id: 'app.website.jjborder.tab.title3' })} key="3">
                <div className='solution-border-botton-tab'>
                  <ul>
                    <li>
                      <img src={require('@img/solution/border/kj17.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab3.li1p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab3.li1p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab3.li1p3' />
                      </p>
                    </li>
                    <li>
                      <img src={require('@img/solution/border/kj18.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab3.li2p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab3.li2p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab3.li2p3' />
                      </p>
                    </li>
                    <li>
                      <img src={require('@img/solution/border/kj19.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab3.li3p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab3.li3p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab3.li3p3' />
                      </p>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
              <Tab.Item title={formatMessage({ id: 'app.website.jjborder.tab.title4' })} key="4">
                <div className='solution-border-botton-tab'>
                  <ul>
                    <li>
                      <img src={require('@img/solution/border/kj20.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab4.li1p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab4.li1p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab4.li1p3' />
                      </p>
                    </li>
                    <li>
                      <img src={require('@img/solution/border/kj21.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab4.li2p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab4.li2p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab4.li2p3' />
                      </p>
                    </li>
                    <li>
                      <img src={require('@img/solution/border/kj22.png')} alt="" />
                      <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.tab4.li3p1' /></p>
                      <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.tab4.li3p2' />
                        <br /><FormattedMessage id='app.website.jjborder.tab4.li3p3' />
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
            <img src={require('@img/solution/retailers/small.png')} style={{ width: '60px' }} alt="" />
            <strong style={{ fontSize: '36px',marginLeft: '-15px' }}><FormattedMessage id='app.website.jjborder.solutionbor.topstrong' /></strong><FormattedMessage id='app.website.jjborder.solutionbor.topstrongsize' />
            <p><FormattedMessage id='app.website.jjborder.solutionbor.topp' />
            </p>
          </div>
          <div className='solution-border-botton'>
            <div className='solution-border-botton-business'>
              <div>
                <img src={require('@img/solution/border/06.png')} alt="" />
                <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.solutionbor.bottomp1' /></p>
                <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.solutionbor.bottomp2' />
                </p>
              </div>
              <img src={require('@img/solution/border/kj9.png')} alt="" />
              <div>
                <img src={require('@img/solution/border/07.png')} alt="" />
                <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.solutionbor.bottomp3' /></p>
                <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.solutionbor.bottomp4' />
                </p>
              </div>
              <img src={require('@img/solution/border/kj9.png')} alt="" />
              <div>
                <img src={require('@img/solution/border/08.png')} alt="" />
                <p style={{ fontSize: '18px' , lineHeight: '18px' }}><FormattedMessage id='app.website.jjborder.solutionbor.bottomp5' /></p>
                <p style={{ fontSize: '14px' , lineHeight: '14px' }}><FormattedMessage id='app.website.jjborder.solutionbor.bottomp6' />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="advantages">
          <div className="advantages_main">
            <div className="advantages_top">
              <div>
                <h1><FormattedMessage id='app.website.jjborder.service3.toph1' /></h1>
              </div>
            </div>
            <div className="advantages_bottom">
              <ul>
                <li className='boxs'>
                  <img src={require('@img/solution/border/kj2.png')} alt="" />
                  <h2><FormattedMessage id='app.website.jjborder.service3.bottomli1h2' /></h2>
                  <hr style={{ width: '40%', border: '1px solid #EB6100' }} />
                  <p>
                    <FormattedMessage id='app.website.jjborder.service3.bottomli1p' />
                  </p>
                </li>
                <li className='boxs'>
                  <img src={require('@img/solution/border/kj3.png')} alt="" />
                  <h2><FormattedMessage id='app.website.jjborder.service3.bottomli2h2' /></h2>
                  <hr style={{ width: '40%', border: '1px solid #E5DB4C' }} />
                  <p>
                    <FormattedMessage id='app.website.jjborder.service3.bottomli2p' />
                  </p>
                </li>
                <li className='boxs'>
                  <img src={require('@img/solution/border/kj4.png')} alt="" />
                  <h2><FormattedMessage id='app.website.jjborder.service3.bottomli3h2' /></h2>
                  <hr style={{ width: '40%', border: '1px solid #009944' }} />
                  <p>
                    <FormattedMessage id='app.website.jjborder.service3.bottomli3p' />
                  </p>
                </li>
                <li className='boxs'>
                  <img src={require('@img/solution/border/kj5.png')} alt="" />
                  <h2><FormattedMessage id='app.website.jjborder.service3.bottomli4h2' /></h2>
                  <hr style={{ width: '40%', border: '1px solid #AE5DA1' }} />
                  <p><FormattedMessage id='app.website.jjborder.service3.bottomli4p' />
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

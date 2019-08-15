import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
// import IceImg from '@icedesign/img';
import { Button } from '@alifd/next';
import Consultation from '../Consultation';
// import { Link } from 'react-router-dom';
import '../index.css';

// 差不多全是全局的意思
@injectIntl
export default class Ceshi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='shouye'>
        <Consultation />
        {/* 导航下面的展示内容 */}
        <div className='nav-belowimg'>
          <div className="circle1" />
          <div className="circle2" />
          <div className="circle3" />
          <div className="circle4" />
          <div className='nav-belowimg-conter'>
            <div className='nav-belowimg-conter-left'>
              <h1>3FunPlus/<FormattedMessage id='app.website.shouye.toph1' /></h1>
              <h3><FormattedMessage id='app.website.shouye.toph3' /></h3>
              <p><FormattedMessage id='app.website.shouye.topp' /></p>
              <Button style={{ borderRadius: '8px' , color: '#00A2F6FF', marginTop: '50px', width: '150px', height: '43px', fontSize: '20px', fontWeight: 400 }}><FormattedMessage id='app.website.shouye.topButton' /></Button>
            </div>
            <div className='nav-belowimg-conter-right'>
              <img src={require('@img/shouye/s1.png')} alt="" />
            </div>
          </div>
        </div>

        {/* 依托的内容 */}
        <div className="outer_div">
          <div className="inner_div" />
        </div>
        <div className="relys">
          <div className="relys_main">
            <div className="relys_content_left">
              <dl>
                <dt><FormattedMessage id='app.website.shouye.rely1h1' /></dt>
                <dd><FormattedMessage id='app.website.shouye.rely1p' /></dd>
              </dl>
            </div>
            <div className="relys_content_right">
              <img src={require('@img/shouye/pic01.png')} alt="" />
              <p><FormattedMessage id='app.website.shouye.rely1p2' /></p>
            </div>
          </div>
        </div>
        {/* 产品服务 */}
        <div className='product'>
          <div className='product-content'>
            <div className='product-content-top'>
              <div>
                <img src={require('@img/shouye/small.png')} style={{ width: '60px' }} alt="云" />
                <strong><FormattedMessage id='app.website.shouye.servicetop.strong' /></strong><FormattedMessage id='app.website.shouye.servicetop.strongsize' />
                <p className='text'>-PRODUCT SERVICE-</p>
              </div>

            </div>
            <div className='product-content-botton'>
              <ul>
                <li className='product-content-botton-box'>
                  <img src={require('@img/shouye/sq.png')} alt="" />
                  <h2><FormattedMessage id='app.website.shouye.servicebottom.box1h2' /></h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #EB6100' }} />
                  <p><FormattedMessage id='app.website.shouye.servicebottom.box1p' />
                  </p>
                </li>
                <li className='product-content-botton-box'>
                  <img src={require('@img/shouye/sh.png')} alt="" />
                  <h2><FormattedMessage id='app.website.shouye.servicebottom.box2h2' /></h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #E5DB4C' }} />
                  <p><FormattedMessage id='app.website.shouye.servicebottom.box2p' />
                  </p>
                </li>
                <li className='product-content-botton-box'>
                  <img src={require('@img/shouye/cw.png')} alt="" />
                  <h2><FormattedMessage id='app.website.shouye.servicebottom.box3h2' /></h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #009944' }} />
                  <p><FormattedMessage id='app.website.shouye.servicebottom.box3p' />
                  </p>
                </li>
                <li className='product-content-botton-box'>
                  <img src={require('@img/shouye/ewm.png')} alt="" />
                  <h2><FormattedMessage id='app.website.shouye.servicebottom.box4h2' /></h2>
                  <div style={{ width: '40%', height: '1px', borderTop: '2px solid #AE5DA1' }} />
                  <p><FormattedMessage id='app.website.shouye.servicebottom.box4p' />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='unite'>
          <div className='unite_main'>
            <div className='unite_content_left'>
              <div className="bgpic">
                <dl>
                  <dt><FormattedMessage id='app.website.shouye.rely2h1' /></dt>
                  <dd><FormattedMessage id='app.website.shouye.rely2h2' /></dd>
                </dl>
              </div>
            </div>
            <div className='unite_content_right'>
              <p><FormattedMessage id='app.website.shouye.rely2p' /></p>
              <div className="img_box">
                <img className='myimg' src={require('@img/shouye/sy08.png')} alt="" />
              </div>

            </div>
          </div>
        </div>
        {/*  */}
        <div className="asda">
          <div className="bgboxa" />
        </div>
        <div className="smooth">
          <div className="smooth_content_left">
            <dl>
              <dt><FormattedMessage id='app.website.shouye.rely3h1' /></dt>
              <dd><FormattedMessage id='app.website.shouye.rely3h2' /></dd>
              <dt><FormattedMessage id='app.website.shouye.rely3p' /></dt>
            </dl>
          </div>
          <div className="smooth_content_right">
            <img
              src={require('@img/shouye/b.png')}
              style={{ backgroundSize: '100% 100%' , width: '100%', height: '100%' }}
              alt=""
            />
          </div>
        </div>
        {/*  */}
        <div className="safe">
          <div className="safe_content_left">
            <div className="inner_left" style={{ position: 'relative' }}>
              <div style={{ width: '4px', height: '100%', background: 'rgba(109,166,252,1)', position: 'absolute', left: '30%', borderRadius: '2px' }} />
              <div style={{ width: '100%', height: '4px', background: 'rgba(109,166,252,1)', borderRadius: '2px' }} />
              <div style={{ height: '100%', textAlign: 'center', paddingRight: '45%', paddingTop: '15%' }}>
                <img src={require('@img/shouye/pic02.png')} alt="" />
                <p><FormattedMessage id='app.website.shouye.sonp1' /></p>
              </div>
            </div>
          </div>

          <div className="safe_content_right">
            <div className="inner_right">
              <dl>
                <dt><FormattedMessage id='app.website.shouye.sonh1' /></dt>
                <dd><FormattedMessage id='app.website.shouye.sonh2' /></dd>
                <dt><FormattedMessage id='app.website.shouye.sonp' /></dt>
              </dl>
            </div>

          </div>
        </div>
        {/*  */}
        <div className="powerful">
          <div className="powerful_main">
            <div className="powerful_content_left">
              <img src={require('@img/shouye/sy08.png')} alt="" />
            </div>
            <div className="powerful_content_right">
              <dl>
                <dt><FormattedMessage id='app.website.shouye.rely4h1' /></dt>
                <dd><FormattedMessage id='app.website.shouye.rely4h2' /></dd>
                <dt><FormattedMessage id='app.website.shouye.rely4p' /></dt>
              </dl>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="serve">
          <div className="serve_main">
            <div className="serve_content_left">
              <dl>
                <dt><FormattedMessage id='app.website.shouye.rely5h1' /></dt>
                <dd><FormattedMessage id='app.website.shouye.rely5h2' /></dd>
                <dt><FormattedMessage id='app.website.shouye.rely5p' /></dt>
              </dl>
            </div>
            <div className="serve_content_right">
              <img
                src={require('@img/shouye/sy03.png')}
              />
            </div>
          </div>

        </div>
        {/*  */}
        <div className="outer_box">
          <div className="inner_box" />
        </div>
        <div className='intelligent'>
          <div className="intelligent_main">
            <div className='intelligent_content_left'>
              <dl>
                <dt><FormattedMessage id='app.website.shouye.footerh1' /></dt>
                <dd><FormattedMessage id='app.website.shouye.footerh3' /></dd>
                <dt><FormattedMessage id='app.website.shouye.footerp' /></dt>
              </dl>
            </div>
            <div className='intelligent_content_right'>
              <img src={require('@img/shouye/banner_cover1.png')} alt="" />
            </div>
          </div>

        </div>

      </div>
    );
  }
}
const styles = {
  promptMessage: {
    fontSize: '16px',
    color: 'rgba(51, 51, 51, 1)',
  },
};

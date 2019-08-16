import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
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
        <div className='headers'>
          <div className="circles1" />
          <div className="circles2" />
          <div className="circles3" />
          <div className='headers-content'>
            <div className='headers-content-left'>
              <h1>-<FormattedMessage id='app.website.chanpinmode.prodecth1' /></h1>
              <p><FormattedMessage id='app.website.chanpinmode.prodectp' /></p>
            </div>
            {/*            <div className='headers-content-right' /> */}
          </div>
        </div>
        <div className="outer_boxs">
          <div className="inner_boxs" />
        </div>
        {/* 聚合支付 */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <h1 style={{ textAlign: 'center' }}><FormattedMessage id='app.website.chanpinmode.servicetoph1' /></h1>
                <p style={{ fontSize: '20px' , opacity: '0.8' }}><FormattedMessage id='app.website.chanpinmode.servicetopp' /></p>
              </div>
            </div>
            <div className='service-conter-botton'>
              <Img
                src={require('@img/prodect/mode/add.png')}
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
                <FormattedMessage id='app.website.chanpinmode.commonlyleft1con' />
                <div />
              </div>
              <p><FormattedMessage id='app.website.chanpinmode.commonlyleft1p' /></p>
            </div>
            <div className='commonly-conter-right'>
              <img src={require('@img/prodect/mode/pic_1.png')} alt="" />
            </div>
          </div>
        </div>

        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img src={require('@img/prodect/mode/pic_2.png')} alt="" />
            </div>
            <div className='commonly-conter-right'>
              <div className='commonly-conter-right-box'>
                <FormattedMessage id='app.website.chanpinmode.commonlyright1con' />
                <div />
              </div>
              <p> <FormattedMessage id='app.website.chanpinmode.commonlyright1p' /></p>
            </div>
          </div>
        </div>
        <div className='commonly-left'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <div className='commonly-conter-left-box'>
                <FormattedMessage id='app.website.chanpinmode.commonlyleft2con' />
                <div />
              </div>
              <p><FormattedMessage id='app.website.chanpinmode.commonlyleft2p' /></p>
            </div>
            <div className='commonly-conter-right'>
              <img src={require('@img/prodect/mode/pic_3.png')} alt="" />
            </div>
          </div>
        </div>

        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img src={require('@img/prodect/mode/pic_4.png')} alt="" />
            </div>
            <div className='commonly-conter-right'>
              <div className='commonly-conter-right-box'>
                <FormattedMessage id='app.website.chanpinmode.commonlyright2con' />
                <div />
              </div>
              <p> <FormattedMessage id='app.website.chanpinmode.commonlyright2p' /></p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="outer_box">
          <div className="inner_box" />
        </div>
        <div className='footers'>
          <div className='footers-content-left'>
            <h1 style={{ color: '#000' }}><FormattedMessage id='app.website.chanpinmode.footerh1' /></h1>
            <p style={{ marginTop: '50px' , width: '55%' }}><FormattedMessage id='app.website.chanpinmode.footerp' /></p>
          </div>
        </div>
      </div>
    );
  }
}

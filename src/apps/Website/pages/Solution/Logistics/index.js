import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化

import SolutionFooter from '../components/SolutionFooter';
import SolutionHeader from '../components/SolutionHeader';
import '../../index.css';

@injectIntl
export default class Logistics extends Component {
  constructor(props) {
    super(props);
    const {
      intl: { formatMessage },
    } = this.props;
    const headerh1 = formatMessage({ id: 'app.website.jjlogistics.header.h1' }) ,
      headerp = formatMessage({ id: 'app.website.jjlogistics.header.p' }) ;
    this.state = {
      HHcontent: headerh1,
      HPcontent: headerp,
    };
  }
  render() {
    return (
      <div className='prodect'>
        {/* 导航下面的展示内容 */}
        <SolutionHeader HHcontent={this.state.HHcontent} HPcontent={this.state.HPcontent} />
        {/* 电商 */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <div
                  className="headline"
                  // style={{ backgroundImage: `url(${require("@img/solution/logistics/wl2.png")})`,width: '395px', height: '60px', textAlign: 'center', lineHeight: '60px',fontWeight: '400',fontSize: '36px' }}
                >
                  <FormattedMessage id='app.website.jjlogistics.service1.div' />
                </div>
                <p style={{ fontSize: '20px' , opacity: '0.8' }}><FormattedMessage id='app.website.jjlogistics.service1.p' /></p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img
                src={require('@img/solution/logistics/wl_1.png')}
              />
            </div>
            <div className='commonly-conter-right'>
              <p><FormattedMessage id='app.website.jjlogistics.commonlyright.p' /></p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <img src={require('@img/solution/retailers/small.png')} style={{ width: '60px' }} alt="" />
                <strong><FormattedMessage id='app.website.jjlogistics.service2.topstrong' /></strong><FormattedMessage id='app.website.jjlogistics.service2.topstrongsize' />
                <p className='text'>-problem to be solved-</p>
              </div>
            </div>
            <div className='service-conter-bottons'>
              <img src={require('@img/solution/logistics/wl4.png')} alt="" />
              <p className="myp"><FormattedMessage id='app.website.jjlogistics.service2.bottomp1' /></p>
              <p className='myp'><FormattedMessage id='app.website.jjlogistics.service2.bottomp2' /></p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='scene'>
          <div className='scene-conter'>
            <div className='scene-conter-top'>
              <div>
                <h1><FormattedMessage id='app.website.jjlogistics.scene.h1' /></h1>
              </div>
            </div>
            <div className='scene-conter-xxl'>
              <img src={require('@img/solution/logistics/wl_2.png')} alt="" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='advantages'>
          <div className='advantages_main'>
            <div className='advantages_top'>
              <div>
                <h1><FormattedMessage id='app.website.jjtraffic.service3.toph1' /></h1>
              </div>
            </div>
            <div className='advantages_bottom'>
              <ul>
                <li className='boxs'>
                  <img src={require('@img/solution/logistics/wl6.png')} alt="" />
                  <h2><FormattedMessage id='app.website.jjlogistics.service3.bottomli1h2' /></h2>
                  <hr style={{ width: '40%', borderTop: '1px solid #EB6100' }} />
                  <p>
                    <FormattedMessage id='app.website.jjlogistics.service3.bottomli1p' />
                  </p>
                </li>
                <li className='boxs'>
                  <img src={require('@img/solution/logistics/wl7.png')} alt="" />
                  <h2><FormattedMessage id='app.website.jjlogistics.service3.bottomli2h2' /></h2>
                  <hr style={{ width: '40%', border: '1px solid #E5DB4C' }} />
                  <p>
                    <FormattedMessage id='app.website.jjlogistics.service3.bottomli2p' />
                  </p>
                </li>
                <li className='boxs'>
                  <img src={require('@img/solution/logistics/wl8.png')} alt="" />
                  <h2><FormattedMessage id='app.website.jjlogistics.service3.bottomli3h2' /></h2>
                  <hr style={{ width: '40%', borderTop: '1px solid #009944' }} />
                  <p>
                    <FormattedMessage id='app.website.jjlogistics.service3.bottomli3p' />
                  </p>
                </li>
                <li className='boxs'>
                  <img src={require('@img/solution/logistics/wl9.png')} alt="" />
                  <h2><FormattedMessage id='app.website.jjlogistics.service3.bottomli4h2' /></h2>
                  <hr style={{ width: '40%', border: '1px solid #AE5DA1' }} />
                  <p><FormattedMessage id='app.website.jjlogistics.service3.bottomli4p' />
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

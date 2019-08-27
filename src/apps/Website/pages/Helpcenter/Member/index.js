import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import { Button, Icon, Nav, Slider } from '@alifd/next';
import HelpcenterHeader from '../components/HelpcenterHeader';
import HelpcenterFooter from '../components/HelpcenterFooter';
import '../../index.css';
// import $ from 'jquery';
@injectIntl
export default class Member extends Component {
  constructor(props) {
    super(props);
    const {
      intl: { formatMessage },
    } = this.props;
    const headerh1 = formatMessage({ id: 'app.website.helpmember.header.h1' }) ,
      headerp = formatMessage({ id: 'app.website.helpmember.header.p' }) ,
      footerh1 = formatMessage({ id: 'app.website.helpmember.footer.h1' }) ,
      footerp = formatMessage({ id: 'app.website.helpmember.footer.p' });
    this.state = {
      HHcontent: headerh1,
      HPcontent: headerp,
      FHcontent: footerh1,
      FPcontent: footerp,
    };
  }
  render() {
    const settings = {
      className: 'custom-slide center',
      autoplay: true, // 是否自动轮播
      autoplaySpeed: '4000', // 自动播放的轮播速度
      lazyLoad: true, // 懒加载
      slidesToShow: 3, // 同时展示的图片数量
      speed: 500, // 轮播速度
      adaptiveHeight: true, // 自适应高度
      centerMode: true, // 启用居中模式
      infinite: true, // 使用无穷循环模式
      dots: true, // 显示导航锚点
      dotsDirection: 'hoz',
      dotsClass: 'dots-cusst', //  dotsClass 可覆盖dots的样式
      slideDirection: 'hoz', // 轮播方向
      centerPadding: '60px', // pading会产生前后预览
      arrowDirection: 'hoz', // 导航箭头的方向
      arrowSize: "large", // 导航箭头大小
      arrowPosition: "outer", // 导航箭头位置
    };
    const { intl: { formatMessage } } = this.props;
    const dots1 = formatMessage({ id: 'app.website.helpmember.slider.dots1' }) ,
      dots2 = formatMessage({ id: 'app.website.helpmember.slider.dots2' }) ,
      dots3 = formatMessage({ id: 'app.website.helpmember.slider.dots3' }) ,
      dots4 = formatMessage({ id: 'app.website.helpmember.slider.dots4' }) ,
      dots5 = formatMessage({ id: 'app.website.helpmember.slider.dots5' });

    const navigation = [dots1,dots2,dots3,dots4,dots5];
    return (
      <div className='helpmember'>
        <HelpcenterHeader HHcontent={this.state.HHcontent} HPcontent={this.state.HPcontent} />
        {/* 导航下面的展示内容 */}
        <div className="helpmember-topcontent">
          <h2><FormattedMessage id='app.website.helpmember.topcontent.h2' /></h2>
          <p><FormattedMessage id='app.website.helpmember.topcontent.p' />
          </p>
        </div>
        {/* 会员账户系统 */}
        <div className='helpmember-account'>
          <div className=' helpmember-account-top'>
            <strong><FormattedMessage id='app.website.helpmember.accounttop.strong' /></strong><FormattedMessage id='app.website.helpmember.accounttop.strongsize' />
          </div>
          <div className='helpmember-account-bottom'>
            <Slider {...settings}
              dotsRender={(index, current) => {
                // 锚点问题
                // 两个错误，不能使用遍历，遍历之前没有return
                //  return zbl.map((index) => {
                //   debugger;
                //   return <a>{index}</a>;
                // });
                 return <a>{navigation[index]}</a>;
            }}
            >
              <div>
                <div className='Carousel' >
                  <img src={require('@img/helpcenter/member/hy9.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2><FormattedMessage id='app.website.helpmember.slider.dots1' /></h2>
                  <button><FormattedMessage id='app.website.helpmember.Carousel.button' /></button>
                  <p><FormattedMessage id='app.website.helpmember.Carousel1p' /></p>
                  <a href="javascript:;"><FormattedMessage id='app.website.helpmember.Carousel.a' /></a>
                </div>
              </div>
              <div>
                <div className='Carousel' >
                  <img src={require('@img/helpcenter/member/hy2.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2><FormattedMessage id='app.website.helpmember.slider.dots2' /></h2>
                  <button><FormattedMessage id='app.website.helpmember.Carousel.button' /></button>
                  <p><FormattedMessage id='app.website.helpmember.Carousel2p' /></p>
                  <a href="javascript:;"><FormattedMessage id='app.website.helpmember.Carousel.a' /></a>
                </div>
              </div>
              <div>
                <div className='Carousel' >
                  <img src={require('@img/helpcenter/member/hy1.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2><FormattedMessage id='app.website.helpmember.slider.dots3' /></h2>
                  <button><FormattedMessage id='app.website.helpmember.Carousel.button' /></button>
                  <p><FormattedMessage id='app.website.helpmember.Carousel3p' /></p>
                  <a href="javascript:;"><FormattedMessage id='app.website.helpmember.Carousel.a' /></a>
                </div>
              </div>
              <div>
                <div className='Carousel' >
                  <img src={require('@img/helpcenter/member/hy3.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2><FormattedMessage id='app.website.helpmember.slider.dots4' /></h2>
                  <button><FormattedMessage id='app.website.helpmember.Carousel.button' /></button>
                  <p><FormattedMessage id='app.website.helpmember.Carousel4p' /></p>
                  <a href="javascript:;"><FormattedMessage id='app.website.helpmember.Carousel.a' /></a>
                </div>
              </div>
              <div>
                <div className='Carousel' >
                  <img src={require('@img/helpcenter/member/hy10.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2><FormattedMessage id='app.website.helpmember.slider.dots5' /></h2>
                  <button><FormattedMessage id='app.website.helpmember.Carousel.button' /></button>
                  <p><FormattedMessage id='app.website.helpmember.Carousel5p' /></p>
                  <a href="javascript:;"><FormattedMessage id='app.website.helpmember.Carousel.a' /></a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        {/* 电商 */}
        <div className='helpmember-imgleft'>
          <div className='helpmember-imgleft-left'>
            <div className="bgpic-lefta">
              <dl>
                <dt><FormattedMessage id='app.website.helpmember.imgleftleft' /></dt>
                <dd><FormattedMessage id='app.website.helpmember.imgleftleftlh' /></dd>
              </dl>
            </div>
          </div>
          <div className='helpmember-imgleft-right'>
            <FormattedMessage id='app.website.helpmember.imgleftright' />
          </div>
        </div>

        <div className='helpmember-imgright'>
          <div className='helpmember-imgright-left'>
            <FormattedMessage id='app.website.helpmember.imgrightleft' />
          </div>
          <div className='helpmember-imgright-right'>
            <div className="bgpic-righta">
              <dl>
                <dt><FormattedMessage id='app.website.helpmember.imgrightright' /></dt>
                <dd><FormattedMessage id='app.website.helpmember.imgrightrightxz' /></dd>
              </dl>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='helpmember-footer'>
          <div className='helpmember-footer-conter'>
            <div className='helpmember-footer-conter-top'>
              <div>
                <h1><strong><FormattedMessage id='app.website.helpmember.footertop.strong' /></strong><FormattedMessage id='app.website.helpmember.footertop.strongsize' /></h1>
              </div>
            </div>
            <div className='helpmember-footer-conter-botton'>
              <ul>
                <li>
                  <img src={require('@img/helpcenter/member/hy4.png')} alt="" />
                  <strong><FormattedMessage id='app.website.helpmember.footerbottom.strong1' /></strong>
                  <p style={{ fontSize: '16px' }}><FormattedMessage id='app.website.helpmember.footerbottom.p1' /></p>
                </li>
                <li>
                  <img src={require('@img/helpcenter/member/hy5.png')} alt="" />
                  <strong><FormattedMessage id='app.website.helpmember.footerbottom.strong2' /></strong>
                  <p style={{ fontSize: '16px' }}><FormattedMessage id='app.website.helpmember.footerbottom.p2' /></p>
                </li>
                <li>
                  <img src={require('@img/helpcenter/member/hy6.png')} alt="" />
                  <strong><FormattedMessage id='app.website.helpmember.footerbottom.strong3' /></strong>
                  <p style={{ fontSize: '16px' }}><FormattedMessage id='app.website.helpmember.footerbottom.p3' /></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <HelpcenterFooter FHcontent={this.state.FHcontent} FPcontent={this.state.FPcontent} />
      </div>
    );
  }
}

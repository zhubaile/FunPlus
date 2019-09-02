import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import { Slider, Icon, Nav, Tab } from '@alifd/next';
import '../../index.css';

@injectIntl
export default class Ceshi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      className: 'custom-slide center',
      autoplay: true, // 是否自动轮播
      autoplaySpeed: '2000', // 自动播放的轮播速度
      lazyLoad: true, // 懒加载
      slidesToShow: 1, // 同时展示的图片数量
      speed: 500, // 轮播速度
      adaptiveHeight: true, // 自适应高度
      // centerMode: true, // 启用居中模式
      infinite: true, // 使用无穷循环模式
      // dots: true, // 显示导航锚点
      dotsDirection: 'ver',
      dotsClass: 'dots-cusst', //  dotsClass 可覆盖dots的样式
      slideDirection: 'hoz', // 轮播方向
      centerPadding: '60px', // pading会产生前后预览
      // arrowDirection: 'ver', // 导航箭头的方向
      // arrowSize: "large", // 导航箭头大小
      // arrowPosition: "outer", // 导航箭头位置
      arrows: false,
    };
    /* const detachedContentStyle = {
      border: '1px solid #DCDEE3',
      padding: '20px',
    };
    contentStyle={detachedContentStyle} */
    const {
      intl: { formatMessage },
    } = this.props;
    const dots1 = formatMessage({ id: 'app.website.chanpinadmin.slider.dots1' }) ,
      dots2 = formatMessage({ id: 'app.website.chanpinadmin.slider.dots2' }) ,
      dots3 = formatMessage({ id: 'app.website.chanpinadmin.slider.dots3' }) ,
      dots4 = formatMessage({ id: 'app.website.chanpinadmin.slider.dots4' });
    const navigation = [dots1,dots2,dots3,dots4];
    return (
      <div className='prodect'>
        {/* 导航下面的展示内容 */}
        <div className='headers'>
          <div className="circles1" />
          <div className="circles2" />
          <div className="circles3" />
          <div className='headers-content'>
            <div className='headers-content-left'>
              <h1>-<FormattedMessage id='app.website.chanpinadmin.prodecth1' /></h1>
              <p>
                <FormattedMessage id='app.website.chanpinadmin.prodectp' />
              </p>
            </div>
            {/*            <div className='nav-belowimg-conter-right' /> */}
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
                <h1 style={{ textAlign: 'center' }}> <FormattedMessage id='app.website.chanpinadmin.service1h1' /></h1>
                <p style={{ fontSize: '20px' , color: 'rgba(102,102,102,1)', fontWeight: '400' }}> <FormattedMessage id='app.website.chanpinadmin.service1p' /></p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='commonly-right'>
          <div className='commonly-conter'>
            <div className='commonly-conter-left'>
              <img src={require('@img/prodect/administration/sy2.png')} alt="" />
            </div>
            <div className='commonly-conter-right'>
              <p> <FormattedMessage id='app.website.chanpinadmin.commonlyrightp' /></p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='scene'>
          <div className='scene-conter'>
            <div className='scene-conter-top'>
              <div>
                <img src={require('@img/prodect/administration/small.png')} style={{ width: '60px' }} alt="云" />
                <strong><FormattedMessage id='app.website.chanpinadmin.scene1top.strong' /></strong><FormattedMessage id='app.website.chanpinadmin.scene1top.strongsize' />
              </div>
            </div>
            {/* <div className='scene-conter-botton'>
               <Slider slideDirection="ver" dots={false} arrowPosition="inner" arrowDirection="ver" className="ver-slick" infinite arrows={false}>
                <div className='scene-conter-botton-tab'>
                  <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                  <img
                    src={require('../../../../../assets/img/prodect/administration/scene-ds.png')}
                  />
                </div>
                <div className='scene-conter-botton-tab'>
                  <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                  <img
                    src={require('../../../../../assets/img/prodect/administration/scene-ds.png')}
                  />
                </div>
                <div className='scene-conter-botton-tab'>
                  <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                  <img
                    src={require('../../../../../assets/img/prodect/administration/scene-ds.png')}
                  />
                </div>
                <div className='scene-conter-botton-tab'>
                  <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                  <img
                    src={require('../../../../../assets/img/prodect/administration/scene-ds.png')}
                  />
                </div>
              </Slider>
            </div> */}
{/*            <div className='scene-conter-botton'>
              <Tab shape='wrapped' tabPosition='left'>
                <Tab.Item title={formatMessage({ id: 'app.website.chanpinadmin.tab.title1' })} key="1">
                  <div className='scene-conter-botton-tab'>
                    <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                    <img src={require('@img/prodect/administration/scene-ds.png')} alt="" />
                  </div>
                </Tab.Item>
                <Tab.Item title={formatMessage({ id: 'app.website.chanpinadmin.tab.title1' })} key="2">
                  <div className='scene-conter-botton-tab'>
                    <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                    <img src={require('@img/prodect/administration/scene-wl.png')} alt="" />
                  </div>
                </Tab.Item>
                <Tab.Item title={formatMessage({ id: 'app.website.chanpinadmin.tab.title1' })} key="3">
                  <div className='scene-conter-botton-tab'>
                    <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                    <img src={require('@img/prodect/administration/scene-ls.png')} alt="" />
                  </div>
                </Tab.Item>
                <Tab.Item title={formatMessage({ id: 'app.website.chanpinadmin.tab.title1' })} key="4">
                  <div className='scene-conter-botton-tab'>
                    <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                    <img src={require('@img/prodect/administration/scene-jr.png')} alt="" />
                  </div>
                </Tab.Item>
              </Tab>
            </div>*/}
            <div className="maincontainer">
              <div className="contents">
                <p><FormattedMessage id='app.website.chanpinadmin.tab.p' /></p>
                <Slider
                  {...settings}
                  dotsRender={(index, current)=>{
                    return <a>{navigation[index]}</a>;
                  }}
                >
                  <div><img src={require('@img/prodect/administration/scene-ds.png')} alt="" /></div>
                  <div><img src={require('@img/prodect/administration/scene-wl.png')} alt="" /></div>
                  <div><img src={require('@img/prodect/administration/scene-ls.png')} alt="" /></div>
                  <div><img src={require('@img/prodect/administration/scene-jr.png')} alt="" /></div>
                </Slider>
              </div>
              {/*              <div className="leftcontainer">
                <Slider arrows={false} infinite autoplay slideDirection="ver" dots={false} slidesToShow={1}>
                  <div><p><span className="corls1" />电商行业</p></div>
                  <div><p><span className="corls2" />物流行业</p></div>
                  <div><p><span className="corls3" />零售行业</p></div>
                  <div><p><span className="corls4" />金融行业</p></div>
                </Slider>
              </div>
              <div className="rightcontainer">
                <p>适用于B2C交易模式，面向中国消费者消费</p>
                <Slider arrows={false} infinite autoplay>
                  <div><img src={require('@img/prodect/administration/scene-ds.png')} alt="" /></div>
                  <div><img src={require('@img/prodect/administration/scene-wl.png')} alt="" /></div>
                  <div><img src={require('@img/prodect/administration/scene-ls.png')} alt="" /></div>
                  <div><img src={require('@img/prodect/administration/scene-jr.png')} alt="" /></div>
                </Slider>
              </div> */}
            </div>
          </div>

        </div>
        {/**/}
        <div className='scene'>
          <div className='scene-conter'>
            <div className='scene-conter-top'>
              <div>
                <img src={require('@img/prodect/administration/small.png')} style={{ width: '60px' }} alt="云" />
                <strong><FormattedMessage id='app.website.chanpinadmin.scene2top.strong' /></strong><FormattedMessage id='app.website.chanpinadmin.scene2top.strongsize' />
              </div>
            </div>
          </div>
          <div className='scene-botton'>
            <div className='scene-botton-left'>
              <ul>
                <li><i><img src={require('@img/prodect/administration/sy0.png')} alt="" /></i><FormattedMessage id='app.website.chanpinadmin.scene2bottom.li1' /></li>
                <li><i><img src={require('@img/prodect/administration/sy0.png')} alt="" /></i><FormattedMessage id='app.website.chanpinadmin.scene2bottom.li2' /></li>
                <li><i><img src={require('@img/prodect/administration/sy0.png')} alt="" /></i><FormattedMessage id='app.website.chanpinadmin.scene2bottom.li3' /></li>
                <li><i><img src={require('@img/prodect/administration/sy0.png')} alt="" /></i><FormattedMessage id='app.website.chanpinadmin.scene2bottom.li4' /></li>
              </ul>
            </div>
            <div className='scene-botton-right'>
              <img src={require('@img/prodect/administration/pic_5.png')} alt="" />
            </div>
          </div>

        </div>
        {/**/}
        <div className='service'>
          <div className='service-conter'>
            <div className='service-conter-top'>
              <div>
                <img src={require('@img/prodect/administration/small.png')} style={{ width: '60px' }} alt="云" />
                <strong><FormattedMessage id='app.website.chanpinadmin.service2top.strong' /></strong><FormattedMessage id='app.website.chanpinadmin.service2top.strongsize' />
              </div>

            </div>
            <div className='service-conter-botton'>
              <ul>
                <li className='service-conter-botton-son'>
                  <span className='bgshadow'><img src={require('@img/prodect/administration/cp1.png')} alt="" /></span>
                  <p><FormattedMessage id='app.website.chanpinadmin.service2bottom.p1' />
                  </p>
                </li>
                <li className='service-conter-botton-son'>
                  <span className='bgshadow'><img src={require('@img/prodect/administration/cp2.png')} alt="" /></span>
                  <p><FormattedMessage id='app.website.chanpinadmin.service2bottom.p2' />
                  </p>
                </li>
                <li className='service-conter-botton-son'>
                  <span className='bgshadow'><img src={require('@img/prodect/administration/cp3.png')} alt="" /></span>
                  <p><FormattedMessage id='app.website.chanpinadmin.service2bottom.p3' />
                  </p>
                </li>
                <li className='service-conter-botton-son'>
                  <span className='bgshadow'><img src={require('@img/prodect/administration/cp4.png')} alt="" /></span>
                  <p><FormattedMessage id='app.website.chanpinadmin.service2bottom.p4' />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="outer_box">
          <div className="inner_box" />
        </div>
        <div className='footers'>
          <div className='footers-content-left'>
            <h1 style={{ color: '#fff' }}><FormattedMessage id='app.website.chanpinadmin.footer.h1' /></h1>
            <p style={{ marginTop: '50px' , width: '55%' }}><FormattedMessage id='app.website.chanpinadmin.footer.p' />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

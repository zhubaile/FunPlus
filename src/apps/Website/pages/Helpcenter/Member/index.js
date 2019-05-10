import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav, Slider } from '@alifd/next';
import HelpcenterHeader from '../../Components/HelpcenterHeader';
import HelpcenterFooter from '../../Components/HelpcenterFooter';
import '../../index.css';
// import $ from 'jquery';

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HHcontent: '-会员系统',
      HPcontent: '搭建一整套完善的用户账户体系，在你的产品中集成充值、提现、消费、转账等核心功能。让你可以高效管理所有用户的账户，统一分析管理不同业务所产生的账务，获取多维度的数据报表',
      FHcontent: '-会员账户体系',
      FPcontent: '提供灵活、易用、高效的客户与营销管理功能，浅显易懂的可视化分析，帮助企业完成企业洞察，助力商业决策。',
    };
  }
  render() {
    const settings = {
      className: 'custom-slide center',
      autoplay: true,
      autoplaySpeed: '4000',
      lazyLoad: true,
      slidesToShow: 3,
      centerMode: true,
      infinite: true,
      dots: true,
      centerPadding: '60px',
      speed: 500,
      arrowSize: "large",
      arrowPosition: "outer",
      dotsClass: 'dots-cusst',
    };
    const navigation = ['充值','消费','转账','提现','客服'];
    return (
      <div className='helpmember'>
        <HelpcenterHeader HHcontent={this.state.HHcontent} HPcontent={this.state.HPcontent} />
        {/* 导航下面的展示内容 */}
        <div className="helpmember-topcontent">
          <h2 style={{ fontSize: '26px' }}>一切商业模式都需要实现用户价值最大化。</h2>
          <p>会员账户系统是针对有用户充值、提现、优惠券需求的企业所提供的全场景解决方案。
            帮你轻松实现红包、打赏、押金等丰富的应用场景，高效管理每个用户的账户余额和消费明细，进行个性化的优惠券营销，充分挖掘用户价值。
          </p>
        </div>
        {/* 会员账户系统 */}
        <div className='helpmember-account'>
          <div className=' helpmember-account-top'>
            <strong>会</strong>员账户系统
          </div>
          <div className='helpmember-account-bottom'>
            <Slider {...settings}
              dotsRender={(index, current) => {
                // 锚点问题
                // 两个错误，不能使用遍历，遍历之前没有return
                /* return zbl.map((index) => {
                  debugger;
                  return <a>{index}</a>;
                }); */
                 return <a>{navigation[index]}</a>;
            }}
            >
              <div>
                <div className='Carousel' >
                  <img src={require('../../../../../assets/img/helpcenter/member/hy1.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2>充值</h2>
                  <button>核心功能</button>
                  <p>充值成功</p>
                  <a href="javascript:;">查看详情</a>
                </div>
              </div>
              <div>
                <div className='Carousel' >
                  <img src={require('../../../../../assets/img/helpcenter/member/hy3.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2>消费</h2>
                  <button>核心功能</button>
                  <p>消费成功</p>
                  <a href="javascript:;">查看详情</a>
                </div>
              </div>
              <div>
                <div className='Carousel' >
                  <img src={require('../../../../../assets/img/helpcenter/member/hy1.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2>转账</h2>
                  <button>核心功能</button>
                  <p>用户使用账户余额可以转到其他账户。</p>
                  <a href="javascript:;">查看详情</a>
                </div>
              </div>
              <div>
                <div className='Carousel' >
                  <img src={require('../../../../../assets/img/helpcenter/member/hy2.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2>提现</h2>
                  <button>核心功能</button>
                  <p>可以将账户余额提现至银行卡、支付宝和微信钱包。</p>
                  <a href="javascript:;">查看详情</a>
                </div>
              </div>
              <div>
                <div className='Carousel' >
                  <img src={require('../../../../../assets/img/helpcenter/member/hy3.png')} style={{ width: '50px',textAlign: 'center' ,marginTop: '0' }} alt="" />
                  <h2>客服</h2>
                  <button>核心功能</button>
                  <p>为确保您更好的体验，您有任何问题可以直接在线咨询。</p>
                  <a href="javascript:;">查看详情</a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        {/* 电商 */}
        <div className='helpmember-imgleft'>
          <div className='helpmember-imgleft-left'>
            <h2>用户管理</h2>
            <img src={require('../../../../../assets/img/helpcenter/member/hy7.png')} style={{ width: '300px', height: '300px' }} alt="" />
          </div>
          <div className='helpmember-imgleft-right'>
            灵活的用户账户管理功能，让你实时了解余额变化和卡券使用等信息。
          </div>
        </div>
        <div className='helpmember-imgright'>
          <div className='helpmember-imgright-left'>
            从用户托管、企业收入、营销支出等多个维度清晰地呈现企业财务情况。
          </div>
          <div className='helpmember-imgright-right'>
            <h2>数据分析</h2>
            <img src={require('../../../../../assets/img/helpcenter/member/hy8.png')} style={{ width: '300px', height: '300px' }} alt="" />
          </div>
        </div>

        {/*  */}
        <div className='helpmember-footer'>
          <div className='helpmember-footer-conter'>
            <div className='helpmember-footer-conter-top'>
              <div>
                <h1><strong>产</strong>品功能</h1>
              </div>
            </div>
            <div className='helpmember-footer-conter-botton'>
              <ul>
                <li>
                  <img src={require('../../../../../assets/img/helpcenter/member/hy4.png')} style={{ width: '95px',height: '95px' }} alt="" />
                  <strong>零汇损</strong>
                  <p>支持140多个交易币种</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/helpcenter/member/hy5.png')} style={{ width: '97px',height: '97px' }} alt="" />
                  <strong>费率低</strong>
                  <p>极优费率，节省成本</p>
                </li>
                <li>
                  <img src={require('../../../../../assets/img/helpcenter/member/hy6.png')} style={{ width: '79px', height: '94px' }} alt="" />
                  <strong>安全合规</strong>
                  <p>多方监管，确保资金安全</p>
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

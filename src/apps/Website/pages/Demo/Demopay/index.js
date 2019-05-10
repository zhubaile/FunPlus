import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import {Slider } from '@alifd/next';
import Footers from '../../../layouts/BasicLayout/components/Footer/Footers';
import '../../index.css';


export default class Demoexperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }
  close(){
    this.setState({
      open: false,
      content: null
    })
  }
  open(content,confirm){
    this.setState({
      open:true,
      content: content
    })
    this.confirmCallBack = confirm
  }
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots:false,
      speed:500,
      slidesToShow:1,
      // slideDirection:'ver',
      adaptiveHeight:true,
    };
    if(!this.state.open) return null
    return (
      <div className='demopay'>
        <div className="hxj-popup-overlay">
              {/*半透明覆盖层*/}
        </div>
       <div className='demopay-main'>
         <div className='demopay-main-content'>
          <div className='demopay-main-top-bg'>
            <div className='demopay-main-top'>
              <div className='pay-left'>
                支付服务平台
              </div>
              <div className='pay-right'>
                你好，欢迎使用支付宝付款！
              </div>
            </div>
          </div>
           <div className='demopay-main-conter'>
             <div className='pay-left'>
               <img src={require('../../../../../assets/img/demopay/zlogo.png')} style={{ width: '90%;' }} alt="" />
             </div>
             <div className='pay-right'>
             </div>
           </div>
           {/*  */}
           <div className='demopay-main-footer-bg'>
             <div className='demopay-main-footer'>
               <div className='demopay-main-footer-top'>
                 <div className='pay-left'>
                   <p>正在使用即时到账交易，交易将在>00时00分钟52秒后关闭，请及时付款！</p>
                   <p><strong>会员充值</strong>&nbsp;&nbsp; &nbsp;付款后自动到账，未到账可联系我们。</p>
                 </div>
                 <div className='pay-right'>
                     <p>总计： <strong>10.0</strong>元</p>
                     <button>订单详情</button>
                 </div>
               </div>
               <div className='demopay-main-footer-bottom'>
                 <div style={{ background:'rgba(191,191,191,1)', height: '4px', width: '100%'  }} />
                 <div className='footer-bottom-left'>
                   <div className='footer-bottom-left-main'>
                     <p>扫一扫付款（元）</p>
                     <strong>￥10.00</strong>
                     <div className='qrcode'>
                       <div className='qrcode-top'>
                         <img src={require('../../../../../assets/img/demopay/zf4.png')} style={{ width: '100%;' }} alt="" />
                         <img src={require('../../../../../assets/img/demopay/zf5.png')} style={{ width: '35%', position:'absolute', top:'50%', left:'50%',transform: 'translate(-50%, -50%)' }} alt="" />
                       </div>
                       <div className='qrcode-bottom'>
                         <img src={require('../../../../../assets/img/demopay/er.png')}  alt="" />
                         <div>
                           <p>打开手机支付宝
                             <br />
                             扫一扫继续付款
                           </p>
                         </div>
                       </div>
                     </div>
                     <p>首次使用请下载手机支付宝</p>
                     <p>手机用户可保存上方二维码到手机中
                       在支付宝“扫一扫”中选择相册即可</p>
                   </div>

                   <div className='footer-bottom-left-img'>
                     <Slider {...settings}>
                       <div style={{ width: '100%' }}><img src={require('../../../../../assets/img/demopay/zf1.png')}  alt="" /></div>
                       <div style={{ width: '100%' }}><img src={require('../../../../../assets/img/demopay/zf2.png')}  alt="" /></div>
                     </Slider>
                   </div>

                 </div>
                 <div className='footer-bottom-right'>
                   <img src={require('../../../../../assets/img/demopay/zf3.png')} style={{ width: '90%;' }} alt="" />
                   <button className='btn top'>登录账户登录</button>
                   <button className='btn bottom' onClick={this.close.bind(this)}>关闭交易</button>
                 </div>
                 <div style={{ clear: 'both' }} />
               </div>
             </div>
           </div>
         </div>
         <Footers />
       </div>
        {/*  */}
      </div>
    );
  }
}

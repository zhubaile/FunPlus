/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Message } from '@alifd/next';
import { appsget } from "@indexApi";
import Tionpopup from './Popup';

const Cookies = require('js-cookie');

@injectIntl
@withRouter
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startdata: {}, // 随时切换的数据
      datas: [], // 应用的所有数据
      open: false,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (len) =>{
    appsget().then(({ status,data }) => {
      if (data.errCode == 0) {
        const datas = data.data;
        const appid = Cookies.get('applicationId');
        const startdatas = datas.filter((item)=>{
          return (appid.indexOf(item.appId) > -1);
        });
        const startdata = startdatas[0];
        this.setState({
          datas,
          startdata,
        });
      } else {
        Message.success(data.message);
      }
    });
  }
  // 开关
  openactive=()=> {
    const open = this.state.open;
    this.setState({
      open: !open,
    });
  }
  // 打开新增应用弹窗
  addtionbtn() {
    this.tionpopup.tionpopupopen();
    this.openactive();
  }
  // 切换应用
  tionswitchbtn=(e)=>{
    debugger;
    Cookies.set('applicationId',e.appId);
    this.setState({
      startdata: e,
    },()=>{
      location.reload();
    });
  }
  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    const { startdata,datas } = this.state;
    return (
      <div className={this.state.open ? "fancy-selector-w opened" : "fancy-selector-w"} >
        <Tionpopup ref={node=>this.tionpopup = node} fetchData={this.fetchData.bind(this)} />
        <div className="fancy-selector-current">
          <div className="fs-img">
            <img alt="" src={require('@img/img/card1.png')} />
          </div>
          <div className="fs-main-info">
            <div className="fs-name">
              {startdata.appName}
            </div>
            {/* <div className="fs-sub">
              <span>状态:</span><strong>交易正常</strong>
            </div> */}
          </div>
          {/*  <div className="fs-extra-info">
            <strong>¥5476</strong><span>45笔</span>
          </div> */}
          <div className="fs-selector-trigger" onClick={this.openactive}>
            <i className="os-icon os-icon-arrow-down4" />
          </div>
        </div>

        <div className="fancy-selector-options">
          {
            datas.map((item)=>{
              return (
                <div className='fancy-selector-option' onClick={()=>this.tionswitchbtn(item)}>
                  {/* <div className={item.default == true ? 'fancy-selector-option active' : 'fancy-selector-option'} onClick={()=>this.tionswitchbtn(item)}> */}
                  <div className="fs-img">
                    <img alt="" src={require('@img/img/card2.png')} />
                  </div>
                  <div className="fs-main-info">
                    <div className="fs-name">
                      {item.appName}
                    </div>
                    {/* <div className="fs-sub">
                      <span>状态:</span><strong>交易正常</strong>
                    </div> */}
                  </div>
                  {/* <div className="fs-extra-info">
                    <strong>¥5476</strong><span>45笔</span>
                  </div> */}
                </div>
              );
            })
          }
          {/* <div className="fancy-selector-option">
            <div className="fs-img">
              <img alt="" src={require('@img/img/card2.png')} />
            </div>
            <div className="fs-main-info">
              <div className="fs-name">
                  测试应用2
              </div>
              <div className="fs-sub">
                <span>状态:</span><strong>交易正常</strong>
              </div>
            </div>
            <div className="fs-extra-info">
              <strong>¥5476</strong><span>45笔</span>
            </div>
          </div>

          <div className="fancy-selector-option active">
            <div className="fs-img">
              <img alt="" src={require('@img/img/card1.png')} />
            </div>
            <div className="fs-main-info">
              <div className="fs-name">
                  展示类应用2
              </div>
              <div className="fs-sub">
                <span>状态:</span><strong>交易正常</strong>
              </div>
            </div>
            <div className="fs-extra-info">
              <strong>¥5476</strong><span>45笔</span>
            </div>
          </div>

          <div className="fancy-selector-option">
            <div className="fs-img">
              <img alt="" src={require('@img/img/card3.png')} />
            </div>
            <div className="fs-main-info">
              <div className="fs-name">
                  测试应用5 app
              </div>
              <div className="fs-sub">
                <span>状态:</span><strong>交易正常</strong>
              </div>
            </div>
            <div className="fs-extra-info">
              <strong>¥5476</strong><span>45笔</span>
            </div>
          </div> */}

          <div className="fancy-selector-actions text-right" onClick={this.addtionbtn.bind(this)}>
            <a className="btn btn-primary" href="#"><i className="os-icon os-icon-ui-22" /><span>添加应用</span></a>
          </div>
        </div>
      </div>

    );
  }
}

import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav, Tab } from '@alifd/next';
import HelpcenterHeader from '../../Components/HelpcenterHeader';
import '../../index.css';


export default class Develop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HHcontent: '-快速开始',
      HPcontent: '帮助用户快速轻松了解平台的服务功能。',
    };
  }
  render() {
    return (
      <div className='helpdevelop'>
        <HelpcenterHeader  HHcontent={this.state.HHcontent} HPcontent={this.state.HPcontent} />
        {/* 导航下面的展示内容 */}
        <div className='helpdevelop-main'>
          <div className='helpdevelop-main-top'></div>
          <div className='helpdevelop-main-bottom'>
            <Tab shape='wrapped' tabPosition='left'>
              <Tab.Item title="快速引导" key="1">
                <div className='helpdevelop-main-bottom-tab'>
                  <ul>
                    <li>
                     <h2>第一步
                     <strong> 注册3FunPlus账号</strong>
                     </h2>
                      <p>点击立即注册，成为 3FunPlus 用户（ 建议使用公司邮箱进行注册 ）。</p>
                      <a href="javascript:;">立即注册</a>
                    </li>
                    <li>
                      <h2>第二步
                      <strong>开发、线上测试</strong>
                      </h2>
                      <p>开发者了解 SDK 接入流程后，下载并按照开发文档进行SDK部署。在调试过程中如有问题，3FunPlus 将提供专业的技术支持为你解决问题。</p>
                      <a href="javascript:;">前往下载SDK</a>
                      <p>验证方法
                        <br />
                        使用3FunPlus官网下载的SDK不做任何参数修改，即可调通并发起金额为0.01元的真实交易（收款帐号为3FunPlus在通道开设的帐号）。</p>
                    </li>
                    <li>
                      <h2>第三步<strong>申请、配置参数</strong></h2>
                      <p>
                        <span>· 获取支付权限</span>
                        <br />
                        若未开通所需的支付通道，可选择代申请使用通道参数申请服务。
                        若已申请过支付通道并且拥有有效通道参数可以跳过此步进行参数配置。</p>
                      <p><span>· 通道参数填写</span>
                        <br />
                        若申请成功后，在3FunPlus平台进行企业信息报备，然后选择配参数进行通道参数填写。</p>
                    </li>
                    <li>
                      <h2>第四步<strong>完成支付接入</strong></h2>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
              <Tab.Item title="接入指南" key="2">
                <div className='helpdevelop-main-bottom-tab'>
                  <ul>
                    <li>
                      <h2>客户端接入简介</h2>
                      <p>3FunPlus客户端支持Android、IOS、H5 三种移动端平台及PC端网页的SDK接入，且提供选择支付
                        通道和支付结果的页面，同时客户端 SDK 可完全自定义页面，开发者可根据实际开发中对页面的要求进行选择。</p>
                      <h2>获取SDK</h2>
                      <p>1.根据你的使用场景选择所需的服务，目前提供Android、iOS、H5、PC网页四种平台接入。
                        <br />2.选择所需SDK后，点击 “下载” 按钮即可下载所需的SDK。
                        <br />3.然后即可根据开发指南开始接入SDK，具体接入可参考各版本开发指南。
                      </p>
                      <a href="javascript:;">前往下载SDK</a>
                    </li>
                    <li>
                      <h2>Android SDK接入指南</h2>
                      <strong>第一步、工程配置及导入依赖包</strong>
                      <p>1. 导入三方支付依赖包</p>
                      <p>2. 配置AndroidManifest.xml</p>
                      <p>3. 添加Application类</p>
                      <strong>第二步、接入支付代码</strong>
                      <p>1. 简单支付模式</p>
                      <p>2. 通道前置支付模式</p>
                      <p>3. 自定义签名方式模式</p>
                    </li>
                    <li>
                      <h2>IOS SDK接入指南</h2>
                      <strong>第一步、库文件导入与工程配置</strong>
                      <p>1. 下载并添加库文件</p>
                      <p> 2. 添加依赖 Frameworks</p>
                      <p>3. 添加 URL Schemes</p>
                      <p>4. 设置工程的工程的Build Settings</p>
                      <p> 5. 如有必要设置info.plist允许http网络连接</p>
                      <p>6. 设置info.plist LSApplicationQueriesSchemes</p>
                      <strong>第二步、3FunPlus支付代码接入</strong>
                      <p>1. 支付请求参量说明</p>
                      <p>2. 支付代码接入</p>
                      <p>3. 支付回调接入</p>
                    </li>
                    <li>
                      <h2>H5 SDK接入指南</h2>
                      <strong>第一步、通过script标签引入h5jssdk文件</strong>
                      <br />
                      <strong>第二步、初始化配置参数</strong>
                    </li>
                    <li>
                      <h2>PC SDK接入指南</h2>
                      <strong>第一步、通过script标签引入pcjssdk文件</strong>
                      <br />
                      <strong>第二步、初始化配置参数</strong>
                    </li>
                  </ul>
                </div>
              </Tab.Item>
            </Tab>
          </div>
        </div>
      </div>
    );
  }
}

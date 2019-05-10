import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import Img from '@icedesign/img';
import { Button, Icon, Nav, Tab } from '@alifd/next';
import HelpcenterHeader from '../../Components/HelpcenterHeader';
import '../../index.css';


export default class Sdk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HHcontent: '-SDK下载',
      HPcontent: '让你快速梳理商户结构，搭建复杂场景下的商户关系，便捷地管理商户层级和基本信息。。',
    };
  }
  render() {
    return (
      <div className='helpsdk'>
        <HelpcenterHeader  HHcontent={this.state.HHcontent} HPcontent={this.state.HPcontent} />
        {/* 导航下面的展示内容 */}
        <div className='helpsdk-main'>
          <h1>SDK Download</h1>
          <div className='helpsdk-main-conter'>
            <ul>
              <li>
                <img src={require('../../../../../assets/img/helpcenter/SDK/android.2.png')} alt="" />
                <strong>Android SDK</strong>
                <p>下载文件包含：
                  SDK接入文档/混淆配置
                  Android 调试DEMO</p>
              </li>
              <li>
                <img src={require('../../../../../assets/img/helpcenter/SDK/ios.2.png')} alt="" />
                <strong>IOS SDK</strong>
                <p>下载文件包含：
                  SDK接入文档
                  IOS 调试DEMO</p>
              </li>
              <li>
                <img src={require('../../../../../assets/img/helpcenter/SDK/h5.2.png')} alt="" />
                <strong>H5 SDK</strong>
                <p>下载文件包含：
                  SDK接入文档
                  H5 调试DEMO</p>
              </li>
              <li>
                <img src={require('../../../../../assets/img/helpcenter/SDK/PC.2.png')} alt="" />
                <strong>PC SDK</strong>
                <p>下载文件包含：
                  SDK接入文档
                  PC 调试DEMO</p>
              </li>
              <li>
                <img src={require('../../../../../assets/img/helpcenter/SDK/cloud.2.png')} alt="" />
                <strong>SERVICE DEMO</strong>
                <p>下载文件包含：
                  服务端接入文档
                  Java | PHP | Python | C#</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

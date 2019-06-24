import React, { Component } from 'react';
import '../../../index.css';

export default class Logdetails extends Component {
  constructor(props) {
    super (props);
    this.state = {
      open: true,
    };
  }
  logdetailsclose() {
    this.setState({
      open: false,
    });
  }

  logdetailsopen() {
    this.setState({
      open: true,
    });
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className='logdetails'>
        <div className='logdetails-top'>
          <span onClick={this.logdetailsclose.bind(this)}>返回</span>
          <h2>日志详情</h2>
        </div>
        <div className='logdetails-middle'>
          <p>日志批次ID</p>
          <p>请求时间</p>
          <p>生产模式</p>
          <p>请求响应时间</p>
          <p>请求对象ID</p>
          <p>请求IP</p>
          <p>请求地址</p>
          <p>请求参数字符串</p>
          <p>请求方法</p>
          <p>请求消息头</p>
          <p>请求消息体</p>
          <p>响应状态码</p>
          <p>响应消息头</p>
          <p>响应消息体</p>
        </div>
      </div>
    );
  }
}

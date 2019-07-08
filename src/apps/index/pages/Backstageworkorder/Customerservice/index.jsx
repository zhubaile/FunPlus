import React, { Component } from 'react';
import { Tab,Button,Input } from '@alifd/next';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Administrators from '../../Personal/components/Administrators/Administrators';
import '../../../layouts/BasicLayout/components/Header/index.scss';
import '../components/index.css';
import { workOrderuserRecord } from '@indexApi';
import { Message } from "@alifd/next/lib/index";
import io from 'socket.io-client';

const Cookies = require('js-cookie');

const listss = [];

// const fs = require('../../../../../../node_modules/fs');
// const server = require('http').createServer();
// const io = require('../../../../../../node_modules/socket.io')(server);

// const socket = require('socket.io-client')('http://192.168.1.105:8081/');


/* const socket = io("http://localhost:21144",{
  path: '/',
  transports: ['websocket', 'polling']
}); */
/* const socket = io('http://192.168.1.105:3000', { // 指定后台的url地址
  path: '/web/beta/v1.0/', // 如果需要的话添加 path 路径以及其他可选项
}); */
const socket = io("ws://192.168.1.105:3000");

export default class Customerservice extends Component {
  static displayName = 'Setting';

  constructor(props) {
    super(props);
    this.state = {
      Probleminput: '', // 输入框内容
      datas: [], // 之前的聊天记录
      messagelist: [], // 此刻聊天的记录
      array: [],
      byReplyId: '',
      userId: '',
    };
    this.onScrollHandle = this.onScrollHandle.bind(this);
  }
  /* socket.on('getMsg',()=>{

}) */
  // 输入框事件
  probleminput(v,e) {
    this.setState({
      Probleminput: v,
    });
  }
  // 回车事件
  onprobleminputKey = (e) => {
    if (e.keyCode == 13) {
      this.subreply();
    }
  }
  // 获取客服的id
  customerserviceid(e) {
    debugger;
    const userid = Cookies.get('applicationId'); // 用户的id
    workOrderuserRecord({
      userId: userid,
      byReplyId: e,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        this.setState({
          datas: data.data, // 获取之前的聊天记录
          byReplyId: e,
          userId: userid,
        });
      }
    });
    /* this.setState({
      serviceid: e,
    }); */
  }
  // 提交
  subreply() {
    const byReplyId = this.state.byReplyId; // 客服id
    const userId = this.state.userId; // 用户的id
    debugger;
    const messagelist = this.state.messagelist; // 此刻聊天的内容
    const contents = this.state.Probleminput; // 输入框的值
    if (!contents) {
      return Message.success('输入问题不能为空');
    }
    socket.emit('send', { contents,byReplyId,userId },(ref)=>{
      debugger; // 2019-7-5遗留问题,信息发送成功未收到返回，未设置监听服务端传回来的信息
      messagelist.push({ contents });
      this.setState({
        messagelist,
      });
    }
    );
    console.log(111);
  /*  socket.on("getMsg", (name,ref)=>{
      debugger;
      console.log(name);
      console.log(ref);
    }); */

    // const _id = this.state.workDetail[0]._id;
    // const byReplyId = this.state.workDetail[0].userId;
  }
  onScrollHandle(event) {
    const clientHeight = event.clientHeight;
    const scrollHeight = event.scrollHeight;
    const scrollTop = (scrollHeight - clientHeight);
    this.messagesEnd.scrollTop = scrollTop;
  }
  render() {
    const zbla = (
      this.state.messagelist.map((item) => {
        debugger;
        return (
          <div className="chat-message self">
            <div className="chat-message-avatar">
              <img alt="" src={require('@img/img/avatar1.jpg')} />
              <div>
                <p>客服</p>
                <span>chat- 9:12am-date</span>
              </div>
            </div>
            <div className="chat-message-content-w">
              <div className="chat-message-content">
                {item}
              </div>
            </div>
          </div>
        );
      })
    );
    const { datas, messagelist } = this.state;
    return (
      <div className='backstageworkorder'>
        <Nav defaultActiveKey='1' history={this.props.history} customerserviceid={this.customerserviceid.bind(this)} />
        {/* {
          !datas?null:()
        } */}
        <div className='kefu'>
          <div className="kefu-main">
            <div className="kefu-main-head">
              <i className="os-icon os-icon-mail-07 left" />
              <div>
                哇哩哇哩哇(客服)
              </div>
              <i className="os-icon os-icon-phone-15 right" />
            </div>
            <div className="kefu-main-chatcontent" ref={(node) => { this.messagesEnd = node; }} >
              <div className="chat-content">

                <div className="chat-message">
                  <div className="chat-message-avatar">
                    <img alt="" src={require('@img/img/avatar1.jpg')} />
                    <div>
                      <p>客服</p>
                      <span>chat- 9:12am-date</span>
                    </div>
                  </div>
                  <div className="chat-message-content-w">
                    <div className="chat-message-content">
                      Hi, my name is Mike, I will be happy to assist you
                    </div>
                  </div>
                </div>

                <div className="chat-date-separator">
                  <span>Yesterday</span>
                </div>

                <div className="chat-message self">
                  <div className="chat-message-avatar">
                    <img alt="" src={require('@img/img/avatar1.jpg')} />
                    <div>
                      <p>客服</p>
                      <span>chat- 9:12am-date</span>
                    </div>
                  </div>
                  <div className="chat-message-content-w">
                    <div className="chat-message-content">
                      That walls over which the drawers. Gone studies to titles have audiences of and concepts was motivator
                    </div>
                  </div>
                </div>

                <div className="chat-message">
                  <div className="chat-message-avatar">
                    <img alt="" src={require('@img/img/avatar1.jpg')} />
                    <div>
                      <p>客服</p>
                      <span>chat- 9:12am-date</span>
                    </div>
                  </div>
                  <div className="chat-message-content-w">
                    <div className="chat-message-content">
                      Slept train nearby a its is design size agreeable. And check cons, but countries the was to such any founding company
                    </div>
                  </div>
                </div>
                {zbla}

              </div>
            </div>
            <div className="chat-controls">
              <div className="chat-input">
                <Input.TextArea
                  placeholder="Type your message here..."
                  rows={10}
                  value={this.state.Probleminput}
                  onChange={this.probleminput.bind(this)}
                  onKeyDown={this.onprobleminputKey}
                  // ref={node => this.charmessageself = node}
                />
                {/* <input placeholder="Type your message here..." type="text" /> */}
              </div>
              <div className="chat-input-extra">
                <div className="chat-extra-actions">
                  <a href="#"><i className="os-icon os-icon-mail-07" /></a><a href="#"><i className="os-icon os-icon-phone-18" /></a><a href="#"><i className="os-icon os-icon-phone-15" /></a>
                </div>
                <div className="chat-btn">
                  <Button type='primary' size='large' onClick={this.subreply.bind(this)} >发送</Button>
                </div>
              </div>
            </div>

          </div>
          <div className='kefu-right'>
            <Administrators />
          </div>
        </div>
      </div>
    );
  }
}

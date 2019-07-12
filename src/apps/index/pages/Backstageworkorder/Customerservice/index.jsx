import React, { Component } from 'react';
import { Tab,Button,Input } from '@alifd/next';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Administrators from '../../Personal/components/Administrators/Administrators';
import '../../../layouts/BasicLayout/components/Header/index.scss';
import '../components/index.css';
import { workOrderuserRecord,workOrderuserRecordOne } from '@indexApi';
import { Message } from "@alifd/next/lib/index";
import moment from 'moment';
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
// const socket = io("ws://192.168.1.105:3000");

export default class Customerservice extends Component {
  static displayName = 'Setting';

  constructor(props) {
    super(props);
    this.state = {
      Probleminput: '', // 输入框内容
      datas: [], // 之前的聊天记录
      messagelist: [], // 此刻聊天的记录
      array: [], // 用户的个人信息
      username: '', // 当前客服名称
      byReplyId: '', // 客服id
      userId: '', // 用户id
    };
    this.socket = io.connect(`ws://192.168.1.105:3000`);
    this.onScrollHandle = this.onScrollHandle.bind(this);
  }
  /* socket.on('getMsg',()=>{

}) */
  componentDidMount() {
    const userId = Cookies.get('userId');
    // 初始聊天记录内容
    workOrderuserRecordOne({
      userId,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        this.setState({
          datas: data.data.data,
          array: data.data.userInfo,
          username: data.data.userInfo.byReplyName,
          userId,
          byReplyId: data.data.userInfo.id,
        },()=>{
          this.onScrollHandle(this.messagesEnd);
        });
      }
    });
  }
  componentWillMount() {
    const userid = Cookies.get('userId');
    this.socket.on('connect',(...arg)=>{
      console.log("链接成功");
      this.socket.emit('binduser',userid);
    });
    this.socket.on('disconnect',(...arg)=>{
      console.log("链接销毁");
    });
    this.socket.on('message',(msg)=>{
      console.log(msg);
      debugger;
      this.setState((prevState)=>{
        prevState.messagelist.push(msg);
        return prevState;
      },()=>{
        this.onScrollHandle(this.messagesEnd);
      });
    });
  }
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
    const userid = Cookies.get('userId'); // 用户的id
    workOrderuserRecord({
      userId: userid,
      byReplyId: e,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        this.setState({
          datas: data.data.data, // 获取之前的聊天记录
          messagelist: [], // 此刻聊天记录清空
          username: data.data.userInfo.username,
          byReplyId: e,
          userId: userid,
        },()=>{
          this.onScrollHandle(this.messagesEnd);
        });
      }
    });
    /* this.setState({
      serviceid: e,
    }); */
  }
  // 提交、发送信息
  subreply() {
    const byReplyId = this.state.byReplyId; // 客服id
    const userId = this.state.userId; // 用户的id
    const messagelist = this.state.messagelist; // 此刻聊天的内容
    const customerContent = this.state.Probleminput; // 输入框的值
    const times = moment().valueOf();
    debugger;
    if (!customerContent) {
      return Message.success('输入问题不能为空');
    }
    const myMsg = {
      byReplyId,
      userId,
      customerContent,
      times,
    };
    // this.socket.send(myMsg);
    this.socket.emit('sayTo',myMsg);
    this.setState((prevState)=>{
      prevState.messagelist.push(myMsg);
      prevState.Probleminput = '';
      return prevState;
    },()=>{
      this.onScrollHandle(this.messagesEnd);
    });
  }
  // 自动滑动到底部
  onScrollHandle(event) {
    const clientHeight = event.clientHeight;
    const scrollHeight = event.scrollHeight;
    const scrollTop = (scrollHeight - clientHeight);
    this.messagesEnd.scrollTop = scrollTop;
  }
  render() {
    const { datas, messagelist,username,array } = this.state;
    const zbla = (
      messagelist.map((item) => {
        const times = moment(item.times).format('YYYY-MM-DD HH:mm:ss');
        console.log(times);
        debugger;
        return (
          <div>
            {
              item.isStatus == true ? (
                <div className="chat-message">
                  <div className="chat-message-avatar">
                    <img alt="" src={require('@img/img/avatar1.jpg')} />
                    <div>
                      <p>{username}</p>
                      <span>{times}</span>
                    </div>
                  </div>
                  <div className="chat-message-content-w">
                    <div className="chat-message-content">
                      {item.customerContent}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="chat-message self">
                  <div className="chat-message-avatar">
                    <img alt="" src={require('@img/img/avatar1.jpg')} />
                    <div>
                      <p>{array.username}</p>
                      <span>{times}</span>
                    </div>
                  </div>
                  <div className="chat-message-content-w">
                    <div className="chat-message-content">
                      {item.customerContent}
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        );
      })
    );
    return (
      <div className='backstageworkorder'>
        <Nav defaultActiveKey='1' history={this.props.history} customerserviceid={this.customerserviceid.bind(this)} />
        <div className='kefu'>
          <div className="kefu-main">
            <div className="kefu-main-head">
              <i className="os-icon os-icon-mail-07 left" />
              <div>
                {username}
              </div>
              <i className="os-icon os-icon-phone-15 right" />
            </div>
            <div className="kefu-main-chatcontent" ref={(node) => { this.messagesEnd = node; }} >
              <div className="chat-content">
                {
                  datas.map((item) => {
                    return (
                      <div>
                        {
                          item.serviceStatus == 0 ? (
                            <div className="chat-message">
                              <div className="chat-message-avatar">
                                <img alt="" src={require('@img/img/avatar1.jpg')} />
                                <div>
                                  <p>{item.username}</p>
                                  <span>{item.createdAt}</span>
                                </div>
                              </div>
                              <div className="chat-message-content-w">
                                <div className="chat-message-content">
                                  {item.customerContent}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="chat-message self">
                              <div className="chat-message-avatar">
                                <img alt="" src={require('@img/img/avatar1.jpg')} />
                                <div>
                                  <p>{item.username}</p>
                                  <span>{item.createdAt}</span>
                                </div>
                              </div>
                              <div className="chat-message-content-w">
                                <div className="chat-message-content">
                                  {item.customerContent}
                                </div>
                              </div>
                            </div>
                          )
                        }
                      </div>
                    );
                  })
                }
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
            <Administrators array={array} />
          </div>
        </div>
      </div>
    );
  }
}

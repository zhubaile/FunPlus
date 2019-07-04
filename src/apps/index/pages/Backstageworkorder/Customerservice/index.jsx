import React, { Component } from 'react';
import { Tab,Button,Input } from '@alifd/next';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Administrators from '../../Personal/components/Administrators/Administrators';
import '../../../layouts/BasicLayout/components/Header/index.scss';
import '../components/index.css';
import { Message } from "@alifd/next/lib/index";

const listss = [];
export default class Customerservice extends Component {
  static displayName = 'Setting';

  constructor(props) {
    super(props);
    this.state = {
      Probleminput: '', // 输入框内容
      messagelist: [],
      array: [],
    };
    this.onScrollHandle = this.onScrollHandle.bind(this);
  }
  // 输入框事件
  probleminput(v,e) {
    this.setState({
      Probleminput: v,
    });
  }
  onprobleminputKey = (e) => {
    if (e.keyCode == 13) {
      this.subreply();
    }
  }
  // 提交
  subreply() {
    const contents = this.state.Probleminput; // 输入框的值
    // const _id = this.state.workDetail[0]._id;
    // const byReplyId = this.state.workDetail[0].userId;
    if (!contents) {
      return Message.success('输入问题不能为空');
    }
    listss.push(contents);
    console.log(listss);
    debugger;
    this.setState({
      messagelist: listss,
      Probleminput: '',
    },()=>{
      this.onScrollHandle(this.messagesEnd);
      // this.messagesEnd.addEventListener('scroll', this.onScrollHandle.bind(this));
    });
    /* workOrdercustomerWork({
      byReplyId,
      customerContent: contents,
      _id,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        this.setState({
          workDetail: data.data,
          Probleminput: '',
        });
      } else {
        Message.success(data.message);
      }
    }); */
  }
  onScrollHandle(event) {
    const clientHeight = event.clientHeight;
    const scrollHeight = event.scrollHeight;
    const scrollTop = (scrollHeight - clientHeight);
    this.messagesEnd.scrollTop = scrollTop;
    console.log(scrollTop);
    // const isBottom = (clientHeight + scrollTop === scrollHeight);
  }
  /* componentDidMount() {
    if (this.messagesEnd) {
      debugger;
      // this.messagesEnd.scrollTop(this.messagesEnd.scrollHeight);
      // this.messagesEnd.scrollTop(this.messagesEnd.scrollHeight);
      this.messagesEnd.addEventListener('scroll', this.onScrollHandle.bind(this));
    }
  }
  componentWillUnmount(nextProps, nextState) {
    console.log(this.messagesEnd);
    debugger;
    if (this.messagesEnd) {
      debugger;
      this.messagesEnd.removeEventListener('scroll', this.onScrollHandle.bind(this));
    }
  } */
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
    return (
      <div className='backstageworkorder'>
        <Nav defaultActiveKey='1' />
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

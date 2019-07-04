import React, { Component } from 'react';
import { Tab,Button,Input } from '@alifd/next';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Administrators from '../../Personal/components/Administrators/Administrators';
import '../../../layouts/BasicLayout/components/Header/index.scss';
import '../components/index.css';


export default class Customerservice extends Component {
  static displayName = 'Setting';

  constructor(props) {
    super(props);
    this.state = {
      messagelist: [],
      array: [],
    };
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
            <div className="kefu-main-chatcontent">
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
                  rows='10'
                  ref={node => this.charmessageself = node}
                />
                {/* <input placeholder="Type your message here..." type="text" /> */}
              </div>
              <div className="chat-input-extra">
                <div className="chat-extra-actions">
                  <a href="#"><i className="os-icon os-icon-mail-07" /></a><a href="#"><i className="os-icon os-icon-phone-18" /></a><a href="#"><i className="os-icon os-icon-phone-15" /></a>
                </div>
                <div className="chat-btn">
                  <Button type='primary' size='large' >发送</Button>
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

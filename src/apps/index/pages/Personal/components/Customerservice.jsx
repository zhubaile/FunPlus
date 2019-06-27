import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import '../../../layouts/BasicLayout/components/Header/index.scss';
import '../../index.css';
/* import Onlineservice from './onlineservice'; */

const { Row, Col } = Grid;


export default class Customerservice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  Customerbtn() {
    const opens = this.state.open;
    this.setState({
      open: !opens,
    });
  }
  Customerfalse() {
    this.setState({
      open: false,
    });
  }

  render() {
    /*    if (!this.state.open) return null; */
    return (
      <div className='Customerservice'>
        <div className='floated-chat-btn'>
          <i className="os-icon os-icon-mail-07" /><a onClick={this.Customerbtn.bind(this)}>在线客服</a>
        </div>

        <div className={this.state.open == true ? 'onlineservice active' : 'onlineservice'}>
          <div className='floated-chat-i'>
            <div className='chat-close'>
              <i className='os-icon os-icon-close' onClick={this.Customerfalse.bind(this) } />
            </div>

            <div className='chat-head'>
              <div className="user-w with-status status-green">
                <div className="user-avatar-w">
                  <div className="user-avatar">
                    <img src={require('@img/img/avatar1.jpg')} alt="" />
                  </div>
                </div>
                <div className="user-name">
                  <h6 className="user-title">
                    John Mayers
                  </h6>
                  <div className="user-role">
                    Account Manager
                  </div>
                </div>
              </div>
            </div>

            <div className="chat-messages">
              <div className="message">
                <div className="message-content">
                  Hi, how can I help you?
                </div>
              </div>
              <div className="date-break">
                Mon 10:20am
              </div>
              <div className="message">
                <div className="message-content">
                  Hi, my name is Mike, I will be happy to assist you
                </div>
              </div>
              <div className="message self">
                <div className="message-content">
                  Hi, I tried ordering this product and it keeps showing me error code.
                </div>
              </div>
            </div>

            <div className='chat-controls'>
              <input className='message-input' placeholder='type your message here.....' type='text' />
              <div className='chat-extra'>
                <a href="#"><span className="extra-tooltip">Attach Document</span><i className="os-icon os-icon-documents-07" /></a>
                <a href="#"><span className="extra-tooltip">Insert Photo</span><i className="os-icon os-icon-others-29" /></a>
                <a href="#"><span className="extra-tooltip">Upload Video</span><i className="os-icon os-icon-ui-51" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

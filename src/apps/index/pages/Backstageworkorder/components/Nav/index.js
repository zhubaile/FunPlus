import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import { Link } from 'react-router-dom';
import '../../../../layouts/BasicLayout/components/Header/index.scss';
import '../index.css';

export default class Nav extends Component {
  static displayName = 'Nav';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const navtop1 = (
      <div className="tab-title">
        <Link to='/backstageworkorder/Customerservice'>
          <i className="os-icon os-icon-mail-14"></i>
          <div>客服</div>
        </Link>
      </div>
    );
    const navtop2 = (
      <div className="tab-title">
        <Link to='/backstageworkorder/Allworkorders'>
          <i className="os-icon os-icon-mail-14"></i>
          <div>工单</div>
        </Link>
      </div>
    );
    return (
      <div className='leftnav'>
        <Tab navClassName='leftnav-navtop' defaultActiveKey={this.props.defaultActiveKey}>
          <Tab.Item title={navtop1} key="1" contentClassName='navtop1'>
           <div className='navtop1-box'>
             <div className='chat-search'>
               <div className='element-search'>
                 <input placeholder="Search users by name..." type="text" />
               </div>
             </div>
             <div className='user-list'>
               <div className="user-w">
                 <div className="avatar with-status status-green">
                   <img alt="" src={require('../../../../../../assets/img/img/avatar1.jpg')} />
                 </div>
                 <div className="user-info">
                   <div className="user-date">
                     12 min
                   </div>
                   <div className="user-name">
                     哇哩哇哩哇
                   </div>
                   <div className="last-message">
                     有什么问题么...
                   </div>
                 </div>
               </div>
             </div>
           </div>
          </Tab.Item>

          <Tab.Item title={navtop2} key="2" contentClassName='navtop2'>
            <div className='navtop1-box'>
              <div className='chat-search'>
                <div className='element-search'>
                  <input placeholder="Search users by name..." type="text" />
                </div>
              </div>
              <div>
                <div>
                  <Link to='/backstageworkorder/Allworkorders'>
                    <i className="os-icon os-icon-mail-14"></i>
                    <span>我的工单</span>
                  </Link>
                </div>
                <div>
                  <Link to='/backstageworkorder/Submissionworkorder'>
                    <i className="os-icon os-icon-mail-14"></i>
                    <span>提交工单</span>
                  </Link>
                </div>
              </div>
            </div>
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}

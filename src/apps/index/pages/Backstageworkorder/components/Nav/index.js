import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import { Link } from 'react-router-dom';
import { workOrdersessionList,workOrderserviceList } from '@indexApi';
import '../../../../layouts/BasicLayout/components/Header/index.scss';
import moment from 'moment';
import '../index.css';
import { Message } from "@alifd/next/lib/index";

export default class Nav extends Component {
  static displayName = 'Nav';

  constructor(props) {
    super(props);
    this.state = {
      workOrdersessionLists: [], // 会话列表的内容
      workOrderserviceLists: [], // 列表内容
      stylecolor: true,
    };
  }
  componentDidMount() {
    this.fetchData();
    /* 联系人的列表 */
    workOrderserviceList().then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        this.setState({
          workOrderserviceLists: data.data,
        });
      } else {
        Message.success(data.message);
      }
    });
  }
  // 会话的列表
  fetchData = () => {
    workOrdersessionList({
      senderType: 1,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        this.setState({
          workOrdersessionLists: data.data,
          // stylecolor: false,
        });
      } else {
        Message.success(data.message);
      }
    });
  };
  // 会话按钮
  Conversation() {
    this.setState({
      stylecolor: true,
    });
    this.fetchData();
  }
  // 列表按钮
  listbtn() {
    this.setState({
      stylecolor: false,
    });
  }
  btnkf() {
    this.props.history.push('/admin/backstageworkorder/Customerservice');
  }
  btngd() {
    this.props.history.push('/admin/backstageworkorder/Allworkorders');
  }
  // 点击列表某个人获取到id传到聊天界面
  jiekou(e) {
    debugger;
    this.props.customerserviceid(e);
  }
  render() {
    const navtop1 = (
      <div className="tab-title">
        <i className="os-icon os-icon-mail-14" />
        <div>客服</div>
        {/* <Link to='/admin/backstageworkorder/Customerservice'>
          <i className="os-icon os-icon-mail-14" />
          <div>客服</div>
        </Link> */}
      </div>
    );
    const navtop2 = (
      <div className="tab-title">
        <i className="os-icon os-icon-mail-14" />
        <div>工单</div>
        {/* <Link to='/admin/backstageworkorder/Allworkorders'>
          <i className="os-icon os-icon-mail-14" />
          <div>工单</div>
        </Link> */}
      </div>
    );
    const { stylecolor,workOrdersessionLists,workOrderserviceLists } = this.state;
    return (
      <div className='leftnav'>
        <Tab navClassName='leftnav-navtop' defaultActiveKey={this.props.defaultActiveKey}>
          <Tab.Item title={navtop1} key="1" contentClassName='navtop1' onClick={this.btnkf.bind(this)}>
            <div className='navtop1-box'>
              <div className='chat-list'>
                <div className={stylecolor == true ? 'chat-list-box color' : 'chat-list-box'} onClick={this.Conversation.bind(this)}>
                  <i className="os-icon os-icon-mail-14" />
                  <span>会话</span>
                </div>
                <div className={stylecolor == false ? 'chat-list-box color' : 'chat-list-box'} onClick={this.listbtn.bind(this)}>
                  <i className="os-icon os-icon-mail-14" />
                  <span>列表</span>
                </div>
                {/* <div className='element-search'> */}
                {/* <input placeholder="Search users by name..." type="text" /> */}
                {/* </div> */}
              </div>
              <div className='user-list'>
                {
                  stylecolor == true ? (
                      workOrdersessionLists.map((item)=>{
                      return (
                        <div className='user-w' onClick={this.jiekou.bind(this,item.sendId)}>
                          <div className="avatar with-status status-green">
                            <img alt="" src={require('@img/img/avatar2.jpg')} />
                          </div>
                          <div className="user-info">
                            <div className="user-date">
                              {moment(item.sendTime).format('YYYY-MM-DD HH:mm:ss')}
                            </div>
                            <div className="user-name">
                              {item.senderName}
                              <span className={item.no_readed_num == 0 ? 'noreadednum no' : 'noreadednum'}>{item.no_readed_num}</span>
                            </div>
                            <div className="last-message">
                              {item.last_message}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    workOrderserviceLists.map((item)=>{
                      return (
                        <div className='user-w' onClick={this.jiekou.bind(this,item._id)}>
                          <div className="avatar with-status status-green">
                            <img alt="" src={require('@img/img/avatar2.jpg')} />
                          </div>
                          <div className="user-info">
                            <div className="user-name">
                              {item.username}
                            </div>
                            <div className="last-message">
                              {item.customerContent}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )
                }
              </div>
            </div>
          </Tab.Item>

          <Tab.Item title={navtop2} key="2" contentClassName='navtop2' onClick={this.btngd.bind(this)}>
            <div className='navtop1-box'>
              <div className='chat-search'>
                <div className='element-search'>
                  <input placeholder="Search users by name..." type="text" />
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <div>
                  <Link to='/admin/backstageworkorder/Allworkorders'>
                    <div className='sidebar-navone'>
                      <i className="os-icon os-icon-mail-14" />
                      <span>我的工单</span>
                    </div>
                  </Link>
                </div>

                <div>
                  <Link to='/admin/backstageworkorder/Submissionworkorder'>
                    <div className='sidebar-navtwo'>
                      <i className="os-icon os-icon-mail-14" />
                      <span>提交工单</span>
                    </div>
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

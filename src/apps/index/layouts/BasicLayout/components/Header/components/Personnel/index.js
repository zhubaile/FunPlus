
/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';


@injectIntl
@withRouter
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover2: false,
    };
  }
  hover2onMouseEnter() {
    this.setState({
      hover2: true,
    });
  }
  hover2onMouseleave() {
    this.setState({
      hover2: false,
    });
  }

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    console.log(this.props);

    return (
      <div
        className={this.state.hover2 ? "top-icon top-settings os-dropdown-trigger os-dropdown-position-left over" : "top-icon top-settings os-dropdown-trigger os-dropdown-position-left"}
        onMouseEnter={this.hover2onMouseEnter.bind(this)}
        onMouseLeave={this.hover2onMouseleave.bind(this)}
      >
        <i className="os-icon os-icon-ui-93" />
        <div className="os-dropdown">
          <div className="icon-w">
            <i className="os-icon os-icon-ui-46" />
          </div>
        </div>
        <div className="os-dropdown light message-list">
          <ul>
            <li>
              <Link to='/admin/backstageworkorder/Allworkorders'>
                <div className="user-avatar-w">
                  <img alt="" src={require('../../../../../../../../assets/img/img/avatar1.jpg')} />
                </div>
                <div className="message-content">
                  <h6 className="message-from">
                      工单系统
                  </h6>
                  <h6 className="message-title">
                      工单实时反馈
                  </h6>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/admin/backstageworkorder/Customerservice'>
                <div className="user-avatar-w">
                  <img alt="" src={require('../../../../../../../../assets/img/img/avatar2.jpg')} />
                </div>
                <div className="message-content">
                  <h6 className="message-from">
                    在线客服
                  </h6>
                  <h6 className="message-title">
                    企业套餐想有此项服务哦
                  </h6>
                </div>
              </Link>
            </li>
            <li>
              <a href="#">
                <div className="user-avatar-w">
                  <img alt="" src={require('../../../../../../../../assets/img/img/avatar3.jpg')} />
                </div>
                <div className="message-content">
                  <h6 className="message-from">
                      技术对接文档
                  </h6>
                  <h6 className="message-title">
                      Vacation Rentals
                  </h6>
                </div>
              </a>
            </li>
            <li>
              <Link to='/admin/personal/helpcenteraddition'>
                <div className="user-avatar-w">
                  <img alt="" src={require('../../../../../../../../assets/img/img/avatar4.jpg')} />
                </div>
                <div className="message-content">
                  <h6 className="message-from">
                    运营帮助中心
                  </h6>
                  <h6 className="message-title">
                    使用帮助，常规问题解答
                  </h6>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

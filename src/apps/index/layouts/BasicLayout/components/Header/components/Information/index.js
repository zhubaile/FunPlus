/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';

@injectIntl
@withRouter
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover1: false,
    };
  }
  hover1onMouseEnter() {
    this.setState({
      hover1: true,
    });
  }
  hover1onMouseleave() {
    this.setState({
      hover1: false,
    });
  }
  acinformion() {
    this.props.history.push('/personal/accesstoinformationaddition');
  }
  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    console.log(this.props);

    return (
      <div className={this.state.hover1 ? "messages-notifications os-dropdown-trigger over" : "messages-notifications os-dropdown-trigger"}
        onMouseEnter={this.hover1onMouseEnter.bind(this)}
        onMouseLeave={this.hover1onMouseleave.bind(this)}
      >
        <i className="os-icon os-icon-others-43" />
        <div className="new-messages-count">
            12
        </div>
        <div className="os-dropdown light message-list">
          <ul>
            <li>
              <a href="#">
                <div className="message-content">
                  <h6 className="message-from">
                      公告内容：支付宝渠道紧急通知
                  </h6>
                  <h6 className="message-title">
                      2018-06-08 20:23:32
                  </h6>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="message-content">
                  <h6 className="message-from">
                      公告内容：微信渠道紧急通知
                  </h6>
                  <h6 className="message-title">
                      2018-06-08 20:23:32
                  </h6>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="message-content">
                  <h6 className="message-from">
                      公告内容：银联渠道紧急通知
                  </h6>
                  <h6 className="message-title">
                      2018-06-08 20:23:32
                  </h6>
                </div>
              </a>
            </li>
            <li>
              <button className="btn-primary" type="button" style={{ width: '100%' }} onClick={this.acinformion.bind(this)}>查阅更多</button>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}


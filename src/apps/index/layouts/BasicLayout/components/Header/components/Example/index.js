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
      open: false,
    };
  }
  openactive() {
    if (this.state.open == false) {
      this.setState({
        open: true,
      });
    } else {
      this.setState({
        open: false,
      });
    }
  }
  render() {
    const {
      intl: { formatMessage },
    } = this.props;
    console.log(this.props);

    return (
        <div className={this.state.open ? "fancy-selector-w opened" : "fancy-selector-w"} >
          <div className="fancy-selector-current">
            <div className="fs-img">
              <img alt="" src={require('@img/img/card1.png')} />
            </div>
            <div className="fs-main-info">
              <div className="fs-name">
                示例应用展示
              </div>
              <div className="fs-sub">
                <span>状态:</span><strong>交易正常</strong>
              </div>
            </div>
            <div className="fs-extra-info">
              <strong>¥5476</strong><span>45笔</span>
            </div>
            <div className="fs-selector-trigger" onClick={this.openactive.bind(this)}>
              <i className="os-icon os-icon-arrow-down4" />
            </div>
          </div>
          <div className="fancy-selector-options">
            <div className="fancy-selector-option">
              <div className="fs-img">
                <img alt="" src={require('@img/img/card2.png')} />
              </div>
              <div className="fs-main-info">
                <div className="fs-name">
                  测试应用2
                </div>
                <div className="fs-sub">
                  <span>状态:</span><strong>交易正常</strong>
                </div>
              </div>
              <div className="fs-extra-info">
                <strong>¥5476</strong><span>45笔</span>
              </div>
            </div>
            <div className="fancy-selector-option active">
              <div className="fs-img">
                <img alt="" src={require('@img/img/card1.png')} />
              </div>
              <div className="fs-main-info">
                <div className="fs-name">
                  展示类应用2
                </div>
                <div className="fs-sub">
                  <span>状态:</span><strong>交易正常</strong>
                </div>
              </div>
              <div className="fs-extra-info">
                <strong>¥5476</strong><span>45笔</span>
              </div>
            </div>
            <div className="fancy-selector-option">
              <div className="fs-img">
                <img alt="" src={require('@img/img/card3.png')} />
              </div>
              <div className="fs-main-info">
                <div className="fs-name">
                  测试应用5 app
                </div>
                <div className="fs-sub">
                  <span>状态:</span><strong>交易正常</strong>
                </div>
              </div>
              <div className="fs-extra-info">
                <strong>¥5476</strong><span>45笔</span>
              </div>
            </div>
            <div className="fancy-selector-actions text-right">
              <a className="btn btn-primary" href="#"><i className="os-icon os-icon-ui-22" /><span>添加应用</span></a>
            </div>
          </div>
        </div>

    );
  }
}

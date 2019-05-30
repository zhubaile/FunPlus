import React, { Component } from 'react';
import cx from 'classnames';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Nav } from '@alifd/next';
import { FormattedMessage } from 'react-intl';

import { asideMenuConfig } from '../../../../menuConfig';
import '../Header/index.scss'; // icon 样式
import './index.scss';

const { Item, SubNav } = Nav;
@withRouter
export default class Aside extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      location: { pathname },
      isMobile,
    } = this.props;

    const { openDrawer, collapse } = this.state;

    return (
      <div className="menu-w selected-menu-color-light menu-activated-on-hover menu-has-selected-link color-scheme-light color-style-transparent sub-menu-color-bright menu-position-side menu-side-left menu-layout-full sub-menu-style-over">
        {/* <Nav style={{ height: 400, width: 240 }} mode="popup" popupAlign='follow' defaultOpenKeys={['sub-nav-2']} triggerType='hover'>
          <span>交易</span>
          <Item><i className="os-icon os-icon-layout" />收入</Item>
          <SubNav key="sub-nav-2" label="支出" icon=''>
            <i className="os-icon os-icon-layout" />
            <Item key="1">
              <i className="os-icon os-icon-layout"></i>
              企业付款
            </Item>
            <Item key="2">订单退款</Item>
            <Item key="3">出款审核</Item>
          </SubNav>
          <SubNav key="sub-nav-3" label="对账">
            <Item key="1">财务汇总</Item>
            <Item key="2">渠道对账功能</Item>
            <Item key="3">差错交易</Item>
            <Item key="3">交易报表</Item>
          </SubNav>
        </Nav> */}
        <ul className="main-menu">
          <li className="sub-header">
            <span>交易</span>
          </li>
          <li className="selected has-sub-menu">
            <Link to='/income'>
              <div className="icon-w">
                <div className="os-icon os-icon-coins-4" />
              </div>
              <span>收入</span>
            </Link>
          </li>
          <li className="selected has-sub-menu">
            <a href="#">
              <div className="icon-w">
                <div className="os-icon os-icon-wallet-loaded" />
              </div>
              <span>支出</span>
            </a>
            <div className="sub-menu-w">
              {/* <div className="sub-menu-header">
                支出
              </div> */}
              {/* <div className="sub-menu-icon">
                <i className="os-icon os-icon-layout" />
              </div> */}
              <div className="sub-menu-i">
                <ul className="sub-menu">
                  <li>
                    <Link to='/expenditure/orderrefund'>
                      订单退款
                    </Link>
                  </li>
                  <li>
                    <Link to='/expenditure/batchrefund'>
                      批量退款
                    </Link>
                  </li>
                  <li>
                    <Link to='/expenditure/enterprisepaymentapi'>
                      企业付款api
                    </Link>
                  </li>
                  <li>
                    <Link to='/expenditure/businessPaymentBatch'>
                      企业付款批量
                    </Link>
                  </li>
                  <li>
                    <Link to='/expenditure/auditofpayment'>
                      出款审核
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="selected has-sub-menu">
            <a href="#">
              <div className="icon-w">
                <div className="os-icon os-icon-ui-55" />
              </div>
              <span>对账</span>
            </a>
            <div className="sub-menu-w">
              <div className="sub-menu-i">
                <ul className="sub-menu">
                  <li>
                    <Link to='/reconciliation/selfsummarization'>
                      财务汇总
                    </Link>
                  </li>
                  <li>
                    <Link to='/reconciliation/channelreconciliation'>
                      渠道对账功能
                    </Link>
                  </li>
                  <li>
                    <Link to='/reconciliation/errorTrading'>
                      差错交易
                    </Link>
                  </li>
                  <li>
                    <Link to='/reconciliation/daysummary'>
                      当日汇总
                    </Link>
                  </li>
                  <li>
                    <Link to='/reconciliation/transactionreport'>
                      交易报表
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="sub-header">
            <span>应用</span>
          </li>
          <li className="selected has-sub-menu">
            <a href="#">
              <div className="icon-w">
                <div className="os-icon os-icon-layout" />
              </div>
              <span>应用设置</span>
            </a>
            <div className="sub-menu-w">
              <div className="sub-menu-i">
                <ul className="sub-menu">
                  <li>
                    <Link to='/applicationsettings/applicationparameters'>应用参数</Link>
                  </li>
                  <li>
                    <Link to='/applicationsettings/paymentchannel'>支付渠道<strong className="badge badge-danger">Hot</strong></Link>
                  </li>
                  <li>
                    <Link to='/applicationsettings/routingrules'>路由规则</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="selected has-sub-menu">
            <Link to='/devicemanagement/devicemanagement'>
              <div className="icon-w">
                <div className="os-icon os-icon-layout" />
              </div>
              <span>设备管理</span>
            </Link>
            <div className="sub-menu-w">
              {/* <div className="sub-menu-header">
                设备管理
              </div> */}
              {/* <div className="sub-menu-icon">
                <i className="os-icon os-icon-layout" />
              </div> */}
              <div className="sub-menu-i">
                <ul className="sub-menu">
                  <li>
                    <a href="#">设备列表</a>
                  </li>
                  <li>
                    <a href="#">设备分组</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="selected has-sub-menu">
            <a href="#">
              <div className="icon-w">
                <div className="os-icon os-icon-fingerprint" />
              </div>
              <span>权限管理</span>
            </a>
            <div className="sub-menu-w">
              {/* <div className="sub-menu-header">
                权限管理
              </div> */}
              {/* <div className="sub-menu-icon">
                <i className="os-icon os-icon-layout" />
              </div> */}
              <div className="sub-menu-i">
                <ul className="sub-menu">
                  <li>
                    <Link to='/privilegemanagement/applicationmember'>
                      应用成员
                    </Link>
                  </li>
                  <li>
                    <a href="#">高级权限开关</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="selected has-sub-menu">
            <a href="#">
              <div className="icon-w">
                <div className="os-icon os-icon-delivery-box-2" />
              </div>
              <span>辅助工具</span>
            </a>
            <div className="sub-menu-w">
              {/* <div className="sub-menu-header">
                辅助工具
              </div> */}
              {/* <div className="sub-menu-icon">
                <i className="os-icon os-icon-layout" />
              </div> */}
              <div className="sub-menu-i">
                <ul className="sub-menu">
                  <li>
                    <Link to='/auxiliarytools/webhooksr'>
                    Webhooksr
                    </Link>
                  </li>
                  <li>
                    <Link to='/auxiliarytools/serversidecharge'>
                      服务端Charge
                    </Link>
                  </li>
                  <li>
                    <Link to='/auxiliarytools/payexperience'>
                      体验支付
                    </Link>
                  </li>
                  <li>
                    <Link to='/auxiliarytools/requestlog'>
                      请求log查看
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="sub-header">
            <span>接口版本：0.12  <br /> 后台版本：0.11 beta <br /> 对接模式：平台发起|直连|间连</span>
          </li>
        </ul>
        <div className="side-menu-magic">
          <h4>
            3FunPlus企业版
          </h4>
          <p>
            高性能支持
          </p>
          <div className="btn-w">
            <a className="btn btn-white btn-rounded" href="" target="_blank">立刻升级</a>
          </div>
        </div>
      </div>
    );
  }
}

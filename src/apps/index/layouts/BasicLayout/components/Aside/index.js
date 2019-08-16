import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Nav, Icon } from '@alifd/next';
import StyledMenu, {
  Item as MenuItem,
  SubMenu,
  ItemGroup as MenuItemGroup,
} from '@icedesign/styled-menu';

import { FormattedMessage } from 'react-intl';

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
      current: '1',
      openKeys: [],
    };
  }
  // 点击时间
  handleClick = (e) => {
    this.setState({ current: e.key });
  };
  // 展开和关闭的回调
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(
      key => !(state.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = state.openKeys.find(
      key => !(openKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    // 替换展开菜单 concat用于将两个数组链接
    if (latestOpenKey) {
      // nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
      nextOpenKeys = nextOpenKeys.concat(latestOpenKey);
    }
    // 关闭
    if (latestCloseKey) {
      // nextOpenKeys = this.getAncestorKeys(latestCloseKey);
      nextOpenKeys = [];
    }
    this.setState({ openKeys: nextOpenKeys });
  };
  // 原本的方法，觉得没用就舍弃了
  // getAncestorKeys = (key) => {
  //   const map = {
  //     // sub: ['sub2'],
  //     sub: [key],
  //   };
  //   debugger;
  //   return map[key] || [];
  // };
  render() {
    const {
      location: { pathname },
      isMobile,
    } = this.props;

    const { openDrawer, collapse } = this.state;

    return (
      <div className='headaside'>
        <StyledMenu
          mode='inline'
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{ width: 240 }}
          onOpenChange={this.onOpenChange}
          onClick={this.handleClick}
        >
          {/*  <li className="sub-header">
            <span>交易</span>
          </li> */}
          <MenuItem style={{ fontSize: '14px', borderBottom: 'none',textTransform: 'uppercase',color: '#448eef',letterSpacing: '1px',paddingTop: '10px' }}><span style={{ marginLeft: '-20px' }}>交易</span></MenuItem>
          <SubMenu
            className='cancel'
            key="sub1"
            title={
              <span>
                {/* <Icon type="filter" /> */}
                <Link to='/admin/income'>
                  <i className="os-icon os-icon-coins-4" />
                  <span>收入</span>
                </Link>
              </span>
            }
          />
          <SubMenu
            key="sub2"
            title={
              <span>
                {/* <Icon type="filter" /> */}
                <i className="os-icon os-icon-wallet-loaded" />
                <span>支出</span>
              </span>
                }
          >
            <MenuItem key="1"><Link to='/admin/expenditure/orderrefund'>订单退款</Link></MenuItem>
            <MenuItem key="2"><Link to='/admin/expenditure/batchrefund'>批量退款</Link></MenuItem>
            <MenuItem key="3"><Link to='/admin/expenditure/enterprisepaymentapi'>企业付款api</Link></MenuItem>
            <MenuItem key="4"><Link to='/admin/expenditure/businessPaymentBatch'>企业付款批量</Link></MenuItem>
            <MenuItem key="5"><Link to='/admin/expenditure/auditofpayment'>出款审核</Link></MenuItem>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <i className="os-icon os-icon-ui-55" />
                <span>对账</span>
              </span>
                }
          >
            <MenuItem key="6"> <Link to='/admin/reconciliation/selfsummarization'>财务汇总</Link></MenuItem>
            <MenuItem key="7"> <Link to='/admin/reconciliation/channelreconciliation'>渠道对账功能</Link></MenuItem>
            {/* <MenuItem key="8"><Link to='/admin/reconciliation/errorTrading'>差错交易</Link></MenuItem>
            <MenuItem key="9"><Link to='/admin/reconciliation/daysummary'>当日汇总</Link></MenuItem> */}
            <MenuItem key="10"> <Link to='/admin/reconciliation/transactionreport'>交易报表</Link></MenuItem>
          </SubMenu>
          {/* <li className="sub-header">
            <span>应用</span>
          </li> */}
          <MenuItem style={{ fontSize: '14px', borderBottom: 'none',textTransform: 'uppercase',color: '#448eef',letterSpacing: '1px',paddingTop: '10px' }}><span style={{ marginLeft: '-20px' }}>应用</span></MenuItem>
          <SubMenu
            key="sub4"
            title={
              <span>
                <i className="os-icon os-icon-layout" />
                <span>应用设置</span>
              </span>
            }
          >
            <MenuItem key="11">  <Link to='/admin/applicationsettings/applicationparameters'>应用参数</Link></MenuItem>
            <MenuItem key="12">   <Link to='/admin/applicationsettings/paymentchannel'>支付渠道<strong className="badge badge-danger">Hot</strong></Link></MenuItem>
            <MenuItem key="13"> <Link to='/admin/applicationsettings/routingrules'>路由规则</Link></MenuItem>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Link to='/admin/devicemanagement/devicemanagement'>
                  <i className="os-icon os-icon-link-3" />
                  <span>设备管理</span>
                </Link>
              </span>
            }
          >
            {/* <MenuItem key="16">  <Link to='/admin/privilegemanagement/applicationmember'>应用成员</Link></MenuItem>
            <MenuItem key="17">  <Link to='/admin/privilegemanagement/realtimedataincome'>高级权限开关</Link></MenuItem> */}
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                <i className="os-icon os-icon-fingerprint" />
                <span>权限管理</span>
              </span>
            }
          >
            {/* <MenuItem key="16">  <Link to='/admin/privilegemanagement/applicationmember'>应用成员</Link></MenuItem>
            <MenuItem key="17">  <Link to='/admin/privilegemanagement/realtimedataincome'>高级权限开关</Link></MenuItem> */}
          </SubMenu>
          <SubMenu
            key="sub7"
            title={
              <span>
                <i className="os-icon os-icon-delivery-box-2" />
                <span>辅助工具</span>
              </span>
            }
          >
            {/* <MenuItem key="18">  <Link to='/admin/auxiliarytools/webhooksr'>Webhooksr</Link></MenuItem>
            <MenuItem key="19">  <Link to='/admin/auxiliarytools/serversidecharge'>服务端Charge</Link></MenuItem>
            <MenuItem key="20">  <Link to='/admin/auxiliarytools/payexperience'>体验支付</Link></MenuItem>
            <MenuItem key="21"> <Link to='/admin/auxiliarytools/requestlog'>请求log查看</Link></MenuItem> */}
          </SubMenu>
        </StyledMenu>
        <li className="sub-header">
          <span><p>a接口版本：0.12</p><p>后台版本：0.11 beta</p><p>对接模式：平台发起|直连|间连</p> </span>
        </li>
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

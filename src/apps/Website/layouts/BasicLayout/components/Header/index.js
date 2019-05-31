import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Icon, Nav } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import IceImg from '@icedesign/img';
import { headerMenuConfig } from '../../../../menuConfig';
import Logo from '../Logo';
import './index.scss';
import Aside from '../Aside';
import SelectLang from '../../../../../Internationalization/SelectLang';
import { FormattedMessage, injectIntl } from 'react-intl';

@injectIntl
@withRouter
export default class Header extends Component {
  zzzzz() {
    this.props.history.push('/user/login');
  }

  render() {
    const { location = {} } = this.props;
    const { pathname } = location;
    return (
      <div className="header-container">
        <div className="header-nav" id='linktop'>
          <Aside />
        </div>
        <div className="header-navbar">
          {/* <Nav
            className="header-navbar-menu"
            selectedKeys={[pathname]}
            defaultSelectedKeys={[pathname]}
            direction="hoz"
          >
            {headerMenuConfig &&
              headerMenuConfig.length > 0 &&
              headerMenuConfig.map((nav, index) => {
                if (nav.children && nav.children.length > 0) {
                  return (
                    <Nav.SubNav
                      key={index}
                      label={
                        <span>
                          { nav.icon ? (
                            <FoundationSymbol
                              style={{ marginRight: '8px' }}
                              size="small"
                              type={nav.icon}
                            />
                        ) : null}
                          <span className="ice-menu-collapse-hide">
                            { nav.name}
                          </span>
                        </span>
                      }
                    >
                      {nav.children.map((item) => {
                        const linkProps = {};
                        if (item.newWindow) {
                          linkProps.href = item.path;
                          linkProps.target = '_blank';
                        } else if (item.external) {
                          linkProps.href = item.path;
                        } else {
                          linkProps.to = item.path;
                        }
                        return (
                          <Nav.Item key={item.path}>
                            <Link {...linkProps}>{item.name}</Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav.SubNav>
                  );
                }
                const linkProps = {};
                if (nav.external) {
                  if (nav.newWindow) {
                    linkProps.target = '_blank';
                  }
                  linkProps.href = nav.path;
                  return (
                    <Nav.Item key={nav.path}>
                      <a {...linkProps}>
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol
                              style={{ marginRight: '8px' }}
                              size="small"
                              type={nav.icon}
                            />
                          ) : null}
                          {nav.name}
                        </span>
                      </a>
                    </Nav.Item>
                  );
                }
                linkProps.to = nav.path;
                return (
                  <Nav.Item key={nav.path}>
                    <Link {...linkProps}>
                      <span style={{ display: 'block' }}>
                        {nav.icon ? (
                          <FoundationSymbol
                            style={{ marginRight: '8px' }}
                            size="small"
                            type={nav.icon}
                          />
                        ) : null}
                        {nav.name}
                      </span>
                    </Link>
                  </Nav.Item>
                );
              })}
          </Nav> */}
          <div className="ice-design-header-userpannel">
            <ul>
              <li className="user-profile-menu-item">
                {/* <Link to='/user/login'>
                  登录
                </Link> */}
                {/* <Link to='/user/login' style={{ color: '#666' }}>
                  <FormattedMessage id="app.login.sign.in" />
                </Link> */}
                <a href="login.html" style={{ color: '#666' }}>
                  {/* <FoundationSymbol type="person" size="small" /> */}
                  <FormattedMessage id="app.login.sign.in" />
                </a>
                <Link to='/user/login'>
                  222
                </Link>
                <a href="javascript:;" onClick={this.zzzzz.bind(this)}>111111</a>
              </li>
            </ul>
          </div>
          <SelectLang />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.scss';
import Aside from '../Aside';
import SelectLang from '../../../../../../assets/Internationalization/SelectLang';
import { FormattedMessage, injectIntl } from 'react-intl';

@injectIntl
@withRouter
export default class Header extends Component {
  signin() {
    window.location.href = '/user/login';
    // this.props.history.push('/user/login');
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
          <div className="ice-design-header-userpannel">
            <ul>
              <li className="user-profile-menu-item">
                <a style={{ color: '#666' }} onClick={this.signin.bind(this)}>
                  {/* <FoundationSymbol type="person" size="small" /> */}
                  <FormattedMessage id="app.login.sign.in" />
                </a>
              </li>
            </ul>
          </div>
          <SelectLang />
        </div>
      </div>
    );
  }
}

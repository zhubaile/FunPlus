import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import { Button, Icon, Nav, Tab, Input } from '@alifd/next';
import { FormBinderWrapper, FormBinder, FormError } from '@icedesign/form-binder';
import HelpcenterHeader from '../components/HelpcenterHeader';
import '../../index.css';
@injectIntl
export default class Contactus extends Component {
  constructor(props) {
    super(props);
    const {
      intl: { formatMessage },
    } = this.props;
    const headerh1 = formatMessage({ id: 'app.website.helpcontactus.header.h1' }) ,
      headerp = formatMessage({ id: 'app.website.helpcontactus.header.p' });
    this.state = {
      HHcontent: headerh1,
      HPcontent: headerp,
      value: {
        name: '',
        phone: '',
        email: '',
        company: '',
        address: '',
        province: '',
        description: '',
      },
    };
  }
  /*  componentDidMount() {

    // setTimeout(() => {
    //   window.scrollTo(0,0);
    // },2);
    // window.scrollTo(0,0);
  } */

  /*  componentDidMount() {
    this.props.history.listen(() => {
      // 当路由切换时
      window.scrollTo(0, 0);
    });
  } */

    formChange = (value) => {
      this.setState({ value });
    };

    sendbtn() {
      this.setState();
    }

    render() {
      const {
        intl: { formatMessage },
      } = this.props;
      return (
        <div className='contactus'>
          <HelpcenterHeader HHcontent={this.state.HHcontent} HPcontent={this.state.HPcontent} />
          {/* 导航下面的展示内容 */}
          <form onChange={ this.formchange }>
            <div className="contactus_main">
              <div className="contactus_main_left">
                <div>
                  <label><FormattedMessage id='app.website.helpcontactus.name.label' /></label>
                  <input name="name" />
                </div>

                <div>
                  <label><FormattedMessage id='app.website.helpcontactus.email.label' /></label>
                  <input type="email" name="email" />
                </div>

                <div>
                  <label><FormattedMessage id='app.website.helpcontactus.address.label' /></label>
                  <input name="address" />
                </div>
              </div>

              <div className="contactus_main_right">
                <div>
                  <label><FormattedMessage id='app.website.helpcontactus.tel.label' /></label>
                  <input type="tel" name="phone" />
                </div>

                <div>
                  <label><FormattedMessage id='app.website.helpcontactus.company.label' /></label>
                  <input name="company" />
                </div>

                <div>
                  <label><FormattedMessage id='app.website.helpcontactus.province.label' /></label>
                  <input name="province" />
                </div>

              </div>
              <div className="contactus_content">
                <label><FormattedMessage id='app.website.helpcontactus.description.label' /></label>
                <textarea name="description" placeholder="" />
              </div>
              <div className="btn_style">
                <button onClick={this.sendbtn.bind(this)} className="btn_send"><FormattedMessage id='app.website.helpcontactus.send.button' /></button>
              </div>
            </div>


          </form>


        </div>
      );
    }
}

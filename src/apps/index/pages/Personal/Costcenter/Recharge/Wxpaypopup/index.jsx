/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio, Select , Button, Grid, Form, DatePicker,Table,Pagination } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../../index.css';

const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

export default class Wxpaypopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: null,
    };
  }
  close() {
    this.setState({
      open: false,
      content: null,
    });
    this.callback = null;
  }
  open(content,confirm) {
    debugger;
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className="wxpaypopup">
        <div className='wxpaypopup-top'>
         微信扫码支付
          <a href="javascript:;" onClick={this.close.bind(this)}>×</a>
        </div>
        <div>
          <p>实付金额 <strong>{this.state.content}</strong></p>
          <p>请在五分钟之内完成支付</p>
        </div>
      </div>
    );
  }
}

/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio, Select , Button, Grid, Form, DatePicker,Table,Pagination } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';

const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

export default class Zfbpaypopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: null,
      payvalue: '',
    };
  }
  close() {
    this.setState({
      open: false,
      content: null,
    });
  }
  open(content,confirm) {
    debugger;
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }

  onNestChange(value) {
    debugger;
    this.setState({
      payvalue: value,
    });
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className="zfbpaypopup">
        <div className='zfbpaypopup-top'>
          支付确认
        </div>
        <div>
          <p>请在打开新的界面之前完成支付<strong>支付完成前，请不要关闭此窗口</strong></p>
          <Button>已完成支付</Button><Button>更换支付方式</Button>
          <p>支付遇到问题，请联系3FunPlus客服获得帮助</p>
        </div>
      </div>
    );
  }
}

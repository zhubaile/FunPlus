/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio , Button, Grid, Form, Select } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import Demopay from '../../../../../Website/pages/Demo/Demopay';
import '../../../index.css';

const Option = Select.Option;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

export default class Addmenber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        xingming: '',
        youxiang: '',
        phone: '',
        pass: '',
        password: '',
        beizhu: '',
        yingyong: '全部应用',
        jiaose: '选择角色',
      },
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
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }

  onNestChange(value) {
    this.setState({
      payvalue: value,
    });
  }
  paybtn() {
    const payinputvalue = this.payinputvalue.value;
    const payvalues = this.state.payvalue;
    const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if (!reg.test(payinputvalue) || !payinputvalue) {
      alert('请输入充值金额');
    } else if (payvalues == 'zfb') {
      this.Demopay.zfbopen(payinputvalue);
    } else if (payvalues == 'wx') {
      this.Wxpaypopup.open(payinputvalue);
    } else {
      alert('请选择支付方式');
    }
  }
  render() {
    const yingyong = [
      { value: '全部应用 ', label: '全部应用' },
      { value: '待分配', label: '待分配' },
    ];
    const jiaose = [
      { value: '选择角色', label: '选择角色' },
      { value: '人', label: '人' },
    ];
    if (!this.state.open) return null;
    return (
      <div className="addmenber">
        <h2>添加成员</h2>
        <FormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <FormBinder name="xingming"
            autoWidth={false}
          >
            <Input hasClear placeholder='姓名' />
          </FormBinder>

          <FormBinder name='youxiang' >
            <Input hasClear placeholder='邮箱' />
          </FormBinder>
          <FormBinder name='phone'>
            <Input hasClear placeholder='手机号' />
          </FormBinder>
          <FormBinder name='pass'>
            <Input hasClear placeholder='密码' htmlType="password" />
          </FormBinder>
          <FormBinder name='passwprd'>
            <Input hasClear placeholder='密码' htmlType="password" />
          </FormBinder>
          <FormBinder name='beizhu'>
            <Input hasClear placeholder='备注' htmlType="password" />
          </FormBinder>
          <FormBinder name='yingyong'>
            <Select dataSource={yingyong} defaultValue='选择应用' />
          </FormBinder>
          <FormBinder name='jiaose'>
            <Select dataSource={jiaose} defaultValue='选择角色' />
          </FormBinder>
        </FormBinderWrapper>
      </div>
    );
  }
}

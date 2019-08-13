/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Input, Radio , Switch, Grid, Form, Select } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { createUser } from '@indexApi';
import '../../../index.css';
import { Message } from "@alifd/next/lib/index";

const Option = Select.Option;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

export default class Addmenber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: '',
        name: '',
        email: '',
        phone: '',
        passwordTwo: '',
        password: '',
        notes: '',
        quanbuyingyong: '选择应用',
        roles: [],
        status: false,
      },
      open: false,
      content: null,
      confirm: null, // 列表原数据
    };
  }
  addmemberclose() {
    this.setState({
      open: false,
      content: null,
      value: '',
    });
  }
  addmemberopen(content,confirm) {
    if (!confirm) {
      this.setState({
        open: true,
        content,
        confirm,
      });
    } else {
      this.setState({
        open: true,
        content,
        confirm,
        value: confirm,
      });
    }
    this.confirmCallBack = confirm;
  }
  // 添加成员
  addmember = () => {
    // const values = this.state.value;
    this.refs.form.validateAll((errors, values) => {
      // debugger;
      // const confirm = this.state.confirm;
      // let _id = '';
      // if (!confirm) {
      //   debugger;
      //   _id = null;
      // } else {
      //   debugger;
      //   _id = this.state.confirm._id;
      // }
      createUser({
        ...values,
      }).then(({ status,data })=>{
        debugger;
        if (data.errCode == 0) {
          Message.success(data.message);
          this.addmemberclose();
          this.props.fetchData();
        } else {
          Message.success(data.message);
        }
      });
    });
  }
  /* formChange=(value)=>{
    debugger;
    this.setState({
      value,
    });
  } */
  render() {
    const yingyong = [
      { value: '选择应用 ', label: '选择应用' },
      { value: '待分配', label: '待分配' },
    ];
    const jiaose = this.state.content;
    const { value,confirm } = this.state;
    if (!this.state.open) return null;
    debugger;
    return (
      <div className="addmenber">
        {/* <h2>添加成员</h2> */}
        <div className='addmember-title'>
          <h2 style={{ display: 'inline-block' }}>添加成员</h2>
          <span style={{ fontSize: '38px', color: '#666666', float: 'right', cursor: 'pointer' }} onClick={this.addmemberclose.bind(this)}>×</span>
        </div>
        <div className='addmember-content'>
          <FormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <FormBinder name="username">
              <Input hasClear placeholder='用户名' />
            </FormBinder>
            <FormBinder name="name"
              autoWidth={false}
            >
              <Input hasClear placeholder='姓名' />
            </FormBinder>

            <FormBinder name='email' >
              <Input hasClear placeholder='邮箱' />
            </FormBinder>
            <FormBinder name='phone'>
              <Input hasClear placeholder='手机号' />
            </FormBinder>
            {
              !confirm ? (
                <FormBinder name='password'>
                  <Input hasClear placeholder='密码' htmlType="password" />
                </FormBinder>
              ) : null
            }
            {
              !confirm ? (
                <FormBinder name='passwordTwo'>
                  <Input hasClear placeholder='重复密码' htmlType="password" />
                </FormBinder>
              ) : null
            }
            <FormBinder name='notes'>
              <Input hasClear placeholder='备注' htmlType="text" />
            </FormBinder>
            <FormBinder name='quanbuyingyong'>
              <Select dataSource={yingyong} placeholder='选择应用' />
            </FormBinder>
            <FormBinder name='roles'>
              <Select mode="multiple" dataSource={jiaose} placeholder='选择角色' />
            </FormBinder>
            <FormBinder name="status">
              <Switch checkedChildren="正常" unCheckedChildren="禁止" defaultChecked={value.status} style={{ marginTop: '10px', width: '100px' }} />
            </FormBinder>
            <div>
              <button className='quxiao' onClick={this.addmemberclose.bind(this)}>取消</button>
              <button onClick={this.addmember}>添加</button>
            </div>
          </FormBinderWrapper>
        </div>
      </div>
    );
  }
}

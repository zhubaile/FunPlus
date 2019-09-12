import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, Form, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { changeUserOne } from '@indexApi';
import '../../../index.css';
import Editavatar from '././././Editavatar';

const FormItem = Form.Item;

const { Row, Col } = Grid;
const formItemLayout = {
/*  labelCol: { xxs: 8, s: 12, l: 5 },
  wrapperCol: { s: 6, l: 10 }, */
  labelCol: { s: 6 },
  wrapperCol: { s: 14 },
};

export default class Editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: null,
      value: {
        name: '',
        phone: '',
        email: '',
        location: '中国',
      },
    };
  }

  editprofileclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  editprofileopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }
  formChange = (value) => {
    this.setState({
      value,
    });
  };
  // 更换头像
  /* editprofileOpen() {
    this.Editavatar.editavataropen();
  } */
  //
  changeUserOnebtn() {
    const values = this.state.value;
    changeUserOne({
      ...values,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        Message.success(data.message);
        this.editprofileclose();
        this.props.fetchData();
      } else {
        Message.success(data.message);
      }
    });
  }
  render() {
    const { content } = this.state;
    if (!this.state.open) return null;
    return (
      <div className='editprofile-bulletbox'>
        <Editavatar ref={ node => this.Editavatar = node } />
        {/*        <h2>开票信息</h2>
        <Message type='notice' className='message'>
          提示：因税务新政要求，申请开具企业增值普通发票的用户开票时必须提供“纳税人识别号”信息。
        </Message> */}
        <span style={{ display: 'block', marginLeft: '260px', fontSize: '30px' }} onClick={this.editprofileclose.bind(this)}>×</span>
        <a> {/*  onClick={this.editprofileOpen.bind(this)} */}
          <img style={{ borderRadius: '100%', width: '100px', height: '100px' }} alt="" src={require('@img/img/avatar1.jpg')} />
        </a>

        <Form className='form' onChange={this.formChange}>
          <FormItem
            label='全名'
            {...formItemLayout}
          >
            <Input name='name' defaultValue={content.name} />
          </FormItem>

          <FormItem
            label='手机'
            {...formItemLayout}
          >
            <Input name="phone" defaultValue={content.phone} />
          </FormItem>

          <FormItem
            label='电子邮箱'
            {...formItemLayout}
          >
            <Input name="email" defaultValue={content.email} />
          </FormItem>

          <FormItem
            label='地址'
            {...formItemLayout}
          >
            <Input name="location" placeholder="中国" value='中国' readOnly />
          </FormItem>
          {/*          <Button type='secondary'style={styles.cancelbtn} siza='large' onClick={this.billinginformationclose.bind(this)}>取消</Button> */}
          <Button type='primary'style={styles.submitbtn} siza='large' onClick={this.changeUserOnebtn.bind(this)}>保存</Button>
        </Form>

      </div>
    );
  }
}

const styles = {
  cancelbtn: {
    display: 'inline-block',
    margin: '0px 60px 0px 130px',
    width: '80px',
    height: '28px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    borderRadius: '6px',
  },
  submitbtn: {
    display: 'inline-block',
    width: '80px',
    height: '28px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    borderRadius: '6px',
  },
};

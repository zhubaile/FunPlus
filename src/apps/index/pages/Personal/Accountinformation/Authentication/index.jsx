import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, Form, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';

const FormItem = Form.Item;

const { Row, Col } = Grid;
const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
};

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
      },
    };
  }

  authenticationclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  authenticationopen(content,confirm) {
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


  render() {
    if (!this.state.open) return null;
    return (
      <div className='authentication-bulletbox'>
        <h2 style={{ display: 'inline-block' }}>身份验证</h2>
        <span style={{ display: 'inline-block', marginLeft: '180px', fontSize: '30px' }} onClick={this.authenticationclose.bind(this)}>×</span>
        <hr />
        <Message type='notice' className='message'>
          为了您的账号安全，请用微信扫码验证身份。
        </Message>
        <div style={{ textAlign: 'center', margin: '15px 0px' }}>
          <img src={require('@img/demopay/zf4.png')} alt="" />
        </div>
        <p>需要（微信号： X**）扫码验证身份</p>
      </div>
    );
  }
}

/*const styles = {
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
};*/

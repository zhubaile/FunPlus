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

export default class Accountassociation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
      },
    };
  }

  accountassociationclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  accountassociationopen(content,confirm) {
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
      <div className='accountassociation-bulletbox'>
        <h2 style={{ display: 'inline-block' }}>账号关联</h2>
        <span style={{ display: 'inline-block', marginLeft: '180px', fontSize: '30px' }} onClick={this.accountassociationclose.bind(this)}>×</span>
        <hr />
        <Message type='notice' className='message'>
          请点击 “去授权” 按钮， 在授权页面登录授权后，即可完成账号关联。
        </Message>
        <div style={{ marginTop: '30px' }}>
          <Button type='secondary'style={styles.cancelbtn} siza='large' onClick={this.accountassociationclose.bind(this)}>取消</Button>
          <Button type='primary'style={styles.submitbtn} siza='large'>去授权</Button>
        </div>
      </div>
    );
  }
}

const styles = {
  cancelbtn: {
    display: 'inline-block',
    margin: '0px 20px 0px 50px',
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

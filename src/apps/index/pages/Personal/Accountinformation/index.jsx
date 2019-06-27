import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Icon,Form, Tab, Select, Switch } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { actions, reducers, connect } from '@indexStore';
import Circularchart from './Circularchart';
import Customerservice from '../components/Customerservice';
import { getMenu } from '../../../api';
import '../../index.css';
import Editprofile from './Editprofile';
import Authentication from './Authentication';
import Accountassociation from './Accountassociation';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
};
const { Row, Col } = Grid;

/* function onChange(checked) {
  console.log(`switch to ${checked}`);
} */

export default class Accountinformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: '互联网',
      hangye: '1',
      checked: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(checked) {
    this.setState({ checked });
  }

  btnClick() {
    // console.log(this.input.value,this);
    // ;
    this.props.editor(this.input.getInputNode().value);
  }
  btn() {
    // const { params } = this.props.match;
    // params.appid,
    debugger;
    getMenu({

    });
  }

  accountinformationOpen() {
    this.Editprofile.editprofileopen();
  }

  accountinformationOpenone() {
    this.Authentication.authenticationopen();
  }

  accountinformationOpentwo() {
    this.Accountassociation.accountassociationopen();
  }

  render() {
    const Industry = [
      { value: '互联网', label: '互联网' },
    ];
    const Hangye = [
      { value: '1', label: '1' },
    ];

    return (
      <div className='personal-account'>
        <Editprofile ref={ node => this.Editprofile = node } />
        <Authentication ref={ node => this.Authentication = node } />
        <Accountassociation ref={ node => this.Accountassociation = node } />
        <div className='personal-top'>
          <span>个人账户</span>
          <div className='personal-top-border' />
        </div>
        <div className='main'>
          <div className='personal-account-left'>
            <div className='content-top'>
              <img style={{ borderRadius: '100%', width: '100px', height: '100px' }} alt="" src={require('@img/img/avatar1.jpg')} />
              <ul>
                <li>mr.qiutang@qq.com</li>
                <li>超级管理员</li>
                <li style={{ display: 'inline-block', marginRight: '5px' }}>￥5476<br />交易金额</li>
                <li style={{ display: 'inline-block', marginLeft: '5px' }}>45笔<br />交易数量</li>
              </ul>
            </div>
            <div style={{ height: '15px', width: '100%' }} />
            <div className='content-bottom'>
              <div>
                <h3 style={{ display: 'inline-block', marginRight: '40%' }}>联系人资料</h3>
                <Button onClick={this.accountinformationOpen.bind(this)} style={styles.btnStyle}><Icon type="account" size='xs' style={{ display: 'inline-block' }} />编辑个人资料</Button>
              </div>
              <hr />
              <ul>
                <li><span>全名：</span>马里亚戈麦斯</li>
                <li><span>手机：</span>（+86）010 1234 567</li>
                <li><span>电子邮件：</span>coderthemes@gmail.com</li>
                <li><span>地区：</span>中国</li>
               {/* <li><span>语言：</span>汉语、 英语、 西班牙语</li>
                <li><span>其他地方：</span>
                  <img style={styles.myImg} src={require('@img/img/003.png')} />
                  <img style={styles.myImg} src={require('@img/img/001.png')} />
                  <img style={styles.myImg} src={require('@img/img/002.png')} />
                </li>*/}
              </ul>
            </div>
          </div>

          <div className='personal-account-right'>
            <div>
              <h3>企业认证</h3>
              <p>认证状态： <span style={styles.mySpan}>未认证</span> <span style={styles.mySpan}>去认证</span></p>
            </div>
            <hr />
            <FormBinderWrapper
              value={this.state.value}
              onChange={this.formChange}
              ref="form"
            >
              <div>
                <h3>行业信息</h3>
                <span>所属行业：</span>
                <FormBinder name="industry">
                  <Select placeholder='互联网' dataSource={Industry} />
                </FormBinder>
                <FormBinder name="hangye">
                  <Select style={{ marginLeft: '15px' }} placeholder='1' dataSource={Hangye} />
                </FormBinder>
              </div>
            </FormBinderWrapper>
            <hr />
            <div className='login-method'>
              <h3>登录方式</h3>
              <p style={{ display: 'inline-block' }}>QQ: 无 <span style={styles.mySpan} onClick={this.accountinformationOpentwo.bind(this)}>关联</span></p>
              <p style={{ display: 'inline-block' }}>微信（注册方式）：xxx</p>
              <p style={{ display: 'inline-block' }}>邮箱： 无 <span style={styles.mySpan} onClick={this.accountinformationOpentwo.bind(this)}>关联</span></p>
            </div>
            <hr />
            <div>
              <h3>异地登录</h3>
              <span>异地登录校验：</span>
              <Switch size='small' checked={this.state.checked} onChange={this.onChange} style={{ marginBottom: '-6px' }} />
              <p style={{ marginLeft: '2%', display: 'inline-block' }}>通知方式：<span>安全手机、安全邮箱、微信通知</span></p>
            </div>
            <hr />
            <div>
              <h3>账号保护</h3>
              <p style={styles.myP}>登录保护 <span style={{ color: 'red', marginLeft: '15px', marginRight: '15px' }}>未开启保护</span></p>
              <p style={styles.myP}>操作保护：<span style={styles.mySpan} onClick={this.accountinformationOpenone.bind(this)}>已开启微信扫码校验</span></p>
            </div>
            <hr />
            <div>
              <h3>设备异常通知</h3>
              <p>通知方式：安全手机、 安全邮箱、 微信通知</p>
            </div>
          </div>
        </div>
        <Customerservice />
      </div>


    );
  }
}
const styles = {
  myP: {
    display: 'inline-block',
  },
  mySpan: {
    color: 'blue',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  myImg: {
    maxHeight: '16px',
    maxWidth: '16px',
    marginLeft: '20px',
  },
  btnStyle: {
    backgroundColor: '#E6F1FC',
    borderRadius: '6px',
    border: 'none',
  },
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },

};

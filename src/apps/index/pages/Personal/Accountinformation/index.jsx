import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, Message , Icon,Form, Tab, Select, Switch } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { actions, reducers, connect } from '@indexStore';
import { companyaccountInfo } from '@indexApi';
import Editprofile from './Editprofile';
import Authentication from './Authentication';
import Accountassociation from './Accountassociation';
import Circularchart from './Circularchart';
import Customerservice from '../components/Customerservice';
import '../../index.css';

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

export default class Accountinformation extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match); // 获取到详细的路由地址
    // const query = this.props.match.params.appid; // '?s=1&f=7'
    debugger;
    this.state = {
      // industry: '互联网',
      // hangye: '1',
      checked: false,
      datas: [], // 用户所有数据
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    companyaccountInfo().then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        this.setState({
          datas: data.data,
        });
      } else {
        Message.success(data.message);
      }
    });
  }
  // 去认证
  goauthentication() {
    this.props.history.push('/admin/personal/enterprisecertification');
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
    /* debugger;
    getMenu({

    }); */
  }

  // 编辑个人资料
  accountinformationOpen() {
    const datas = this.state.datas;
    this.Editprofile.editprofileopen(datas);
  }

  accountinformationOpenone() {
    this.Authentication.authenticationopen();
  }

  accountinformationOpentwo() {
    this.Accountassociation.accountassociationopen();
  }

  render() {
    /* const Industry = [
      { value: '互联网', label: '互联网' },
    ];
    const Hangye = [
      { value: '1', label: '1' },
    ]; */
    const { datas } = this.state;
    return (
      <div className='personal-account'>
        <Editprofile ref={ node => this.Editprofile = node } />
        <Authentication ref={ node => this.Authentication = node } />
        <Accountassociation ref={ node => this.Accountassociation = node } />
        <Tab>
          <Tab.Item shape='pure' title='个人账户'>
            <div className='main'>
              <div className='personal-account-left'>
                <div className='content-top'>
                  <img style={{ borderRadius: '100%', width: '100px', height: '100px' }} alt="" src={require('@img/img/avatar1.jpg')} />
                  <ul>
                    <li>{datas.email}</li>
                    <li>超级管理员</li>
                    <li style={{ display: 'inline-block', marginRight: '5px' }}>￥{datas.tradeMoney}<br />交易金额</li>
                    <li style={{ display: 'inline-block', marginLeft: '5px' }}>{datas.tradeCount}笔<br />交易数量</li>
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
                    <li><span>全名：</span>{datas.username}</li>
                    <li><span>手机：</span>{datas.phone}</li>
                    <li><span>电子邮件：</span>{datas.email}</li>
                    <li><span>地区：</span>中国</li>
                  </ul>
                </div>
              </div>

              <div className='personal-account-right'>
                <div>
                  <h3>企业认证</h3>
                  <p>认证状态： {datas.cpStatus == 2 ? (<span style={styles.mySpan}>已认证</span>) : (<span style={styles.mySpan} onClick={this.goauthentication.bind(this)}>未认证</span>)}</p>
                </div>
                <hr />
                <Form >
                  <div>
                    <h3>行业信息</h3>
                    <FormItem style={{ marginTop: '10px' }}>
                      <span>所属行业：</span>
                      <Select name="cpIndustryCategory" value={datas.cpIndustryCategory} />
                      <Select name="cpIndustrySubcategory" style={{ marginLeft: '15px' }} value={datas.cpIndustrySubcategory} />
                    </FormItem>
                  </div>
                </Form>
                <hr />
                <div className='login-method'>
                  <h3>登录方式</h3>
                  <p style={{ display: 'inline-block' }}>QQ: 无 <span style={styles.mySpan} onClick={this.accountinformationOpentwo.bind(this)}>关联</span></p>
                  <p style={{ display: 'inline-block' }}>微信（注册方式）：xxx</p>
                  <p style={{ display: 'inline-block' }}>邮箱：{datas.email}{datas.emailStatus == 1 ? (<span style={styles.mySpan}>已关联</span>) : (<span style={styles.mySpan} onClick={this.accountinformationOpentwo.bind(this)}>未关联</span>)}</p>
                </div>
                <hr />
                <div className='switchSty'>
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
          </Tab.Item>
        </Tab>
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

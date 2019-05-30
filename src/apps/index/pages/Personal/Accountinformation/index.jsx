import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Icon,Form } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Circularchart from './Circularchart';
import Customerservice from '../components/Customerservice';
import { getMenu } from '../../../api';
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
    this.state = {};
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
  render() {
    return (
      <div>
        <div className='personal-top'>
          <span>个人账户</span>
          <div className='personal-top-border' />
        </div>
        <div className='accountinformation'>
          <div className='accountinformation-top'>
            <div className='accountinformation-top-left'>
              <div>
                <img src={require('../../../../../assets/img/demoience/zfb.png')} alt="" />
              </div>
              <div className='boxcentent'>
                <h2>玛丽个牙买四</h2>
                <p>超级管理员</p>
                <div>
                  <p>￥5476</p>
                  <p>交易金额</p>
                </div>
                <div>
                  <p>45笔</p>
                  <p>交易数量</p>
                </div>
              </div>
            </div>
            <div className='accountinformation-top-right'>
              <button onClick={this.btn.bind(this)}> <Icon type="account" size='xs' style={{ marginRight: '6px' }} />编辑个人资料</button>
            </div>
          </div>
          <div className='accountinformation-center'>
            <div className='accountinformation-center-left'>
              <div>个人信息</div>
              <Form style={{ }} {...formItemLayout}>
                <FormItem label="全名：">
                  <p>买李亚戈麦斯</p>
                </FormItem>
                <FormItem label="手机：">
                  <p>0100215155</p>
                </FormItem>
                <FormItem label="电子邮箱：">
                  <p>123456789@qq.com</p>
                </FormItem>
                <FormItem label="地点：">
                  <p>中国</p>
                </FormItem>
                <FormItem label="语言：">
                  <p>汉语</p>
                </FormItem>
                <FormItem label="其他地方：">
                  <p>啊啊啊啊</p>
                </FormItem>
              </Form>
            </div>
            <div className='accountinformation-center-right'>
              <Circularchart />
            </div>
          </div>
          <div className='accountinformation-bottom'>
            <div className='accountinformation-bottom-income'>
              <h2>￥46782</h2>
              <p>收入</p>
              <span>来自上一期间</span>
            </div>
            <div className='accountinformation-bottom-follow'>
              <h2>16.8K</h2>
              <p>关注</p>
              <span>来自上一期间</span>
            </div>
            <div className='accountinformation-bottom-right'>
              <p>每月收入，每月计算</p>
              <p>每月收入，每月计算</p>
              <p>每月收入，每月计算</p>
            </div>
          </div>
        </div>
        <Customerservice />
      </div>
    );
  }
}
const styles = {
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },

};

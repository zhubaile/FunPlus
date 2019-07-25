import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, Form, DatePicker , Tab,Message ,Table,CascaderSelect ,Select,Radio,Switch, Checkbox } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { changeMailAddress } from '@indexApi';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../../index.css';

const FormItem = Form.Item;
const { Row, Col } = Grid;
const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
};

export default class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: {
        cityAddress: '',
      },
      confirm: null, // 城市数据
      ress: {}, // 多选地址的value
      value: [], // 地址文字
      messageaddress: '', // 判断是添加还是修改
    };
  }

  addaddressclose() {
    this.setState({
      open: false,
      ress: {},
      value: [],
      content: {
        cityAddress: '',
      },
      confirm: null,
      messageaddress: '',
    });
  }
  addaddressopen(content,confirm,messageaddress) {
    debugger;
    this.setState({
      open: true,
      content,
      confirm,
      messageaddress,
      ress: content.ressval,
    });
    this.confirmCallBack = confirm;
  }
  // 提交按钮
  SubMailinginfo(v,e) {
    console.log(this.state.ress);
    debugger;
    const val = this.state.ress;
    if (!val) {
      return Message.success("请选择地址");
    }
    const one = val.selectedPath[0].label;
    const two = val.selectedPath[1].label;
    const three = val.selectedPath[2].label;
    const contentss = one + two + three + v.mailAddressson;
    const _id = this.state.content._id;
    debugger;
    if (this.state.messageaddress == 'Addto') {
      changeMailAddress({
        ressval: val,
        mailAddress: contentss,
        ...v,
      }).then(({ status,data })=>{
        debugger;
        if (data.errCode == 0) {
          Message.success(data.message);
          this.props.fetchData();
          this.addaddressclose();
        }
        Message.success(data.message);
      });
    } else if (this.state.messageaddress == 'Modify') {
      changeMailAddress({
        _id,
        ressval: val,
        mailAddress: contentss,
        ...v,
      }).then(({ status,data })=>{
        debugger;
        if (data.errCode == 0) {
          Message.success(data.message);
          this.props.fetchData();
          this.addaddressclose();
        }
        Message.success(data.message);
      });
    } else {
      return null;
    }
  }
  handleChange(v,data, extra) {
    debugger;
    this.setState({
      ress: extra,
      value: v,
    });
  }
  render() {
    console.log(this.state.content);
    const { content,confirm,value,messageaddress } = this.state;
    const cityAddress = content.cityAddress;
    if (!this.state.open) return null;
    debugger;
    return (
      <div className='add-address-bulletbox'>
        <h2>{messageaddress == 'Addto' ? '添加地址' : '修改地址'}</h2>
        <Message type='notice' className='message'>
          提示：中国港澳台及海外地址暂时无法邮寄，中国港澳台及海外用户如需开具invoice，请提 工单 联系客服处理。
        </Message>
        <Form ref="form">
          <FormItem label='发票邮寄地址' {...formItemLayout} >
            <CascaderSelect name='cityAddress' style={{ width: '100%' }} changeOnSelect defaultValue={messageaddress == 'Addto' ? (value) : (cityAddress)} dataSource={confirm} onChange={this.handleChange.bind(this)} />
            {/* <Select style={styles.formselect} name='invoicemailingaddressone' placeholder='1' dataSource={addressOne} />
            <Select style={styles.formselect} name='invoicemailingaddresstwo' placeholder='1' dataSource={addressTwo} /> */}
            <Input style={styles.forminput} name='mailAddressson' placeholder='请填写有效地址，不必重复' defaultValue={content.mailAddressson} />
          </FormItem>
          <FormItem label='邮政编码' {...formItemLayout} >
            <Input style={styles.forminput} name='postalNumber' placeholder='请填写有效的邮政编码' defaultValue={content.postalNumber} />
          </FormItem>
          <FormItem label='联系人姓名' {...formItemLayout} >
            <Input style={styles.forminput} name='name' placeholder='请填写2 - 25字符以内的有效姓名' defaultValue={content.name} />
          </FormItem>
          <FormItem label='联系方式' {...formItemLayout} >
            <Input style={styles.forminput} name='phone' placeholder='请填写有效的手机号' defaultValue={content.phone} />
          </FormItem>
          <FormItem label='电话' {...formItemLayout} >
            <Input style={styles.forminput} name='telePhone' placeholder='请填写电话号' defaultValue={content.telePhone} />
          </FormItem>
          <FormItem wrapperCol={{ offset: 6 }} >
            <Form.Reset style={styles.cancelbtn} onClick={this.addaddressclose.bind(this)}>取消</Form.Reset>
            <Form.Submit style={styles.determinebtn} validate type="primary" onClick={(v, e) => this.SubMailinginfo(v,e)}>提交</Form.Submit>
          </FormItem>

        </Form>

      </div>
    );
  }
}

const styles = {
  formselect: {
    margin: '5px 0px 5px 5px',

  },
  forminput: {
    width: '240px',
  },
  forminputsmall: {
    width: '80px',
  },
  cancelbtn: {
    display: 'inline-block',
    margin: '0px 60px 0px 130px',
    width: '80px',
    height: '30px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    borderRadius: '5px',
  },
  determinebtn: {
    display: 'inline-block',
    width: '80px',
    height: '30px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    borderRadius: '5px',
  },
};

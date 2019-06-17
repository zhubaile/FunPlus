import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, Form, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../../index.css';

const FormItem = Form.Item;
const { Row, Col } = Grid;

/* const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
}; */

const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
};

/* const provinceData = ['电商', '生活', '餐饮', '网络技术', '服务'];
const cityData = ['电商', '生活', '餐饮', '网络技术', '服务']; */

export default class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        invoicemailingaddressone: '',
        invoicemailingaddresstwo: '',
        effectiveaddress: '',
        postalcodek: '',
        contactname: '',
        contactinformation: '',
        areacode: '',
        telephone: '',
        ext: '',
      },
      /*      data: [],
            disabled: true, */
    };
    /*    this.handleProvinceChange = this.handleProvinceChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this); */
  }
  /*  // 层级选择
    handleProvinceChange(value) {
      const data = cityData[value];
      this.setState({ data, province: value, city: '', disabled: !data });
    }
    // 子数据
    handleCityChange(value) {
      this.setState({ city: value });
      console.log(this.state.province, value);
    } */

  addaddressclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  addaddressopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }

  /*  formChange = (value) => {
    this.setState({
      value,
    });
  }; */
  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };


  render() {
    const addressOne = [
      { value: '11', label: '11' },
      { value: '22', label: '22' },
      { value: '3', label: '3' },
    ];
    const addressTwo = [
      { value: '11', label: '11' },
      { value: '22', label: '22' },
      { value: '3', label: '3' },
    ];


    if (!this.state.open) return null;
    return (
      <div className='add-address-bulletbox'>
        <h2>添加地址</h2>
        <Message type='notice' className='message'>
          提示：中国港澳台及海外地址暂时无法邮寄，中国港澳台及海外用户如需开具invoice，请提 工单 联系客服处理。
        </Message>

        <Form value={this.state.value} onChange={this.formChange} ref="form">
          <FormItem label='发票邮寄地址' {...formItemLayout} >
            <Select style={{ marginTop: '5px' }} name='invoicemailingaddressone' placeholder='1' dataSource={addressOne} />
            <Select style={styles.formselect} name='invoicemailingaddresstwo' placeholder='1' dataSource={addressTwo} />
            <Input style={styles.forminput} name='effectiveaddress' placeholder='请填写有效地址，不必重复' />
          </FormItem>
          <FormItem label='邮政编码' {...formItemLayout} >
            <Input style={styles.forminput} name='postalcodek' placeholder='请填写有效的邮政编码' />
          </FormItem>
          <FormItem label='联系人姓名' {...formItemLayout} >
            <Input style={styles.forminput} name='contactname' placeholder='请填写2 - 25字符以内的有效姓名' />
          </FormItem>
          <FormItem label='联系方式' {...formItemLayout} >
            <Input style={styles.forminput} name='contactinformation' placeholder='请填写有效的手机号' />
          </FormItem>
          <FormItem label='电话' {...formItemLayout} >
            <Input style={styles.forminputsmall} name='areacode' placeholder='区号' />
            <Input style={styles.forminputsmall} name='telephone' placeholder='电话机' />
            <Input style={styles.forminputsmall} name='ext' placeholder='分机号' />
            <p>分机号可不填，手机和电话必须填写一项</p>
          </FormItem>
          <Button type='secondary' style={styles.cancelbtn} size='large' onClick={this.addaddressclose.bind(this)}>取消</Button>
          <Button type='primary' style={styles.determinebtn} size='large'>确定</Button>
        </Form>

      </div>
    );
  }
}

const styles = {
  formselect: {
    margin: '5px 0px 0px 5px',
  },
  forminput: {
    width: '240px',
    marginTop: '5px',
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

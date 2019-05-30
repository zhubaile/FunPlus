import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';

const { Row, Col } = Grid;
export default class Addgrouping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        NewRuleName: '',
        ApplicationChannel: '选择对应支付渠道',
        Shebei: '设备类型',
      },
    };
  }
  addgroupingclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  addgroupingopen(content,confirm) {
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
  addgrouping(){
    console.log(this.state.value);
    debugger;
  }
  render() {
    const ApplicationChannel = [
      { value: '选择对应支付渠道', label: '选择对应支付渠道' },
      { value: '支付宝扫码', label: '支付宝扫码' },
      { value: '微信扫码', label: '微信扫码' },
      { value: '支付宝wap', label: '支付宝wap' },
    ];
    const Shebei = [
      { value: '设备类型', label: '设备类型' },
      { value: '官方参数', label: '官方参数' },
      { value: '自有参数设置', label: '自有参数设置' },
    ];

    if (!this.state.open) return null;
    return (
      <div className='addgrouping'>
        <h2>添加分组</h2>
        <FormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <FormBinder name='NewRuleName'>
            <Input style={styles.formbinderbox} placeholder='输入分组名' hasClear />
          </FormBinder>
          <FormBinder name="ApplicationChannel" required message="请输入正确的名称" >
            <Select style={styles.formbinderbox} defaultValue={{ value: '选择对应支付渠道', label: '选择对应支付渠道' }} dataSource={ApplicationChannel} />
          </FormBinder>
          <FormBinder name="Shebei" required message="请输入正确的名称" >
            <Select style={styles.formbinderbox} defaultValue={{ value: '选择对应支付渠道', label: '选择对应支付渠道' }} dataSource={Shebei} />
          </FormBinder>
        </FormBinderWrapper>
        <div className='addgrouping-btn'>
          <button onClick={this.addgroupingclose.bind(this)}>取消</button>
          <button onClick={this.addgrouping.bind(this)}>添加</button>
        </div>
      </div>
    );
  }
}
const styles = {
  formbinderbox: {
    width: '200px',
    margin: '15px',
    borderRadius: '5px',
    zIndex: '9999',
  },
  Limitintervalinput: {
    width: '100px',
    padding: '10px 3px',
  },
  main: { display: 'flex', flexDirection: 'column' },
  maintop: { display: 'flex' },
  maintopspanleft: { width: '20%' },
  maintoppright: { width: '80%', borderBottom: '2px solid #BBBBBB' ,marginBottom: '20px' },
  mainmain: { display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' },
  allborder: { width: '100%', borderBottom: '2px solid #BBBBBB', margin: '10px 0' },
  mainmainbox: { marginLeft: '20px' },
  posbtn: { position: 'absolute', right: '20px' },
  posbtna: { bottom: '15px', right: '10px', background: '#E6F1FC', color: '#1989FA', borderRadius: '5px', marginLeft: '20px' },
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },
  message: {
    background: '#E6F7FF',
    border: '1px solid #91D5FF',
    borderradius: '5px',
    margin: '10px 20px 25px',
    width: '50%',
    float: 'left',
  },
  bg: {
    background: '#E6F1FC',
    color: '#1989FA',
    borderRadius: '5px',
    marginLeft: '20px',
    marginTop: '20px',
  },
};

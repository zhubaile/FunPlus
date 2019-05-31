import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { deviceGroupaddparmas,deviceGroupadd } from "../../../../api";
import '../../../index.css';

const { Row, Col } = Grid;
export default class Addgrouping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        NewRuleName: '',
        ApplicationChannel: '0',
        Shebei: '0',
      },
    };
  }
  addgroupingclose=()=> {
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
  componentDidMount() {
    deviceGroupaddparmas().then(
      ({ status, data }) => {
        debugger;
        if (data.errCoder == 0) {

        }
      }
    ).catch(
      ({ status, data }) => {
      }
    );
  }
  // deviceGroupaddparmas
  addgrouping() {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      deviceGroupadd({
        dGroupName: values.NewRuleName,
        dClassify: values.Shebei,
        payChannelId: values.ApplicationChannel,
      }).then(
        ({ status, data }) => {
          debugger;
          if (data.errCoder == 0) {
            // Message.success(intl.formatMessage({ id: 'app.register.success' }));
            Message.success('添加分组成功');
            this.addgroupingclose();
          }
          Message.success(data.message);
          // console.log(values);
          // Message.success(intl.formatMessage({ id: 'app.register.success' }));
          // Message.success('注册成功');
          // this.props.history.push('/user/login');
        }
      ).catch(
        ({ status, data }) => {
        }
      );
    });
  }
  render() {
    const ApplicationChannel = [
      { value: '0', label: '选择对应支付渠道' },
      { value: '1', label: '支付宝扫码' },
      { value: '2', label: '微信扫码' },
      { value: '3', label: '支付宝wap' },
    ];
    const Shebei = [
      { value: '0', label: '设备类型' },
      { value: '1', label: '官方参数' },
      { value: '2', label: '自有参数设置' },
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
          <FormBinder name='NewRuleName' required message='输入错误'>
            <Input style={styles.formbinderbox} placeholder='输入分组名' hasClear />
          </FormBinder>
          <FormError name="NewRuleName" />
          <FormBinder name="ApplicationChannel" required message=" " >
            <Select style={styles.formbinderbox} dataSource={ApplicationChannel} />
          </FormBinder>
          <FormError name="ApplicationChannel" />
          <FormBinder name="Shebei" required message=" " >
            <Select style={styles.formbinderbox} dataSource={Shebei} />
          </FormBinder>
          <FormError name="Shebei" />
        </FormBinderWrapper>
        <div className='addgrouping-btn'>
          <button onClick={this.addgroupingclose}>取消</button>
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

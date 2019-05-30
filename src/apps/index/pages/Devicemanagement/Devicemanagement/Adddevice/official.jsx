import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Form } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';

const FormItem = Form.Item;
const { Row, Col } = Grid;
export default class Official extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        NewRuleName: '',
        ApplicationChannel: '支付宝渠道',
        equipmentgroup: '支付宝专用设备组3',
        Guanfangcanshu: '官方参数',
        hezuohuoban: '',
        feilv: '',
        RSAss: 'RSA(SHA1)',
        description: '',
        descriptions: '',
        shouxufei: '是',
        shuzi: '',
        shijian: '分',
      },
    };
  }
  officialclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  officialopen(content,confirm) {
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
    const ApplicationChannel = [
      { value: '支付宝渠道', label: '支付宝渠道' },
      { value: '支付宝手机APP', label: '支付宝手机APP' },
      { value: '微信扫码', label: '微信扫码' },
    ];
    const equipmentgroup = [
      { value: '支付宝专用设备组3', label: '支付宝专用设备组3' },
      { value: '微信设备组', label: '微信设备组' },
      { value: '银联设备组', label: '银联设备组' },
    ];
    const Guanfangcanshu = [
      { value: '官方参数', label: '官方参数' },
      { value: '微信设备组', label: '微信设备组' },
      { value: '银联设备组', label: '银联设备组' },
    ];
    const RSAss = [
      { value: 'RSA(SHA1)', label: 'RSA(SHA1)' },
      { value: '微信设备组', label: '微信设备组' },
      { value: '银联设备组', label: '银联设备组' },
    ];
    const shouxufei = [
      { value: '是', label: '是' },
      { value: '否', label: '否' },
    ];
    const shijian = [
      { value: '分', label: '分' },
      { value: '秒', label: '秒' },
    ];
    if (!this.state.open) return null;
    return (
      <div className='official'>
        <h2>添加设备-官方参数</h2>
        <Form value={this.state.value} onChange={this.formChange} ref="form" className='offocoal-main'>
          <FormItem >
            <Input style={styles.formbinderbox} name='NewRuleName' placeholder='输入自定义名称备注' hasClear />
          </FormItem>
          <p>设置前置属性-无法修改</p>
          <FormItem>
            <Select style={{ width: '150px'}} defaultValue={{ value: '支付宝渠道', label: '支付宝渠道' }} name="ApplicationChannel" dataSource={ApplicationChannel} />
            <Select style={{ width: '150px'}} defaultValue={{ value: '官方参数', label: '官方参数' }} name="Guanfangcanshu" dataSource={Guanfangcanshu} />
          </FormItem>
          <p>分组应用渠道为：支付宝扫码，分组类型：官方参数 ，请填写关键参数</p>
          <FormItem >
            <Input style={styles.formbinderbox} name='feilv' placeholder='费率' hasClear />
          </FormItem>
          <FormItem >
            <Input style={styles.formbinderbox} name='hezuohuoban' placeholder='合作伙伴身份' hasClear />
          </FormItem>
          <FormItem >
            <Input.TextArea style={styles.formbinderbox} placeholder="支付宝公钥..." name="description" />
          </FormItem>
          <p>RSA公钥类型</p>
          <FormItem>
            <Select style={{ width: '150px'}} defaultValue={{ value: 'RSA(SHA1)', label: 'RSA(SHA1)' }} name="RSAss" dataSource={RSAss} />
          </FormItem>
          <FormItem >
            <Input.TextArea style={styles.formbinderbox} placeholder="应用秘钥..." name="descriptions" />
          </FormItem>
          <FormItem >
            <div className='officialleft'>
              <p>退款时是否退还手续费</p>
              <Select style={styles.officialleftsele} defaultValue={{ value: '是', label: '是' }} name="shouxufei" dataSource={shouxufei} />
            </div>
            <div className='officialright'>
              <p>订单有效时间</p>
              <Input style={styles.officialrightsele} name='shuzi' placeholder='5' />
              <Select style={styles.officialrightsele} defaultValue={{ value: '分', label: '分' }} name="shijian" dataSource={shijian} />
            </div>
          </FormItem>
        </Form>
        <div className='officialbtn'>
          <button>查看填写参数</button>
          <div className='officialbtn-right'>
            <button onClick={this.officialclose.bind(this)}>取消</button>
            <button>添加</button>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  formbinderbox: {
    width: '200px',
    margin: '5px',
    borderRadius: '5px',
    zIndex: '8889',
  },
  officialleftsele: {
    width: '50px',
  },
  officialrightsele: {
    width: '30px',
  },
};

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox, Form, Upload } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../../index.css';
import ApplyBilling from '../ApplyBilling';

const { Row, Col } = Grid;

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
};
function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(data, file) {
  console.log('onSuccess callback : ', file);
}

function onError(file) {
  console.log('onError callback : ', file);
}

export default class ApplyBillingNext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        kaipiaojine: '',
      },
    };
  }

  applybillingnextclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  applybillingnextopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    // this.ApplyBilling.applybillingclose();
    this.confirmCallBack = confirm;
  }

  applybillingpreviousopen() {
    this.applybillingnextclose();
    // this.ApplyBilling.applybillingopen();
  }
  btn() {

  }


  formChange = (value) => {
    this.setState({
      value,
    });
  };


  render() {
    if (!this.state.open) return null;
    return (
      <div className='apply-billing-next-bulletbox'>
        <ApplyBilling ref={ node => this.ApplyBilling = node } />
        <h2>申请开票</h2>
        <span className='x-span' onClick={this.applybillingnextclose.bind(this)}>x</span>
        <FormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div>
            <Message type='notice' className='message'>
              <ul>
                <li>1.目前只支持纸质发票，暂不支持电子发票。在您提交开票申请后，我们将在5个工作日内为您开发票并用顺丰快递邮寄给您（不包括快递运输时间），请您耐心等待。</li>
                <li>2.预付费，后付费，续费订单都可开票，开具的发票内容为信息技术服务云服务费。</li>
              </ul>

            </Message>
          </div>
          <ul>
            <li>发票类型：abc</li>
            <li>发票抬头：上海</li>
          </ul>

          <h2 style={{ display: 'block' }}>邮寄信息</h2>
          <div className='apply-billing-next-box' style={{ display: 'inline-block' }}>
            <p className='name-p'>张三</p>
            <Button style={styles.defaultbtn} type='primary' size='small'>默认</Button>
            <ul style={{ marginLeft: '10px' }}>
              <li>13612345678</li>
              <li>上海市闵行区......</li>
            </ul>
            <Button style={styles.modifybtn} type='secondary' size='medium'>修改</Button>
            <Button style={styles.deletebtn} type='primary' size='medium'>删除</Button>
          </div>
          <div style={{ display: 'inline-block', float: 'right', width: '280px', height: '150px', border: '1px solid #bbbbbb' }}>
            <Upload
              shape='card'
              style={{ color: '#999999', marginTop: '30px', textAlign: 'center' }}
              action="/web/beta/v1.0/uploadPhoto"
              name="legalpersonimg"
              limit={1}
              accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
              beforeUpload={beforeUpload}
              onChange={onChange}
              onSuccess={onSuccess}
              onError={onError}
              formatter={(res, file) => {
                return {
                  success: res.errCode === 0 ,
                  url: res.data.downloadURL,
                };
              }}
            />
          </div>
        </FormBinderWrapper>
        <div style={{ marginTop: '15px' }}>
          <Button style={styles.previousbtn} type='secondary' size='large' onClick={this.applybillingpreviousopen.bind(this)}>上一步</Button>
          <Button style={styles.confirmbtn} type='primary' size='large' onClick={this.btn.bind(this)}>确认开票</Button>
        </div>
      </div>
    );
  }
}

const styles = {
  defaultbtn: {
    borderRadius: '5px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    marginLeft: '190px',
    display: 'inline-block',
  },
  modifybtn: {
    borderRadius: '5px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    display: 'inline-block',
    margin: '10px 15px 0px 70px',
  },
  deletebtn: {
    borderRadius: '5px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    display: 'inline-block',
    margin: '10px 0px 0px 15px',
  },
  previousbtn: {
    display: 'inline-block',
    margin: '20px 20px 0px 100px',
    borderRadius: '5px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    width: '80px',
    height: '30px',
  },
  confirmbtn: {
    display: 'inline-block',
    margin: '20px 60px 0px 20px',
    borderRadius: '5px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    width: '80px',
    height: '30px',
  },
};

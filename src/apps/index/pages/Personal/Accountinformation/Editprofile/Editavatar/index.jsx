import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input, Button , Grid, Form, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox, Upload, Slider } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';

import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../../index.css';

const FormItem = Form.Item;

const { Row, Col } = Grid;
const formItemLayout = {
/*  labelCol: { xxs: 8, s: 12, l: 5 },
  wrapperCol: { s: 6, l: 10 }, */
  labelCol: { s: 6 },
  wrapperCol: { s: 14 },
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

export default class Editavatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
      },
    };
  }

  editavatarclose() {
    this.setState({
      open: false,
      content: null,
    });
  }
  editavataropen(content,confirm) {
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
      <div className='editavatar-bulletbox'>
        <h2>编辑头像</h2>
        <div>
          <Upload.Card
            action="/web/beta/v1.0/uploadPhoto"
            name="businesslicenseimg"
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
          <p>支持jpg、png格式，大小不超过3M</p>
        </div>

        <div style={{ marginTop: '20%' }}>
          <Button type='secondary'style={styles.cancelbtn} siza='large' onClick={this.editavatarclose.bind(this)}>取消</Button>
          <Button type='primary'style={styles.submitbtn} siza='large'>保存</Button>
        </div>

      </div>
    );
  }
}

const styles = {
  cancelbtn: {
    display: 'inline-block',
    width: '80px',
    height: '28px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    borderRadius: '6px',
  },
  submitbtn: {
    display: 'inline-block',
    marginLeft: '15%',
    width: '80px',
    height: '28px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    borderRadius: '6px',
  },
};

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
  console.log('beforeUpload : ', info);
}

function onChange(info) {
  console.log('onChange : ', info);
}

function onSuccess(info) {
  console.log('onSuccess : ', info);
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
        {/*        <Message type='notice' className='message'>
          提示：因税务新政要求，申请开具企业增值普通发票的用户开票时必须提供“纳税人识别号”信息。
        </Message> */}
        <div>
          <Upload
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            beforeUpload={beforeUpload}
            onChange={onChange}
            onSuccess={onSuccess}
            multiple
            defaultValue={[{
              name: 'IMG.png',
              state: 'done',
              size: 1024,
              downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
              fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
              imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            }]}
          >
            <Button type="primary" style={{ margin: '0 0 10px' }}>Upload File</Button>
          </Upload>
          <p>支持jpg、png格式，大小不超过3M</p>
        </div>


        <Button type='secondary' size='large'>重新选择</Button>
        <Button type='secondary'style={styles.cancelbtn} siza='large' onClick={this.editavatarclose.bind(this)}>取消</Button>
        <Button type='primary'style={styles.submitbtn} siza='large'>保存</Button>
      </div>
    );
  }
}

const styles = {
  cancelbtn: {
    display: 'inline-block',
/*    margin: '0px 60px 0px 130px',*/
    width: '80px',
    height: '28px',
    backgroundColor: 'rgba(230, 241, 252, 1)',
    color: 'rgba(78, 126, 232, 1)',
    borderColor: 'rgba(193, 241, 248, 1)',
    borderRadius: '6px',
  },
  submitbtn: {
    display: 'inline-block',
    width: '80px',
    height: '28px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
    borderRadius: '6px',
  },
};

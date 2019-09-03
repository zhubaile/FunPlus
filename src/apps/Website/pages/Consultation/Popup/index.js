import React, { Component } from 'react';
// import { FormattedMessage, injectIntl } from 'react-intl'; // 国际化
import { Button, Input, Form,Message,Select } from '@alifd/next';
import '../../index.css';

const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { fixedSpan: 3 },
  wrapperCol: { span: 20 },
};

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      values: {
        name: '',
        username: '',
        email: '',
        codedizhi: '',
        message: '',
        phone: '',
        xuqiu: '',
      },
    };
  }
  close=()=>{
    this.setState({
      open: false,
    });
  }
  open() {
    this.setState({
      open: true,
    });
  }
  sendleavmessage=(e)=>{
    if (!e.message) {
      Message.success('留言输入框不能为空');
      return null;
    }
    this.setState({
      values: {
        name: '',
        username: '',
        email: '',
        codedizhi: '',
        message: '',
        phone: '',
        xuqiu: '',
      },


    })
    debugger;
  }
  render() {
    const xuqiu = [
      { value: '1 ', label: '产品售前咨询' },
      { value: '2', label: '定制服务咨询' },
      { value: '3', label: '产品意见反馈' },
      { value: '4', label: '商务媒体合作' },
      { value: '5', label: '其他' },
    ];
    if (!this.state.open) return null;
    return (
      <div className='consultpopup'>
        <div className='consultpopup-head'>
          <p className='consultpopup-head-left'>请您留言</p>
          <p className='consultpopup-head-right' onClick={this.close} style={{ fontWeight: 'bold' }}>—</p>
        </div>
        {/*  <div className='consultpopup-main'>
          <p style={{ textAlign: 'center' }}>--客服014为您服务--</p>  {...formItemLayout}
        </div> */}
        <div className='consultpopup-footer'>
          <Form style={{ width: '350px', marginLeft: '5px' }} size="medium" value={this.state.values}>
            <FormItem className='formmain'>
              <Input name="name" placeholder='姓名' />
            </FormItem>
            <FormItem className='formmain'>
              <Input name="phone" placeholder='手机号' />
            </FormItem>
            <FormItem className='formmain'>
              <Input name="email" placeholder='邮箱' />
            </FormItem>
            <FormItem className='formmain'>
              <Input name="username" placeholder='公司名称' />
            </FormItem>
            <FormItem className='formmain'>
              <Input name="codedizhi" placeholder='公司地址' />
            </FormItem>
            <FormItem className='formmain'>
              <Select name='xuqiu' dataSource={xuqiu} placeholder='需求选择' />
            </FormItem>
            <FormItem className='formmain'>
              <Input.TextArea name='message' placeholder="再次输入留言内容，我们会及时与您联系" aria-label="TextArea" rows={6} />
            </FormItem>
            {/* <FormItem>
              <Form.Submit style={{ width: '100%' }} type="primary" validate onClick={this.handleSubmit}>Submit</Form.Submit>
            </FormItem> */}
            <FormItem>
              <Form.Submit type="primary" className='sendbtn' onClick={this.sendleavmessage}>发送</Form.Submit>
            </FormItem>
          </Form>
          {/* <textarea
            className='consultpopup-userinput'
            placeholder= '输入消息...'
          /> */}
          {/* <Button type="primary" className='sendbtn'>发送</Button> */}
        </div>
      </div>
    );
  }
}

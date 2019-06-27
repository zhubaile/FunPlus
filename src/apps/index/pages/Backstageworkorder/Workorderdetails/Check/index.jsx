import React, { Component } from 'react';
import { Button ,Message } from '@alifd/next';
import { workOrderisStatement } from '@indexApi';
import '../../../index.css';

export default class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: null,
      value: {

      },
    };
  }
  checkclose=()=> {
    this.setState({
      open: false,
      content: null,
    });
  }
  checkopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }
  // 结单按钮
  checkdan() {
    const _id = this.state.content;
    workOrderisStatement({
      _id,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        Message.success(data.message);
        this.props.history.push("/admin/backstageworkorder/Allworkorders");
      }
    });
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className='check'>
        <div className='check-top'>
          <p>结束工单</p>
          <span onClick={this.checkclose.bind(this)}>×</span>
        </div>
        <hr />
        <div className='check-middle'>
          <p>当您确认工单问题已经得到解决， 您可关闭工单。 关闭工单后如果有新的问题，您可以提交新的工单咨询。</p>
        </div>
        <div className='check-bottom'>
          <Button size='large' type='primary' onClick={this.checkdan.bind(this)}>确认</Button>
          <Button size='large' type='secondary' onClick={this.checkclose.bind(this)}>取消</Button>
        </div>
      </div>
    );
  }
}

const styles = {
  cancelbtn: {
    height: '28px',
    borderRadius: '6px',
    backgroundColor: '#E2EDFF',
    borderColor: '#A3D0FD',
  },
  deletebtn: {
    height: '28px',
    borderRadius: '6px',
  },
};

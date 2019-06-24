import React, { Component } from 'react';
import { Button } from '@alifd/next';
import '../../../index.css';

export default class Deleteapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {

      },
    };
  }

  deleteappclose=()=> {
    this.setState({
      open: false,
      content: null,
    });
  }

  deleteappopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className='deleteapp'>
        <div className='deleteapp-top'>
          <p>删除应用</p>
          <span onClick={this.deleteappclose.bind(this)}>×</span>
        </div>
        <hr />
        <div className='deleteapp-middle'>
          <p>是否删除应用？</p>
        </div>
        <hr />
        <div className='deleteapp-bottom'>
          <Button size='large' type='secondary' onClick={this.deleteappclose.bind(this)}>取消</Button>
          <Button size='large' type='primary'>删除</Button>
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

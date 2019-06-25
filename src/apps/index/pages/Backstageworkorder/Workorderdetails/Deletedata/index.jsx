import React, { Component } from 'react';
import { Button } from '@alifd/next';
import '../../../index.css';

export default class Deletedata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {

      },
    };
  }

  deletedataclose=()=> {
    this.setState({
      open: false,
      content: null,
    });
  }

  deletedataopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className='deletedata'>
        <div className='deletedata-top'>
          <p>删除数据</p>
          <span onClick={this.deletedataclose.bind(this)}>×</span>
        </div>
        <hr />
        <div className='deletedata-middle'>
          <p>是否删除数据？</p>
        </div>
        <hr />
        <div className='deletedata-bottom'>
          <Button size='large' type='secondary' onClick={this.deletedataclose.bind(this)}>取消</Button>
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

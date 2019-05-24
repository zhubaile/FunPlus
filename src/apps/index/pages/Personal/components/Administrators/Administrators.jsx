import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import '../../../index.css';

const { Row, Col } = Grid;
export default class Administrators extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='administrators'>
        <img src={require('../../../../../../assets/img/img/avatar1.jpg')} alt="" />
        <h2>阿萨德问问阿</h2>
        <p>超级管理员</p>
        <div>
          <img src={require('../../../../../../assets/img/shouye/twittter.png')} style={{ width: '25px', height: '25px' }} alt="" />
          <img src={require('../../../../../../assets/img/shouye/face.png')} style={{ width: '25px', height: '25px' }} alt="" />
        </div>
      </div>
    );
  }
}

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
    const { array } = this.props;
    return (
      <div className='administrators'>
        <img src={require('@img/img/avatar1.jpg')} alt="" />
        <h2>{array.username}</h2>
        <p>{array.premissions}</p>
        <div>
          <img src={require('@img/shouye/twittter.png')} style={{ width: '25px', height: '25px' }} alt="" />
          <img src={require('@img/shouye/face.png')} style={{ width: '25px', height: '25px' }} alt="" />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import '../../../layouts/BasicLayout/components/Header/index.scss';
import '../../index.css';

const { Row, Col } = Grid;
export default class Customerservice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='Customerservice'>
        <i className="os-icon os-icon-mail-07"></i><a>在线客服</a>
      </div>
    );
  }
}

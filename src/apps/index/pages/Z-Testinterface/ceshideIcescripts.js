import React, { Component } from 'react';
import { Table,Input,Radio ,Dialog ,Switch,Rating,Message,CascaderSelect, Select , Form } from '@alifd/next';
import moment from "moment/moment";


export default class Testinterface extends Component {
  static displayName = 'Testinterface';

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(e => console.log(e));
  }

  handleChange(value, data, extra) {
    this.setState({
      value,
    });
  }
  render() {
    return (
      <div className='backstageworkorder'>
        <p>评价</p>
        <Rating name='star' count='5' size='large' />
        <p>开关</p>
        <Switch />
        <p>多选</p>
        <CascaderSelect style={{ width: '302px' }} changeOnSelect value={this.state.value} dataSource={this.state.data} onChange={this.handleChange} />
      </div>
    );
  }
}
const styles = {
  btn: {
    position: 'absolute',
    right: '60px',
    height: '28px',
    width: '80px',
    borderRadius: '6px',
  },
  btns: {
    position: 'absolute',
    right: '60px',
    height: '28px',
    width: '140px;',
    borderRadius: '6px',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};

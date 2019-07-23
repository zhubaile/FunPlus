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
      selectduo: [
        { value: '0' },
      ],
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
    const ApplicationChannels = [
      { value: '10', label: '选择应用通道' },
      { value: '20', label: '支付宝手机APP' },
      { value: '30', label: '微信扫码' },
    ];
    const aaa = [
      { value: '0', label: '选择应用通道' },
      { value: '1', label: '支付宝手机APP' },
      { value: '2', label: '微信扫码' },
      { value: '3', label: '30' },
      { value: '4', label: '40' },
      { value: '5', label: '50' },
    ];
    return (
      <div className='backstageworkorder'>
        <p>评价</p>
        <Rating name='star' count='5' size='large' />
        <p>开关</p>
        <Switch />
        <p>多选</p>
        <CascaderSelect style={{ width: '302px' }} changeOnSelect value={this.state.value} dataSource={this.state.data} onChange={this.handleChange} />
        <p>1</p>
        <Select mode="multiple" dataSource={aaa} style={{ width: 200 }} defaultValue={this.state.selectduo} />
        <p>2</p>
        <Select useDetailValue defaultValue={{ value: '10' }} dataSource={ApplicationChannels} style={{ width: 150 }} />
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

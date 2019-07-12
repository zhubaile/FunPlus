import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, Message,Radio } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
// import { addsettingwhiteIps } from "@indexApi";

import '../../../index.css';

const RadioGroup = Radio.Group;
const { Row, Col } = Grid;
export default class Ippopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  ippopupclose=()=> {
    this.setState({
      open: false,
      content: null,
    });
  }
  ippopupopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }
  /*  formChange = (value) => {
    this.setState({
      value,
    });
  }; */
  componentDidMount() {
  }
  // deviceGroupaddparmas
  addip() {
    /* const IP = this.input.value;
    console.log(IP);
    addsettingwhiteIps({
      ip: IP,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        this.ippopupclose();
        Message.success(data.message);
        location.reload(); // 待优化
      } else { Message.success(data.message); }
    }); */
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className='piLpaypopup'>
        <div className='piLpaypopup-top'>
          <h2>选择创建企业付款类型</h2>
          <RadioGroup aria-labelledby="radio-a11y">
            <Radio id="python" value="python">支付宝批量付款</Radio>
            <Radio id="java" value="java">银联代付</Radio>
            <Radio id="c" value="c">京东代付</Radio>
            <Radio id="t" value="t">通联代付</Radio>
          </RadioGroup>
        </div>
        <div className='piLpaypopup-content'>
          <span>新增IP地址</span>
          <input type="text" ref={input=>this.input = input} />
        </div>
        <div className='piLpaypopup-btn'>
          <button onClick={this.ippopupclose.bind(this)}>取消</button>
          <button onClick={this.addip.bind(this)}>确定</button>
        </div>
      </div>
    );
  }
}
const styles = {
  formbinderbox: {
    width: '150px',
    margin: '15px',
    borderRadius: '5px',
    zIndex: '8889',
  },
  Limitintervalinput: {
    width: '100px',
    padding: '10px 3px',
  },
  main: { display: 'flex', flexDirection: 'column' },
  maintop: { display: 'flex' },
  maintopspanleft: { width: '20%' },
  maintoppright: { width: '80%', borderBottom: '2px solid #BBBBBB' ,marginBottom: '20px' },
  mainmain: { display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' },
  allborder: { width: '100%', borderBottom: '2px solid #BBBBBB', margin: '10px 0' },
  mainmainbox: { marginLeft: '20px' },
  posbtn: { position: 'absolute', right: '20px' },
  posbtna: { bottom: '15px', right: '10px', background: '#E6F1FC', color: '#1989FA', borderRadius: '5px', marginLeft: '20px' },
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },
  message: {
    background: '#E6F7FF',
    border: '1px solid #91D5FF',
    borderradius: '5px',
    margin: '10px 20px 25px',
    width: '50%',
    float: 'left',
  },
  bg: {
    background: '#E6F1FC',
    color: '#1989FA',
    borderRadius: '5px',
    marginLeft: '20px',
    marginTop: '20px',
  },
};

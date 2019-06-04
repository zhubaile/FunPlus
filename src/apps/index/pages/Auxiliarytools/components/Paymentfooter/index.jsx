import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@alifd/next';


export default class Panmentfooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='paymentfooter'>
        <div className='paymentfooter-box'>
          1.设备管理 > 添加 > 自定义分组 > 分组类型选 > 此支付渠道
        </div>
        <Icon type='arrow-right' className='box-icon' />
        <div>
          2.向步骤1中的 自定义分组 > 添加此设备
        </div>
        <Icon type='arrow-right' className='box-icon' />
        <div>
          3.路由规则》新增路由规则&gt;应用与此支付渠道&gt; 选择步骤一种的自定义分组
        </div>
        <Icon type='arrow-right' className='box-icon' />
        <div>
          4.支付渠道内启用此通道
        </div>
        <Icon type='arrow-right' className='box-icon' />
        <div>
         5.API发起
        </div>
      </div>
    );
  }
}

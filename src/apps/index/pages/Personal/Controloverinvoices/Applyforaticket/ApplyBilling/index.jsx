import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch, Checkbox } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../../index.css';
import ApplyBillingNext from "../ApplyBillingNext";


const { Row, Col } = Grid;

export default class ApplyBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        kaipiaojine: '',
      },
    };
  }

  applybillingclose() {
    this.setState({
      open: false,
      content: null,
    });
  }

  applybillingopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }
  formChange = (value) => {
    this.setState({
      value,
    });
  };

  applybillingbtnopen() {
    this.ApplyBillingNext.applybillingnextopen();
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className='apply-billing-bulletbox'>
        <ApplyBillingNext ref={ node => this.ApplyBillingNext = node } />
        <h2>申请开票</h2>
        <span className='x-span' onClick={this.applybillingclose.bind(this)}>x</span>
        <FormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div>
            <Message type='notice' className='message'>
              <ul>
                <li>1.目前只支持纸质发票，暂不支持电子发票。在您提交开票申请后，我们将在5个工作日内为您开发票并用顺丰快递邮寄给您（不包括快递运输时间），请您耐心等待。</li>
                <li>2.预付费，后付费，续费订单都可开票，开具的发票内容为信息技术服务云服务费。</li>
                {/*                  <li>你可能还想了解： <span>发票税点及类目</span> <span>如何选择发票类型</span> <span>不可开发票的费用有哪些</span></li> */}
              </ul>
              {/*              <p>1.目前只支持纸质发票，暂不支持电子发票。在您提交开票申请后，我们将在5个工作日内为您开发票并用顺丰快递邮寄给您（不包括快递运输时间），请您耐心等待。</p>
              <p>2.预付费，后付费，续费订单都可开票，开具的发票内容为信息技术服务云服务费。</p> */}
            </Message>
          </div>
          <p>可开票金额：0.00元</p>
          <span>本次开票金额</span>
          <FormBinder name='kaipiaojine'>
            <Input style={styles.inputsize} placeholder='' hasClear />
          </FormBinder>
          <span>元</span>
          <Checkbox style={styles.checkbox} defaultChecked label='将可开票金额全部开票' />
          <Button style={styles.nextbtn} type='primary' size='large' onClick={this.applybillingbtnopen.bind(this)}>下一步</Button>
        </FormBinderWrapper>
      </div>
    );
  }
}
const styles = {
  inputsize: {
    width: '80px',
    height: '30px',
    margin: '0px 10px',
    /*    borderLeft: 'none', */
  },
  checkbox: {
    display: 'block',
    margin: '15px 90px',
  },
  nextbtn: {
    display: 'block',
    margin: '15px 90px',
    width: '80px',
    height: '30px',
    borderRadius: '5px',
    backgroundColor: 'rgba(86, 119, 252, 1)',
  },
};

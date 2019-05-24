import React, { Component } from 'react';
import { Input, Tab, Message,Form, Button } from '@alifd/next';
/* import FilterForm from '../FilterForm';
import Table from '../Table'; */

// <RangePicker />   <Pagination defaultCurrent={2} />


export default class FilterTag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='incomepage'>
        <Tab shape='pure' className='income-tab'>
          <Tab.Item title="收入订单">
            <div>
              <div className='income-tabs leftbtn'>
                <Button size="large">总交易金额：</Button>
                <Button size="large">已支付金额：</Button>
                <Button size="large">支付成功率：</Button>
              </div>
              <div className='income-tabs rightbtn'>
                <Button className='bg' size="large" type="secondary" disabled style={{ opacity: 0.5 }}>表格列过滤</Button>
                <Button className='bg' size="large" type="secondary">导出结果为表格</Button>
              </div>
            </div>
            <div className='income-tabs-border' />
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}

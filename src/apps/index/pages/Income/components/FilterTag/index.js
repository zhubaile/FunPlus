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
                <Button size="large">总交易金额：{this.props.Filtertag.totalAmount}</Button>
                <Button size="large">已支付金额：{this.props.Filtertag.payAmount}</Button>
                <Button size="large">支付成功率：{this.props.Filtertag.successRate}</Button>
              </div>
              <div className='income-tabs rightbtn'>
                <Button className='btn-all bg' size="large" type="secondary" disabled style={{ opacity: 0.5 }}>表格列过滤</Button>
                <Button className='btn-all bg' size="large" type="secondary">导出结果为表格</Button>
              </div>
            </div>
            <div className='income-tabs-border' />
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}


/*const styles = {
  sixRadius: {
    borderRadius: '6px',
  },
  btnBackground: {
    backgroundColor: '#E2EDFF',
  },
  btnBordercolor: {
    borderColor: '#A3D0FD',
  },
  selectedBackground: {
    backgroundColor: '#225AE1',
  },
};*/

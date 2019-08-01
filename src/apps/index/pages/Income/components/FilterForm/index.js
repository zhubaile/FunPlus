/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, DatePicker, Select, Input, Button } from '@alifd/next';
import moment from 'moment';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
// import { getLocale } from '../../../../../../assets/Internationalization/locale';
import { incomeList } from '@indexApi';

// const locale = getLocale();

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
// moment.locale(locale);

export default class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        timeType: 'createAt',
        startdate: [],
        orderStatus: '',
        payChannel: '',
        device: [],
        out_trade_no: '',
      },
    };
  }

  /* formChange = (value) => {
    // this.props.onChange(value);
  }; */
  // 重置
  handleReset() {
    this.setState({
      value: {
        timeType: 'createAt',
        startdate: [],
        orderStatus: '',
        payChannel: '',
        device: [],
        out_trade_no: '',
      },
    });
  }
  // 搜索按钮
  search(e) {
    const { validateFields } = this.refs.form;
    validateFields((errors,values)=>{
      const arrivalDate = [];
      if (values.startdate.length == 2) {
        const startdatestart = moment(values.startdate[0]._d).valueOf();
        const startdateend = moment(values.startdate[1]._d).valueOf();
        arrivalDate.push(startdatestart);
        arrivalDate.push(startdateend);
      }
      debugger;
      this.props.onChange(values,arrivalDate);
    });
  }
  // 输入支付渠道获取设备(级联子元素)
  Accesschannels(e,v,i) {
    const values = this.state.value;
    const value = Object.assign({},values,{ device: [] });
    this.setState({
      value,
    },()=>{
      const device = i.son;
      const devices = device.map(item=>({ value: item._id, label: item.dName }));
      const valueson = Object.assign({},values,{ device: devices });
      this.setState({
        value: valueson,
      });
    });
  }
  render() {
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    const orderStatus = this.props.Filterform.orderStatus; // 支付状态
    const payChannel = this.props.Filterform.channel; // 支付渠道
    const timeType = this.props.Filterform.dateType; // 支付时间
    const device = this.state.value.device; // 支付渠道 子数据
    return (
      <div className='filterform'>
        <FormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <Row wrap gutter="20" style={styles.formRow}>
            <Col l="24">
              <div style={styles.formItem}>
                <span style={styles.formLabel}>选择时间</span>
                <FormBinder name="timeType"
                  autoWidth={false}
                >
                  <Select style={styles.formSelect} dataSource={timeType} defaultValue='createdAt' />
                </FormBinder>
                <FormBinder name='startdate' >
                  <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
                </FormBinder>
                <span style={styles.formLabel}>支付状态</span>
                <FormBinder name='orderStatus'>
                  <Select style={styles.formSelect} dataSource={orderStatus} />
                </FormBinder>
                {/* <span style={styles.formLabel}>退款状态</span>
              <FormBinder name='refundStatus'>
                <Select style={styles.formSelect} dataSource={refundStatus} />
              </FormBinder> */}
              </div>
            </Col>

            <Col l="24">
              <div style={styles.formItemTwo}>
                <span style={styles.formLabel}>支付渠道</span>
                <FormBinder name='payChannel'>
                  <Select style={styles.formSelect} dataSource={payChannel} onChange={this.Accesschannels.bind(this)} />
                </FormBinder>
                <FormBinder name="device" >
                  <Select style={{ width: '200px' }} dataSource={device} />
                </FormBinder>
                <span style={styles.formLabel}>订单号</span>
                <FormBinder name='out_trade_no'>
                  <Input className='input-bg' placeholder='输入订单号' />
                </FormBinder>
                <Button className='btn-all bg' size="large" type="secondary" onClick={this.search.bind(this)}>搜索</Button>
                <Button className='btn-all bg' size="large" type="secondary" onClick={this.handleReset.bind(this)}>重置</Button>
              </div>
            </Col>
          </Row>
        </FormBinderWrapper>
      </div>
    );
  }
}

const styles = {
  formItem: {
    display: 'flex',
    alignItems: 'center',
  },
  formItemTwo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
  },
  formLabel: {
    minWidth: '80px',
    marginLeft: '10px',
    textAlign: 'center',
  },
  formSelect: {
    width: '200px',
    margin: '0 10px',
  },
};

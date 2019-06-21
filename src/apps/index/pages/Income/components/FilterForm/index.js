/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, DatePicker, Select, Input, Button } from '@alifd/next';
import moment from 'moment';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
// import { getLocale } from '../../../../../../assets/Internationalization/locale';
import { incomeList,getDevice } from '@indexApi';

// const locale = getLocale();

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
// moment.locale(locale);

export default class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: null,
      value: {
        timeType: '',
        startdate: [],
        orderStatus: '',
        // refundStatus: '全部',
        payChannel: '',
        device: '',
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
        timeType: '',
        startdate: [],
        orderStatus: '',
        // refundStatus: '',
        payChannel: '',
        device: null,
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
        const startdatestart = moment(values.startdate[0]._d).format('YYYY-MM-DD HH:mm:ss');
        const startdateend = moment(values.startdate[1]._d).format('YYYY-MM-DD HH:mm:ss');
        arrivalDate.push(startdatestart);
        arrivalDate.push(startdateend);
      }
      this.props.onChange(values,arrivalDate);
    });
  }
  // 输入支付渠道获取设备
  Accesschannels(v) {
    getDevice({
      _id: v,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        const groupid = data.data;
        const groupids = groupid.map(item=>({ value: item._id,label: item.dName }));
        this.setState({
          device: groupids,
        });
      }
    });
  }
  render() {
    // const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    // const endValue = moment('2017-12-15', 'YYYY-MM-DD', true); defaultValue={[startValue,endValue]}
    const orderStatus = this.props.Filterform.orderStatus; // 支付状态
    const payChannel = this.props.Filterform.channel; // 支付渠道
    const timeType = this.props.Filterform.dateType; // 支付时间
    const device = this.state.device;
    return (
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
                <Select style={styles.formSelect} dataSource={timeType} />
              </FormBinder>
              <FormBinder name='startdate'>
                <RangePicker showTime resetTime />
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
            <div style={styles.formItem}>
              <span style={styles.formLabel}>支付渠道</span>
              <FormBinder name='payChannel'>
                <Select style={styles.formSelect} dataSource={payChannel} onChange={this.Accesschannels.bind(this)} />
              </FormBinder>
              <FormBinder name="device" >
                <Select style={{ width: '200px' }} dataSource={device} />
              </FormBinder>
              <span style={styles.formLabel}>订单号</span>
              <FormBinder name='out_trade_no'>
                <Input placeholder='输入订单号' hasClear />
              </FormBinder>
              <Button className='bg' size="large" type="secondary" onClick={this.search.bind(this)}>搜索</Button>
              <Button className='bg' size="large" type="secondary" onClick={this.handleReset.bind(this)}>重置</Button>
            </div>
          </Col>
        </Row>
      </FormBinderWrapper>
    );
  }
}

const styles = {
  formItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
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

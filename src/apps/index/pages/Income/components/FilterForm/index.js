/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, DatePicker, Select, Input, Button } from '@alifd/next';
import moment from 'moment';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { getLocale } from '../../../../../Internationalization/locale';

const locale = getLocale();

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
moment.locale(locale);
export default class Filter extends Component {
  state = {
    value: {
      selectiontime: '创建时间',
      startdate: '',
      paymentstatus: '全部',
      refundstatus: '全部',
      paymentchannelone: '全部',
      paymentchanneltwo: '全部 显示设备号可多选',
      ordernumber: '',
    },
  };

  formChange = (value) => {
    this.props.onChange(value);
  };
  handleReset() {
    this.setState({
      value: {
        selectiontime: '创建时间',
        startdate: '',
        paymentstatus: '全部',
        refundstatus: '全部',
        paymentchannelone: '全部',
        paymentchanneltwo: '全部 显示设备号可多选',
        ordernumber: '',
      },
    });
  }
  render() {
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    const selectiontime = [
      { value: '创建时间', label: '创建时间' },
      { value: '支付时间', label: '支付时间' },
    ];

    const paymentstatus = [
      { value: '全部', label: '全部' },
      { value: '支付完成', label: '支付完成' },
      { value: '未支付', label: '未支付' },
      { value: '撤销', label: '撤销' },
    ];
    const refundstatus = [
      { value: '全部', label: '全部' },
      { value: '有退款', label: '有退款' },
      { value: '无退款', label: '无退款' },
    ];
    const paymentchannelone = [
      { value: '全部', label: '全部' },
      { value: '支付宝wap', label: '支付宝wap' },
      { value: '微信扫一扫', label: '微信扫一扫' },
      { value: '支付宝当面付', label: '支付宝当面付' },
      { value: '微信APP', label: '微信APP' },
      { value: '支付宝手机跳转', label: '支付宝手机跳转' },
    ];
    const paymentchanneltwo = [
      { value: '全部 显示设备号可多选', label: '全部 显示设备号可多选' },
      { value: '设备3', label: '设备3' },
      { value: '微信扫一扫', label: '微信扫一扫' },
      { value: '支付宝当面付', label: '支付宝当面付' },
      { value: '微信APP', label: '微信APP' },
      { value: '支付宝手机跳转', label: '支付宝手机跳转' },
    ];

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
              <FormBinder name="selectiontime"
                required
                message="请输入正确的名称"
                autoWidth={false}
              >
                <Select style={styles.formSelect} dataSource={selectiontime} />
              </FormBinder>
              <FormBinder name='startdate'>
                <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
              </FormBinder>
              <span style={styles.formLabel}>支付状态</span>
              <FormBinder name='paymentstatus'>
                <Select style={styles.formSelect} dataSource={paymentstatus} />
              </FormBinder>
              <span style={styles.formLabel}>退款状态</span>
              <FormBinder name='refundstatus'>
                <Select style={styles.formSelect} dataSource={refundstatus} />
              </FormBinder>
            </div>
          </Col>

          <Col l="24">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>支付渠道</span>
              <FormBinder name='paymentchannelone'>
                <Select style={styles.formSelect} dataSource={paymentchannelone} />
              </FormBinder>
              <FormBinder name="paymentchanneltwo" required message="请输入正确的名称" >
                <Select style={{ width: '200px' }} defaultValue={{ value: '全部 显示设备号可多选', label: '全部 显示设备号可多选' }} dataSource={paymentchanneltwo} />
              </FormBinder>
              <span style={styles.formLabel}>订单号</span>
              <FormBinder name='ordernumber'>
                <Input placeholder='输入订单号' hasClear />
              </FormBinder>
              <Button className='bg' size="large" type="secondary">搜索</Button>
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

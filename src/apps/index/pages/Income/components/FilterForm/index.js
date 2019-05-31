/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, DatePicker, Select, Input, Button } from '@alifd/next';
import moment from 'moment';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { getLocale } from '../../../../../Internationalization/locale';
import { incomeList } from '../../../../api';

const locale = getLocale();

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
moment.locale(locale);
export default class Filter extends Component {
  state = {
    value: {
      dateType: '创建时间',
      startdate: '',
      status: '全部',
      refundStatus: '全部',
      payChannel: '全部',
      groupid: '全部 显示设备号可多选',
      outTradeNo: '',
      page: '1',
      pageSize: '15',
    },
  };

  formChange = (value) => {
    debugger;
    this.props.onChange(value);
  };
  handleReset() {
    this.setState({
      value: {
        dateType: '创建时间',
        startdate: '',
        status: '全部',
        refundStatus: '全部',
        payChannel: '全部',
        groupid: '全部 显示设备号可多选',
        outTradeNo: '',
      },
    });
  }
  search(e) {
    const { validateFields } = this.refs.form;
    validateFields((errors,values)=>{
      console.log(values.startdate[0]._d);
      const startdatestart = values.startdate[0]._d;
      const startdateend = values.startdate[1]._d;
      const startdates = [];
      startdates.push(startdatestart);
      startdates.push(startdateend);
      debugger;
      incomeList({
        dateType: values.dateType,
        startdate: startdates,
        status: values.status,
        refundStatus: values.refundStatus,
        payChannel: values.payChannel,
        groupid: values.groupid,
        outTradeNo: values.outTradeNo,
        page: values.page,
        pageSize: values.pageSize,
      });
    });
  }
  render() {
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    const dateType = [
      { value: '创建时间', label: '创建时间' },
      { value: '支付时间', label: '支付时间' },
    ];
    const status = [
      { value: '全部', label: '全部' },
      { value: '支付完成', label: '支付完成' },
      { value: '未支付', label: '未支付' },
      { value: '撤销', label: '撤销' },
    ];
    const refundStatus = [
      { value: '全部', label: '全部' },
      { value: '有退款', label: '有退款' },
      { value: '无退款', label: '无退款' },
    ];
    const payChannel = [
      { value: '全部', label: '全部' },
      { value: '支付宝wap', label: '支付宝wap' },
      { value: '微信扫一扫', label: '微信扫一扫' },
      { value: '支付宝当面付', label: '支付宝当面付' },
      { value: '微信APP', label: '微信APP' },
      { value: '支付宝手机跳转', label: '支付宝手机跳转' },
    ];
    const groupid = [
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
              <FormBinder name="dateType"
                required
                message="请输入正确的名称"
                autoWidth={false}
              >
                <Select style={styles.formSelect} dataSource={dateType} />
              </FormBinder>
              <FormBinder name='startdate'>
                <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
              </FormBinder>
              <span style={styles.formLabel}>支付状态</span>
              <FormBinder name='status'>
                <Select style={styles.formSelect} dataSource={status} />
              </FormBinder>
              <span style={styles.formLabel}>退款状态</span>
              <FormBinder name='refundStatus'>
                <Select style={styles.formSelect} dataSource={refundStatus} />
              </FormBinder>
            </div>
          </Col>

          <Col l="24">
            <div style={styles.formItem}>
              <span style={styles.formLabel}>支付渠道</span>
              <FormBinder name='payChannel'>
                <Select style={styles.formSelect} dataSource={payChannel} />
              </FormBinder>
              <FormBinder name="groupid" required message="请输入正确的名称" >
                <Select style={{ width: '200px' }} defaultValue={{ value: '全部 显示设备号可多选', label: '全部 显示设备号可多选' }} dataSource={groupid} />
              </FormBinder>
              <span style={styles.formLabel}>订单号</span>
              <FormBinder name='outTradeNo'>
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

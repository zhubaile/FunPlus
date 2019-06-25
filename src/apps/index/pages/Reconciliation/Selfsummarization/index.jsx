/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, DatePicker, Select, Tab, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import moment from 'moment';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import Linegraph from '../components/Linegraph';
import '../../index.css';

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
export default class Selfsummarization extends Component {
  state = {
    value: {
      startdate: '',
      paymentchannelone: '全部',
      paymentchanneltwo: '全部 显示设备号可多选',
    },
  };

  formChange = (value) => {
    this.props.onChange(value);
  };
  handleReset() {
    this.setState({
      value: {
        startdate: '',
        paymentchannelone: '全部',
        paymentchanneltwo: '全部 显示设备号可多选',
      },
    });
  }
  render() {
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
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
              <span style={styles.formLabel}>支付渠道</span>
              <FormBinder name='paymentchannelone'>
                <Select style={styles.formSelect} dataSource={paymentchannelone} />
              </FormBinder>
              <FormBinder name="paymentchanneltwo" required message="请输入正确的名称" >
                <Select style={{ width: '200px' }} defaultValue={{ value: '全部 显示设备号可多选', label: '全部 显示设备号可多选' }} dataSource={paymentchanneltwo} />
              </FormBinder>
              <FormBinder name='startdate'>
                <RangePicker style={{ margin: '0 10px' }} showTime resetTime defaultValue={[startValue,endValue]} />
              </FormBinder>
              <Button className='btn-all bg' size="large" type="primary">搜索</Button>
            </div>
          </Col>
        </Row>
        <div className='selfsumm-exhibition'>
          <div className='exhibition-bor'>
            <span>收入</span>
            <div>
              <strong>￥30000</strong>300/笔
            </div>
          </div>
          <div className='exhibition-bor'>
            <span>成功率</span>
            <div>
              <strong>100%</strong>
            </div>
          </div>
          <div className='exhibition-bor'>
            <span>退款</span>
            <div>
              <strong>￥3999</strong>
            </div>
          </div>
          <div className='exhibition-bor'>
            <span>付款</span>
            <div>
              <strong>￥3999</strong>
            </div>
          </div>
          <div className='clearfix' />
        </div>
        <Linegraph />
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

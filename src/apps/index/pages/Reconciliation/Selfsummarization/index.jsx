/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, DatePicker, Select, Tab, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import moment from 'moment';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import Linegraph from '../components/Linegraph';
import { verifybillsummary,verifybillparams } from '@indexApi';
import '../../index.css';
import {Message} from "@alifd/next/lib/index";

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
export default class Selfsummarization extends Component {
  state = {
    value: {
      startdate: [],
      channelId: '',
      deviceId: '',
    },
    Transactionfigures: [],
    Dropdownbox: [],
    Dropdownboxson: [],
  };

    formChange = (value) => {
      this.setState({
        value,
      });
    };
    handleReset() {
      this.setState({
        value: {
          startdate: [],
          channelId: '',
          deviceId: '',
        },
      });
    }
    componentDidMount() {
      verifybillsummary().then(({ status,data })=>{
        if (data.errCode == 0) {
          this.setState({
            Transactionfigures: data.data[0],
          });
        } else {
          Message.success(data.message);
        }
      });
      verifybillparams().then(({ status,data })=>{
        if (data.errCode == 0) {
          const channels = data.data.channels; // 选择渠道
          const devices = data.data.devices; // 选择参数
          const channelss = channels.map(item=>({ value: item._id,label: item.channelName }));
          const dClassifys = devices.map(item=>({ value: item._id,label: item.dName }));
          this.setState({
            Dropdownbox: channelss,
            Dropdownboxson: dClassifys,
          });
        } else {
          Message.success(data.message);
        }
      });
    }
    search() {
      const values = this.state.value;
      debugger;
      this.refs.linegraph.fetchData(values);
    }
    render() {
      const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
      const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
      const paymentchannelone = this.state.Dropdownbox; // 父下拉框
      const paymentchanneltwo = this.state.Dropdownboxson; // 子下拉框
      const { Transactionfigures } = this.state; // 收入支出的数据量
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
                <FormBinder name='channelId'>
                  <Select style={styles.formSelect} dataSource={paymentchannelone} />
                </FormBinder>
                <FormBinder name="deviceId" required message="请输入正确的名称" >
                  <Select style={{ width: '200px' }} dataSource={paymentchanneltwo} />
                </FormBinder>
                <FormBinder name='startdate'>
                  <RangePicker style={{ margin: '0 10px' }} showTime resetTime defaultValue={[startValue,endValue]} />
                </FormBinder>
                <Button className='btn-all bg' size="large" type="primary" onClick={this.search.bind(this)}>搜索</Button>
              </div>
            </Col>
          </Row>
          <div className='selfsumm-exhibition'>
            <div className='exhibition-bor'>
              <span>收入</span>
              <div>
                <strong>￥{Transactionfigures.incomeAmount}</strong>
                {/* 300/笔 */}
              </div>
            </div>
            <div className='exhibition-bor'>
              <span>成功率</span>
              <div>
                <strong>{Transactionfigures.successPercent}</strong>
              </div>
            </div>
            <div className='exhibition-bor'>
              <span>退款</span>
              <div>
                <strong>￥{Transactionfigures.refundAmount}</strong>
              </div>
            </div>
            <div className='exhibition-bor'>
              <span>付款</span>
              <div>
                <strong>￥{Transactionfigures.payMentAmount}</strong>
              </div>
            </div>
            <div className='clearfix' />
          </div>
          <Linegraph ref='linegraph' />
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

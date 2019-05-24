/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, DatePicker, Select, Tab, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import TransactionLinegraph from './TransactionLinegraph/TransactionLinegraph';
import '../../index.css';

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
export default class Linegraph extends Component {
  state = {};
  handleChange = (key) => {
    debugger;
    console.log('change', key);
  };
  render() {
    return (
        <IceContainer style={styles.card}>
          <Tab onChange={this.handleChange}>
            <Tab.Item
              key="1"
              title='成功交易额度'
              // title={formatMessage({ id: 'app.chart.general.trend.income' })}
            >
              <TransactionLinegraph />
            </Tab.Item>
            <Tab.Item
              key="2"
              title='发起交易额'
              // title={formatMessage({ id: 'app.chart.general.trend.trans' })}
            >
              <TransactionLinegraph />
            </Tab.Item>
          </Tab>
        </IceContainer>
    );
  }
}

const styles = {
  card: {
    padding: '0 20px',
    marginTop: '30px',
  },
};

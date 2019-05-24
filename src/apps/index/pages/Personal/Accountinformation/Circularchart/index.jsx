import React, { Component } from 'react';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
import { DataSet } from '@antv/data-set';

export default class TransactionLinegraph extends Component {
  static displayName = 'TransactionLinegraph';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 参考：https://alibaba.github.io/BizCharts/
    // 数据源
    const data = [
      {
        name: 'London',
        'Jan.': 58.9,
        'Feb.': 28.8,
        'Mar.': 39.3,
        'Apr.': 81.4,
        'May': 47,
        'Jun.': 85.3,
        'Jul.': 24,
        'Age.': 35.6,
        'Sep.': 60,
        'Oct.': 30,
        'Nov.': 40,
        'Dec.': 50,
      },
      {
        name: 'Berlin',
        'Jan.': 56.4,
        'Feb.': 23.2,
        'Mar.': 34.5,
        'Apr.': 99.7,
        'May': 52.6,
        'Jun.': 35.5,
        'Jul.': 37.4,
        'Age.': 42.4,
        'Sep.': 50,
        'Oct.': 40,
        'Nov.': 30,
        'Dec.': 60,
      },
    ];
    // X坐标的刻度
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Age.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'], // 展开字段集
      key: 'month', // key字段
      value: 'rain', // value字段
    });
    const cols = {
      rain: { min: 20, max: 100,tickCount: 5 },
      /*    month: { range: [0, 1] }, */
    };

    return (
      <div className="basic-line">
        <p style={styles.title}>订单和收入</p>
        <Chart
          height={300}
          scale={cols}
          data={dv}
          forceFit
          padding={[10, 35, 40, 35]}
        >
          <Axis dataKey="month" />
          <Axis dataKey="rain" />
          <Tooltip crosshairs={{ type: 'y' }} />
          <Geom
            type="interval"
            position="month*rain"
            color="name"
            adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]}
          />
        </Chart>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: '0 0 10px',
    fontSize: '18px',
    paddingBottom: '8px',
    borderBottom: '1px solid #eee',
  },
  point: {
    stroke: '#fff',
    lineWidth: 1,
  },
};

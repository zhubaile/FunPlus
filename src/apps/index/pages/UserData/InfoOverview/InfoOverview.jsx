import React, { Component } from 'react';
import { Grid, DatePicker , Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';


const { Row, Col } = Grid;

// MOCK 数据，实际业务按需进行替换
const mockData = [
  [
    { name: '我是朱柏乐', value: '收款数据', zbl: '打款业务时局' , aa: 'aaa' , bb: 'bbb', cc: 'ccc' },
  ],
  [
    { name: '成功交易金额', value: '0.00', zbl: '0.00' },
  ],
  [
    { name: '转化率/成功率', value: '0.00%', zbl: '--' },
  ],
  [
    { name: '成功交易笔数', value: '0', zbl: '0' },
  ],
  [
    { name: '退款笔数', value: '0', zbl: '--' },
  ],
  [
    { name: '手续费', value: '0', zbl: '--' },
  ],
];
const mockDatat = [
  [
    { name: 's', value: '收款数据', zbl: '打款业务时局' },
  ],
  [
    { name: '成功交易ss金额', value: '0.00', zbl: '0.00' },
  ],
  [
    { name: '转化sss率/成功率', value: '0.00%', zbl: '-ss-' },
  ],
  [
    { name: '手续费', value: '0', zbl: '--' },
  ],
  [
    { name: '退款笔sss数', value: 'sss0', zbl: '--' },
  ],
  [
    { name: '手ss续费', value: 'sss0', zbl: '--' },
  ],
];
export default class InfoOverview extends Component {
  static displayName = 'InfoOverview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (value) => {
    console.log({ value });
  };

  render() {
    return (
      <IceContainer style={styles.container}>
        <h2 style={styles.containerTitle}>交易数据展示</h2>
        <Tab>
          <Tab.Item title="今日交易">
            <Row wrap gutter={20} style={styles.row}>
              {mockData.map((items, index) => {
                const borderNone =
                  index === mockData.length - 1 ? styles.borderNone : {};
                return (
                  <Col l="4" xs="8" xxs="12" key={index}>
                    <div style={{ ...styles.box, ...borderNone }}>
                      {items.map((item, key) => {
                        return (
                          <div style={styles.boxCell} key={key}>
                            <div style={styles.cellName}>{item.name}</div>
                            <div style={styles.cellValue}>{item.value}</div>
                            <div style={styles.cellValue}>{item.zbl}</div>
                            <div style={styles.cellValue}>{item.aa}</div>
                            <div style={styles.cellValue}>{item.bb}</div>
                            <div style={styles.cellValue}>{item.cc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Tab.Item>
          <Tab.Item title="昨日交易">
            <Row wrap gutter={20} style={styles.row}>
              {mockDatat.map((items, index) => {
                const borderNone =
                  index === mockData.length - 1 ? styles.borderNone : {};
                return (
                  <Col l="4" xs="8" xxs="12" key={index}>
                    <div style={{ ...styles.box, ...borderNone }}>
                      {items.map((item, key) => {
                        return (
                          <div style={styles.boxCell} key={key}>
                            <div style={styles.cellName}>{item.name}</div>
                            <div style={styles.cellValue}>{item.value}</div>
                            <div style={styles.cellValue}>{item.zbl}</div>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Tab.Item>
          <Tab.Item title="汇总">
            <Row wrap gutter={20} style={styles.row}>
              {mockData.map((items, index) => {
                const borderNone =
                  index === mockData.length - 1 ? styles.borderNone : {};
                return (
                  <Col l="4" xs="8" xxs="12" key={index}>
                    <div style={{ ...styles.box, ...borderNone }}>
                      {items.map((item, key) => {
                        return (
                          <div style={styles.boxCell} key={key}>
                            <div style={styles.cellName}>{item.name}</div>
                            <div style={styles.cellValue}>{item.value}</div>
                            <div style={styles.cellValue}>{item.zbl}</div>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Tab.Item>
        </Tab>
      </IceContainer>
    );
  }
}

const styles = {
  container: {
    padding: '0',
  },
  containerTitle: {
    margin: '0',
    padding: '15px 20px',
    fonSize: '16px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',

  },
  row: {
    padding: '20px',
  },
  box: {
    display: 'flex',
    flexFlow: 'wrap',
    borderRight: '1px solid #f0f0f0',
  },
  borderNone: {
    borderRight: '0',
  },
  boxCell: {
    width: '50%',
    margin: '10px 0',
  },
  cellName: {
    color: '#666',
    lineHeight: '14px',
    fontSize: '12px',
  },
  cellValue: {
    marginTop: '8px',
    color: '#333',
    lineHeight: '30px',
    fontSize: '16px',
    fontWeight: '500',
  },
};

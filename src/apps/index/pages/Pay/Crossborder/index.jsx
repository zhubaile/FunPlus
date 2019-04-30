import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';

import IceContainer from '@icedesign/container';

const { Row, Col } = Grid;
export default class Crossborder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  btnClick() {
    // console.log(this.input.value,this);
    // ;
    this.props.editor(this.input.getInputNode().value);
  }
  render() {
    return (
      <IceContainer>
        <h2 style={styles.containerTitle}>跨境收款</h2>
        <Tab>
          <Tab.Item title="首页">
            跨境收款
            <div>
              <div>{this.props.Test}-------此值为全局使用</div>
              <Button type="normal">
                <Link to="home">去首页修改</Link>
              </Button>
            </div>
          </Tab.Item>
          <Tab.Item title="收入">
            xinxi
          </Tab.Item>
          <Tab.Item title="提现记录">
            xinxi
          </Tab.Item>
        </Tab>
      </IceContainer>
    );
  }
}
const styles = {
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },

};

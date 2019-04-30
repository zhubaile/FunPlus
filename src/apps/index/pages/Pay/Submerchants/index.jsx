import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';

import IceContainer from '@icedesign/container';

const { Row, Col } = Grid;
export default class Submerchants extends Component {
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
        <h2 style={styles.containerTitle}>子商户</h2>
        <Tab>
          <Tab.Item title="分账总览">
              xinxi
            <div>
              <div>{this.props.Test}-------此值为全局使用</div>
              <Button type="normal">
                <Link to="home">去首页修改</Link>
              </Button>
            </div>
          </Tab.Item>
          <Tab.Item title="分账策略">
            xinxiddd
          </Tab.Item>
          <Tab.Item title="分账记录">
            xinxisss
          </Tab.Item>
          <Tab.Item title="子商户列表">
            xinxiaaa
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

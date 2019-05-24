import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';

import IceContainer from '@icedesign/container';

const { Row, Col } = Grid;
export default class Enterprise extends Component {
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
        <h2 style={styles.containerTitle}>企业打款</h2>
        <Tab>
          <Tab.Item title="企业打款">
            企业打款企业打款

          </Tab.Item>
          <Tab.Item title="333">
            xinxi
          </Tab.Item>
          <Tab.Item title="444">
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

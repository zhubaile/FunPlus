import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Button, Icon, Nav } from '@alifd/next';

export default class SolutionFooter extends Component {
  static displayName = 'SolutionFooter';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={styles.container}>
        <h1 style={{ color: '#fff' }}>立刻获得解决方案</h1>
        <Button style={{ borderRadius: '20px' , color: '#00A2F6', marginTop: '50px', width: '120px', height: '30px' }}>联系我们</Button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '300px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: '#3978ff',
  },
};

import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Button, Icon, Nav } from '@alifd/next';

export default class HelpcenterHeader extends Component {
  static displayName = 'HelpcenterHeader';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <h1 style={{ fontSize: '38px' }}>{this.props.HHcontent}</h1>
          <p sstyle={{ fontSize: '20px', paddingTop: '25px', lineHeight: '36px' }}>{this.props.HPcontent}</p>
        </div>
        <div style={styles.right}>

        </div>
        <div style={styles.lcircular} />
        <div style={styles.scircular} />
        <div style={styles.mcircular} />
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '300px',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to top left, #41B6FE, #4FACFD)',
    // backgroundImage: `url(${require("../../../../../assets/img/helpcenter/develop/ks-bg1.png")})`,
    backgroundSize: '100% 100%',
  },
  left: {
    width: '50%',
    marginTop: '100px',
    marginBottom: '200px',
    color: '#fff',
  },
  right: {
    width: '20%',
  },
  lcircular: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'absolute',
    top: '30%',
    left: '55%',
    background: '#79d4eb',
  },
  scircular: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    position: 'absolute',
    top: '60%',
    left: '75%',
    background: '#968cf0',
  },
  mcircular: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    position: 'absolute',
    top: '20%',
    left: '85%',
    background: '#d7c56f',
  },
};

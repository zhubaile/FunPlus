import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import IceImg from '@icedesign/img';

export default class Logo extends PureComponent {
  render() {
    return (
      <div >
        <IceImg
          height={40}
          width={100}
          src={require('./images/logo.png')}
          style={{ ...styles.logoStyle, ...this.props.style }}
        />
      </div>

    );
  }
}

const styles = {
  logoStyle: {
    display: 'block',
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '28px',
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
    background:'red',
  },
};

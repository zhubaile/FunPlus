import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import IceImg from '@icedesign/img';
import './logo.css';

export default class Logo extends PureComponent {
  state={
    open: false,
  }
  enterbtn() {
    this.setState({
      open: true,
    });
  }
  leavebtn() {
    this.setState({
      open: false,
    });
  }
  render() {
    return (
      <div className={this.state.open ? 'logobtn' : ''} onMouseEnter={this.enterbtn.bind(this)} onMouseLeave={this.leavebtn.bind(this)}>
        <Link to="/website/index">
          <IceImg
            width={120}
            height={40}
            src={require('@img/index/ailogo.png')}
            style={{ ...styles.logoStyle }}
          />
          {/* <img src={require('@img/logo/logo1.png')} alt="" />
          <img src={require('@img/logo/logo2.png')} alt="" />
          <img src={require('@img/logo/logo3.png')} alt="" />
          <img src={require('@img/logo/logo4.png')} alt="" />
          <img src={require('@img/logo/logo5.png')} alt="" />
          <img src={require('@img/logo/logo6.png')} alt="" />
          <img src={require('@img/logo/logo7.png')} alt="" />
          <img src={require('@img/logo/logo8.png')} alt="" />
          <img src={require('@img/logo/logo9.png')} alt="" /> */}
        </Link>
      </div>

    );
  }
}

const styles = {
  logoStyle: {
    width: '100%',
    display: 'block',
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '28px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

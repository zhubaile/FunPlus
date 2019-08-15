import React, { Component } from 'react';
import SelectLang from '../../../../../../assets/Internationalization/SelectLang';
import IceImg from '@icedesign/img';
import '../Footer/footer.css';

export default class Home extends Component {
  static displayName = 'Setting';

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
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
      <div style={styles.logoStyle}>
        <div style={styles.left}>
          <div className={this.state.open ? 'logobtn' : ''} onMouseEnter={this.enterbtn.bind(this)} onMouseLeave={this.leavebtn.bind(this)}>
            <IceImg
              height={40}
              width={120}
              src={require('@img/index/ailogo.png')}
              style={styles.logo}
            />
          </div>
        </div>
        <div style={styles.right}>
          <SelectLang />
        </div>
      </div>
    );
  }
}
const styles = {
  logoStyle: {
    display: 'flex',
    width: '100%',
    height: '60px',
    background: '#d0d1fd  ',
  },
  left: {
    display: 'flex',
    flexGrow: '1',
    height: '60px',
    justifyContent: 'center',
  },
  right: {
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'center',
  },
  logo: {
    marginTop: '10px',
  },
};

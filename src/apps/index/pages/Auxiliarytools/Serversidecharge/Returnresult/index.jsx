import React, { Component } from 'react';
import '../../../index.css';

export default class Returnresult extends Component {
  returnresultclose() {
    this.setState({
      open: false,
    });
  }

  returnresultopen() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <div className='returnresult'>
        <div className='returnresult-bulletbox'>
          <p>返回结果</p>
        </div>
      </div>
    );
  }
}

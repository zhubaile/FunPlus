import React, { Component } from 'react';
import '../../../index.css';

export default class Returnresult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  returnresultclose() {
    this.setState({
      open: false,
      content: null,
    });
  }

  returnresultopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }

  render() {
    if (!this.state.open) return null;
    return (
      <div className='returnresult'>
        <div className='returnresult-bulletbox'>
          <p onClick={this.returnresultclose.bind(this)}>返回结果</p>
        </div>
      </div>
    );
  }
}

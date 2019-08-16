import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Button, Icon, Nav } from '@alifd/next';
import '../../index.css';

export default class HelpcenterHeader extends Component {
  static displayName = 'HelpcenterHeader';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className='headers'>
          <div className="circles1" />
          <div className="circles2" />
          <div className="circles3" />
          <div className='headers-content'>
            <div className='headers-content-left'>
              <h1>{this.props.HHcontent} </h1>
              <p>
                {this.props.HPcontent}
              </p>
            </div>
            {/*          <div className='nav-belowimg-conter-right' /> */}
          </div>
        </div>
        <div className="outer_boxs1">
          <div className="inner_boxs1" />
        </div>
      </div>
    );
  }
}


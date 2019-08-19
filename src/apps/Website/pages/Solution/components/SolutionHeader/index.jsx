import React, { Component } from 'react';

import '../../../index.css';

export default class SolutionHeader extends Component {
  static displayName = 'SolutionHeader';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: '100%'}} >
        <div className='headers'>
          <div className="circles1" />
          <div className="circles2" />
          <div className="circles3" />
          <div className='headers-content'>
            <div className='headers-content-left'>
              <h1>{this.props.HHcontent}</h1>
              <p>
                {this.props.HPcontent}
              </p>
            </div>
            {/*          <div className='nav-belowimg-conter-right' /> */}
          </div>
        </div>
        <div className="outer_boxs">
          <div className="inner_boxs" />
        </div>
      </div>

    );
  }
}


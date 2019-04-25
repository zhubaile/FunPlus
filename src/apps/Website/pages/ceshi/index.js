import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

export default class Ceshi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        测试
        <FormattedMessage id="app.zbl.a" />
      </div>
    );
  }
}

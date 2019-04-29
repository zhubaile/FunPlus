import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { FormattedMessage } from 'react-intl';
import IceContainer from '@icedesign/container';

import InfoOverview from './InfoOverview';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  btnClick() {
    console.log(this.input.value,this);

    this.props.editor(this.input.getInputNode().value);
  }
  render() {
    return (
      <div>
        <InfoOverview />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return { Test: state.Test,Locale: state.Locale };
  },
  { ...actions.Test }
)(Home);

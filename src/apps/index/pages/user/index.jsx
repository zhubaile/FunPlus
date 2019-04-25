import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  btnClick() {
    // console.log(this.input.value,this);
    // ;
    this.props.editor(this.input.getInputNode().value);
  }
  render() {
    return (
      <div>
        <div>{this.props.Test}-------此值为全局使用</div>
        <Button type="normal">
          <Link to="home">去首页修改</Link>
        </Button>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return { Test: state.Test };
  },
)(User);

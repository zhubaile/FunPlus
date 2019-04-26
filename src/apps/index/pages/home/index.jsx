import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { FormattedMessage } from 'react-intl';

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
        <div>当前 redux 测试的值为：{this.props.Test},通过下面的input可以修改</div>
        <Input ref={(node)=>{ this.input = node; }} placeholder="redux的值" />
        <Button type="primary" onClick={this.btnClick.bind(this)}>修改</Button>
        <Button type="normal">
          <Link to="user">去用户页面</Link>
        </Button>
        <div>当前语言类型：{ this.props.Locale }</div>
        <div>
          <span>当前用户性别：</span>
          <FormattedMessage id="app.zbl.a" />
        </div>
        <Button type="normal">
          <Link to="i18n">去国际化测试页面</Link>
        </Button>
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

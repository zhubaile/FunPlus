import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import { actions, reducers, connect } from '@indexStore';

class Home extends Component {
  btnClickI18n() {
    const { Locale } = this.props;
    this.props.editor(Locale == "en" ? "zh" : "en");
  }
  render() {
    const { Locale } = this.props;
    return (
      <p>
        <div>当前语言类型：{ Locale}</div>
        <div>
          <FormattedMessage id="i18n.userName" />
        </div>
        <Button type="primary" onClick={ this.btnClickI18n.bind(this) }>切换国际化语言</Button>
        <Link to="home">去首页</Link>
      </p>
    );
  }
}

export default connect(
  (state) => {
    return { Locale: state.Locale };
  },
  { ...actions.Locale }
)(Home);

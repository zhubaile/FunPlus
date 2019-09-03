import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

@withRouter

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      // setTimeout(() => {
      //   debugger;
      //   window.scrollTo(0, 0);
      //   console.log(window.document.scrollTop);
      //   document.body.scrollTop = document.documentElement.scrollTop = 0;
      // }, 100);
    }
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);

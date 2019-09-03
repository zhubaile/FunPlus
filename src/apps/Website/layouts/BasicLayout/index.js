import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
// import Aside from './components/Aside';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';
import './index.scss';
import { Route, withRouter } from 'react-router-dom';

@withRouter

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout
        // fixable // 注释的这两个属性，让滑轮在window上
        // fixable 一旦设置为 true 则整个页面所有模块都固定高度，内容区域不可滚动。子组件通过 scrollable props 使其可滚动
        style={{ minHeight: '100vh' }}
        className="ice-design-layout"
      >
        <Layout.Section>
          <Layout.Main>  {/* scrollable */}
            <Layout.Header>
              <Header />
            </Layout.Header>
            <div className="main-container">
              <MainRoutes />
            </div>
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

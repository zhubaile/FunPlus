import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@alifd/next';
import Footer from './components/Footer';
import Intro from './components/Intro';
import routerData from '../../routerConfig';
// import PageLoading from '../../components/PageLoading';

const { Row, Col } = Grid;

export default class UserLayout extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Row wrap style={styles.row}>
          <Col l="12">
            <Intro />
          </Col>
          <Col l="12">
            <div style={styles.form}>
              <Suspense>
                <Switch>
                  {routerData.map((item, index) => {
                    return item.component ? (
                      <Route
                        key={index}
                        path={item.path}
                        component={item.component}
                        exact={item.exact}
                      />
                    ) : null;
                  })}
                  <Redirect exact from="/" to="/user/login" />
                </Switch>
              </Suspense>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100wh',
    minWidth: '1200px',
    height: '100vh',
    backgroundImage:
      'url(https://img.alicdn.com/tfs/TB1Dc9.zFYqK1RjSZLeXXbXppXa-2704-1790.png)',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

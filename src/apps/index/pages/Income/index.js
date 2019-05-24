import React, { Component } from 'react';
import Table from './components/Table';
import '../index.css';

export default class BaiscList extends Component {
  render() {
    return (
      <div className="list-page">
        <Table />
      </div>
    );
  }
}

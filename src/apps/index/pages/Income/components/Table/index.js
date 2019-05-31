import React, { Component } from 'react';
import { Table, Pagination, Button, Dialog } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import IceContainer from '@icedesign/container';
import FilterTag from '../FilterTag';
import FilterForm from '../FilterForm';
// import {incomeList} from '../../../../api';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['淘小宝', '淘二宝'][random(0, 1)],
      level: ['普通会员', '白银会员', '黄金会员', 'VIP 会员'][random(0, 3)],
      balance: random(10000, 100000),
      accumulative: random(50000, 100000),
      regdate: `2018-12-1${random(1, 9)}`,
      birthday: `1992-10-1${random(1, 9)}`,
      store: ['余杭盒马店', '滨江盒马店', '西湖盒马店'][random(0, 2)],
      z: ['支付宝','爱穷游','好吧'][random(0, 2)],
    };
  });
};

export default class GoodsTable extends Component {
  state = {
    current: 1,
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据
      }, 600);
    });
  };

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.mockApi(len).then((data) => { // data 里面为数据
          this.setState({
            data,
            isLoading: false,
          });
        });
      }
    );
  };

  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleFilterChange = (value) => { // 展示 5条新数据
    debugger;
    this.fetchData(value.pageSize);
  };

  handleDelete(record,index) {
    debugger;
    Dialog.confirm({
      title: '提示',
      content: '确认删除吗',
      onOk: () => {
        this.fetchData(10);
        // 用不用重新获取一下数据
      },
    });
  }

  handleDetail = (index) => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持查看详情',
    });
  };
  // value:空，index：索引，record：行内容
  renderOper = (value,index,record) => {
    return (
      <div>
        <Button
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          <FormattedMessage id="app.btn.detail" />
        </Button>
        <Button type="normal" warning onClick={()=>this.handleDelete(record,index)}>
          <FormattedMessage id="app.btn.delete" />
        </Button>
      </div>
    );
  };
  render() {
    const { isLoading, data, current } = this.state;
    return (
      <div style={styles.container}>
        <IceContainer>
          <FilterTag onChange={this.handleFilterChange} />
          <FilterForm onChange={this.handleFilterChange} />
        </IceContainer>
        <IceContainer>
          <Table loading={isLoading} dataSource={data} hasBorder={false}>
            <Table.Column title="创建时间、完成时间" dataIndex="name" />
            <Table.Column title="商户订单号平台流水号" dataIndex="level" />
            <Table.Column title="商品名称备注" dataIndex="balance" />
            <Table.Column title="创建金额实付金额" dataIndex="accumulative" />
            <Table.Column title="支付状态" dataIndex="regdate" />
            <Table.Column title="退款金额退款状态" dataIndex="birthday" />
            <Table.Column title="分润金额分润状态" dataIndex="store" />
            <Table.Column title="渠道      设备ID" dataIndex="z" />
            <Table.Column
              title="操作"
              width={200}
              dataIndex="oper"
              cell={this.renderOper}
            />
          </Table>
          <Pagination
            style={styles.pagination}
            current={current}
            onChange={this.handlePaginationChange}
          />
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};

import React, { Component } from 'react';
import { Table, Pagination, Button, Dialog } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import IceContainer from '@icedesign/container';
import FilterTag from '../FilterTag';
import FilterForm from '../FilterForm';
import { incomeList } from '@indexApi';
import moment from "moment/moment";
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
    total: 0, // 总数据
    pageSize: 10, // 一页条数
    current: 1, // 页码
    isLoading: false,
    datas: [],
    Filtertag: [],
    Filterform: [],
    value: null, // 搜索框的内容
    times: null, // 时间
  };

  componentDidMount() {
    const current = this.state.current;
    const pageSize = this.state.pageSize;
    this.fetchData(current,pageSize);
  }

  /*  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据
      }, 600);
    });
  }; */

  fetchData = (page,pageSize,value,arrivalDate) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        // const pages = this.state.current;
        // const pageSize = this.state.pageSize;
        console.log(value);
        console.log(pageSize);
        console.log(arrivalDate);
        incomeList({
          page,
          pageSize,
          ...value,
          arrivalDate,
        }).then(({ status,data })=>{
          if (data.errCode == 0) {
            const channel = data.data.result2.channel; // 复制出来需要改变属性名的属性
            const channels = channel.map(item=>({ value: item._id,label: item.payScene })); // 改变成想要的属性名
            const Filterforms = Object.assign({},data.data.result2,{ channel: channels }); // 把数据里面的内容改变成更改过的
            this.setState({
              datas: data.data.result,
              isLoading: false,
              total: data.data.totalCount,
              Filtertag: data.data.result1,
              Filterform: Filterforms,
            });
          }
        });
        /* this.mockApi(len).then((data) => { // data 里面为数据
          this.setState({
            data,
            isLoading: false,
          });
        }); */
      }
    );
  };
  // 翻页
  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        const pageSize = this.state.pageSize;
        const value = this.state.value;
        const time = this.state.times;
        this.fetchData(current,pageSize,value,time);
      }
    );
  };
  // 搜索
  handleFilterChange = (value,arrivalDate) => {
    this.setState(
      {
        value,
        times: arrivalDate,
      },
      () => {
        const current = this.state.current;
        const pageSize = this.state.pageSize;
        this.fetchData(current,pageSize,value,arrivalDate);
      }
    );
  };

  handleDelete(record,index) {
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
  createdAt=(e)=>{
    const createdAt = moment(e).format('YYYY-MM-DD HH:mm:ss');
    return (
      <p>{createdAt}</p>
    );
  }
  updatedAt=(e)=>{
    const updatedAt = moment(e).format('YYYY-MM-DD HH:mm:ss');
    return (
      <p>{updatedAt}</p>
    );
  }
  render() {
    const { isLoading, datas, current, total, pageSize,Filtertag,Filterform } = this.state;
    return (
      <div style={styles.container}>
        <IceContainer>
          <FilterTag onChange={this.handleFilterChange} Filtertag={Filtertag} />
          <FilterForm onChange={this.handleFilterChange} Filterform={Filterform} />
        </IceContainer>
        <IceContainer>
          <Table loading={isLoading} dataSource={datas} hasBorder={false}>
            <Table.Column title="创建时间" dataIndex="createdAt" cell={this.createdAt} />
            <Table.Column title="完成时间" dataIndex="updatedAt" cell={this.updatedAt} />
            <Table.Column title="商户订单号" dataIndex="out_trade_no" />
            <Table.Column title="平台流水号" dataIndex="orderNo" />
            <Table.Column title="商品名称" dataIndex="orderDes" />
            <Table.Column title="备注" dataIndex="orderDes" />
            <Table.Column title="订单金额" dataIndex="amount" />
            <Table.Column title="实付金额" dataIndex="amount_real" />
            <Table.Column title="支付状态" dataIndex="orderStatusName" />
            <Table.Column title="退款金额" dataIndex="" />
            <Table.Column title="退款状态" dataIndex="" />
            <Table.Column title="分润金额" dataIndex="" />
            <Table.Column title="分润状态" dataIndex="" />
            <Table.Column title="渠道" dataIndex="channelId" />
            <Table.Column title="设备ID" dataIndex="deviceId" />
            <Table.Column
              title="操作"
              dataIndex="oper"
              cell={this.renderOper}
            />
          </Table>
          <Pagination
            style={styles.pagination}
            current={current}
            onChange={this.handlePaginationChange}
            pageSize={pageSize} // 界面展示多少条数据
            total={total} // 一共多少条数据
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

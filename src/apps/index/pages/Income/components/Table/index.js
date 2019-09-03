import React, { Component } from 'react';
import { Table, Pagination, Button, Dialog,Message } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import IceContainer from '@icedesign/container';
import FilterTag from '../FilterTag';
import FilterForm from '../FilterForm';
import { incomeList,refund } from '@indexApi';
import moment from "moment/moment";

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
    this.fetchData();
  }

  fetchData = (value,arrivalDate) => {
    debugger;
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const page = this.state.current;
        const pageSize = this.state.pageSize;
        incomeList({
          page,
          pageSize,
          ...value,
          arrivalDate,
        }).then(({ status,data })=>{
          debugger;
          if (data.errCode == 0) {
            const channel = data.data.result2.channel; // 复制出来需要改变属性名的属性
            const channels = channel.map(item=>({ value: item._id,label: item.payScene, son: item.children })); // 改变成想要的属性名
            const Filterforms = Object.assign({},data.data.result2,{ channel: channels }); // 把数据里面的内容改变成更改过的
            debugger;
            this.setState({
              datas: data.data.result,
              isLoading: false,
              total: data.data.totalCount,
              Filtertag: data.data.result1,
              Filterform: Filterforms,
            });
          } else {
            Message.success(data.message);
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
        this.fetchData();
      }
    );
  };
  // 搜索
  handleFilterChange = (value,arrivalDate) => {
    debugger;
    this.fetchData(value,arrivalDate);
    /* this.setState(
      {
        value,
        times: arrivalDate,
      },
      () => {
        this.fetchData(value,arrivalDate);
      }
    ); */
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
  // 退款按钮
  refunds=(id)=>{
    refund({
      _id: id,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        Message.success(data.message);
      } else {
        Message.success(data.message);
      }
    });
  }
  renderOper = (value,index,record) => {
    return (
      <div>
        <Button
          className='btn-all tablebtn'
          type="secondary"
          size='large'
          onClick={this.refunds.bind(this,record._id)}
        >
          <span>退款</span>
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
  yirubtn(e) {}
  yichubtn() {}
  ceshiZhuanyong = (value,index,record) => {
    return (
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} onMouseMove={this.yirubtn.bind(this,value)} onMouseOut={this.yichubtn.bind(this)} title={value} >
        {value}
      </div>
    );
  };
  render() {
    const { isLoading, datas, current, total, pageSize,Filtertag,Filterform } = this.state;
    return (
      <div style={styles.container}>
        <IceContainer>
          <FilterTag onChange={this.handleFilterChange} Filtertag={Filtertag} />
          <FilterForm onChange={this.handleFilterChange} Filterform={Filterform} />
        </IceContainer>
        <IceContainer>
          <Table loading={isLoading} dataSource={datas} hasBorder={false} fixedHeader maxBodyHeight={600} >
            <Table.Column title="创建时间" dataIndex="createdAt" cell={this.createdAt} width={200} />
            <Table.Column title="完成时间" dataIndex="updatedAt" cell={this.updatedAt} width={200} />
            <Table.Column title="商户订单号" dataIndex="out_trade_no" width={150} />
            <Table.Column title="平台流水号" dataIndex="orderNo" width={150} />
            <Table.Column title="商品名称" dataIndex="orderDes" width={150} />
            <Table.Column title="备注" dataIndex="orderDes" width={150} />
            <Table.Column title="订单金额" dataIndex="amount" width={150} />
            <Table.Column title="实付金额" dataIndex="amount_real" width={150} />
            <Table.Column title="支付状态" dataIndex="orderStatusName" width={150} />
            <Table.Column title="退款金额" dataIndex="" width={100} />
            <Table.Column title="退款状态" dataIndex="" width={100} />
            <Table.Column title="分润金额" dataIndex="" width={100} />
            <Table.Column title="分润状态" dataIndex="" width={100} />
            <Table.Column title="渠道" dataIndex="channelId" width={100} cell={this.ceshiZhuanyong} />
            <Table.Column title="设备ID" dataIndex="deviceId" width={200} />
            <Table.Column
              title="操作"
              dataIndex="oper"
              width={100}
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

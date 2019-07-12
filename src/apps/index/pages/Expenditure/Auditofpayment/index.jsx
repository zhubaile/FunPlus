import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Select,Table,Pagination ,Message } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import moment from "moment/moment";
import IceContainer from '@icedesign/container';
import { payOutExamineList,payOutExamine } from '@indexApi';
import '../../index.css';
import { Dialog } from "@alifd/next/lib/index";
import Batchrefund from '../Batchrefund';

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;

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
      z: ['支付宝'],
    };
  });
};

export default class Orderrefund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        selectiontime: '创建时间',
        startdate: '',
        paymentchannel: '全部',
        refundstatus: '全部',
        ordernumber: '',
      },
      type: 1, // 选择的那个值
      total: 0, // 总数据
      pageSize: 10, // 一页条数
      current: 1, // 页码
      isLoading: false,
      datas: [],
    };
  }
  // 表单的值
  formChange = (value) => {
    debugger;
    this.setState({
      value,
    });
  };
  // 重置按钮
  handleReset() {
    this.setState({
      value: {
        selectiontime: '创建时间',
        startdate: '',
        paymentchannel: '全部',
        refundstatus: '全部',
        ordernumber: '',
      },
    });
  }
  btnClick() {
    // console.log(this.input.value,this);
    // ;
    this.props.editor(this.input.getInputNode().value);
  }
  // 更新的数据
  componentDidMount() {
    const type = this.state.type;
    this.fetchData(type);
  }

  fetchData = (len) => {
    debugger;
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const page = this.state.current;
        const pageSize = this.state.pageSize;
        payOutExamineList({
          type: len,
          page,
          pageSize,
        }).then(({ status,data })=>{
          debugger;
          this.setState({
            datas: data.data,
            isLoading: false,
            type: len,
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

  handleFilterChange = () => { // gengxin 5条新数据
    this.fetchData(5);
  };

  handleDelete = () => {
    Dialog.confirm({
      title: '提示',
      content: '确认删除吗',
      onOk: () => {
        this.fetchData(10);
      },
    });
  };

  handleDetail = () => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持查看详情',
    });
  };

  renderOper = () => {
    return (
      <div>
        <Button
          style={styles.tBtn}
          size='large'
          type="primary"
          onClick={this.handleDetail}
        >
          通过
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
  qiyepay() {
    this.fetchData(1);
  }
  piliangpay() {
    this.fetchData(2);
  }
  dingdannopay() {
    this.fetchData(3);
  }
  qiyenopay() {
    this.fetchData(4);
  }
  render() {
    const { isLoading, datas, current,pageSize,total,type } = this.state;
    return (
      <div className='auditofpayment'>
        <div className='auditofpayment-top'>
          <span>出款审核-</span>
          <span className={type == 1 ? 'spanbtn color' : 'spanbtn'} onClick={this.qiyepay.bind(this)}>企业付款 </span>
          <span className={type == 2 ? 'spanbtn color' : 'spanbtn'} onClick={this.piliangpay.bind(this)}>批量付款 </span>
          <span className={type == 3 ? 'spanbtn color' : 'spanbtn'} onClick={this.dingdannopay.bind(this)}>订单退款 </span>
          <span className={type == 4 ? 'spanbtn color' : 'spanbtn'} style={{ border: 'none' }} onClick={this.qiyenopay.bind(this)}>批量退款 </span>
          <div className='auditofpayment-top-border' />
        </div>
        <div style={{ position: 'absolute', right: 15, top: -15 }}>
          <div style={styles.divRadius}>今日总收￥1232323</div>
          <div style={styles.divRadius}>今日付款￥234234</div>
          <div style={styles.divRadius}>今日退款￥234232</div>
        </div>

        <div className='message'>
          <Message title="title" closeable type='error' className='message-e'>
                付款累计金额大于今日总收，请联系超级管理员，开启允许超额付款权限！
          </Message>
          <Message title="title" closeable type='error' className='message-e'>
                批量付款累计金额大于今日总收，请联系超级管理员，开启允许超额退款权限！
          </Message>
          <Message title="title" closeable type='error' className='message-e'>
                批量退款累计金额大于今日总收，请联系超级管理员，开启允许超额退款权限！
          </Message>
          <Message title="title" closeable type='error' className='message-e'>
                退款金额大于实际付款金额，请联系超级管理员，开启允许超额退款权限！
          </Message>
        </div>
        <span className='all_span'>本次搜索付款总额：5555</span>
        <hr />
        {/* <div className='expendordbat-tabs-border' /> */}
        <IceContainer>
          <Table loading={isLoading} dataSource={datas} hasBorder={false}>
            <Table.Column title="创建时间" dataIndex="createdAt" cell={this.createdAt} />
            <Table.Column title="完成时间" dataIndex="updatedAt" cell={this.updatedAt} />
            <Table.Column title="商户订单号" dataIndex="outBizNo" />
            <Table.Column title="平台流水号" dataIndex="outBizNo" />
            <Table.Column title="付款状态" dataIndex="orderStatusName" />
            <Table.Column title="付款金额" dataIndex="amount" />
            <Table.Column title="批次号" dataIndex="regdate" />
            <Table.Column title="付款渠道" dataIndex="birthday" />
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
            pageSize={pageSize} // 界面展示多少条数据
            total={total}
          />
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  divRadius: {
    display: 'inline-block',
    padding: '6px',
    borderRadius: '6px',
    marginRight: '15px',
    border: ' 1px solid #A3D0FD',
    backgroundColor: '#E2EDFF',
    color: '#419DFA',
  },
  btnRadius: {
    borderRadius: '6px',
    marginRight: '15px',
    borderColor: '#A3D0FD',
    backgroundColor: '#E2EDFF',
    color: '#419DFA',
  },
  tBtn: {
    borderRadius: '6px',
    height: '28px',
  },
  /*  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },
  formItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  formLabel: {
    minWidth: '80px',
    marginLeft: '10px',
    textAlign: 'center',
  },
  formSelect: {
    width: '200px',
    margin: '0 10px',
  }, */
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};

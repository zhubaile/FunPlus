import React, { Component } from 'react';
import { Table,Button,Input,Grid ,DatePicker,Pagination } from '@alifd/next';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Administrators from '../../Personal/components/Administrators/Administrators';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../layouts/BasicLayout/components/Header/index.scss';
import '../components/index.css';
import moment from "moment/moment";
import { Dialog } from "@alifd/next/lib/index";

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
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
export default class Allworkorders extends Component {
  static displayName = 'Setting';

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      isLoading: false,
      data: [],
    };
  }
  formChange = (value) => {
    this.props.onChange(value);
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
  see() {
    this.props.history.push('/backstageworkorder/Workorderdetails');
  }
  renderOper = () => {
    return (
      <div>
        <a href="javascript:;" style={{ marginRight: '3px' }} onClick={this.see.bind(this)}>查看</a>
        <span>|</span>
        <a href="javascript:;" style={{ marginLeft: '3px' }}>删除</a>
        {/* <Button
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          查看
           <FormattedMessage id="app.btn.detail" />
        </Button>
        <Button type="normal" warning onClick={this.handleDelete}>
          删除
        </Button> */}
      </div>
    );
  };
  render() {
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    const { isLoading, data, current } = this.state;
    return (
      <div className='backstageworkorder'>
        <Nav defaultActiveKey='2' />
        <div className='wodegongdan'>
          <div className='wodegongdan-top'>
            <span>全部工单</span>
            <div className='wodegongdan-top-border' />
          </div>
          <div className='wodegongdan-conter'>
            <FormBinderWrapper
              value={this.state.value}
              onChange={this.formChange}
              ref="form"
            >
              <Row wrap gutter="20">
                <Col l="24">
                  <div className='wodegongdan-conter-main'>
                    <span>工单编号：</span>
                    <FormBinder name='worknumber'>
                      <Input placeholder='输入编号' hasClear />
                    </FormBinder>
                    <span>操作时间：</span>
                    <FormBinder name='operationtime'>
                      <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
                    </FormBinder>
                    <span>关键字：</span>
                    <FormBinder name='relatedcharacters'>
                      <Input hsaClear />
                    </FormBinder>
                    <Button className='bg' size="large" type="secondary">搜索</Button>
                  </div>
                </Col>
              </Row>
            </FormBinderWrapper>
          </div>
          <div className='wodegongdan-footer'>
            <Table loading={isLoading} dataSource={data} hasBorder={false}>
              <Table.Column title="工单编号" dataIndex="name" />
              <Table.Column title="描述" dataIndex="level" />
              <Table.Column title="优先级" dataIndex="balance" />
              <Table.Column title="提交账号" dataIndex="accumulative" />
              <Table.Column title="提交时间" dataIndex="regdate" />
              <Table.Column title="状态" dataIndex="birthday" />
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
          </div>
        </div>
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

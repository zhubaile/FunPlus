import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message,Button , Grid, Table , Icon,Form,Pagination,Tab } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import { bulletinlist,bulletindelete } from '@indexApi';
import Administrators from '../../components/Administrators/Administrators';
import Customerservice from '../../components/Customerservice';
import '../../../../layouts/BasicLayout/components/Header/index.scss';
import '../../../index.css';
import moment from "moment/moment";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
};
const datas = [
  { p: '支付宝渠道紧急通知', span: '2019-5-6' ,a: '>', _id: '123' },
  { p: '支付宝渠道紧急通知', span: '2019-5-6' ,a: '>' ,_id: '456' },
  { p: '支付宝渠道紧急通知', span: '2019-5-6' ,a: '>' ,_id: '789' },
  { p: '支付宝渠道紧急通知', span: '2019-5-6 ',a: '>' ,_id: '123456' },
  { p: '支付宝渠道紧急通知', span: '2019-5-6' ,a: '>' ,_id: '456789' },
];
const { Row, Col } = Grid;
export default class Accesstoinformationaddition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      current: 1,
      pageSize: 10,
      total: 0,
      datas: [], // 数据列表
      args: [], // 选中的数据
    };
  }
  /* 设置定时器用 */
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const pageSize = this.state.pageSize; // 一页多少数据
        const page = this.state.current; // 页码
        bulletinlist({
          page,
          pageSize,
        }).then(({ status,data })=>{
          debugger;
          if (data.errCode == 0) {
            this.setState({
              isLoading: false,
              datas: data.data.bulletin,
              total: data.data.totalCount,
            });
          }
        });
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
  // 显示数据
  contentmessage=(value,index,record)=>{
    const createdAt = moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss');
    return (
      <div>
        <span style={{ fontWeight: 'bold', paddingRight: '10px', fontSize: '16px', color: '#333' }}>{record.bulletin.title}</span>
        <span style={{ fontSize: '14px',color: '#999' }}>发表于{createdAt}</span>
        <p style={{ color: '#666' }}>{record.bulletin.content}</p>
      </div>
    );
  }
  // 获取到选中的数据
  Choice(args) {
    this.setState({
      args,
    });
  }
  // 删除方法
  removes() {
    const { datas,args } = this.state;
    bulletindelete({
      _id: args,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        let index = -1;
        args.map((id)=>{
          datas.forEach((item, i) => {
            if (item._id === id) {
              index = i;
            }
          });
          if (index !== -1) {
            datas.splice(index, 1);
            this.setState({
              datas,
            });
          }
        });
      } else {
        Message.success(data.message);
      }
    });
  }
  render() {
    const { current,datas,pageSize,total,isLoading } = this.state;
    const rowSelection = {
      onChange: this.Choice.bind(this),
      getProps: (record,index) => {
        /* return {
          disabled: record.id === 100306660942,
        }; */
      },
    };
    return (
      <div>
        <Tab>
          <Tab.Item shape='pure' title='消息通知'>
            <div className='accesstoinformationaddition'>
              <div className='accesstoinformationaddition-left'>
                <Table
                  loading={isLoading}
                  dataSource={datas}
                  hasBorder={false}
                  primaryKey='_id'
                  rowSelection={rowSelection}
                >
                  <Table.Column title="全选" dataIndex='content' cell={this.contentmessage} />
                </Table>
                <Pagination
                  style={{ marginTop: '20px', textAlign: 'right' }}
                  current={current}
                  onChange={this.handlePaginationChange}
                  pageSize={pageSize} // 界面展示多少条数据
                  total={total}
                />
                <Button className='btns-all' size='large' type='primary' style={{ marginTop: '-30px', marginLeft: '10px' }} onClick={this.removes.bind(this)}>删除</Button>
              </div>

              {/* <div className='accesstoinformationaddition-right'> */}
              {/* /!* array 是账户的个人信息内容 *!/ */}
              {/* /!* <Administrators array={array}/> *!/ */}
              {/* </div> */}
            </div>
            <Customerservice />
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}
const styles = {
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },

};

import React, { Component } from 'react';
import { Table,Input,Radio ,Grid ,DatePicker,Rating,Step,Button, Select } from '@alifd/next';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import moment from "moment/moment";
import { Dialog } from "@alifd/next/lib/index";
import '../../../layouts/BasicLayout/components/Header/index.scss';
import '../components/index.css';
import Deletedata from './Deletedata';
import Check from './Check';

const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
const StepItem = Step.Item;
const ButtonGroup = Button.Group;

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getData = (length = 1) => {
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
    debugger;
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
  workorderdetailsOpen() {
    this.Deletedata.deletedataopen();
  }

  workorderdetailsOpenbtn() {
    this.Check.checkopen();
  }
  renderOper = () => {
    return (
      <div>
        <a href="javascript:;" style={{ marginLeft: '3px' }} onClick={this.workorderdetailsOpen.bind(this)}>删除工单</a>
      </div>
    );
  };
  render() {
    const { currentStep } = this.state;
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    const { isLoading, data, current } = this.state;
    return (
      <div className='backstageworkorder'>
        <Deletedata ref={ node => this.Deletedata = node } />
        <Check ref={ node => this.Check = node } />
        <Nav defaultActiveKey='2' />
        <div className='wodegongdan'>
          <div className='wodegongdan-top'>
            <span>工单详情</span>
            <Button className='btn-all' style={styles.btn} type='secondary' size='large' onClick={this.workorderdetailsOpenbtn.bind(this)}>结单</Button>
            <div className='wodegongdan-top-border' />
          </div>
          <div className='wodegongdan-table'>
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
          </div>
          {/*          <div className='wodegongdan-step'>
            <Step current={2} shape="arrow" animation>
              <Step.Item title="已受理" />
              <Step.Item title="已处理" />
              <Step.Item title="已确认" />
              <Step.Item title="待评价" />
            </Step>
          </div> */}
          {/*          <div className='wodegongdan-message'>
            <a href="javascript:;" style={{ background: '#F09919' }}>
              <i className="os-icon os-icon-ui-93" />
            </a>
            协作成员（0）
          </div>
          <div className='wodegongdan-message'>
            <a href="javascript:;" style={{ background: '#00CEBD' }}>
              <i className="os-icon os-icon-robot-1" />
            </a>
            客服回复（0）
          </div>
          <div className='wodegongdan-message'>
            <a href="javascript:;" style={{ background: '#1A55E2' }}>
              <i className="os-icon os-icon-mail-07" />
            </a>
            公开回复（0）
          </div> */}
          <p>沟通记录<span style={{ borderLeft: '2px solid blue', marginLeft: '5px' }}></span></p>
          <div className='dealwith-workorder'>
            <div style={{ height: '50%' }}>
              <img src={require('@img/img/avatar1.jpg')} alt="" />
              <ul>
                <li>问题描述</li>
                <li>实名认证需要多少时间</li>
              </ul>
              <hr />
              <img src={require('@img/logo/logo1.png')} alt="" />
              <ul>
                <li>3funplus工程师</li>
                <li>您好，3funplus侧只有修改实名认证，时间限制需要30天以上才能修改。</li>
              </ul>
            </div>
            <hr />
            <div>
              <Input.TextArea placeholder='输入...' />
            </div>
            <div className='submit-btn'>
              <Button type='primary' size='large'>提交回复</Button>
            </div>
          </div>
          <p>待评价<span style={{ borderLeft: '2px solid blue', marginLeft: '5px' }}></span></p>
          <div className='wodegongdan-pingjia'>
            <FormBinderWrapper
              value={this.state.value}
              onChange={this.formChange}
              ref="form"
            >
              <div>
                <span>整体评价：</span>
                <FormBinder name='rating'>
                  <Rating defaultValue={3.2} allowHalf count='3' size='large' />
                </FormBinder>
              </div>
              <div>
                <span>问题是否解决：</span>
                <FormBinder name='radio'>
                  <RadioGroup>
                    <Radio id="yijiejue" value="yes">已解决</Radio>
                    <Radio id="weijiejue" value="no">未解决</Radio>
                  </RadioGroup>
                </FormBinder>
              </div>
              <div className='fankui'>
                <span>我要反馈：</span>
                <FormBinder name='messages'>
                  <Input.TextArea
                    placeholder="Type your message here..."
                    rows='10'
                  />
                </FormBinder>
                <Button type='primary' size='large'>提交</Button>
              </div>
            </FormBinderWrapper>
          </div>

        </div>
      </div>
    );
  }
}
const styles = {
  btn: {
    position: 'absolute',
    right: '60px',
    height: '28px',
    width: '80px',
    borderRadius: '6px',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};

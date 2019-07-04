import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button , Tab, Message ,Pagination,Table,Select, Menu,MenuButton,Switch } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Addgrouping from './Addgrouping';
import Official from './Adddevice/official';
import Custom from './Adddevice/custom';
import { deviceGrouplist,deviceparams,devicelist } from '@indexApi';
import '../../index.css';

const { Item } = MenuButton;
/* const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['淘小宝', '淘二宝'],
      level: ['普通会员'],
      rule: ['余杭盒马店'],
    };
  });
}; */

export default class Devicemanagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      pageSize: 10,
      total: 0,
      isLoading: false,
      datas: [],
      listValue: '状态/全部',
      toplist: false,
      grouplistdata: [
        { dGroupName: '' },
      ],
      // datas: [],
    };
  }
  btnClick() {
    this.props.editor(this.input.getInputNode().value);
  }

  componentDidMount() {
    this.Toupdatelist();
    this.fetchData();
  }
  // 获取分组列表
  Toupdatelist=()=>{
    deviceGrouplist().then(
      ({ status, data }) => {
        if (data.errCode == 0) {
          this.setState({
            grouplistdata: data.data,
          });
        }
        // Message.success(data.message);
      }
    );
  };
  // 设备组列表
  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const page = this.state.current;
        const limit = this.state.pageSize;
        devicelist({
          page,
          limit,
        }).then(({ status,data })=>{
          debugger;
          if (data.errCode == 0) {
            this.setState({
              datas: data.data.list,
              total: data.data.total,
              isLoading: false,
            });
          }
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
  // 添加分组
  groupingopen() {
    this.Addgrouping.addgroupingopen();
  }
  // 获取分组列表
  grouplist() {
    this.setState({
      toplist: !this.state.toplist,
    });
  }
  // 获取设备参数
  deviceopen(id) {
    // const dd = this.state.ApplicationChannel;
    console.log(id);
    deviceparams({
      dGroupId: id,
    }).then(
      ({ status, data }) => {
        if (data.errCode == 0) {
          this.grouplist();
          this.Official.officialopen(data.data,id);
          /* this.setState({
            datas: data.data,
          });
          debugger; */
          // this.Custom.customopen();
        }
      }
    );
  }
  renderRule = () => {
    return (
      <div>
        <select className='table-select'>
          <option value="volvo">默认规则</option>
          <option value="saab">自定义规则</option>
          <option value="opel">自定义规则</option>
          <option value="audi">新增规则</option>
        </select>
      </div>
    );
  };
  renderOper = () => {
    return (
      <div>
        <Switch className='div-switch' defaultChecked={false} />
      </div>
    );
  };
  zbl=(value)=>{
    this.setState({
      listValue: value,
    });
    // ajax 方法
  }
  render() {
    const { isLoading, datas, current,total,pageSize } = this.state;
    const Allstart = [
      { value: '状态/全部', label: '状态/全部' },
      { value: '可使用', label: '可使用' },
      { value: '离线', label: '离线' },
    ];
    const copybtn = (
      <Select onChange={this.zbl} style={{ width: '150px' }} placeholder={this.state.listValue} dataSource={Allstart} />
    );
    const phonebtn = (<Button>手机/邮箱验证查看</Button>);

    const grouplistdata = this.state.grouplistdata;
    const equipmentlist = (
      <ul className="event-list">
        {
          grouplistdata.map((item,key)=>{
              return (
                <li key={key}>
                  <p>{item.dGroupName}</p>
                  <button onClick={()=>this.deviceopen(item._id)}>添加设备</button>
                </li>
              );
            })
          }
      </ul>
    );
    console.log(this.state.datas);
    return (
      <div className='devicemanagement'>
        <Addgrouping ref={(node=>this.Addgrouping = node)} Toupdatelist={this.Toupdatelist} />
        <Official ref={(node=>this.Official = node)} />
        <Custom ref={(node=>this.Custom = node)} />
        <div className='devicemanagement-top'>
          设备列表
          <div className='devicemanagement-top-bottombor' />
          <div className='devicemanagement-top-btn'>
            <button onClick={this.grouplist.bind(this)}>分组列表</button>
            <button onClick={this.groupingopen.bind(this)}>+添加分组</button>
            <div className={this.state.toplist ? ('devicemanagement-top-list opicty') : ('devicemanagement-top-list')} >
              {equipmentlist}
              {/* <button className='devicemanagement-top-list-btn' onClick={this.closetoplist.bind(this)}>关闭列表</button> */}
            </div>
          </div>
        </div>
        <div className='devicemanagement-main'>
          <div className='devicemanagement-main-top'>
            <button onClick={this.deviceopen.bind(this)}>添加设备</button>
            <Message type="notice">
              本组对应渠道：支付宝扫码渠道
            </Message>
          </div>
          <div className='devicemanagement-main-content'>
            <Table loading={isLoading} dataSource={datas} hasBorder={false}>
              <Table.Column title="设备ID" dataIndex="_id" />
              <Table.Column title="今日流水/笔" dataIndex="todayFlow" />
              <Table.Column title="昨日流水/笔" dataIndex="yeTodayFlow" />
              <Table.Column title="累计流水/笔" dataIndex="totalFlow" />
              <Table.Column title={copybtn} dataIndex="2" cell={this.renderRule} />
              <Table.Column title="类型" dataIndex="classify" />
              <Table.Column
                title="操作"
                width={200}
                dataIndex="oper"
                cell={this.renderOper}
              />
            </Table>
            <Pagination
              style={{ marginTop: '20px', textAlign: 'right' }}
              current={current}
              onChange={this.handlePaginationChange}
              pageSize={pageSize} // 界面展示多少条数据
              total={total} // 一共多少条数据
            />
          </div>
        </div>
      </div>
    );
  }
}

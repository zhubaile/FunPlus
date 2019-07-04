import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { Button , Tab, Message ,Switch,Pagination,Table,Select, Menu,MenuButton } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
import { channel,channelbindRule } from '@indexApi';
import '../../index.css';

const Option = Select.Option;
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
@withRouter
export default class Paymentchannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waiceng: 0,
      shuzi: 0,
      total: 0,
      current: 1,
      isLoading: false,
      datas: [],
    };
  }
  btnClick() {
    this.props.editor(this.input.getInputNode().value);
  }

  componentDidMount() {
    this.fetchData();
  }

  /*  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据  resolve(应该写ajax方法)
      }, 600);
    });
  }; */

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const current = this.state.current;
        channel({
          page: current,
          limit: '10',
        }).then(({ status,data })=>{
          debugger;
          this.setState({
            datas: data.data,
            isLoading: false,
            total: data.total,
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
  // 下拉框的onChange
  ceshibtn(e) {
    const Windex = e.target.name; // 外围的索引
    const Nindex = e.target.value; // 里面的索引
    const Nstart = this.state.datas[Windex].rules[Nindex].ruleSwitch; // 选中的值的状态(true/false)
    const judgeid = this.state.datas[Windex]._id;
    debugger;
    const data = [...this.state.datas];
    const datas = data.map((item, idx) => (item._id == judgeid ? { ...item, ruleSwitch: Nstart } : item)); // 如果id相等，则替换ruleSwitch
    debugger;
    this.setState({
      datas,
      waiceng: Windex,
      shuzi: Nindex, // 里面的索引
    });
    debugger;
    console.log(e);
  }
  // 下拉框
  renderRule = (rules,index) => {
    console.log(index);
    debugger;
    if (!rules || rules.length == 0) {
      return null;
    }
    return (
      <div>
        <select className='table-select' name={index} onChange={this.ceshibtn.bind(this)}>
          {
            rules.map((item,index)=>{
              return <option value={index} selected={item.ruleSwitch}>{item.ruleName}</option>;
            })
          }
        </select>
      </div>
    );
  };
  btn() {
    this.props.history.push("/admin/applicationsettings/platformchannel");
  }
  // 默认开关
  renderOper = (value,index,record) => {
    return (
      <div>
        <Switch className='div-switch' checked={value} onClick={()=>this.changeswitch(record,index)} />
      </div>
    );
  };
  // 改变开关
  changeswitch(record,index) {
    debugger;
    const shuzi = this.state.shuzi;
    const reluss = record.rules;
    if (!reluss || reluss.length == 0) {
      return null;
    }
    debugger;
    const zbl = record.rules[shuzi]._id;
    const lbz = record.rules[shuzi].channelId;
    const operationSwitch = record.rules[shuzi].ruleSwitch;
    console.log(operationSwitch);
    debugger;
    channelbindRule({
      ruleSwitch: (operationSwitch != true),
      ruleId: zbl,
      channelId: lbz,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        this.fetchData();
      }
    });
  }
  render() {
    const { isLoading, datas, current, total } = this.state;
    console.log(this.state.datas);
    debugger;
    return (
      <div className='paymentchannel'>
        <Tab shape='pure' className='backstage-tab'>
          <Tab.Item title="应用直连渠道">
            <div className='tab-contentone' >
              <div className='tab-contentone-left'>
                <Message type='notice' className='tab-contentone-left-message'>
                  应用直连：使用您直接申请的渠道支付参数或我们代为您申请的渠道参数进行交易，所有资金有微信，支付宝，银联，持牌方清算
                </Message>
                <div>
                  <Table loading={isLoading} dataSource={datas} hasBorder={false}>
                    <Table.Column title="支付渠道" dataIndex="des" />
                    <Table.Column title="使用场景" dataIndex="payScene" />
                    <Table.Column title="路由规则" dataIndex="rules" cell={this.renderRule} />
                    <Table.Column
                      title="操作"
                      width={200}
                      dataIndex="ruleSwitch"
                      cell={this.renderOper}
                    />
                  </Table>
                  <Pagination
                    style={{ marginTop: '20px', textAlign: 'right' }}
                    current={current}
                    onChange={this.handlePaginationChange}
                    pageSize={10} // 界面展示多少条数据
                    total={total} // 一共多少条数据
                  />
                </div>
              </div>
              <div className='tab-contentone-right'>
                <div>
                  <p>启用状况</p>
                  <p> 关闭需要超管短信或邮箱验证，关闭后所有API操作都被拒绝</p>
                </div>
                <div>
                  <p>路由规则</p>
                  <p>默认规则：金额无上限，无风控，使用自主申请的主秘钥参数，无路由规则限制，如需自定义规则需要新添加</p>
                </div>
              </div>
            </div>
          </Tab.Item>

          <Tab.Item title="平台渠道" onClick={this.btn.bind(this)}>
          </Tab.Item>
        </Tab>
        <Paymentfooter />
      </div>
    );
  }
}

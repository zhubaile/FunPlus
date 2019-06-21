import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { Button , Tab, Message ,Switch,Pagination,Table,Select, Menu,MenuButton } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
import { channel,channelbindRule } from '@indexApi';
import '../../index.css';

const Option = Select.Option;
const { Item } = MenuButton;
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['淘小宝', '淘二宝'],
      level: ['普通会员'],
      rule: ['余杭盒马店'],
    };
  });
};
@withRouter
export default class Paymentchannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuzi: '0',
      total: 0,
      current: 1,
      isLoading: false,
      data: [],
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
        /* this.mockApi(len).then((data) => { // data 里面为数据
          this.setState({
            data,
            isLoading: false,
          });
        }); */
        const current = this.state.current;
        channel({
          page: current,
          limit: '10',
        }).then(({ status,data })=>{
          debugger;
          this.setState({
            data: data.data,
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
  /* ceshibtn(e,v,item) {
    debugger;
    console.log(e);
  } */
  ceshibtn(e) {
    debugger;
    // const index = e.target.name;
    this.setState({
      shuzi: e.target.value,
    });
    // const zzz = Object.assign({},this.state.data[index],{ ruleSwitch: false });
    //  const bbb = Object.assign({},this.state.data,{ data[index]: zzz });
    // console.log(zzz);
    // const bbb = Object.assign({},this.state.data,{ ruleSwitch: false });
    /* this.setState({
      data: zzz,
    }); */
    /*  this.setState({
      this.state.data[0].rolus[].switch:false
    }) */
    debugger;
    console.log(e);
  }
  renderRule = (rules,index) => {
    console.log(index);
    // const selectIndex = index
    if (!rules || rules.length == 0) {
      return null;
    }
    // const channelnameId = rules[0].channelId;
    return (
      <div>
        {/* <Select className='table-select' onChange={this.ceshibtn} dataSource={rules}>
           {
            rules.map((item,index)=>{
              debugger;
              return <Option value={item.ruleName} selected={item.ruleSwitch} />;

              onChange={this.ceshibtn.bind(this)}
              value={item._id}  name={channelnameId}
              selected={item.ruleSwitch}

            })
          }
        </Select> */}
        <select className='table-select' name={index} onChange={this.ceshibtn.bind(this)}>
          {
            rules.map((item,index)=>{
              return <option value={index} >{item.ruleName}</option>;
            })
          }
        </select>
      </div>
    );
  };
  btn() {
    this.props.history.push("/admin/applicationsettings/platformchannel");
  }
  renderOper = (value,index,record) => {
    // record 是所有数据
    const asd = this.state.shuzi;
    // const ifchecked = record.rules[asd].ruleSwitch;
    const ifchecked = true;
    // 对应显示的开关不匹配
    return (
      <div>
        <Switch className='div-switch' checked={ifchecked} onClick={()=>this.changeswitch(record,index)} />
      </div>
    );
  };
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
    /*  if (operationSwitch == true) {
      operationSwitch == false;
    } else {
      operationSwitch == true;(operationSwitch != true)
    } */
    // {operationSwitch==true?false:true}
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
    const { isLoading, data, current, total } = this.state;
    // const copybtn = (<Button>复制</Button>);
    // const phonebtn = (<Button>手机/邮箱验证查看</Button>);
    console.log(this.state.data);
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
                  <Table loading={isLoading} dataSource={data} hasBorder={false}>
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

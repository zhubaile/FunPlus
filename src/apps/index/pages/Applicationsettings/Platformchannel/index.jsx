import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button , Tab, Message ,Switch,Pagination,Table,Dropdown, Menu,MenuButton } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
import { channel } from '@indexApi';
import '../../index.css';

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
export default class Platformchannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据  resolve(应该写ajax方法)
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
      /*  channel().then(({ status,data })=>{
          debugger;
          this.setState({
            data: data.data,
            isLoading: false,
          });
        });*/
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

  renderRule = (rules) => {
    return (
      <div>
        <select className='table-select'>
          {
            rules.map((item,index)=>{
              debugger;
              return <option value="volvo">{item.ruleName}</option>;
            })
          }
          {/* <option value="volvo">默认规则</option>
          <option value="saab">自定义规则</option>
          <option value="opel">自定义规则</option>
          <option value="audi">新增规则</option> */}
        </select>
      </div>
    );
  };
  renderOper = (ruleswitch) => {
    debugger;
    return (
      <div>
        <Switch className='div-switch' defaultChecked={false} />
      </div>
    );
  };
  btn() {
    this.props.history.push("/admin/applicationsettings/paymentchannel");
  }
  render() {
    const { isLoading, data, current } = this.state;
    const copybtn = (<Button>复制</Button>);
    const phonebtn = (<Button>手机/邮箱验证查看</Button>);
    return (
      <div className='paymentchannel'>
        <Tab shape='pure' className='backstage-tab' defaultActiveKey='2'>
          <Tab.Item title="应用直连渠道" key='1' onClick={this.btn.bind(this)}>

          </Tab.Item>

          <Tab.Item title="平台渠道" key='2'>
            <div className='tab-contentone' >
              <div className='tab-contentone-left'>
                <Message type='notice' className='tab-contentone-left-message'>
                  平台渠道：平台渠道：平台作为技术服务商发起支付api，商户申请后开箱即用，资金由微信，支付宝，银联等持牌机构清算。
                </Message>
                <div>
                  <Table loading={isLoading} dataSource={data} hasBorder={false}>
                    <Table.Column title="支付渠道" dataIndex="name" />
                    <Table.Column title="使用场景" dataIndex="level" />
                    <Table.Column title="路由规则" dataIndex="rule" cell={this.renderRule} />
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
                  <p>平台渠道的路由规则禁用设备分组及设备模式</p>
                </div>
              </div>
            </div>
          </Tab.Item>
        </Tab>
        <Paymentfooter />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button , Tab, Message ,Switch,Pagination,Table,Dropdown, Menu,MenuButton  } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
// import IceContainer from '@icedesign/container';
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

export default class Applicationmember extends Component {
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

  render() {
    const { isLoading, data, current } = this.state;
    const copybtn = (<Button>复制</Button>);
    const phonebtn = (<Button>手机/邮箱验证查看</Button>);
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
                  <p>默认规则：金额无上限，无风控，使用自主申请的主秘钥参数，无路由规则限制，如需自定义规则需要新添加</p>
                </div>
              </div>
            </div>
          </Tab.Item>

          <Tab.Item title="平台渠道">
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
      </div>
    );
  }
}

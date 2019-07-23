import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, Switch , Tab,Message ,Table,Pagination } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
import RoutingPopup from './RoutingPopup';
import IceContainer from '@icedesign/container';
import { routerRulelist,routerRule } from '@indexApi';
import '../../index.css';

const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['淘小宝', '淘二宝'],
      level: ['普通会员'],
      oper: ['余杭盒马店'],
    };
  });
};
const { Row, Col } = Grid;
export default class Routingrules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      total: 0,
      current: 1,
      isLoading: false,
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const current = this.state.current;
        routerRulelist({
          page: current,
          limit: '10',
        }).then(({ status,data })=>{
          if (data.errCode == 0) {
            this.setState({
              data: data.data,
              isLoading: false,
              total: data.total,
            });
          } else {
            Message.success(data.message);
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
  btnClick() {
    this.props.editor(this.input.getInputNode().value);
  }
  /*  renderRule = (rules) => {
    debugger;
    return (
      <div>
        <select className='table-select'>
          {
          rules.map((item,index)=>{
            debugger;
            return <option value="volvo">{item.ruleName}</option>;
          })
        }
        </select>
      </div>
    );
  }; */
  routerRulebtn(record) {
    debugger;
    routerRule({
      ruleId: record.ruleId,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        const datas = data.data;
        this.RoutingPopup.Routingopen(datas);
        // const dataVal = datas.map(item=>({ value: item.channelId,label: item.channelName,dGroupData: item.dGroupData })); // 改变成想要的属性名
        // this.setState({
        //   values: datas.channelData,
        // },()=>{
        //   this.RoutingPopup.Routingopen(datas);
        // });
      } else {
        Message.success(data.message);
      }
    });
  }
  renderOper = (rule) => {
    return (
      <div>
        <Switch className='div-switch' checked={rule} />
      </div>
    );
  };
  caozuo = (value, index, record) => {
    return (
      <div>
        <a
          type="primary"
          style={{ cursor: 'pointer', marginLeft: '3px' }}
          onClick={()=>this.routerRulebtn(record)}
        >
          编辑
        </a>
      </div>
    );
  };
  // consultationpopup() {
  //   this.RoutingPopup.Routingopen();
  // }
  render() {
    console.log(this.state.total);
    const { isLoading, data, current, total } = this.state;
    console.log(this.state.total);
    return (
      <IceContainer className='routingrules'>
        <RoutingPopup ref={ node => this.RoutingPopup = node } fetchData={this.fetchData.bind(this)} />
        <Tab className='routingrules-tab'>
          <Tab.Item title="路由规则">
            <div className='routingrules-tab-top'>
              <Message type='notice'>
               每条路由规则对应一个支付渠道
              </Message>
              <Button className='btn-all' style={styles.bg} size='large' type='secondary' onClick={this.routerRulebtn.bind(this)}>创建新规则</Button>
            </div>
            <div>
              <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="规则名称" dataIndex="ruleName" />
                <Table.Column title="使用渠道" dataIndex="channelName" />
                {/* <Table.Column title="路由规则" dataIndex="rules" cell={this.renderRule} /> */}
                <Table.Column
                  title="状态"
                  width={200}
                  dataIndex="ruleSwitch"
                  cell={this.renderOper}
                />
                <Table.Column title="操作" dataIndex="caozuo" cell={this.caozuo} />
              </Table>
              {/* <Pagination style={{ marginTop: '20px', textAlign: 'right' }} pageSizeSelector="dropdown" total='1' pageSizePosition="start" onChange={this.handlePaginationChange} /> */}
              <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
                pageSize={10}
                total={total} // 一共多少条数据
                // totalRender={total => `Total: ${total}`}
              />
            </div>
          </Tab.Item>
        </Tab>
        <Paymentfooter />
      </IceContainer>
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
  bg: {
    borderRadius: '4px',
    marginLeft: '30%',
    marginTop: '30px',
  },
};

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, Switch , Tab,Message ,Table,Pagination } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
import RoutingPopup from './RoutingPopup';
import IceContainer from '@icedesign/container';
import { routerRulelist } from '@indexApi';
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
      total: 0,
      current: 1,
      isLoading: false,
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  /* mockApi = (len) => {
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
        routerRulelist({
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
  btnClick() {
    // console.log(this.input.value,this);
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
  renderOper = (rule) => {
    debugger;
    return (
      <div>
        <Switch className='div-switch' checked={rule} />
      </div>
    );
  };
  consultationpopup() {
    this.RoutingPopup.Routingopen();
  }
  render() {
    console.log(this.state.total);
    const { isLoading, data, current, total } = this.state;
    console.log(this.state.total);
    return (
      <IceContainer className='routingrules'>
        <RoutingPopup ref={ node => this.RoutingPopup = node } />
        <Tab className='routingrules-tab'>
          <Tab.Item title="路由规则">
            <div className='routingrules-tab-top'>
              <Message type='notice' style={styles.message}>
               每条路由规则对应一个支付渠道
              </Message>
              <Button className='btn-all' style={styles.bg} size='large' type='secondary' onClick={this.consultationpopup.bind(this)}>创建新规则</Button>
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
  message: {
    background: '#E6F7FF',
    border: '1px solid #91D5FF',
    borderradius: '6px',
    margin: '10px 20px 25px',
    width: '50%',
    float: 'left',
  },
  bg: {
    /*    background: '#E6F1FC',
    color: '#1989FA', */
    borderRadius: '6px',
    marginLeft: '20px',
    marginTop: '20px',
  },
};

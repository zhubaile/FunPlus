import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
import IceContainer from '@icedesign/container';
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
      current: 1,
      isLoading: false,
      data: [],
    };
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
  btnClick() {
    // console.log(this.input.value,this);
    // ;
    this.props.editor(this.input.getInputNode().value);
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
  consultationpopup() {
    this.RoutingPopup.open();
  }
  render() {
    const { isLoading, data, current } = this.state;
    return (
      <IceContainer className='routingrules'>
        <Tab className='routingrules-tab'>
          <Tab.Item title="路由规则">
            <div className='routingrules-tab-top'>
              <Message type='notice' style={styles.message}>
               每条路由规则对应一个支付渠道
              </Message>
              <Button style={styles.bg} onClick={this.consultationpopup.bind(this)}>创建新规则</Button>
            </div>
            <div>
              <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="规则名称" dataIndex="name" />
                <Table.Column title="使用渠道" dataIndex="level" />
                <Table.Column title="路由规则" dataIndex="rule" cell={this.renderRule} />
                <Table.Column
                  title="状态"
                  width={200}
                  dataIndex="oper"
                />
              </Table>
              <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
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
    borderradius: '5px',
    margin: '10px 20px 25px',
    width: '50%',
    float: 'left',
  },
  bg: {
    background: '#E6F1FC',
    color: '#1989FA',
    borderRadius: '5px',
    marginLeft: '20px',
    marginTop: '20px',
  },
};

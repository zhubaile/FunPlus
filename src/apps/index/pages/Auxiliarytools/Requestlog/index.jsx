import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination, Dialog, Icon } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
import Customerservice from "../../Personal/components/Customerservice";
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import moment from "moment/moment";
import IceContainer from '@icedesign/container';
import '../../index.css';

const { RangePicker } = DatePicker;
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      requesttime: ['Minnie Ford', 'Marian Ford', 'Nathaniel', 'Earl Harper'][random(0, 3)],
      requestaddress: ['Ethiopia', 'Mauritania', 'Dominican Republic', 'Andorra'][random(0, 3)],
      responsestatuscode: ['Transfering', 'Success', 'Creating'][random(0,2)],
      requestip: ['11-03-2017', '08-15-2017', '12-22-2017', '05-19-2017'][random(0,3)],
      requestmethod: ['91894-8699', '45109-0193', '13177-4309', '76562'][random(0,3)],
     /* balance: random(10000, 100000),
      accumulative: random(50000, 100000),
      regdate: `2018-12-1${random(1, 9)}`,*/
/*      birthday: `1992-10-1${random(1, 9)}`,
      store: ['余杭盒马店', '滨江盒马店', '西湖盒马店'][random(0, 2)],
      z: ['支付宝'],*/
    };
  });
};
const { Row, Col } = Grid;
export default class Routingrules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        startdate: '',
      },
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


  handleDetail = () => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持查看详情',
    });
  };
  renderOper = () => {
    return (
      <div>
        <a
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          详情
        </a>
      </div>
    );
  };
  consultationpopup() {
    this.RoutingPopup.open();
  }
  render() {
    const { isLoading, data, current } = this.state;

    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2019-05-08', 'YYYY-MM-DD', true);

    return (
      <IceContainer className='routingrules'>
        <Tab className='routingrules-tab'>
          <Tab.Item title="请求log查看">
            <div className='routingrules-tab-top'>
              {/* <Message type='notice' style={styles.message}>
               每条路由规则对应一个支付渠道
              </Message> */}
              {/*              <Button style={styles.bg} onClick={this.consultationpopup.bind(this)}>创建新规则</Button> */}
            </div>
            <div>
              <p>工具简介：您可以根据时间段查询对应的日志信息便于调试。</p>
              <p>查询范围：查询到的结果包含此账号下当前应用所有的日志信息。</p>
              <FormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
                ref="form"
              >
              <FormBinder name='startdate'>
                <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
              </FormBinder>
                <Button className='' type="primary">查询</Button>
                <Table loading={isLoading} dataSource={data} hasBorder={false}>
                  <Table.Column title="请求时间" dataIndex="requesttime" />
                  <Table.Column title="请求地址" dataIndex="requestaddress" />
                  <Table.Column title="响应状态码" dataIndex="responsestatuscode" />
                  <Table.Column title="请求IP" dataIndex="requestip" />
                  <Table.Column title="请求方法" dataIndex="requestmethod" />
                  <Table.Column
                    title="操作"
                    width={200}
                    dataIndex="oper"
                    cell={this.renderOper}
                  />
                </Table>
            {/*  <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="规则名称" dataIndex="name" />
                <Table.Column title="使用渠道" dataIndex="level" />
                <Table.Column title="路由规则" dataIndex="rule" cell={this.renderRule} />
                <Table.Column
                  title="状态"
                  width={200}
                  dataIndex="oper"
                />
              </Table>*/}
              </FormBinderWrapper>
              <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
              />
            </div>
          </Tab.Item>
        </Tab>
        {/*   <Paymentfooter /> */}

        <p><span>返回</span>日志详情</p>

        <p><span>日志批次ID</span></p>
        <p> <span>请求时间</span></p>
        <p><span>生产模式</span></p>
{/*        <Button type="primary" size="large" iconSize="large"><Icon type="atm" />在线客服</Button>*/}
        <Customerservice />
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

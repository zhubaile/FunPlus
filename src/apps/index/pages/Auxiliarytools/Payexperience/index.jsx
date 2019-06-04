import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination, Select, Icon } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
import Customerservice from "../../Personal/components/Customerservice";
import RoutingPopup from './RoutingPopup';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
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
      value: {
        zhifuqudao: '支付渠道',
        jine: '',
        luyouguize: '指定路由规则',
        shebei: '输入指定设备',
        yibudizhi: '',
        tongbudizhi: '',
        dingdanbeizhu: '',
      },
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
        {/* <select className='table-select'>
          <option value="volvo">默认规则</option>
          <option value="saab">自定义规则</option>
          <option value="opel">自定义规则</option>
        </select> */}
      </div>
    );
  };
  consultationpopup() {
    this.RoutingPopup.open();
  }
  render() {
    const { isLoading, data, current } = this.state;
    const zhifuqudao = [
      { value: '支付渠道 ', label: '支付渠道' },
    ];
    const luyouguize = [
      { value: '指定路由规则 ', label: '指定路由规则' },
    ];
    const shebei = [
      { value: '输入指定设备 ', label: '输入指定设备' },
    ];

    return (
      <IceContainer className='routingrules'>
        <RoutingPopup ref={ node => this.RoutingPopup = node } />
        <Tab className='routingrules-tab'>
          <Tab.Item title="支付体验">
            <div className='routingrules-tab-top'>
              <Message type='notice' style={styles.message}>
               模拟终端用户付款流程，也就是你对接后的支付效果，只限模拟有权限的支付渠道
              </Message>
            </div>
            <div className='membermanagement-top'>
              <FormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
                ref="form"
              >
                <FormBinder name="zhifuqudao"
                  autoWidth={false}
                >
                  <Select className='member-role' dataSource={zhifuqudao} defaultValue='支付渠道' />
                </FormBinder>
                <FormBinder name='jine'>
                  <Input hasClear placeholder='金额（单位：分）' />
                </FormBinder>
                <p>以下非必填</p>
                <FormBinder name="luyouguize"
                  autoWidth={false}
                >
                  <Select className='member-role' dataSource={luyouguize} defaultValue='指定路由规则' />
                </FormBinder>
                <FormBinder name="shebei"
                  autoWidth={false}
                >
                  <Select className='member-role' dataSource={shebei} defaultValue='输入指定设备' />
                </FormBinder>
                <FormBinder name='yibudizhi'>
                  <Input hasClear placeholder='异步通知地址' />
                </FormBinder>
                <FormBinder name='tongbudizhi'>
                  <Input hasClear placeholder='同步地址' />
                </FormBinder>
                <FormBinder name='dingdanbeizhu'>
                  <Input hasClear placeholder='订单备注' />
                </FormBinder>
                <Button type="primary" style={styles.bg}>去测试</Button>
                {/*                <Button className='bg' size="large" type="primary">搜索</Button> */}
                {/* <button className='addmemberbtn' onClick={this.addmemberbtn.bind(this)}>添加成员</button> */}
              </FormBinderWrapper>
            </div>
            <div>
              {/* <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="规则名称" dataIndex="name" />
                <Table.Column title="使用渠道" dataIndex="level" />
                <Table.Column title="路由规则" dataIndex="rule" cell={this.renderRule} />
                <Table.Column
                  title="状态"
                  width={200}
                  dataIndex="oper"
                />
              </Table> */}
              {/* <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
              /> */}
            </div>
          </Tab.Item>
        </Tab>
        <Customerservice />
        {/* <Paymentfooter /> */}
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button , Tab, Message ,Switch,Pagination,Table,Dropdown, Menu,MenuButton, Select, Input, Icon } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Paymentfooter from '../components/Paymentfooter';
// import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../index.css';
import Customerservice from "../../Personal/components/Customerservice";
import Returnresult from "./Returnresult/index";


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

export default class Serversidecharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      isLoading: false,
      data: [],
      value: {
        yourhttps: 'https://',
        yoururl: '',
        luyouguize: '指定路由规则',
        shebei: '输入指定设备',
        yibudizhi: '',
        tongbudizhi: '',
        dingdanbeizhu: '',
      },
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
      <div />
    );
  };
  renderOper = () => {
    return (
      <div>
        <Switch className='div-switch' defaultChecked={false} />
      </div>
    );
  };

  serversidechargeOpen() {
    this.Returnresult.returnresultopen();
  }


  render() {
    const { isLoading, data, current } = this.state;
    const yourhttps = [
      { value: 'https:// ', label: 'https://' },
      { value: 'http:// ', label: 'http://' },
    ];

    return (
      <div className='serversidecharge'>

        <Returnresult ref={ node => this.Returnresult = node } />

        <Tab shape='pure' className=''>
          <Tab.Item title="服务端Charge格式验证">
            <div className='tab-contentone' >
              <div className='tab-contentone-left'>
                <Message type='notice' className='tab-contentone-left-message'>
                  模拟你的客户端向你的服务端发起订单支付请求。正常情况下，你的服务端应该向你的客户端返回正确的订单对象（charge 对象），之后你的客户端应该使用
                  这个订单对象调用客户端SDK调起支付页面（控件支付或者网页支付）或将订单对象上的地址显示二维码（扫码支付）阅读文档
                </Message>
              </div>
              <div className='tab-contentone-middle'>
                <div className='inner-box'>
                  <p>填入你的服务URL，我们将向这个URL发送POST请求：</p>
                  <FormBinderWrapper
                    value={this.state.value}
                    onChange={this.formChange}
                    ref="form"
                  >
                    <FormBinder name="yourhttps"
                      autoWidth={false}
                    >
                      <Select className='member-role' dataSource={yourhttps} defaultValue='https://' />
                    </FormBinder>
                    <FormBinder name='yoururl'>
                      <Input className='input-bg' style={{ marginLeft: '30px' }} hasClear placeholder='您的url地址' />
                    </FormBinder>
                  </FormBinderWrapper>
                </div>
                <div className='inner-box'>
                  <p>选择application/json或者application/x-www-form-urlencoded,并输入相应的发送内容</p>
                  <Tab shape="capsule">
                    <Tab.Item title="json"><Input className='input-bg' type='text' placeholder='格式如下：' style={{ width: '350px', height: '250px' }} /></Tab.Item>
                    <Tab.Item title="from"><Input className='input-bg' type='text' placeholder='格式如下：' style={{ width: '350px', height: '250px' }} /></Tab.Item>
                  </Tab>
                </div>
                <div className='inner-box'>
                  <Button onClick={this.serversidechargeOpen.bind(this)} type='primary' size='large' style={{ borderRadius: '6px', height: '28px', left: '288px' }}>提交</Button>
                </div>


              </div>
              {/*
              <div className='tab-contentone-bottom'>
                <p>返回结果</p>
              </div>
*/}
            </div>
          </Tab.Item>

        </Tab>

        <Customerservice />
      </div>
    );
  }
}


const styles = {

};

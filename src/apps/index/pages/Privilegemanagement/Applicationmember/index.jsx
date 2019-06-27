import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button , Tab, Message ,Switch,Pagination,Table,Select , Menu,MenuButton, Radio, Input } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
// import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../index.css';
// import SelectLang from "../../../../Internationalization/SelectLang/SelectLang";

const { Item } = MenuButton;
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['肖悦'],
      email: ['123456789@qq.com'],
      tel: ['12345678'],
      remark: ['111'],
      role: [' - a-'],
      status: [false,'haode'],
      oper: ['aaa'],
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
      value: {
        jiaose: '角色',
        haoma: '',
      },
    };
  }
  /*  btnClick() {
      this.props.editor(this.input.getInputNode().value);
    } */

  componentDidMount() {
    debugger;
    this.fetchData();
  }

  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据  resolve(应该写ajax方法)
        debugger;
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
          debugger;
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


/*  renderStatus = (datas) => {
    debugger;
    // const z = datas[0];
    return (
      <div>
        <Radio id="shiduide" value="shiduide" checked={z} >{datas[1]}</Radio>
        {/!* <Radio id="shiduide" value="shiduide" checked={false}>--</Radio> *!/}
      </div>
    );
  };*/


  /*  renderOper = () => {
      return (
        <div>
          <Switch className='div-switch' />
        </div>
      );
    }; */

  renderOper = () => {
    return (
      <div>
        <Switch size='small' className='div-switch' defaultChecked={false} />
      </div>
    );
  };
  formChange=(value)=>{
    debugger;
  }
  render() {
    const { isLoading, data, current } = this.state;


    const jiaose = [
      { value: '角色 ', label: '角色' },
      { value: '我', label: '我' },
    ];


    return (
      <div className='applicationmember'>
        <Tab shape='pure' className='backstage-tab'>
          <Tab.Item title="应用成员">
            <div className='member-main-top'>
              <div className='membermanagement-top'>
                <FormBinderWrapper
                  value={this.state.value}
                  onChange={this.formChange}
                  ref="form"
                >
                  <FormBinder name='haoma'>
                    <Input className='input-bg' hasClear placeholder='输入姓名/邮箱/手机号' />
                  </FormBinder>
                  <FormBinder name="jiaose"
                    autoWidth={false}
                  >
                    <Select className='member-role' dataSource={jiaose} defaultValue='角色' />
                  </FormBinder>
                  <Button className='btn-all' style={{ marginLeft: '20px' }} size="large" type="secondary">搜索</Button>
                  {/* <button className='addmemberbtn' onClick={this.addmemberbtn.bind(this)}>添加成员</button> */}
                </FormBinderWrapper>
              </div>
            </div>
            <p className='addmember-notice'>
              新增成员请在：右上角头像----角色权限----添加成员内进行激活----添加成员时选择此应用
            </p>
            <div className='member-panel' >
              <div className='tab-bg'>
                <div className='tab-panel'>
                  <Table loading={isLoading} dataSource={data} hasBorder={false}>
                    <Table.Column title="姓名" dataIndex="name" />
                    <Table.Column title="邮箱" dataIndex="email" />
                    <Table.Column title="手机号" dataIndex="tel" />
                    <Table.Column title="备注" dataIndex="remark" />
                    <Table.Column title="角色" dataIndex="role" />
                    <Table.Column title="状态" dataIndex="status" cell={this.renderStatus} />
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
            </div>
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}


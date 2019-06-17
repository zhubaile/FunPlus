/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import { Input, Radio, Tab , Button, Grid, Form, DatePicker,Table,Pagination,Select } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import Customerservice from "../components/Customerservice";
import Addmenber from "./addmember";
import Newrole from "./newrole";
import Editingrole from "./editingrole";

import '../../index.css';

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['肖悦'],
      level: ['12345678@qq.com'],
      rule: ['136123456'],
      oper: ['撒打发斯蒂芬'],
      role: ['系统管理员'],
      zhuangtai: [false,'已激活'],
      description: ['在应用中拥有所有操作权限'],
    };
  });
};

class Membermanagement extends Component {
  static displayName = 'Membermanagement';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        quanbuyingyong: '0',
        jiaose: '0',
        haoma: '',
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
  // 添加成员弹出框
  addmemberbtnopen() {
    this.Addmenber.open();
  }

  newrolebtnopen() {
    this.Newrole.open();
  }

  editingrolebtnopen() {
    this.Editingrole.open();
  }

  formChange=(value)=>{
    debugger;
  }
  // 状态的值
  renderOper = (datas) => {
    const z = datas[0];
    return (
      <div>
        <Radio id="shiduide" value="shiduide" checked={z} >{datas[1]}</Radio>
        {/* <Radio id="shiduide" value="shiduide" checked={false}>--</Radio> */}
      </div>
    );
  };

  renderOper = (value,index,record) => {
    return (
      <div>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px', borderRight: '2px solid #999999' }}
/*          onClick={this.handleDetail}*/
          onClick={this.editingrolebtnopen.bind(this)}
        >
          <FormattedMessage id="app.btn.detail" />
        </a>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px' }}
          onClick={this.handleDelete}
        >
          <FormattedMessage id="app.btn.delete" />
        </a>
{/*        <Button
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          <FormattedMessage id="app.btn.detail" />
        </Button>
        <Button type="normal" warning onClick={()=>this.handleDelete(record,index)}>
          <FormattedMessage id="app.btn.delete" />
        </Button>*/}
      </div>
    );
  };

  render() {
    const { isLoading, data, current } = this.state;
    const {
      intl: { formatMessage },
    } = this.props;

    const quanbuyingyong = [
      { value: '0', label: '全部应用' },
      { value: '1', label: '部分' },
    ];
    const jiaose = [
      { value: '0', label: '角色' },
      { value: '1', label: '人' },
    ];
    return (
      <div className='membermanagement'>
        <Addmenber ref={node=>this.Addmenber = node} />
        <Newrole ref={node=>this.Newrole = node} />
        <Editingrole ref={node=>this.Editingrole = node} />
        <Tab shape='pure'>
          <Tab.Item title="成员管理">
            <div className='membermanagement-top'>
              <FormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
                ref="form"
              >
                <FormBinder name="quanbuyingyong" >
                  <Select dataSource={quanbuyingyong} style={styles.forminput} />
                </FormBinder>
                <FormBinder name='jiaose' >
                  <Select dataSource={jiaose} style={styles.forminput} />
                </FormBinder>
                <FormBinder name='haoma' >
                  <Input hasClear placeholder='输入号' style={styles.forminput} />
                </FormBinder>
                <Button className='bg' size="large" type="primary">搜索</Button>
                <button className='addmemberbtn' onClick={this.addmemberbtnopen.bind(this)}>添加成员</button>
              </FormBinderWrapper>
            </div>
            <div className='membermanagement-bottom'>
              <div className='membermanagement-bottom-top'>
                <RadioGroup defaultValue="zbla">
                  <Radio id="zbla" value="zbla">已激活</Radio>
                  <Radio id="lbza" value="lbza">邀请已发送至手机或邮箱</Radio>
                </RadioGroup>
              </div>
              <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="姓名" dataIndex="name" />
                <Table.Column title="邮箱" dataIndex="level" />
                <Table.Column title="手机号" dataIndex="rule" />
                <Table.Column
                  title="备注"
                  dataIndex="oper"
                />
                <Table.Column title="角色" dataIndex="role" />
                <Table.Column
                  title="状态"
                  dataIndex="zhuangtai"
                />
{/*                <Table.Column title="操作" dataIndex="caozuo" />*/}

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
          </Tab.Item>


          <Tab.Item title="角色权限">
            <div className='membermanagements-top'>
              <div className='membermanagement-bottom-top'>
                <button className='Newrole' onClick={this.newrolebtnopen.bind(this)}>新增角色</button>
              </div>
              <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="角色" dataIndex="role" />
                <Table.Column
                  title="说明"
                  dataIndex="description"
                />
                <Table.Column
                  title="状态"
                  dataIndex="zhuangtai"

                />
{/*                <Table.Column title="操作" dataIndex="caozuo" />*/}
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
          </Tab.Item>
        </Tab>
        <Customerservice />
      </div>
    );
  }
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  forminput: {
    width: '200px',
    marginLeft: '20px',
  },
};

export default injectIntl(Membermanagement);

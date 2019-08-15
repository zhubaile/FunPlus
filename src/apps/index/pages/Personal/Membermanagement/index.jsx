/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter, Link } from 'react-router-dom';
import { Input, Radio, Tab , Button, Grid, Form, DatePicker,Table,Pagination,Select } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import Customerservice from "../components/Customerservice";
import Addmenber from "./addmember";
/* import Newrole from "./NewRole";
import Editingrole from "./EditingRole"; */
import { searchUserList, userDelete } from '@indexApi';


import '../../index.css';
import { Message } from "@alifd/next/lib/index";

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
@withRouter
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
      total: 0, // 总数据
      pageSize: 10, // 一页条数
      current: 1, // 页码
      isLoading: false,
      datas: [],
      roless: [],
      search: [],
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
        const pages = this.state.current;
        const pageSize = this.state.pageSize;
        searchUserList({
          page: pages,
          pageSize,
        }).then(({ status,data })=>{
          debugger;
          if (data.errCode == 0) {
            const roless = data.data.role; // 选择渠道
            const searchrole = roless.map(item=>({ value: item.roleName,label: item.description }));
            //  const zzz = Object.assign({},this.state.search,{ role: datas });
            this.setState({
              datas: data.data.result,
              search: searchrole,
              isLoading: false,
              total: data.data.totalCount,
            });
          } else {
            Message.success(data.message);
          }
        });
      }
    );
  };
  // 翻页
  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData();
        /* const pages = this.state.current;
        const pageSize = this.state.pageSize;
        debugger;
        searchUserList({
          page: pages,
          pageSize,
        }).then((status,data)=>{
          debugger;

        }); */
        // this.fetchData();
      }
    );
  };
  // 添加成员弹出框
  addmemberbtnopen(record) {
    const searchs = this.state.search;
    this.Addmenber.addmemberopen(searchs,record);
  }
  formChange=(value)=>{

  }
  // 搜索框
  searchbtn() {
    this.refs.form.validateAll((errors, values) => {
      const pages = this.state.current;
      const pageSizes = this.state.pageSize;
      searchUserList({
        quanbuyingyong: values.quanbuyingyong,
        roles: values.roles,
        keyword: values.keyword,
        page: pages,
        pageSize: pageSizes,
      }).then(({ status,data })=>{
        debugger;
        if (data.errCode == 0) {
          this.setState({
            datas: data.data.result,
          });
        }
      });
    });
  }
  onRemove = (id) => {
    const { datas } = this.state;
    userDelete({
      _id: id,
    }).then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        let index = -1;
        datas.forEach((item, i) => {
          if (item._id === id) {
            index = i;
          }
        });
        if (index !== -1) {
          datas.splice(index, 1);
          this.setState({
            datas,
          });
        }
      }
    });
    // 写一个删除的请求
  };
  renderOper = (value,index,record) => {
    return (
      <div>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px', cursor: 'pointer' }}
          onClick={this.onRemove.bind(this,record._id)}
        >
          <FormattedMessage id="app.btn.delete" />
        </a>
        <a
          style={{ color: 'rgba(26, 85, 226, 1)', padding: '0px 5px',cursor: 'pointer' }}
          onClick={()=>this.addmemberbtnopen(record)}
        >
          编辑
        </a>
      </div>
    );
  };
  btn() {
    this.props.history.push('/admin/personal/rolepermissions');
  }
  render() {
    const { isLoading, datas, current, search, total, pageSize } = this.state;
    const {
      intl: { formatMessage },
    } = this.props;

    const quanbuyingyong = [
      { value: '0', label: '全部应用' },
      { value: '1', label: '部分' },
    ];
    const jiaose = search;
    return (
      <div className='membermanagement'>
        <Addmenber ref={node=>this.Addmenber = node} fetchData={this.fetchData.bind(this)} />
        {/*  <Newrole ref={node=>this.Newrole = node} />
        <Editingrole ref={node=>this.Editingrole = node} /> */}
        <Tab shape='pure'>
          <Tab.Item title="成员管理">
            <div className='membermanagement-top'>
              <FormBinderWrapper
                // value={this.state.value}
                value={search}
                onChange={this.formChange}
                ref="form"
              >
                <FormBinder name="quanbuyingyong" >
                  <Select dataSource={quanbuyingyong} style={styles.forminput} placeholder='全部应用' />
                </FormBinder>
                <FormBinder name='roles' >
                  <Select mode="multiple" style={styles.forminput} dataSource={jiaose} placeholder='选择角色' />
                  {/* <Select dataSource={jiaose} style={styles.forminput} placeholder='角色' /> */}
                </FormBinder>
                <FormBinder name='keyword' >
                  <Input hasClear placeholder='支持姓名邮箱手机号' style={styles.forminput} />
                </FormBinder>
                <Button className='btn-all' style={{ marginLeft: '20px' }} size="large" type='primary' onClick={this.searchbtn.bind(this)}>搜索</Button>
                <button className='mybtn addmemberbtn' onClick={()=>this.addmemberbtnopen()}>添加成员</button>
              </FormBinderWrapper>
            </div>
            <div className='membermanagement-bottom'>
              <div className='membermanagement-bottom-top'>
                <RadioGroup defaultValue="zbla">
                  <Radio id="zbla" value="zbla">已激活</Radio>
                  <Radio id="lbza" value="lbza">邀请已发送至手机或邮箱</Radio>
                </RadioGroup>
              </div>
              <Table loading={isLoading} dataSource={datas} hasBorder={false}>
                <Table.Column title="姓名" dataIndex="username" />
                <Table.Column title="邮箱" dataIndex="email" />
                <Table.Column title="手机号" dataIndex="phone" />
                <Table.Column
                  title="备注"
                  dataIndex="notes"
                />
                <Table.Column title="角色" dataIndex="roleName" />
                <Table.Column
                  title="状态"
                  dataIndex="statusName"
                />
                {/*                <Table.Column title="操作" dataIndex="caozuo" /> */}

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
                pageSize={pageSize} // 界面展示多少条数据
                total={total} // 一共多少条数据
              />
            </div>
          </Tab.Item>


          <Tab.Item title="角色权限" onClick={this.btn.bind(this)}>

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

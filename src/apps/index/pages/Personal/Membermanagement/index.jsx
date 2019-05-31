/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import { Input, Radio, Tab , Button, Grid, Form, DatePicker,Table,Pagination,Select } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import Customerservice from "../components/Customerservice";
import Addmenber from "./addmember";
import '../../index.css';

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['BS200'],
      level: ['2019-02-22 12:26:33'],
      rule: ['￥1799.00'],
      oper: ['成功'],
      qudao: ['支付宝'],
      zhuangtai: [false,'asd'],
      caozuo: ['lalal'],
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
  addmemberbtn() {
    this.Addmenber.open();
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
                <button className='addmemberbtn' onClick={this.addmemberbtn.bind(this)}>添加成员</button>
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
                <Table.Column title="角色" dataIndex="qudao" />
                <Table.Column
                  title="状态"
                  dataIndex="zhuangtai"
                  cell={this.renderOper}
                />
                <Table.Column title="操作" dataIndex="caozuo" />
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
                <button className='Newrole'>新增角色</button>
              </div>
              <Table loading={isLoading} dataSource={data} hasBorder={false}>
                <Table.Column title="角色" dataIndex="name" />
                <Table.Column
                  title="说明"
                  dataIndex="oper"
                />
                <Table.Column
                  title="状态"
                  dataIndex="zhuangtai"
                  cell={this.renderOper}
                />
                <Table.Column title="操作" dataIndex="caozuo" />
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

/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { Input, Radio, Select , Button, Grid, Form, DatePicker,Table,Pagination } from '@alifd/next';
import Customerservice from "../components/Customerservice";
import { loglist } from '@indexApi';
import '../../index.css';
import moment from "moment/moment";
import { Message } from "@alifd/next/lib/index";

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['2019-02-22 12:26:33'],
      level: ['123456@qq.com'],
      rule: ['...'],
      oper: ['登录'],
      names: ['管理平台'],
      levels: ['...'],
      rules: ['111.119.120.1'],
    };
  });
};

class Operationlog extends Component {
  static displayName = 'Operationlog';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        Operationtime: '',
        Operator: '全部',
      },
      total: 0, // 总数据
      pageSize: 10, // 一页条数
      current: 1, // 页码
      isLoading: false,
      datas: [],
    };
  }
  /* formChange = (value) => {
    this.props.onChange(value);
  }; */
  // 每次界面进来之后首先执行此方法
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
  // 搜索按钮
  search(e) {
    const { validateFields } = this.refs.form;
    validateFields((errors,values)=>{
      debugger;
      const arrivalDate = [];
      /* if (values.Operationtime.length == 2) {
        const startdatestart = moment(values.Operationtime[0]._d).valueOf();
        const startdateend = moment(values.Operationtime[1]._d).valueOf();
        arrivalDate.push(startdatestart);
        arrivalDate.push(startdateend);
      } */
      if (values.Operationtime.length == 2) {
        if (values.Operationtime[0] && values.Operationtime[1]) {
          const startdatestart = moment(values.Operationtime[0]._d).valueOf();
          const startdateend = moment(values.Operationtime[1]._d).valueOf();
          arrivalDate.push(startdatestart,startdateend);
        } else if (values.Operationtime[0]) {
          const startdatestart = moment(values.Operationtime[0]._d).valueOf();
          const startdateend = '';
          arrivalDate.push(startdatestart,startdateend);
        } else if (values.Operationtime[1]) {
          const startdatestart = '';
          const startdateend = moment(values.Operationtime[1]._d).valueOf();
          arrivalDate.push(startdatestart,startdateend);
        } else {
          return null;
        }
      }
      this.fetchData(values,arrivalDate);
    });
  }
  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const pages = this.state.current;
        const pageSize = this.state.pageSize;
        loglist({
          pages,
          pageSize,
        }).then(({ status,data })=>{
          debugger;
          if (data.errCode == 0) {
            this.setState({
              datas: data.data.result,
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
  createdAt=(e)=>{
    const createdAt = moment(e).format('YYYY-MM-DD HH:mm:ss');
    return (
      <p>{createdAt}</p>
    );
  }
  render() {
    const { isLoading, datas, current,pageSize,total } = this.state;
    const {
      intl: { formatMessage },
    } = this.props;
    const Operator = [
      { value: '全部', label: '全部' },
      { value: '1364040@qq.com', label: '1364040@qq.com' },
      { value: '136404077@qq.com', label: '136404077@qq.com' },
    ];
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    return (
      <div>
        <div className='personal-top'>
          <span>操作日志</span>
          <div className='personal-top-border' />
        </div>
        <div className="operationlog">
          <div className='operationlog-top'>
            <FormBinderWrapper
              value={this.state.value}
              onChange={this.formChange}
              ref="form"
            >
              <span>操作时间：</span>
              <FormBinder name='Operationtime'>
                <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
              </FormBinder>
              <span className='rightspan'>操作人：</span>
              <FormBinder name='Operator'>
                <Select style={{ width: '200px' }} defaultValue={{ value: '全部 显示设备号可多选', label: '全部 显示设备号可多选' }} dataSource={Operator} />
              </FormBinder>
            </FormBinderWrapper>
            <Button className='btn-all bg' size="large" type="primary" onClick={this.search.bind(this)}>搜索</Button>
            <Button className='btn-all' style={{ marginLeft: 20 }} size="large" type="secondary">重置</Button>
          </div>
          <div className='operationlog-bottom'>
            <Table loading={isLoading} dataSource={datas} hasBorder={false}>
              <Table.Column title="时间" dataIndex="createdAt" cell={this.createdAt} />
              <Table.Column title="账号" dataIndex="level" />
              <Table.Column title="应用" dataIndex="rule" />
              <Table.Column title="操作" dataIndex="oper" />
              <Table.Column title="操作对象" dataIndex="names" />
              <Table.Column title="备注" dataIndex="levels" />
              <Table.Column title="IP" dataIndex="rules" />
            </Table>
            <Pagination
              style={{ marginTop: '20px', textAlign: 'right' }}
              current={current}
              onChange={this.handlePaginationChange}
              pageSize={pageSize} // 界面展示多少条数据
              total={total} // 一共多少条数据
            />
          </div>
          <Customerservice />
        </div>
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
};

export default injectIntl(Operationlog);

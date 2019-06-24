/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { Input, Radio, Select , Button, Grid, Form, DatePicker,Table,Pagination } from '@alifd/next';
import Customerservice from "../components/Customerservice";
import '../../index.css';
import moment from "moment/moment";

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
      current: 1,
      isLoading: false,
      data: [],
    };
  }
  formChange = (value) => {
    this.props.onChange(value);
  };
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
  render() {
    const { isLoading, data, current } = this.state;
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
          <Button className='btn-all bg' size="large" type="primary">搜索</Button>
          <Button className='btn-all' style={{ marginLeft: 20 }} size="large" type="secondary">重置</Button>
        </div>
        <div className='operationlog-bottom'>
          <Table loading={isLoading} dataSource={data} hasBorder={false}>
            <Table.Column title="时间" dataIndex="name" />
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

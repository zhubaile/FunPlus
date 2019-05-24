import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Icon,Form,Pagination } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Administrators from '../../components/Administrators/Administrators';
import Customerservice from '../../components/Customerservice';
import '../../../../layouts/BasicLayout/components/Header/index.scss';
import '../../../index.css';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
};
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['BS200'],
      level: ['5'],
      rule: ['￥1799.00'],
      oper: ['￥1799.00'],
    };
  });
};
const datas = [
  { p: '支付宝渠道紧急通知', span: '2019-5-6' ,a: '>' },
  { p: '支付宝渠道紧急通知', span: '2019-5-6' ,a: '>' },
  { p: '支付宝渠道紧急通知', span: '2019-5-6' ,a: '>' },
  { p: '支付宝渠道紧急通知', span: '2019-5-6 ',a: '>' },
  { p: '支付宝渠道紧急通知', span: '2019-5-6' ,a: '>' },
];
const { Row, Col } = Grid;
export default class Accesstoinformationaddition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      data: [],
    };
  }
  /* 设置定时器用 */
  componentDidMount() {
    this.fetchData();
  }
  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(datas);
        // resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据  resolve(应该写ajax方法)
      }, 600);
    });
  };
  fetchData = (len) => {
    this.setState(
      () => {
        this.mockApi(len).then((data) => { // data 里面为数据
          this.setState({
            data,
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
    this.props.editor(this.input.getInputNode().value);
  }
  render() {
    const { current,data } = this.state;
    return (
      <div>
        <div className='personal-top'>
          <span>消息通知</span>
          <div className='personal-top-border' />
        </div>
        <div className='accesstoinformationaddition'>
          <div className='accesstoinformationaddition-left'>
            <div className='accesstoinformationaddition-left-btn'>
              <button className='zzz'>最新</button>
              <button>周</button>
              <button>月</button>
            </div>
            <ul>
              {
                data.map((item,key) => {
                  return (
                    <li>
                      <p>{item.p}</p>
                      <span>{item.span}</span>
                      <a href="javascript:;">
                        {item.a}
                      </a>
                    </li>
                  );
                })
              }
              {/* <li>
                <p>公告内容：支付宝渠道紧急通知</p>
                <span>2018-06-12 16:40:14</span>
                <a href="javascript:;">
                  >
                </a>
              </li>
              <li>
                <p>公告内容：支付宝渠道紧急通知</p>
                <span>2018-06-12 16:40:14</span>
                <a href="javascript:;">
                  >
                </a>
              </li>
              <li>
                <p>公告内容：支付宝渠道紧急通知</p>
                <span>2018-06-12 16:40:14</span>
                <a href="javascript:;">
                  >
                </a>
              </li> */}
              <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={current}
                onChange={this.handlePaginationChange}
              />
            </ul>
          </div>

          <div className='accesstoinformationaddition-right'>
            <Administrators />
          </div>
        </div>
        <Customerservice />
      </div>
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

};

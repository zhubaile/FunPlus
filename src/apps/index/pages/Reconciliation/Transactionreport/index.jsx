/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, DatePicker, Select, Input, Button,Calendar } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../index.css';
import moment from 'moment';


const currentDate = moment();
const localeData = currentDate.clone().localeData(); // clone()克隆  localeData 语言设置
const monthLocale = localeData.monthsShort(); // 获取语言数据
const { RangePicker } = DatePicker;
const { Row, Col } = Grid;

export default class Transactionreport extends Component {
  state = {};

  formChange = (value) => {
    this.props.onChange(value);
  };
  // 日份
  dateCellRender(date) {
    const dateNum = date.date();
    console.log(dateNum);
    const datas = [
      { type: 'kexiazai', content: '28' },
      { type: 'kexiazai', content: '1' },
      { type: 'kexiazai', content: '3' },
      { type: 'duizhangwanbi', content: '15' },
      { type: 'youchacuo', content: '13' },
    ];
    if (currentDate.month() !== date.month()) {
      return dateNum;
    }
    /* switch (dateNum) {
      case 3:
        eventList = [
          { type: 'weishengcheng', content: '3' },
        ];
        break;
      case 10:
        eventList = [
          { type: 'weishengcheng', content: '10' },
        ];
        break;
      case 11:
        eventList = [
          { type: 'wujiaoyi', content: '11' },
        ];
        break;
      case 13:
        eventList = [
          { type: 'youchacuo', content: '13' },
        ];
        break;
      case 15:
        eventList = [
          { type: 'duizhangwanbi', content: '15' },
        ];
        break;
      case 18:
        eventList = [
          { type: 'wujiaoyi', content: '18' },
        ];
        break;
      default:
        eventList = [];
    } */

    return (<div className="custom-calendar-cell">
      <div className="custom-calendar-cell-value">{dateNum}</div>
      <div className="custom-calendar-cell-content">
        <ul className="event-list">
          {/* {eventList.map((item, key) => <li className={`${item.type}-event`} key={key} >{item.content}</li>)} */}
          {
            datas.map((item,key) => {
             return (item.content == dateNum ? <li className={`${item.type}-event`} key={key} >{item.content}</li> : null);
            })
          }
        </ul>
      </div>
    </div>);
  }
  // 月份
  monthCellRender(date) {
    debugger;
    if (currentDate.month() === date.month()) {
      debugger;
      return (<div>
        <div>{monthLocale[date.month()]}</div>
        <div>Events</div>
      </div>);
    }
    console.log(monthLocale[date.month()]);
    return monthLocale[date.month()];
  }
  render() {
    return (
      <div className='transactionreport'>
        <div className='transactionreport-top'>
          <span>交易报表</span>
          <div className='transactionreport-top-border' />
        </div>
        <div className='transactionreport-content'>
          <div className='transactionreport-content-top'>
            <ul>
              <li>
                <span className='kexiazai' />
                <span>可下载</span>
              </li>
              <li>
                <span className='weishengcheng' />
                <span>未生成</span>
              </li>
              <li>
                <span className='wujiaoyi' />
                <span>无交易</span>
              </li>
              <li>
                <span className='youchacuo' />
                <span>有差错未解决</span>
              </li>
              <li>
                <span className='duizhangwanbi' />
                <span>对账完毕</span>
              </li>
            </ul>
          </div>
          <div className='transactionreport-content-calendar'>
            <Calendar style={{ width: '900px', padding: '12px', border: '1px solid #C4C6CF', borderRadius: '3px' }}
              shape="fullscreen"
              dateCellRender={this.dateCellRender.bind(this)}
              monthCellRender={this.monthCellRender.bind(this)}
            />
          </div>
        </div>
        <Button className='bg' size="large" type="secondary">下载本月报表</Button>
      </div>
    );
  }
}

const styles = {

};

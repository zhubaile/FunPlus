import React, { Component } from 'react';
import { Input, Tab, Message,Form, Button } from '@alifd/next';
import { exportExcel } from '@indexApi';
/* import FilterForm from '../FilterForm';
import Table from '../Table'; */

// <RangePicker />   <Pagination defaultCurrent={2} />


export default class FilterTag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

  }
  loadForm() {
    const form = this.forma;
    form.action = 'http://192.168.1.123:3000/web/beta/v1.0/exportExcel';
    form.method = 'get';
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(form);
    form.submit();
    form.remove();
  }
  exportexcel() {
    debugger;
    const formbtn = this.forma;
    formbtn.submit();
    /* let url = '/abc'
    let method = 'GET' */
    /* const zvbb = (
      <form action="http://192.168.1.123:3000/web/beta/v1.0/exportExcel" method="get" />
    ); */
    /* $('<form action="' + url + '" method="' + (method || 'post') + '">' + // action请求路径及推送方法
      '</form>').appendTo('body').submit().remove() */
    // this.btna.src = 'http://192.168.1.123:3000/web/beta/v1.0/exportExcel';
    // window.open("http://192.168.1.123:3000/web/beta/v1.0/exportExcel");
    // window.location.href('http://192.168.1.123:3000/web/beta/v1.0/exportExcel');
  /*  exportExcel().then((res)=>{
      typeof (res.data);
      debugger;
      return zvbb;
      // const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' }); // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型
      // const downloadElement = this.btna;
      // const href = window.URL.createObjectURL(blob); // 创建下载的链接
      // downloadElement.href = href;
      // downloadElement.download = 'xxx.xlsx'; // 下载后文件名
      // document.body.appendChild(downloadElement);
      // downloadElement.click(); // 点击下载
      // document.body.removeChild(downloadElement); // 下载完成移除元素
      // window.URL.revokeObjectURL(href); // 释放掉blob对象
      debugger;
    }); */
  }
  /* imgPreview(file) {
    const blob = new Blob([file], { type: 'image/png' });
    // 判断是否支持FileReader
    if (window.FileReader) {
      var reader = new FileReader();
    } else {
      alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }
    // 读取完成
    reader.onload = function (e) {
      // 获取图片dom
      const img = document.getElementById("preview");
      // 图片路径设置为读取的图片
      img.src = e.target.result;
    };
    reader.readAsDataURL(blob);
  } */
  render() {
    const bbb = (
      <form action="http://192.168.1.123:3000/web/beta/v1.0/exportExcel" method="get" />
    );
    return (
      <div className='incomepage'>
        <Tab shape='pure' className='income-tab'>
          <Tab.Item title="收入订单">
            <div style={styles.divMargin}>
              <div className='income-tabs'>
                <div>总交易金额：{this.props.Filtertag.totalAmount}</div>
                <div>已支付金额：{this.props.Filtertag.payAmount}</div>
                <div>支付成功率：{this.props.Filtertag.successRate}</div>
                {/*                <Button size="large">总交易金额：{this.props.Filtertag.totalAmount}</Button>
                <Button size="large">已支付金额：{this.props.Filtertag.payAmount}</Button>
                <Button size="large">支付成功率：{this.props.Filtertag.successRate}</Button> */}
              </div>
              <div className='income-tabs rightbtn'>
                <Button className='btn-all bg' size="large" type="secondary" disabled style={{ opacity: 0.5 }}>表格列过滤</Button>
                {/* <Button className='btn-all bg' size="large" type="secondary" onClick={this.exportexcel.bind(this)}>导出结果为表格</Button> */}
                <Button className='btn-all bg' size="large" type="secondary" onClick={this.exportexcel.bind(this)}>导出结果为表格</Button>
                {/* <a href='javascript:;' ref={(node)=>{ this.btna = node; }} style={{ display: 'none' }} /> */}
                <form action="http://192.168.1.123:3000/web/beta/v1.0/exportExcel" method="get" ref={(node)=>{ this.forma = node; }} />
                {/* <a href='' onClick={this.exportexcel.bind(this)} ref={(node)=>{ this.btna = node; }}>导出结果为表格</a> */}
                {/* <iframe id="ifile" style={{ display: 'none' }} ref={(node)=>{ this.btna = node; }} /> */}
                <a href="javascript:;" onClick={this.loadForm.bind(this)}>fog</a>
              </div>
            </div>
            <div className='income-tabs-border' />
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}

const styles = {
  divMargin: {
    margin: '20px 0px',
  },
};


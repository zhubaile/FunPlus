import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Select,Table,Pagination ,Message } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import moment from "moment/moment";

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
export default class Submerchants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        selectiontime: '创建时间',
        startdate: '',
      },
    };
  }
  btnClick() {
    // console.log(this.input.value,this);
    // ;
    this.props.editor(this.input.getInputNode().value);
  }
  // 重置
  handleReset() {
    this.setState({
      value: {
        selectiontime: '创建时间',
        startdate: '',
      },
    });
  }
  renderOper = () => {
    return (
      <div>
        <a
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          详情
        </a>
      </div>
    );
  };
  render() {
    const startValue = moment('2019-05-08', 'YYYY-MM-DD', true);
    const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
    const selectiontime = [
      { value: '创建时间', label: '创建时间' },
      { value: '完成时间', label: '完成时间' },
    ];
    const { isLoading, data, current } = this.state;
    return (
      <div className='expendbatchre'>
        <Message type='notice' className='message-all expendbatchre-message'>
            应用直连：使用您直接申请的渠道支付参数或我们代为您申请的渠道参数进行交易，所有资金有微信，支付宝，银联，持牌方清算
        </Message>
        <FormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <span style={styles.formLabel}>选择时间</span>
          <FormBinder name="selectiontime"
            required
            message="请输入正确的名称"
            autoWidth={false}
          >
            <Select style={styles.formSelect} dataSource={selectiontime} />
          </FormBinder>
          <FormBinder name='startdate'>
            <RangePicker showTime resetTime defaultValue={[startValue,endValue]} />
          </FormBinder>
        </FormBinderWrapper>
        <Button className='btn-all bg' size="large" type="secondary">搜索</Button>
        <Button className='btn-all bg' size="large" type="secondary" onClick={this.handleReset.bind(this)}>重置</Button>
        <Button className='btn-all orderposab' size='large' type='secondary'>批量退款</Button>
        <div className='expendordbat-tabs-border' />

        <IceContainer>
          <Table loading={isLoading} dataSource={data} hasBorder={false}>
            <Table.Column title="创建时间、完成时间" dataIndex="name" />
            <Table.Column title="批量退款编号" dataIndex="level" />
            <Table.Column title="退款总笔数" dataIndex="balance" />
            <Table.Column title="退款总金额" dataIndex="accumulative" />
            <Table.Column title="结果" dataIndex="regdate" />
            <Table.Column
              title="操作"
              width={200}
              dataIndex="oper"
              cell={this.renderOper}
            />
          </Table>
          <Pagination
            style={styles.pagination}
            current={current}
            onChange={this.handlePaginationChange}
          />
        </IceContainer>
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
  formItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  formLabel: {
    minWidth: '80px',
    marginLeft: '10px',
    textAlign: 'center',
  },
  formSelect: {
    width: '200px',
    margin: '0 10px',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};

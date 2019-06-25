import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Message,Form ,Switch,Pagination,Table, Select, Icon } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Customerservice from "../../Personal/components/Customerservice";
// import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../index.css';

const { RangePicker } = DatePicker;
const { Row, Col } = Grid;
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['Minnie'],
      email: ['Ethiopia'],
      tel: ['Transfering'],
      remark: ['11-03-2017'],
      role: [' - a-'],
      /*  status: [false,'haode'], */
      caozuo: ['91894-8699'],
      oper: ['aaa'],

    };
  });
};

export default class Webhooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      isLoading: false,
      data: [],
      value: {
        selectiontime: '支付成功',
        /*        startdate: '', */
        paymentchannel: '支付成功',
        refundstatus: '商户订单号',
        /*        ordernumber: '', */
      },
    };
  }
  btnClick() {
    this.props.editor(this.input.getInputNode().value);
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
  renderOper = () => {
    return (
      <div>
        <Button
          className='btn-all'
          size='large'
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          详情
          {/* <FormattedMessage id="app.btn.detail" /> */}
        </Button>
        <Button
          className='btn-all'
          size='large'
          type="normal"
          onClick={this.handleDelete}
        >
          重新发送
          {/* <FormattedMessage id="app.btn.delete" /> */}
        </Button>
      </div>
    );
  };

  render() {
    /* const formItemLayout = {
      labelCol: {
        fixedSpan: 5,
      },
      wrapperCol: {
        span: 14,
      },
    }; */

    const selectiontime = [
      { value: '支付成功', label: '支付成功' },
    ];
    const paymentchannel = [
      { value: '支付成功', label: '支付成功' },
    ];
    const refundstatus = [
      { value: '商户订单号', label: '商户订单号' },
      { value: '平台订单号', label: '平台订单号' },
    ];

    const { isLoading, data, current } = this.state;

    return (
      <div className='webhooks'>
        <Tab shape='pure' className='backstage-tab'>
          <Tab.Item title="webhooks">
            <Button className='btn-all btn-bg' size="large" type="secondary">添加事件</Button>
            <div className='member-panel' >
              <div className='tab-bg'>
                <div className='tab-panel'>
                  <Table loading={isLoading} dataSource={data} hasBorder={false}>
                    <Table.Column title="接收RUL" dataIndex="name" />
                    <Table.Column title="事件" dataIndex="email" />
                    <Table.Column title="状态" dataIndex="tel" />
                    <Table.Column title="时间" dataIndex="remark" />
                    <Table.Column title="操作" dataIndex="caozuo" />
                    {/* <Table.Column title="角色" dataIndex="role" />
                    <Table.Column title="状态" dataIndex="status" cell={this.renderStatus} /> */}
                    {/* <Table.Column
                      title="操作"
                      width={200}
                      dataIndex="oper"
                      cell={this.renderOper}
                    /> */}
                  </Table>
                </div>
              </div>

            </div>
            {/*  <Button type="primary" size="large" iconSize="large"><Icon type="atm" />在线客服</Button> */}
          </Tab.Item>

          <Tab.Item title="webhooks通知查询工具">
            <div className='tab-contenttwo'>
              <div className='tab-contenttwo-left'>
                <Message type='notice' className='tab-contenttwo-left-message'>
                    建议调试Webhooks通知时，增加 Webhooks 通知延迟以及重发情况的处理逻辑。请参考》帮助中心链接。暂时只支持查询上月1号至今发送记录。
                </Message>
                <div className='webhooks-inner-top'>
                  <FormBinderWrapper
                    value={this.state.value}
                    onChange={this.formChange}
                    ref="form"
                  >

                    <div>
                      <span style={styles.formLabel}>查询事件</span>
                      <FormBinder
                        name="selectiontime"
                        required
                        message="请输入正确的名称"
                        autoWidth={false}
                      >
                        <Select style={styles.formSelect} dataSource={selectiontime} />
                      </FormBinder>
                    </div>

                    <div>
                      <span style={styles.formLabel}>webhooks url</span>
                      <FormBinder name='paymentchannel'>
                        <Select style={styles.formSelect} dataSource={paymentchannel} />
                      </FormBinder>
                    </div>

                    <div>
                      <span style={styles.formLabel}>查询条件</span>
                      <FormBinder name='refundstatus'>
                        <Select style={styles.formSelect} dataSource={refundstatus} />
                      </FormBinder>

                      <FormBinder name='ordernumber'>
                        <Input className='input-bg' placeholder='输入订单号' hasClear />
                      </FormBinder>
                    </div>
                    <div>
                      <Button className='btn-all bg' size="large" type="secondary">搜索</Button>
                    </div>


                  </FormBinderWrapper>
                </div>

                <div className='tab-panel'>
                  <Table loading={isLoading} dataSource={data} hasBorder={false}>
                    <Table.Column title="平台订单号" dataIndex="name" />
                    <Table.Column title="商户订单号" dataIndex="email" />
                    <Table.Column title="状态" dataIndex="tel" />
                    <Table.Column title="你的服务器返回状态码" dataIndex="remark" />
                    <Table.Column title="状态" dataIndex="role" />
                    {/* <Table.Column title="状态" dataIndex="status" cell={this.renderStatus} /> */}
                    <Table.Column
                      title="操作"
                      width={200}
                      dataIndex="oper"
                      cell={this.renderOper}
                    />
                  </Table>

                </div>
              </div>
            </div>
          </Tab.Item>

        </Tab>
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


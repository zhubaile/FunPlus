import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Message,Form ,Switch,Pagination,Table } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';

// import IceContainer from '@icedesign/container';
import '../../index.css';

const { Row, Col } = Grid;
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['淘小宝', '淘二宝'],
      level: ['普通会员', '白银会员', '黄金会员', 'VIP 会员'],
      balance: (10000, 100000),
      accumulative: (50000, 100000),
      regdate: `2018-12-1`,
      birthday: `1992-10-1`,
      store: ['余杭盒马店', '滨江盒马店', '西湖盒马店'],
    };
  });
};

export default class Applicationparameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      isLoading: false,
      data: [],
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
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          详情
          {/* <FormattedMessage id="app.btn.detail" /> */}
        </Button>
        <Button type="normal" warning onClick={this.handleDelete}>
          删除
          {/* <FormattedMessage id="app.btn.delete" /> */}
        </Button>
      </div>
    );
  };
  // 复制按钮功能
  copybtn() {
    const applicationID = this.applicationID.getInputNode(); // Input 获取demo节点用getInputNode()方法
    applicationID.select();
    if (!applicationID.value) {
      Message.success('复制内容为空');
      return;
    }
    document.execCommand('copy');
    Message.success('复制成功');
  }
  handleSubmit=()=> {
    alert(this.Mtextinput.getInputNode().value)
  }

  render() {
    const formItemLayout = {
      labelCol: {
        fixedSpan: 5,
      },
      wrapperCol: {
        span: 14,
      },
    };
    const { isLoading, data, current } = this.state;
    const copybtn = (<Button onClick={this.copybtn.bind(this)}>复制</Button>);
    const phonebtn = (<Button>手机/邮箱验证查看</Button>);
    return (
      <div className='applicationters'>
        <Tab shape='pure' className='backstage-tab'>
          <Tab.Item title="应用参数">
            <div className='tab-contentone' >
              <div className='tab-contentone-left'>
                <Message type='notice' className='tab-contentone-left-message'>
                  <strong> MD5秘钥或者公私钥证书任选一种方式</strong>
                  都可通过聚合支付平台API发起交易
                </Message>
                <Form style={{ width: '60%' , marginTop: '20px' }} {...formItemLayout}>
                  <Form.Item label="应用ID:">
                    <Input.Group addonAfter={copybtn}>
                      <Input hasClear defaultValue='请输入您的ID' style={{ width: '100%' }} aria-label="please input" ref={node=>this.applicationID = node} />
                    </Input.Group>
                  </Form.Item>
                  <Form.Item label="MD5密钥:">
                    <Input.Group addonAfter={phonebtn}>
                      <Input hasClear htmlType="password" defaultValue="asdfghhkklgdf" style={{ width: '100%' }} aria-label="please input" />
                    </Input.Group>
                  </Form.Item>
                  <Form.Item label="平台公钥">
                    <Input.TextArea
                      placeholder="something"
                      // name="remark"
                      rows='10'
                      ref={node => this.Mtextinput = node}
                    />
                  </Form.Item>
                  <Form.Item label="商户RSA公钥">
                    <Form.Submit onClick={this.handleSubmit}>立刻配置公钥</Form.Submit>
                  </Form.Item>
                </Form>
              </div>
              <div className='tab-contentone-right'>
                <div>
                  <p>应用ID</p>
                  <p>对应API文档中的：app_id</p>
                </div>
                <div>
                  <p>MD5密钥</p>
                  <p>对应API文档中的：mPOSSWORD</p>
                </div>
                <div>
                  <p>平台公钥</p>
                  <p>用于 Webhooks 回调时，验证请求对象的正确性。</p>
                </div>
                <div style={{ marginTop: '50px' }}>
                  <p>商户RSA公钥</p>
                  <p> 为了进一步增强交易请求的安全性，3FunPlus 对所有交易接口请求进行 RSA 加密验签。</p>
                </div>
              </div>
            </div>
          </Tab.Item>

          <Tab.Item title="ip白名单">
            <div className='tab-contenttwo'>
              <div className='tab-contenttwo-left'>
                <Message type='notice' className='tab-contenttwo-left-message'>
                    默认出款类使用IP白名单，开启右下角开关后所有API只允许白名单内IP进行操作
                </Message>
                <div className='tab-contenttwo-left-btn'>
                  <Button type="primary" size='large'>
                    <i className='os-icon os-icon-ui-55' />
                     添加IP
                  </Button>
                  <div>
                    <span>全限白名单</span>
                    <Switch className='div-switch' defaultChecked={false} />
                  </div>
                </div>
                <div className='claer' />
                <div>
                  <Table loading={isLoading} dataSource={data} hasBorder={false}>
                    <Table.Column title="访问IP" dataIndex="name" />
                    <Table.Column title="添加时间" dataIndex="level" />
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
              </div>
              <div className='tab-contenttwo-right'>
                <div>
                  <p>全限白名单</p>
                  <p>默认出款类使用IP白名单，开启后所有API只允许白名单内IP进行操作</p>
                </div>
                <div>
                  <p>IP 白名单</p>
                  <p> 仅白名单列表内的 IP 地址，可以成功请求出款类接口，包含： 企业付款、 批量企业付款、 红包、 用户结算账户、 分润结算、 余额提现、 余额批量提现。</p>
                </div>
              </div>
            </div>
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}

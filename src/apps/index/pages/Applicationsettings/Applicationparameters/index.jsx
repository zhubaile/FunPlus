import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Message,Form ,Switch,Pagination,Table } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
// import Ippopup from './ippopup';
import { ObtainsettingwhiteIps,deletesettingwhiteIps,addwhiteListSwitch } from '@indexApi';
import '../../index.css';
import Deleteapp from './deleteApp';

const { Row, Col } = Grid;
@withRouter
/* const getData = (length = 10) => {
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
}; */

export default class Applicationparameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // current: 1,
      // isLoading: false,
      // data: [],
    };
  }
  btnClick() {
    this.props.editor(this.input.getInputNode().value);
  }

  /* componentDidMount() {
    this.fetchData();
  } */

  /*  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len)); // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象 成功以后携带数据  resolve(应该写ajax方法)
      }, 600);
    });
  }; */
  // 获取所有ip的数据
  /* fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        ObtainsettingwhiteIps().then(({ status,data })=>{
          this.setState({
            isLoading: false,
            data: data.data,
          });
        });
        /!* this.mockApi(len).then((data) => { // data 里面为数据
          this.setState({
            data,
            isLoading: false,
          });
        }); *!/
      }
    );
  }; */

  /*  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData();
      }
    );
  };
  deleteip(record,index) {
    deletesettingwhiteIps({
      ip: record.ip,
    });
  } */
  /*  renderOper = (value,index,record) => {
    return (
      <div>
        <Button
          type="primary"
          style={{ marginRight: '5px' }}
          onClick={this.handleDetail}
        >
          详情
          {/!* <FormattedMessage id="app.btn.detail" /> *!/}
        </Button>
        <Button type="normal" warning onClick={()=>this.deleteip(record,index)}>
          删除
          {/!* <FormattedMessage id="app.btn.delete" /> *!/}
        </Button>
      </div>
    );
  }; */
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
    const z = this.Mtextinput.getInputNode().value;
    alert(z);
    debugger;
  }
  btn() {
    this.props.history.push('/admin/applicationsettings/ipnamelist');
  }
  /* // 添加ip
  addIP() {
    this.Ippopup.ippopupopen();
  }
  // 白名单开关
  addopenSwitch(e) {
    debugger;
    addwhiteListSwitch({
      whiteListSwitch: e,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        Message.success(data.message);
      }
    });
  } */

  applicationparametersOpen() {
    this.Deleteapp.deleteappopen();
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
    const copybtn = (<Button className='button' onClick={this.copybtn.bind(this)}>复制</Button>);
    const phonebtn = (<Button className='button'>手机/邮箱验证查看</Button>);
    return (
      <div className='applicationters'>
        <Deleteapp ref={ node => this.Deleteapp = node } />
        <Tab shape='pure' className='backstage-tab'>
          <Tab.Item title="应用参数">
            <Button style={styles.deleteAppbtn} onClick={this.applicationparametersOpen.bind(this)}>删除应用</Button>
            <div className='tab-contentone' >
              <div className='tab-contentone-left'>
                <Message type='notice' className='tab-contentone-left-message'>
                  <strong> MD5秘钥或者公私钥证书任选一种方式</strong>
                  都可通过聚合支付平台API发起交易
                </Message>
                <Form style={{ width: '80%' , marginTop: '20px' }} {...formItemLayout}>
                  <Form.Item label="应用ID:">
                    <Input.Group addonAfter={copybtn}>
                      <Input className='input-bg' hasClear placeholder='请输入您的ID' style={{ width: '100%' }} aria-label="please input" ref={node=>this.applicationID = node} name='username' />
                    </Input.Group>
                  </Form.Item>
                  <Form.Item label="MD5密钥:">
                    <Input.Group addonAfter={phonebtn}>
                      <Input className='input-bg' hasClear htmlType="password" placeholder="******" style={{ width: '100%' }} aria-label="please input" name='userid' />
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
                    <Form.Submit className='button' onClick={this.handleSubmit}>立刻配置公钥</Form.Submit>
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

          <Tab.Item title="ip白名单" onClick={this.btn.bind(this)}>
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}
const styles = {
  deleteAppbtn: {
    position: 'absolute',
    top: '100px',
    right: '30px',
    borderRadius: '6px',
    backgroundColor: '#E2EDFF',
    borderColor: '#A3D0FD',
    color: '#419DFA',
  },
};

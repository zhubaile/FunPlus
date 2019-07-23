import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab, Message,Form ,Switch,Pagination,Table } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
// import Ippopup from './ippopup';
import { settingget,settingpost } from '@indexApi';
import '../../index.css';
import Deleteapp from './deleteApp';

const FormItem = Form.Item;
const { Row, Col } = Grid;
@withRouter

export default class Applicationparameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // current: 1,
      // isLoading: false,
      datas: {
        // md5Cipher: 'asd',
      },
    };
  }
  btnClick() {
    this.props.editor(this.input.getInputNode().value);
  }

  componentDidMount() {
    this.fetchData();
  }
  /* componentWillMount() {
    settingget().then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        this.setState({
          datas: data.data,
        });
      }
    });
  } */
  // 获取所有ip的数据
   fetchData = (len) => {
     settingget().then(({ status,data })=>{
       if (data.errCode == 0) {
         this.setState({
           datas: data.data,
         });
       } else {
         Message.success(data.message);
       }
     });
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
   // 配置
  handleSubmit=()=> {
    const appId = this.applicationID.getInputNode();
    const md5Cipher = this.md5Cipher.getInputNode().value;
    const sitePublickKey = this.Mtextinput.getInputNode().value;
    debugger;
  }
  // 确定
  determine=()=>{
    const appId = this.applicationID.getInputNode().value;
    const md5Cipher = this.md5Cipher.getInputNode().value;
    const sitePublickKey = this.Mtextinput.getInputNode().value;
    const mchRsaPubKey = this.state.datas.mchRsaPubKey;
    settingpost({
      appId,
      md5Cipher,
      sitePublickKey,
      mchRsaPubKey,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        Message.success(data.message);
      }
    });
  }
  btn() {
    this.props.history.push('/admin/applicationsettings/ipnamelist');
  }

  applicationparametersOpen() {
    this.Deleteapp.deleteappopen();
  }
  mdCipherbtn(e) {
    debugger;
    const data = Object.assign({},this.state.datas,{ md5Cipher: e });
    this.setState({
      datas: data,
    });
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
    const { isLoading, datas, current } = this.state;
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
                      <Input className='input-bg' hasClear value={datas.appId} readOnly style={{ width: '100%' }} aria-label="please input" ref={node=>this.applicationID = node} name='username' />
                    </Input.Group>
                  </Form.Item>
                  <Form.Item label="MD5密钥:">
                    <Input.Group addonAfter={phonebtn}>
                      {/* htmlType="password" */}
                      <Input style={{ width: '100%' }} hasClear className='input-bg' value={datas.md5Cipher} onChange={this.mdCipherbtn.bind(this)} aria-label="please input" name='userid' ref={node=>this.md5Cipher = node} />
                    </Input.Group>
                  </Form.Item>
                  <Form.Item label="平台公钥">
                    <Input.TextArea
                      value={datas.sitePublickKey}
                      readOnly
                      // name="remark"
                      rows={10}
                      ref={node => this.Mtextinput = node}
                    />
                  </Form.Item>
                  <Form.Item label={datas.mchRsaPubKey}>
                    <Form.Submit className='button' onClick={this.handleSubmit}>立刻配置公钥</Form.Submit>
                    <Form.Submit className='button' onClick={this.determine}>确定</Form.Submit>
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message ,Table,Pagination,Select,Radio,Switch } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import '../../../index.css';

const { Row, Col } = Grid;
export default class RoutingPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: {
        NewRuleName: '',
        ApplicationChannel: '选择应用通道',
        equipmentgroup: '支付宝专用设备组3',
      },
    };
  }
  close() {
    this.setState({
      open: false,
      content: null,
    });
  }
  open(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }
  render() {
    const ApplicationChannel = [
      { value: '选择应用通道', label: '选择应用通道' },
      { value: '支付宝手机APP', label: '支付宝手机APP' },
      { value: '微信扫码', label: '微信扫码' },
    ];
    const equipmentgroup = [
      { value: '支付宝专用设备组3', label: '支付宝专用设备组3' },
      { value: '微信设备组', label: '微信设备组' },
      { value: '银联设备组', label: '银联设备组' },
    ];

    if (!this.state.open) return null;
    return (
      <IceContainer className='routingPopup'>
        <div className='routingPopup-name'>
          <h1 style={{ float: 'left' }}>创建新规则弹窗</h1>
          <div style={{ float: 'right', marginTop: '20px' }}>
            <span style={{ marginRight: '10px' }}>此为高级功能</span>
            <Button type='secondary' style={{ background: '#E6F1FC',color: '#1989FA', borderRadius: '5px', marginLeft: '20px' }}>规则可视化配置</Button>
          </div>
          <div className='clearfix' />
        </div>
        <FormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <FormBinder name='NewRuleName'>
            <Input style={styles.formbinderbox} placeholder='输入新规则名字' hasClear />
          </FormBinder>
          <FormBinder name="ApplicationChannel" required message="请输入正确的名称" >
            <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
          </FormBinder>
          <div>
            <h6>渠道规则</h6>
            <Radio id="apple">全天开放</Radio>
            <Radio id="banana" /><label htmlFor="banana" className="next-radio-label">日时间段开放</label>
            <Radio id="apple2" label="周自定义时间开放" className="testClassname" />
          </div>
          <div>
            <p>选择可用设备组-可多选</p>
            <FormBinder name="equipmentgroup" required message="请输入正确的名称" >
              <Select style={styles.formbinderbox} defaultValue={{ value: '支付宝专用设备组3', label: '支付宝专用设备组3' }} dataSource={equipmentgroup} />
            </FormBinder>
          </div>
          <div style={styles.main}>
            <div style={styles.maintop}>
              <span style={styles.maintopspanleft}>支付宝专用设备组3：路由规则</span>
              <p style={styles.maintoppright} />
            </div>
            <div style={styles.mainmain}>
              <div style={styles.mainmainbox}>
                <p>单笔限额区间</p>
                <FormBinder name='Limitinterval-left'>
                  <Input style={styles.Limitintervalinput} placeholder='50' hasClear />
                </FormBinder>
                <span>--</span>
                <FormBinder name='Limitinterval-right'>
                  <Input style={styles.Limitintervalinput} placeholder='1000' hasClear />
                </FormBinder>
              </div>
              <div style={styles.mainmainbox}>
                <p>设备组日限额</p>
                <FormBinder name='Dailylimit-left'>
                  <Input style={styles.Limitintervalinput} placeholder='50' hasClear />
                </FormBinder>
                <span>--</span>
                <FormBinder name='Dailylimit-right'>
                  <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
                </FormBinder>
              </div>
              <div style={styles.mainmainbox}>
                <p>单笔超限跳转</p>
                <FormBinder name='Dailylimit-left'>
                  <Input style={styles.formbinderbox} placeholder='输入新规则名字' hasClear />
                </FormBinder>
              </div>
              <div style={styles.mainmainbox}>
                <p>设备使用模式</p>
                <FormBinder name='Dailylimit-right'>
                  <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
                </FormBinder>
              </div>
              <div style={styles.mainmainbox}>
                <p>单设备笔数限制</p>
                <span>每</span>
                <FormBinder name='Dailylimit-left'>
                  <Input style={styles.Limitintervalinput} placeholder='50' hasClear />
                </FormBinder>
                <FormBinder name='Dailylimit-right'>
                  <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
                </FormBinder>
                <FormBinder name='Dailylimit-left'>
                  <Input style={styles.Limitintervalinput} placeholder='50' hasClear />
                </FormBinder>
                <span>笔</span>
              </div>
              <div style={styles.mainmainbox}>
                <p>单设备日收款限额</p>
                <span>每</span>
                <FormBinder name='Dailylimit-left'>
                  <Input style={styles.Limitintervalinput} placeholder='50' hasClear />
                </FormBinder>
                <FormBinder name='Dailylimit-right'>
                  <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
                </FormBinder>
                <span>会覆盖上次限额</span>
              </div>
            </div>


            <div style={styles.mainmain}>
              <div style={styles.mainmainbox}>
                <p>自动出款</p>
                <FormBinder name='Dailylimit-right'>
                  <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
                </FormBinder>
                <FormBinder name='Dailylimit-right'>
                  <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
                </FormBinder>
              </div>
              <div>
                <p>免审核出款区间</p>
                <FormBinder name='Dailylimit-right'>
                  <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
                </FormBinder>
                <FormBinder name='Dailylimit-right'>
                  <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
                </FormBinder>
              </div>
            </div>
            <div>
              <p>金额匹配设备额外开启</p>
              <p>金额匹配模式
                <span>整数回调</span>
              </p>
              <FormBinder name='Dailylimit-right'>
                <Select style={styles.formbinderbox} defaultValue={{ value: '选择应用通道', label: '选择应用通道' }} dataSource={ApplicationChannel} />
              </FormBinder>
              <Switch checkedChildren="on" unCheckedChildren="off" />
            </div>
          </div>
        </FormBinderWrapper>
        <div style={styles.allborder}/>
        <div style={styles.maintop}>
          <span style={styles.maintopspanleft}>支付宝专用设备组3：路由规则</span>
          <p style={styles.maintoppright} />
        </div>
        <div style={{ marginBottom: '30px'}} />
        <div style={styles.posbtn}>
          <Button style={styles.posbtna} onClick={this.close.bind(this)}>取消</Button>
          <Button style={styles.posbtna}>创建</Button>
        </div>
      </IceContainer>
    );
  }
}
const styles = {
  formbinderbox: {
    width: '200px',
    margin: '15px',
    borderRadius: '5px',
    zIndex: '9999',
  },
  Limitintervalinput: {
    width: '100px',
    padding: '10px 3px',
  },
  main: { display: 'flex', flexDirection: 'column' },
  maintop: { display: 'flex' },
  maintopspanleft: { width: '20%' },
  maintoppright: { width: '80%', borderBottom: '2px solid #BBBBBB' ,marginBottom: '20px' },
  mainmain: { display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' },
  allborder: { width: '100%', borderBottom: '2px solid #BBBBBB', margin: '10px 0' },
  mainmainbox: { marginLeft: '20px' },
  posbtn: { position: 'absolute', right: '20px' },
  posbtna: { bottom: '15px', right: '10px', background: '#E6F1FC', color: '#1989FA', borderRadius: '5px', marginLeft: '20px' },
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },
  message: {
    background: '#E6F7FF',
    border: '1px solid #91D5FF',
    borderradius: '5px',
    margin: '10px 20px 25px',
    width: '50%',
    float: 'left',
  },
  bg: {
    background: '#E6F1FC',
    color: '#1989FA',
    borderRadius: '5px',
    marginLeft: '20px',
    marginTop: '20px',
  },
};

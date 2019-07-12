
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message ,Table,NumberPicker,Select,Radio,Switch } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import IceContainer from '@icedesign/container';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { channelParams,channeldeviceGroup,deviceGroupruleParams,routerRuleadd } from '@indexApi';
import Daypopup from './daypopup';
import Weektimepopup from './weektimepopup';
import '../../../index.css';

const RadioGroup = Radio.Group;
const { Row, Col } = Grid;

const datadata = [
  { value: '通道1',
    label: '通道1',
    channelType: '1',
    title: 0,
    son: [
      { value: '设备组1',
        label: '设备组1',
        title: 0,
        child: {
          a: [],
          b: [],
          c: [],
          chukuan: [
            { value: '出款1',
              label: '出款1',
              title: 0,
              childson: [
                { value: '出款1son1', label: '出款1son1' },
                { value: '出款1son2', label: '出款1son2' },
              ] },
            { value: '出款2',label: '出款2', childson: [] },
            { value: '出款3',label: '出款3', childson: [] },
          ],
        } },
      { value: '设备组2',
        label: '设备组2',
        title: 1,
        child: {
          a: [],
          b: [],
          c: [],
          chukuan: [
            { value: '出款1',
              label: '出款1',
              title: 0,
              childson: [
                { value: '出款1son1', label: '出款1son1' },
                { value: '出款1son2', label: '出款1son2' },
              ] },
            { value: '出款2',label: '出款2', childson: [] },
            { value: '出款3',label: '出款3', childson: [] },
          ],
        } },
      { value: '设备组3',
        label: '设备组3',
        title: 2,
        child: {
          a: [],
          b: [],
          c: [],
          chukuan: [
            { value: '出款1',
              label: '出款1',
              title: 0,
              childson: [
                { value: '出款1son1', label: '出款1son1' },
                { value: '出款1son2', label: '出款1son2' },
              ] },
            { value: '出款2',label: '出款2', childson: [] },
            { value: '出款3',label: '出款3', childson: [] },
          ],
        } },
    ] },

  { value: '通道2',label: '通道2', channelType: '0', title: 1, son: [] },
];

export default class RoutingPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ApplicationChannels: [], // 首次加载的渠道
      open: false,
      Newdatas: null,
      equipmentgroup: [],
      value: {
        channelType: null, // 标识
        ruleName: '',
        channelId: '',
        // 开放时间选择
        openTimeMode: {
          useMode: '',
          condition: {},
        },
        // 可用设备多选
        dGroupId: [],
        // 设备组的所有信息
        devicesGroup: [
          {
            autoOutCash: {
              outChannelId: '',
              dGroupId: '',
              noOutRangeMin: '',
              noOutRangeMax: '',
            },
          },
          {},
          {},
        ],
        EquipGroupInformation: [],
      },

      sons: null, // 设备组列表信息
      channelType: '', // 标识
      child: null, // 设备组信息的子数据
      devicesGroup: null, // 全部设备组详细信息
    };
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.Fixedcontent = this.Fixedcontent.bind(this);
    this.Routingclose = this.Routingclose.bind(this);
  }
  // 层级选择
  handleProvinceChange(value,datas,e) {
    const dustyInfoson = e.sons;

    this.setState({
      son: dustyInfoson,
    });
  }
  // 获取相应的渠道的内容
  componentDidMount() {
    this.setState({
      Newdatas: datadata,
    });
    /* channelParams().then(({ status, data })=>{
      console.log(datadata);
      this.setState({
        ApplicationChannels: data.data,
        Newdatas: datadata,
      });
    }); */
  }
  // 选择应用通道来获取设备组信息
  channeldeviceGroups(e,v,item) {
    debugger;
    const Newdatas = this.state.Newdatas;
    const sons = Newdatas[item.title].son; // 多选设备组信息
    const channelType = Newdatas[item.title].channelType;
    debugger;
    // const channelId = Object.assign({},this.state.value,{ channelId: e,channelType: item.channelType }); // dGroupId: []
    this.setState({
      sons,
      channelType,
    });
    /* channeldeviceGroup({
      channelId: e,
    }).then(({ status,data })=>{
      const datas = Object.assign({},this.state.value,{ devicesGroup: [],dGroupId: [] }); //
      this.setState({
        equipmentgroup: data.data,
        value: datas,
      });
      this.equipmentgroups();
    }); */
  }
  // 关闭
  Routingclose() {
    this.setState({
      open: false,
      value: '',
    },()=>{
      this.props.fetchData();
    });
  }
  // 打开
  Routingopen(content,confirm) {
    this.setState({
      open: true,
      content,
    });
    this.confirmCallBack = confirm;
  }
  formChange = (value) => {
    this.setState({
      value,
    });
  };
  // 选择设备组获取多个设备组内的信息
  equipmentgroups=(e,v,item)=> {
    debugger;
    /* if (!e || e.length == 0) {
      const datas = Object.assign({},this.state.value,{ devicesGroup: [] , dGroupId: [] }); //
      this.setState({
        value: datas,
      },()=>{
        this.Fixedcontent();
      });
      return null;
    } */
    const sons = this.state.sons; // 全部可多选设备组的信息
    // const channelType = this.state.channelType;
    const id = [];
    let i;
    for (i = 0; i < e.length; i++) {
      if (i < e.length) {
        id.push(i);
      }
    }
    const devicesGroup = []; // 全部设备组的详细信息
    id.map((item)=>{
      console.log(sons);
      const child = sons[item].child;
      return devicesGroup.push(child);
    });
    console.log(devicesGroup);
    this.setState({
      devicesGroup,
    });
    debugger;
    /* const child = sons[item.title].child;
    // 获取到设备组需要填写的详细信息
    deviceGroupruleParams({
      dGroupIds: e,
      channelType,
    }).then(({ status,data })=>{
      if (data.errCode == 0) {
        const datas = data.data;
        const zzz = Object.assign({},this.state.value,{ devicesGroup: datas });
        console.log(data.data.outChannelData);
        this.setState({
          value: zzz,
          // outChannelDatas: data.data.outChannelData,
        });
      }
    }); */
  }
  // 内容
  Fixedcontent() {
    const devicesGroup = this.state.devicesGroup; // 已选择的设备组的详细信息
    debugger;
    if (!devicesGroup || devicesGroup.length == 0) {
      return null;
    }
    const id = [];
    let i;
    for (i = 0; i < devicesGroup.length; i++) {
      if (i < devicesGroup.length) {
        id.push(i);
      }
    }
    /* const ApplicationChannels = [
      { value: '选择应用通道', label: '选择应用通道' },
      { value: '支付宝手机APP', label: '支付宝手机APP' },
      { value: '微信扫码', label: '微信扫码' },
    ];
    const danshebieconter = [
      { value: '分', label: '分' },
    ];
    const dayQuatoCompany = [
      { value: '万', label: '万' },
      { value: '元', label: '元' },
    ]; */
    return (
      id.map((id)=>{
        // const title = devicesGroup[id].title;
        // const SingleOverrunJump = devicesGroup[id].JumpDGroup;
        // const cashMatchMode = devicesGroup[id].cashMatchMode;
        // const dUseMode = devicesGroup[id].dUseMode;
        // const outChannelDatas = this.state.outChannelDatas; // 自动出款的父数据
        const outChannelDatas = devicesGroup[id].chukuan;
        // const sons = this.state.son;// 自动出款的子数据
        const sons = outChannelDatas[0].childson;

        let outChannelData = [],
          son = [];
        /* if (outChannelDatas.constructor == Array) {
          outChannelData = outChannelDatas.map(item=>({ value: item.outChannelId,label: item.payScene, sons: item.outGroupData })); // 改变成想要的属性名
        }
        if (sons.constructor == Array) {
          son = sons.map(item=>({ value: item.dGroupId,label: item.dGroupName })); // 改变成想要的属性名
        } */
        return (
          <div>
            <div style={styles.main}>
              <div style={styles.maintop}>
                <span style={styles.maintopspanleft}>
                  {/* {title} */}
                </span>
                <p style={styles.maintoppright} />
              </div>
              {/* <div style={styles.mainmain}>
                <div style={styles.mainmainbox}>
                  <p>单笔限额区间</p>
                  <FormBinder name={`devicesGroup[${id}].singleQuatoRange.min`}>
                    <Input htmlType='number' style={styles.Limitintervalinput} placeholder='50' hasClear />
                  </FormBinder>
                  <span>--</span>
                  <FormBinder name={`devicesGroup[${id}].singleQuatoRange.max`}>
                    <Input htmlType='number' style={styles.Limitintervalinput} placeholder='1000' hasClear />
                  </FormBinder>
                </div>
                <div style={styles.mainmainbox}>
                  <p>设备组日限额</p>
                  <FormBinder name={`devicesGroup[${id}].dayQuato`}>
                    <Input htmlType='number' style={styles.Limitintervalinput} placeholder='50' hasClear />
                  </FormBinder>
                  <span>--</span>
                  <FormBinder name={`devicesGroup[${id}].dayQuatoUnit`}>
                    <Select style={styles.Limitintervalinput} defaultValue={{ value: '万', label: '万' }} dataSource={dayQuatoCompany} />
                  </FormBinder>
                </div>
                <div style={styles.mainmainbox}>
                  <p>单笔超限跳转</p>
                  <FormBinder name={`devicesGroup[${id}].sOverJumpDGroupId`}>
                    <Select style={styles.formbinderbox} dataSource={SingleOverrunJump} />
                  </FormBinder>
                </div>
                <div style={styles.mainmainbox}>
                  <p>设备使用模式</p>
                  <FormBinder name={`devicesGroup[${id}].deviceUseMode`}>
                    <Select style={styles.formbinderbox} dataSource={dUseMode} />
                     defaultValue={{ value: '随机', label: '随机' }}
                  </FormBinder>
                </div>
                <div style={styles.mainmainbox}>
                  <p>单设备笔数限制</p>
                  <span>每</span>
                  <FormBinder name={`devicesGroup[${id}].singleDeviceCountLimt.minutes`}>
                    <Input htmlType='number' style={styles.Limitintervalinput} placeholder='50' hasClear />
                  </FormBinder>
                  <FormBinder name={`devicesGroup[${id}].singleDeviceCountLimt.Unit`}>
                    <Select style={styles.formbinderbox} defaultValue={{ value: '分', label: '分' }} dataSource={danshebieconter} />
                  </FormBinder>
                  <FormBinder name={`devicesGroup[${id}].singleDeviceCountLimt.limit`}>
                    <Input htmlType='number' style={styles.Limitintervalinput} placeholder='10' hasClear />
                  </FormBinder>
                  <span>笔</span>
                </div>
                <div style={styles.mainmainbox}>
                  <p>单设备日收款限额</p>
                  <span>每</span>
                  <FormBinder name={`devicesGroup[${id}].singleDeviceDayQuato`}>
                    <Input htmlType='number' style={styles.Limitintervalinput} placeholder='50' hasClear />
                  </FormBinder>
                  <FormBinder name={`devicesGroup[${id}].singleDeviceDayQuatoUnit`}>
                    <Select style={styles.formbinderbox} defaultValue={{ value: '万', label: '万' }} dataSource={dayQuatoCompany} />
                  </FormBinder>
                  <span>会覆盖上次限额</span>
                </div>
              </div> */}
              {!outChannelDatas ? null : (
                <div style={styles.mainmain}>
                  <div style={styles.mainmainbox}>
                    <p>自动出款</p>
                    <FormBinder name={`devicesGroup[${id}].autoOutCash.outChannelId`}>
                      <Select style={styles.formbinderbox} dataSource={outChannelDatas} onChange={this.handleProvinceChange} />
                    </FormBinder>
                    <FormBinder name={`devicesGroup[${id}].autoOutCash.dGroupId`}>
                      <Select style={styles.formbinderbox} dataSource={sons} />
                    </FormBinder>
                  </div>
                  <div style={styles.mainmainbox}>
                    <p>免审核出款区间</p>
                    <FormBinder name={`devicesGroup[${id}].autoOutCash.noOutRangeMin`}>
                      <Input htmlType='number' style={styles.Limitintervalinput} placeholder='50' hasClear />
                    </FormBinder>
                    <span>--</span>
                    <FormBinder name={`devicesGroup[${id}].autoOutCash.noOutRangeMax`}>
                      <Input htmlType='number' style={styles.Limitintervalinput} placeholder='1000' hasClear />
                    </FormBinder>
                  </div>
                </div>
              )}
              {/* <div>
                <p>金额匹配设备额外开启</p>
                <p>金额匹配模式
                  <span>整数回调</span>
                </p>
                <FormBinder name={`devicesGroup[${id}].cashMatchMode`}>
                  <Select style={styles.formbinderbox} dataSource={cashMatchMode} />
                </FormBinder>
                <FormBinder name={`devicesGroup[${id}].intCallBack`}>
                  <Switch checkedChildren="on" unCheckedChildren="off" />
                </FormBinder>
              </div> */}
              <div style={styles.allborder} />
            </div>
          </div>
        );
      })
    );
  }

  // 创建按钮
  Establish() {
    this.refs.form.validateAll((errors,values)=>{
      debugger;
      routerRuleadd({
        ...values,
      }).then(({ status,data })=>{
        if (data.errCode == 0) {
          this.Routingclose();
          Message.success(data.message);
        } else {
          Message.success(data.message);
        }
      });
    });
  }
  TimeMode(v,e) {
    if (v == 'openTimeAll') {
      return null;
    } else if (v == 'openTimeRange') {
      this.Daypopup.daypopupopen();
    } else if (v == 'openWeekCustom') {
      this.Weektimepopup.weektimepopupopen();
    }
  }
  // 日时间段开放的时间改变
  time(item) {
    const datas = Object.assign({},this.state.value.openTimeMode,{ condition: item }); //
    const data = Object.assign({},this.state.value,{ openTimeMode: datas }); // 复制this.state.openTimeMode，然后this.setState改变
    console.log(datas);
    console.log(item);
    this.setState({
      value: data,
    });
  }
  render() {
    const ApplicationChannels = this.state.ApplicationChannels; // 渠道规则列表
    const equipmentgroups = this.state.equipmentgroup; // 可多选的设备组列表
    if (!this.state.open) return null;
    const Newdatas = this.state.Newdatas;
    const { sons } = this.state;
    return (
      <IceContainer className='routingPopup'>
        <Daypopup ref={ node => this.Daypopup = node } time={this.time.bind(this)} />
        <Weektimepopup ref={ node => this.Weektimepopup = node } time={this.time.bind(this)} />
        <div className='routingPopup-name'>
          <h1 style={{ float: 'left' }}>创建新规则弹窗</h1>
          <div style={{ float: 'right', marginTop: '20px' }}>
            <span style={{ marginRight: '10px' }}>此为高级功能</span>
            <Button className='btn-all' size='large' type='secondary' style={{ marginLeft: '20px' }}>规则可视化配置</Button>
          </div>
          <div className='clearfix' />
        </div>
        <FormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <FormBinder name='ruleName'>
            <Input style={styles.formbinderbox} placeholder='输入新规则名字' hasClear />
          </FormBinder>
          <Select name="channelId" style={styles.formbinderbox} dataSource={Newdatas} onChange={this.channeldeviceGroups.bind(this)} />
          <div>
            <h6>渠道规则</h6>
            <FormBinder name="openTimeMode.useMode" required message="请输入正确的名称" >
              <RadioGroup onChange={this.TimeMode.bind(this)}>
                <Radio id="openTimeAll" value='openTimeAll'>全天开放</Radio>
                <Radio id="openTimeRange" value='openTimeRange'>日时间段开放</Radio>
                <Radio id="openWeekCustom" value='openWeekCustom'>周自定义时间开放</Radio>
              </RadioGroup>
            </FormBinder>
          </div>
          <div>
            <p>选择可用设备组-可多选</p>
            <Select name='dGroupId' mode="multiple" style={styles.formbinderbox} dataSource={sons} onChange={this.equipmentgroups.bind(this)} />
          </div>
          {this.Fixedcontent()}
          <div style={{ marginBottom: '30px' }} />
          <div style={styles.posbtn}>
            <Button className='btn-all' size='large' type='secondary' style={styles.posbtna} onClick={this.Routingclose.bind(this)}>取消</Button>
            <Button className='btn-all' size='large' type='secondary' style={styles.posbtna} onClick={this.Establish.bind(this)}>创建</Button>
          </div>
        </FormBinderWrapper>
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
    width: '80px',
    height: '30px',
    // padding: '10px 3px',
  },
  main: { display: 'flex', flexDirection: 'column', marginTop: '20px' },
  maintop: { display: 'flex' },
  maintopspanleft: { width: '20%' },
  maintoppright: { width: '80%', borderBottom: '2px solid #BBBBBB' ,marginBottom: '20px' },
  mainmain: { display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' },
  allborder: { width: '100%', borderBottom: '2px solid #BBBBBB', margin: '10px 0' },
  mainmainbox: { marginLeft: '20px' },
  posbtn: { position: 'absolute', right: '20px' },
  posbtna: { bottom: '15px', right: '10px', borderRadius: '5px', marginLeft: '20px' },
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

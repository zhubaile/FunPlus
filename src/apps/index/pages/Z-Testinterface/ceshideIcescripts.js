import React, { Component } from 'react';
import { Table,Input,Radio ,Dialog ,Switch,Rating,Message,CascaderSelect, Select , Form } from '@alifd/next';
import moment from "moment/moment";

export default class Testinterface extends Component {
  static displayName = 'Testinterface';

  constructor(props) {
    super(props);
    this.state = {
      show_num: [],
      value: {
        inputval: '',
        pass: '',
      },
    /*  value: null,
      data: [],
      selectduo: [
        { value: '0' },
      ], */
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  /*  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(e => console.log(e));
  }

  handleChange(value, data, extra) {
    this.setState({
      value,
    });
  } */
  componentDidMount() {
    const show_num = [];
    this.fetchData(show_num);
  }
  fetchData=(show_num)=>{
    // let aaa = [];
    const canvas = document.getElementById("canvas");// 获取到canvas的对象，演员
    const canvas_width = canvas.width;
    const canvas_height = canvas.height;
    const context = canvas.getContext("2d");// 获取到canvas画图的环境，演员表演的舞台
    const sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    const aCode = sCode.split(",");
    const aLength = aCode.length;// 获取到数组的长度
    for (let i = 0; i < 4; i++) { // 这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
      const j = Math.floor(Math.random() * aLength);// 获取到随机的索引值
      const deg = Math.random() - 0.5; // 产生一个随机弧度
      const txt = aCode[j];// 得到随机的一个内容
      show_num[i] = txt.toLowerCase();
      const x = 10 + i * 20;// 文字在canvas上的x坐标
      const y = 20 + Math.random() * 8;// 文字在canvas上的y坐标
      context.font = "bold 23px 微软雅黑";
      context.translate(x, y);
      context.rotate(deg);
      context.fillStyle = this.randomColor();
      context.fillText(txt, 0, 0);
      context.rotate(-deg);
      context.translate(-x, -y);
    }
    for (let i = 0; i <= 5; i++) { // 验证码上显示线条
      context.strokeStyle = this.randomColor();
      context.beginPath();
      context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
      context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
      context.stroke();
    }
    for (let i = 0; i <= 30; i++) { // 验证码上显示小点
      context.strokeStyle = this.randomColor();
      context.beginPath();
      const x = Math.random() * canvas_width;
      const y = Math.random() * canvas_height;
      context.moveTo(x, y);
      context.lineTo(x + 1, y + 1);
      context.stroke();
    }
    console.log(show_num);
    debugger;
    this.setState({
      show_num,
    });
  }
  // 得到随机的颜色值
  randomColor=()=> {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  subbtn(e) {
    const val = this.state.value.inputval.toLowerCase();
    const num = this.state.show_num.join("");
    debugger;
    if (val == '') {
      alert('请输入验证码！');
    } else if (val == num) {
      alert('提交成功！');
      this.setState((params)=>{
        params.show_num = [];
        params.value = {
          inputval: '',
          pass: '',
        };
      },()=>{
        console.log(this.state.show_num);
        debugger;
        this.fetchData(this.state.show_num);
      });
      // this.fetchData(this.state.show_num);
    } else {
      alert('验证码错误！请重新输入！');
      this.setState({
        show_num: [],
        value: {
          inputval: '',
          pass: '',
        },
      },()=>{
        console.log(this.state.show_num);
        debugger;
        this.fetchData(this.state.show_num);
      });
      // this.fetchData(this.state.show_num);
    }
  }
  // 输入框onChange事件
  inputbtn(e) {
    const valuee = { ...this.state.value };
    const name = e.target.name;
    const value = e.target.value;
    valuee[name] = value;
    // const values = Object.assign({},this.state.value,{ name: value });
    // const valuess = { ...this.state.value,...{} };
    // console.log(values);
    this.setState({
      value: valuee,
    });
  }
  // 点击更换验证码事件
  gengxin() {
    const show_num = [];
    this.fetchData(show_num);
  }
  render() {
    const { value } = this.state;
    /*    const ApplicationChannels = [
      { value: '10', label: '选择应用通道' },
      { value: '20', label: '支付宝手机APP' },
      { value: '30', label: '微信扫码' },
    ];
    const aaa = [
      { value: '0', label: '选择应用通道' },
      { value: '1', label: '支付宝手机APP' },
      { value: '2', label: '微信扫码' },
      { value: '3', label: '30' },
      { value: '4', label: '40' },
      { value: '5', label: '50' },
    ]; */
    return (
      <div className='backstageworkorder'>
        {/*   <p>评价</p>
        <Rating name='star' count='5' size='large' />
        <p>开关</p>
        <Switch />
        <p>多选</p>
        <CascaderSelect style={{ width: '302px' }} changeOnSelect value={this.state.value} dataSource={this.state.data} onChange={this.handleChange} />
        <p>1</p>
        <Select mode="multiple" dataSource={aaa} style={{ width: 200 }} defaultValue={this.state.selectduo} />
        <p>2</p>
        <Select useDetailValue defaultValue={{ value: '10' }} dataSource={ApplicationChannels} style={{ width: 150 }} /> */}
        <div className='ceshidiv-main-yanzheng'>
          <input type="text" name='inputval' value={value.inputval} onChange={this.inputbtn.bind(this)} placeholder="请输入验证码（不区分大小写）" className="input-val" style={styles.inputval} ref={input=>this.inputval = input} />
          <input type="text" name='pass' value={value.pass} onChange={this.inputbtn.bind(this)} />
          <canvas id="canvas" width="100" height="30" style={styles.canvas} onClick={this.gengxin.bind(this)} />
          {/* <input type="submit" style={styles.btn} onClick={this.subbtn.bind(this)} value='提交' /> */}
          <button className="btn" style={styles.btn} onClick={this.subbtn.bind(this)}>提交</button>
        </div>
      </div>
    );
  }
}
const styles = {
  inputval: {
    width: '200px',
    height: '32px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  btn: {
    display: 'block',
    marginTop: '20px',
    height: '32px',
    width: '100px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#457adb',
    border: 'none',
    borderRadius: '50px',
  },
  canvas: {
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    cursor: 'pointer',
  },
/*  btn: {
    position: 'absolute',
    right: '60px',
    height: '28px',
    width: '80px',
    borderRadius: '6px',
  },
  btns: {
    position: 'absolute',
    right: '60px',
    height: '28px',
    width: '140px;',
    borderRadius: '6px',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  }, */
};

/*
var arr = [0,1,2,3,4,5,6,7,8,9];
for(var i = 65;i < 122;i++){
  if(i>90&&i<97){
    continue;
  }
  arr.push(String.fromCharCode(i));
}
//每个验证码可能出现的字母或数字(区分大小写)
var len = arr.length;
//验证码的长度
var canvasStr,value;
//验证码值
function createCanvas(){
  canvasStr = '';
  value = '';
  for(var i =0 ;i < 6;i++){
    var a = arr[Math.floor(Math.random()*len)];
    canvasStr += a+' ';
    value += a;
  }
//canvas
  var oCanvas = document.getElementById('canvasCaptcha');
  var ctx = oCanvas.getContext('2d');
  var w = oCanvas.width;
  var h = oCanvas.height;
  var oImg = new Image();
  oImg.src = './images/bg.jpg';
  oImg.onload = function(){
    var pattern = ctx.createPattern(oImg,'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = '#ccc';
    ctx.textAlign = 'center';
    ctx.font = '46px Roboto Slab';
    ctx.setTransform(1,-0.12,0.2,1,0,12);
    ctx.fillText(canvasStr,w/2,60);
  }
}

createCanvas();

//验证输入的验证码与图中验证码时候相等
function captcha(e){
  if(e == value){
    return true;
  }
  else{
    return false;
  }
}

//点击提交按钮时的结果
function showResult(){
  var inputValue = $('.inputCaptcha').val();

  if(inputValue == '' ||inputValue == null || inputValue == 'undefined'){
    $('.errorText').css({display:'inline-block'}).html('验证码不能为空,请重新输入!');
    $('.captchaIcon').css({display:'inline-block',backgroundImage:"url('./images/false.png')"});
  }else{
    var flag = captcha(inputValue);
    if(!flag){
      $('.errorText').css({display:'inline-block'}).html('验证码错误,请重新输入!');
      $('.captchaIcon').css({display:'inline-block',backgroundImage:"url('./images/false.png')"});
    }else{
      $('.captchaIcon').css({display:'inline-block',backgroundImage:"url('./images/true.png')"});
    }
  }
}
$('.captchaSubmit').click(showResult);//提交
$('.refresh').click(createCanvas);//刷新
//点击input框
$('.inputCaptcha').focus(function(){
  $('.errorText').add($('.captchaIcon')).fadeOut(100);
})
*/


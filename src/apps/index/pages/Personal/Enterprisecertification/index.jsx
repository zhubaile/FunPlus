/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Customerservice from "../components/Customerservice";
import { Input, Radio, Select , Upload, Grid, Form ,Step } from '@alifd/next';
import '../../index.css';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 5 },
  wrapperCol: { s: 12, l: 10 },
};
function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(data, file) {
  console.log('onSuccess callback : ', file);
}

function onError(file) {
  console.log('onError callback : ', file);
}
const provinceData = ['电商', '生活', '餐饮', '网络技术', '服务'];
const cityData = {
  电商: ['刘雅琪', '刘晓军', '留情啊'],
  生活: ['朱娇娇', '朱柏乐', '祝票选'],
  餐饮: ['王力宏', '王晨阳', '王家兴'],
  网络技术: ['张子琪', '张一一', '张力'],
  服务: ['Nanjing', 'Suzhou', 'Zhenjiang'],

};
class Enterprisecertification extends Component {
  static displayName = 'Enterprisecertification';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        enterprisename: '',
        businesslicense: '',
        contactaddress: '',
        homedirectory: '',
        subdirectory: '',
        businesslicenseimg: [],
        legalpersonimg: [],
        username: '',
        useremail: '',
        userqq: '',
      },
      data: [],
      disabled: true,
    };
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  // 层级选择
  handleProvinceChange(value) {
    const data = cityData[value];
    this.setState({ data, province: value, city: '', disabled: !data });
  }
  // 子数据
  handleCityChange(value) {
    this.setState({ city: value });
    console.log(this.state.province, value);
  }

  onDragOver = () => {
    console.log('dragover callback');
  };

  onDrop = (fileList) => {
    console.log('drop callback : ', fileList);
  };

  formChange = (value) => {
    debugger;
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    const { data, disabled, province, city } = this.state;
    const {
      intl: { formatMessage },
    } = this.props;
    return (
     <div>
       <div className='personal-top'>
         <span>企业认证</span>
         <div className='personal-top-border' />
       </div>
       <div className="personalenter">
         <div className='personalenter-left'>
           <div className='personalenter-left-step'>
             <Step current={1} shape="arrow" animation>
               <Step.Item title="1 提交资料" />
               <Step.Item title="2 待审核" />
               <Step.Item title="3审核通过" />
             </Step>
           </div>
           <Form value={this.state.value} onChange={this.formChange} ref="form">
             <div style={styles.formContent}>
               {/* 企业名称 */}
               <FormItem
                 // label={formatMessage({ id: 'app.setting.name' })}
                 label='企业名称：'
                 {...formItemLayout}
                 required
                 maxLength={10}
                 requiredMessage={formatMessage({
                   id: 'app.setting.name.message',
                 })}
               >
                 <Input name="enterprisename" placeholder="请输入您的企业名称" />
               </FormItem>
               {/* 企业营业执照号码 */}
               <FormItem
                 // label={formatMessage({ id: 'app.setting.name' })}
                 label='企业营业执照号码：'
                 {...formItemLayout}
                 required
                 maxLength={18}
                 requiredMessage={formatMessage({
                   id: 'app.setting.name.message',
                 })}
               >
                 <Input name="businesslicense" placeholder="企业营业执照号码或统一社会信用代码" />
               </FormItem>
               {/* 企业联系地址 */}
               <FormItem
                 // label={formatMessage({ id: 'app.setting.name' })}
                 label='企业联系地址：'
                 {...formItemLayout}
                 required
                 maxLength={20}
                 requiredMessage={formatMessage({
                   id: 'app.setting.name.message',
                 })}
               >
                 <Input name="contactaddress" placeholder="公司实际详细地址（收发相关企业合同，发票等文件）" />
               </FormItem>
               <FormItem
                 // label={formatMessage({ id: 'app.setting.name' })}
                 label='行业类目：'
                 {...formItemLayout}
                 required
                 maxLength={20}
                 requiredMessage={formatMessage({
                   id: 'app.setting.name.message',
                 })}
               >
                 <Select size='large' name='homedirectory' placeholder="主类目" dataSource={provinceData} value={province} onChange={this.handleProvinceChange} style={{ width: '150px'}} />
                 <Select name='subdirectory' placeholder="子类目" dataSource={data} value={city} onChange={this.handleCityChange} disabled={disabled} style={{ width: '150px'}} />
               </FormItem>
               {/* 营业执照上传 */}
               <FormItem
                 // label={formatMessage({ id: 'app.setting.avatar' })}
                 label='企业营业执照上传：'
                 {...formItemLayout}
                 required
                 requiredMessage={formatMessage({
                   id: 'app.setting.avatar.message',
                 })}
               >
                 {/* action 为代理的模式，在.webpackrc.js中设置 */}
                 <Upload.Card
                   action="/web/beta/v1.0/uploadPhoto"
                   name="businesslicenseimg"
                   limit={1}
                   accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                   beforeUpload={beforeUpload}
                   onChange={onChange}
                   onSuccess={onSuccess}
                   onError={onError}
                   formatter={(res, file) => {
                     // (上传图片)函数里面根据当前服务器返回的响应数据
                     // 重新拼装符合组件要求的数据格式   res为后端返回的数据
                     // success: res.errCode === 200 ,200没有引号,这个坑踩了三个小时
                     return {
                       success: res.errCode === 0 ,
                       url: res.data.downloadURL,
                     };
                   }}
                 />
               </FormItem>
               {/* 法人身份证正反面上传 */}
               <FormItem
                 // label={formatMessage({ id: 'app.setting.avatar' })}
                 label='法人身份证正面上传：'
                 {...formItemLayout}
                 required
                 requiredMessage={formatMessage({
                   id: 'app.setting.avatar.message',
                 })}
               >
                 {/* action 为代理的模式，在.webpackrc.js中设置 */}
                 <Upload.Card
                   action="/web/beta/v1.0/uploadPhoto"
                   name="legalpersonimg"
                   limit={1}
                   accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                   beforeUpload={beforeUpload}
                   onChange={onChange}
                   onSuccess={onSuccess}
                   onError={onError}
                   formatter={(res, file) => {
                     return {
                       success: res.errCode === 0 ,
                       url: res.data.downloadURL,
                     };
                   }}
                 />
               </FormItem>
               {/* 联系人信息 */}
               {/* 联系人姓名 */}
               <FormItem
                 // label={formatMessage({ id: 'app.setting.website' })}
                 label='联系人姓名：'
                 {...formItemLayout}
                 required
                 requiredMessage={formatMessage({
                   id: 'app.setting.website.message',
                 })}
               >
                 <Input
                   name="username"
                   placeholder="联系人真实姓名"
                 />
               </FormItem>
               {/* 联系人常用邮箱 */}
               <FormItem
                 // label={formatMessage({ id: 'app.setting.email' })}
                 label='常用联系邮箱：'
                 {...formItemLayout}
                 required
                 requiredMessage={formatMessage({
                   id: 'app.setting.email.message',
                 })}
               >
                 <Input htmlType="email" name="useremail" placeholder="联系人邮箱" />
               </FormItem>
               {/* 联系人qq */}
               <FormItem
                 // label={formatMessage({ id: 'app.setting.github' })}
                 label='常用联系QQ：'
                 {...formItemLayout}
                 required
                 requiredMessage={formatMessage({
                   id: 'app.setting.github.message',
                 })}
                 // format="url"
               >
                 <Input
                   name="userqq"
                   placeholder="常用联系人QQ"
                 />
               </FormItem>
               {/*   <FormItem
                label={formatMessage({ id: 'app.setting.description' })}
                {...formItemLayout}
              >
                <Input.TextArea placeholder="请输入描述..." name="description" />
              </FormItem> */}

               <Row style={{ marginTop: 20 }}>
                 <Col offset="3">
                   <span>请在确认后提交设置。</span>
                 </Col>
                 <Col offset="3">
                   <Form.Submit
                     type="primary"
                     style={{ width: 100, borderRadius: 6 }}
                     validate
                     onClick={this.validateAllFormField}
                   >
                     <FormattedMessage id="app.setting.submit" />
                   </Form.Submit>
                 </Col>
               </Row>
             </div>
           </Form>
         </div>
         <div className='personalenter-right'>
           <div className='personalenter-right-box'>
             <h2>公司信息</h2>
             <span>公司基本信息将用于认证账户，会完全保密，信息提交后2个工作日内完成审核。</span>
           </div>
           <div className='personalenter-right-box'>
             <h2>联系地址</h2>
             <span>如有需要，我们会向此地址寄送纸质合同。</span>
           </div>
           <div className='personalenter-right-box'>
             <h2>图片要求</h2>
             <span>上传图片必须为彩色无水印、PNG 或 JPG 格式、大小在500K 以内。</span>
           </div>
         </div>
         <Customerservice />
       </div>
     </div>
    );
  }
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
};

export default injectIntl(Enterprisecertification);

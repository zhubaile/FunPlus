/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Customerservice from "../components/Customerservice";
import { Input, Radio, Select , Upload, Grid, Form ,Step, Button,Message ,Icon, Tab } from '@alifd/next';
import { FormBinderWrapper, FormBinder , FormError } from '@icedesign/form-binder';
import { companydustyInfo,companycompanyInsert } from '@indexApi';
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
class Enterprisecertification extends Component {
  static displayName = 'Enterprisecertification';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        cpName: '',
        cpBusinessNumber: '',
        cpAddress: '',
        cpIndustryCategory: '',
        cpIndustrySubcategory: '',
        cpIndustryImage: [],
        cpFrontCardImg: [],
        cpBackCardImg: [],
        linkName: '',
        linkEmail: '',
        linkPhone: '',
      },
      dustyInfoson: [],// 子类目数据的值
      dustyInfo: [],// 全部类目的数据值
      userCompanyInfo: [],
      userCompanyStatus: {
        cpStatus: 0,
      },
    };
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  // 层级选择
  handleProvinceChange(value,datas,e) {
    debugger;
    const dustyInfoson = this.state.dustyInfo[value].son;
    const valuecpory = Object.assign({}, this.state.value, { cpIndustryCategory: e.label });
    this.setState({ dustyInfoson, value: valuecpory });
  }
  // 子数据
  handleCityChange(value,data,e) {
    debugger;
    const valuecporyson = Object.assign({}, this.state.value, { cpIndustrySubcategory: e.label });
    this.setState({ value: valuecporyson });
  }
  /*
  onDragOver = () => {
    console.log('dragover callback');
  };

  onDrop = (fileList) => {
    console.log('drop callback : ', fileList);
  }; */
  componentDidMount() {
    // this.fetchData();
    companydustyInfo().then(({ status,data })=>{
      debugger;
      if (data.errCode == 0) {
        // const sss = data.data.state;
        // const userStatus = Object.assign({},sss,{ cpStatus: 0 });
        this.setState({
          dustyInfo: data.data.dustyInfo, // 类目选择
          userCompanyInfo: data.data.company, // 审核的信息
          userCompanyStatus: data.data.state, // 审核状态 userCompanyStatus
        });
      } else {
        Message.success(data.message);
      }
    });
  }
  // 提交
  validateAllFormField = () => {
    const { validateFields } = this.refs.form;
    validateFields((errors,values)=>{
      if (!errors) {
        const cpIndustryImage = values.cpIndustryImage[0].response.names;
        const cpFrontCardImg = values.cpFrontCardImg[0].response.names;
        const cpBackCardImg = values.cpBackCardImg[0].response.names;
        companycompanyInsert({
          ...values,
          cpIndustryImage,
          cpFrontCardImg,
          cpBackCardImg,
        }).then(({ status, data })=>{
          debugger;
          if (data.errCode == 0) {
            Message.success(data.message);
            const userStatus = Object.assign({},this.state.userCompanyStatus,{ cpStatus: 1 });
            this.setState({
              userCompanyStatus: userStatus,
            });
          } else {
            Message.success(data.message);
          }
        });
      } else {
        debugger;
        Message.success(errors[0].message);
      }
    });
  };
  // 修改审核信息的按钮
  modifymessage() {
    const userStatus = Object.assign({},this.state.userCompanyStatus,{ cpStatus: 0 });
    debugger;
    this.setState({
      userCompanyStatus: userStatus,
      value: this.state.userCompanyInfo,
    });
  }
  render() {
    const { dustyInfoson, userCompanyStatus,dustyInfo,userCompanyInfo,value } = this.state;
    const {
      intl: { formatMessage },
    } = this.props;
    const userContent = userCompanyStatus.content;
    const userStatus = userCompanyStatus.cpStatus;
    console.log(value);
    debugger;
    return (
      <div>
        <Tab>
          <Tab.Item shape='pure' title='企业认证'>
            <div className="personalenter">
              <div className='personalenter-left'>
                {userStatus == 0 ? (
                  <FormBinderWrapper
                    value={value}
                    onChange={this.formChange}
                    ref="form"
                  >
                    <div style={styles.formContent}>
                      {/* 企业名称 */}
                      <div style={styles.formItem}>
                        {/* <input type="file" ref={node=>this.filebtn1 = node} />
                        <input type="file" ref={node=>this.filebtn2 = node} />
                        <input type="file" ref={node=>this.filebtn3 = node} /> */}
                        <span style={styles.formItemLabel}>企业名称：</span>
                        <FormBinder
                          name="cpName"
                          required
                          maxLength={10}
                          requiredMessage={formatMessage({
                        id: 'app.setting.name.message',
                      })}
                        >
                          <Input style={styles.ationinpiu} placeholder="请输入您的企业名称" />
                        </FormBinder>
                      </div>
                      {/* 企业营业执照号码 */}
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>企业营业执照号码：</span>
                        <FormBinder
                          required
                          maxLength={18}
                          requiredMessage={formatMessage({
                        id: 'app.setting.name.message',
                      })}
                          name="cpBusinessNumber"
                        >
                          <Input style={styles.ationinpiu} placeholder="企业营业执照号码或统一社会信用代码" />
                        </FormBinder>
                      </div>
                      {/* 企业联系地址 */}
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>企业联系地址：</span>
                        <FormBinder
                          required
                          maxLength={20}
                          requiredMessage={formatMessage({
                            id: 'app.setting.name.message',
                          })}
                          name="cpAddress"
                        >
                          <Input style={styles.ationinpiu} placeholder="公司实际详细地址（收发相关企业合同，发票等文件）" />
                        </FormBinder>
                      </div>
                      <div style={styles.formItem} className='cpIndustryCategory'>
                        <span style={styles.formItemLabel}>行业类目：</span>
                        <FormBinder
                          required
                          maxLength={20}
                          requiredMessage={formatMessage({
                            id: 'app.setting.name.message',
                          })}
                          name="cpIndustryCategory"
                        >
                          <Select size='medium' name='cpIndustryCategory' placeholder="主类目" dataSource={dustyInfo} onChange={this.handleProvinceChange} style={{ width: '160px' }} />
                        </FormBinder>
                        <FormBinder
                          required
                          maxLength={20}
                          requiredMessage={formatMessage({
                            id: 'app.setting.name.message',
                          })}
                          name="cpIndustrySubcategory"
                        >
                          <Select size='medium' name='cpIndustrySubcategory' placeholder="子类目" dataSource={dustyInfoson} onChange={this.handleCityChange} style={{ marginLeft: '10px',width: '160px' }} />
                        </FormBinder>
                      </div>
                      {/* 营业执照上传 */}
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>企业营业执照上传：</span>
                        <FormBinder
                          required
                          requiredMessage={formatMessage({
                            id: 'app.setting.avatar.message',
                          })}
                          name="cpIndustryImage"
                        >
                          {/* action 为代理的模式，在.webpackrc.js中设置 */}
                          <Upload.Card
                            action="/web/beta/v1.0/upload/uploadPhoto"
                            name="avatar"
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
                                names: res.data.name,
                              };
                            }}
                            /* defaultValue={[{
                              uid: '0',
                              name: 'IMG.png',
                              state: 'done',
                              url: 'http://192.168.1.121:3001/upload/image/8f3433e80d704f03da03cf760213cabd.png',
                              downloadURL: 'http://192.168.1.121:3001/upload/image/8f3433e80d704f03da03cf760213cabd.png',
                              imgURL: 'http://192.168.1.121:3001/upload/image/8f3433e80d704f03da03cf760213cabd.png'
                            }, {
                              uid: '1',
                              name: 'IMG.png',
                              percent: 50,
                              state: 'uploading',
                              url: 'http://192.168.1.121:3000/upload/image/9d4b9b8b028a14882425eb09825a7034.png',
                              downloadURL: 'http://192.168.1.121:3000/upload/image/9d4b9b8b028a14882425eb09825a7034.png',
                              imgURL: 'http://192.168.1.121:3000/upload/image/9d4b9b8b028a14882425eb09825a7034.png'
                            }]} */
                          />
                        </FormBinder>
                      </div>

                      {/* 法人身份证正反面上传 */}
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>法人身份证正面上传：</span>
                        <FormBinder
                          required
                          requiredMessage={formatMessage({
                            id: 'app.setting.avatar.message',
                          })}
                          name="cpFrontCardImg"
                        >
                          {/* action 为代理的模式，在.webpackrc.js中设置 */}
                          <Upload.Card
                            action="/web/beta/v1.0/upload/uploadPhoto"
                            name="avatar"
                            limit={1}
                            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                            beforeUpload={beforeUpload}
                            onChange={onChange}
                            onSuccess={onSuccess}
                            onError={onError}
                            // defaultValue={[{
                            //   url: 'http://192.168.1.105:3000/upload/1cdb684dd77b71c4454355cd67c080f8.png',
                            // }]}
                            formatter={(res, file) => {
                              return {
                                success: res.errCode === 0 ,
                                url: res.data.downloadURL,
                                names: res.data.name,
                              };
                            }}
                          />
                        </FormBinder>
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>法人身份证反面上传：</span>

                        <FormBinder required
                          requiredMessage={formatMessage({
                                      id: 'app.setting.avatar.message',
                                    })}
                          name="cpBackCardImg"
                        >
                          <Upload.Card
                            action="/web/beta/v1.0/upload/uploadPhoto"
                            name="avatar"
                            limit={1}
                            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                            beforeUpload={beforeUpload}
                            onChange={onChange}
                            onSuccess={onSuccess}
                            onError={onError}
                            formatter={(res, file) => {
                              debugger;
                              return {
                                success: res.errCode === 0 ,
                                url: res.data.downloadURL,
                                names: res.data.name,
                              };
                            }}
                          />
                        </FormBinder>
                      </div>
                      {/* 联系人姓名 */}
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>联系人姓名：</span>
                        <FormBinder
                          required
                          requiredMessage={formatMessage({
                            id: 'app.setting.website.message',
                          })}
                          name="linkName"
                        >
                          <Input style={styles.ationinpiu} placeholder="联系人真实姓名" />
                        </FormBinder>
                      </div>

                      {/* 联系人手机 */}
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>联系人手机号：</span>
                        <FormBinder
                          required
                          requiredMessage={formatMessage({
                            id: 'app.setting.github.message',
                          })}
                          name="linkPhone"
                        >
                          <Input style={styles.ationinpiu} placeholder="常用联系人手机号" />
                        </FormBinder>
                      </div>
                      {/* 联系人常用邮箱 */}
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>常用联系邮箱：</span>
                        <FormBinder
                          required
                          requiredMessage={formatMessage({
                            id: 'app.setting.email.message',
                          })}
                          name="linkEmail"
                        >
                          <Input style={styles.ationinpiu} htmlType="email" placeholder="联系人邮箱" />
                        </FormBinder>
                      </div>
                      <Row style={{ marginTop: 20 }}>
                        <Col offset="3">
                          <span>请在确认后提交设置。</span>
                        </Col>
                        <Col offset="3">
                          <Button
                            type="primary"
                            style={{ width: 100, borderRadius: 6 }}
                            // validate
                            onClick={this.validateAllFormField}
                          >
                            <FormattedMessage id="app.setting.submit" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </FormBinderWrapper>
                ) : null}
                {userStatus == 2 ? (
                  <FormBinderWrapper
                    value={this.state.value}
                    onChange={this.formChange}
                    ref="form"
                  >
                    <div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>企业名称：</span>
                        <strong style={styles.ationinpiu}>{userCompanyInfo.cpName}</strong>
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>企业营业执照号码：</span>
                        <strong style={styles.ationinpiu}>{userCompanyInfo.cpBusinessNumber}</strong>
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>企业联系地址：</span>
                        <strong style={styles.ationinpiu}>{userCompanyInfo.cpAddress}</strong>
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>行业类目：</span>
                        <strong style={styles.ationinpiu}>{userCompanyInfo.cpIndustryCategory}——{userCompanyInfo.cpIndustrySubcategory}</strong>
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>企业营业执照上传：</span>
                        <img src={userCompanyStatus.cpIndustryImage} alt="" style={{ marginLeft: '20px', width: '80px', height: '80px' }} />
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>法人身份证正面上传：</span>
                        <img src={userCompanyStatus.cpFrontCardImg} alt="" style={{ marginLeft: '20px', width: '80px', height: '80px' }} />
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>法人身份证反面上传：</span>
                        <img src={userCompanyStatus.cpBackCardImg} alt="" style={{ marginLeft: '20px', width: '80px', height: '80px' }} />
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>联系人姓名：</span>
                        <strong style={styles.ationinpiu}>{userCompanyInfo.linkName}</strong>
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>常用联系手机：</span>
                        <strong style={styles.ationinpiu}>{userCompanyInfo.linkPhone}</strong>
                      </div>
                      <div style={styles.formItem}>
                        <span style={styles.formItemLabel}>常用联系邮箱：</span>
                        <strong style={styles.ationinpiu}>{userCompanyInfo.linkEmail}</strong>
                      </div>
                      <button className='modifyCertified' onClick={this.modifymessage.bind(this)}>修改认证信息</button>
                    </div>
                  </FormBinderWrapper>
                ) : null}
                {userStatus == 1 ? (
                  <div className='personalentertwo'>
                    <Icon type="success-filling" size='xxxl' style={{ color: '#0076FF' }} />
                    <p>系统正在审核，请耐心等候。</p>
                    {/* <p>{userContent}</p> */}
                  </div>
                ) : null}
                {userStatus == 3 ? (
                  <div>
                    <div className='personalentertwo'>
                      <Icon type="delete-filling" size='xl' style={{ color: 'red' }} />
                      <div>
                        <p>认证未通过</p>
                        <p>{userContent}</p>
                        <button className='modifyCertified' onClick={this.modifymessage.bind(this)}>修改认证信息</button>
                      </div>
                    </div>
                  </div>
                ) : null}
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
              <div style={{ clear: 'both' }} />
              <Customerservice />
            </div>
          </Tab.Item>
        </Tab>
      </div>
    );
  }
}

const styles = {
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  formItemLabel: {
    width: '150px',
    mariginRight: '10px',
    display: 'inline-block',
    textAlign: 'right',
  },
  ationinpiu: {
    width: '400px',
  },
};

export default injectIntl(Enterprisecertification);

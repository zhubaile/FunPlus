/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Checkbox, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/icon';
import { FormattedMessage, injectIntl } from 'react-intl';
import { usermodifyPwd } from '@loginApi';
import IceImg from '@icedesign/img';

@withRouter
  @injectIntl
class SetNewPassword extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    console.log(this.props.match); // 获取到详细的路由地址
    const query = this.props.location.search; // '?s=1&f=7'
    let arr,
      initialemail,
      failedCount;
    if (query) {
      arr = query.split('&');
      initialemail = arr[0].substr(7); // 获取邮箱值
      failedCount = arr[1].substr(5); // '7'
    } else {
      initialemail = '';
      failedCount = '';
    }
    let phones,
      codes;
    if (this.props.location.state) {
      phones = this.props.location.state.phone;
      codes = this.props.location.state.code;
    } else {
      phones = '';
      codes = '';
    }
    console.log(phones,codes,initialemail,failedCount)
    debugger;
    this.state = {
      value: {
        passwordTwo: '',
        password: '',
        email: initialemail,
        sign: failedCount,
        phone: phones,
        code: codes,
      },
      type: 'password',
    };
  }
  /* 文本框输入内容的事件 */
  formChange = (value) => {
    this.setState({
      value,
    });
  };

  /* 登录按钮的出发时间 */
  handleSubmit=(e)=> {
    // e.preventDefault();// 如果删除此行，表单将自动提交
    // this.refs.form.validateAll((errors, values) => {
    //   if (errors) {
    //     console.log('errors', errors);
    //     return;
    //   }
    const values = this.state.value;
    const { intl } = this.props;
    // 访问登录接口
    usermodifyPwd({
      ...values,
    }).then(
      ({ status, data }) => {
        if (data.errCode == 0) {
          // Message.success(intl.formatMessage({ id: 'app.login.Login successfully' }));
          Message.success(data.message);
          this.props.history.push('/user/login');
        } else {
          Message.success(data.message);
        }
      }
    );
    // });
  }

  // 点击显示和隐藏密码的按钮
  showPassword() {
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password',
    });
  }
  render() {
    const { intl } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <p style={styles.prompt}>请在此填写你的信息和联系方式</p>
          <div style={styles.icon}>
            <img src={require('@img/login/suo.png')} />
          </div>
          <h4 style={styles.title}>
            重置密码
            {/* <FormattedMessage id='app.login.sign.in' /> */}
          </h4>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div style={styles.formItems}>
              <div style={styles.formItem}>
                <FormattedMessage id='app.login.pass.errormessage'>
                  {txt => (
                    <IceFormBinder name="password" required message={txt}>
                      <Input
                        // hasClear
                        htmlType={this.state.type}
                        size="large"
                        maxLength={20}
                        placeholder='新密码'
                        style={styles.inputCol}
                      />
                    </IceFormBinder>
                  )}
                </FormattedMessage>
                <IceFormError name="password" />
              </div>

              <div style={styles.formItem}>
                <FormattedMessage id='app.login.pass.errormessage'>
                  {txt => (
                    <IceFormBinder name="passwordTwo" required message={txt}>
                      <Input
                        size="large"
                        htmlType={this.state.type}
                        placeholder='确认密码'
                        style={styles.inputCol}
                      />
                    </IceFormBinder>
                  )}
                </FormattedMessage>
                <IceFormError name="passwordTwo" />
              </div>
              <div style={styles.footer}>
                <Button
                  type="primary"
                  size="large"
                  onClick={this.handleSubmit}
                  style={styles.submitBtn}
                >
                  提交
                  {/* <FormattedMessage id='app.login.sign.in' /> */}
                </Button>
                <Link to="/user/login" style={styles.tips}>
                  <FormattedMessage id='app.sendregister.newaccount' />
                </Link>
              </div>
            </div>
          </IceFormBinderWrapper>
        </div>
        <div style={styles.right}>
          <div>
            <div style={styles.box}>
              <IceImg
                src={require('@img/login/tel.png')}
              />
              <p> <FormattedMessage id='app.login.Tel.consult' /></p>
              <a>000-1111-2222</a>
            </div>
            <div style={styles.box}>
              <IceImg
                src={require('@img/login/email.png')}
              />
              <p><FormattedMessage id='app.login.Mail.box' /></p>
              <a>YanYue@3FunPlus.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '700px',
    padding: '40px',
    background: '#fff',
    borderRadius: '10px',
    marginTop: '-60px',
    boxShadow: '0px 0px 10px rgba(170,170,170,60%)',
    display: 'flex',
    zIndex: '2',
  },
  left: {
    float: 'left',
    // width: '350px',
    paddingRight: '30px',
    borderRight: '#ccc 1px solid',
    flexGrow: '1',
  },
  title: {
    /*    margin: '0 0 40px', */
    color: 'rgba(0,162,251,1)',
    fontSize: '18px',
    fontWeight: '400',
    fontFamily: 'MicrosoftYaHei',
    textAlign: 'center',
    marginBlockStart: '0.8em',
    marginBlockEnd: '0.8em',
  },
  formItem: {
    position: 'relative',
    marginBottom: '20px',
  },
  inputIcon: {
    position: 'absolute',
    left: '10px',
    top: '12px',
    color: '#666',
  },
  inputCol: {
    width: '100%',
    borderRadius: '10px',
    /*    paddingLeft: '20px', */
  },
  submitBtn: {
    width: '100%',
    height: '40px',
    borderRadius: '8px',
  },
  tips: {
    marginTop: '20px',
    display: 'block',
    textAlign: 'center',
    color: '#108EE9',
    textDecoration: 'none',
  },
  right: {
    float: 'left',
    // width: '250px',
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'justify',
  },
  box: {
    textAlign: 'center',
    margin: '20px 0',
    cursor: 'pointer',
  },
  prompt: {
    fontSize: '14px',
    fontFamily: 'MicrosoftYaHei',
    fontWeight: '400',
    color: 'rgba(102,102,102,1)',
    lineHeight: '22px',
    paddingBottom: '15px',
  },
  icon: {
    textAlign: 'center',
  },
};

export default SetNewPassword;

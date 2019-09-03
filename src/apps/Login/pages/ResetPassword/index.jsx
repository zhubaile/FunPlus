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
import { smsfindPass,sendFindPassMail } from '@loginApi';
import IceImg from '@icedesign/img';

@withRouter
  @injectIntl
class ResetPassword extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        phone: '',
        email: '',
      },
      type: 'phone',
    };
  }
  /* 文本框输入内容的事件 */
  formChange = (value) => {
    this.setState({
      value,
    });
  };
  // 下一步
  nextBtn=(e)=> {
    // e.preventDefault();// 如果删除此行，表单将自动提交
    const values = this.inputvalue.getInputNode().value;
    if (!values) {
      Message.success('手机账户不能为空');
      return null;
    }
    smsfindPass({
      phone: values,
    }).then(
      ({ status, data }) => {
        if (data.errCode == 0) {
          // Message.success(intl.formatMessage({ id: 'app.login.Login successfully' }));
          Message.success(data.message);
          this.props.history.push({ pathname: "/user/retrievepassword", state: values });
          // window.location.href = "";
        } else {
          Message.success(data.message);
        }
      }
    );
    /* this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      // const { intl } = this.props;
      // const { type,types } = this.state;
      // const phone = values.phone;
      // const email = values.email;
      // const savaFun = types ? smsfindPass : sendFindPassMail;
      // const sendName = {};
      // if (phone) {
      //   sendName.phone = phone;
      // } else {
      //   sendName.email = email;
      // }
      // console.log(sendName);
      // debugger;
      smsfindPass({
        phone: values.phone,
      }).then(
        ({ status, data }) => {
          debugger;
          if (data.errCode == 0) {
            console.log(values);
            Message.success(intl.formatMessage({ id: 'app.login.Login successfully' }));
            this.props.history.push('/user/retrievepassword');
            window.location.href = "";
          } else {
            Message.success(data.message);
          }
        }
      ).catch(
        ({ status, data }) => {
          console.log(values);
          Message.success('登录失败');
          // this.props.history.push('/user/login');
        }
      );
    }); */
  }
  // 邮箱提交
  sendBtn=(e)=>{
    const values = this.inputvalue.getInputNode().value;
    if (!values) {
      Message.success('邮箱账户不能为空');
      return null;
    }
    sendFindPassMail({
      email: values,
    }).then(
      ({ status, data }) => {
        if (data.errCode == 0) {
          this.setState({
            value: {
              email: '',
            },
          },()=>{
            Message.success(data.message);
          });
          // Message.success(intl.formatMessage({ id: 'app.login.Login successfully' }));
          // this.props.history.push('/user/retrievepassword');
          // window.location.href = "";
        } else {
          Message.success(data.message);
        }
      }
    );
  }
  // 点击显示和隐藏密码的按钮
  emailbtn() {
    this.setState({
      type: 'email',
    });
  }
  phonebtn() {
    this.setState({
      type: 'phone',
    });
  }
  render() {
    const { intl } = this.props;
    const { type } = this.state;
    const spanstyle = { margin: '0 20px' };
    const spancolor = { color: '#00A2F6', margin: '0 20px' };
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <p style={styles.prompt}>请在此填写你的信息和联系方式</p>
          <p style={styles.prompts}>
            <span style={type == 'email' ? spanstyle : spancolor} onClick={this.phonebtn.bind(this)}>手机号找回</span>
            <span style={type == 'email' ? spancolor : spanstyle} onClick={this.emailbtn.bind(this)}>邮箱找回</span>
          </p>
          <div style={styles.icon}>
            <img src={require('@img/login/suo.png')} />
          </div>

          <h4 style={styles.title}>
            密码找回
            {/* <FormattedMessage id='app.login.sign.in' /> */}
          </h4>
          {/* <p style={styles.promptMessage}>验证码将发送到您注册的邮箱和手机上</p> */}
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div style={styles.formItems}>
              <div style={styles.formItem}>
                {/*                <IceIcon type="person" size="small" style={styles.inputIcon} /> */}
                <FormattedMessage id='app.login.user.errormessage'>
                  {txt => (
                    <IceFormBinder name={type == 'phone' ? 'phone' : 'email'} required message={type == 'phone' ? '手机号输入错误' : '邮箱输入错误'}>
                      <Input
                        hasClear
                        size="large"
                        ref={node=>this.inputvalue = node}
                        placeholder={type == 'phone' ? '请输入已绑定的手机号' : '请输入已绑定的邮箱'}
                        style={styles.inputCol}
                      />
                    </IceFormBinder>
                  )}
                </FormattedMessage>
                <IceFormError name="username" />
              </div>

              <div style={styles.footer}>
                <Button
                  type="primary"
                  size="large"
                  style={styles.submitBtn}
                  onClick={type == 'phone' ? this.nextBtn : this.sendBtn}
                >
                  {type == 'phone' ? '下一步' : '提交'}
                  {/* <FormattedMessage id='app.login.sign.in' /> */}
                </Button>
                <Link to="/user/login" style={styles.tips}>
                  上一步
                  {/* <FormattedMessage id='app.login.register.now' /> */}
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
    marginTop: '10px',
    marginBottom: '20px',
  },
  /*  inputIcon: {
    position: 'absolute',
    left: '10px',
    top: '12px',
    color: '#666',
  }, */
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
  prompts: {
    fontSize: '14px',
    fontFamily: 'MicrosoftYaHei',
    fontWeight: '400',
    color: 'rgba(102,102,102,1)',
    lineHeight: '22px',
    paddingBottom: '15px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  promptMessage: {
    textAlign: 'center',
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

export default ResetPassword;

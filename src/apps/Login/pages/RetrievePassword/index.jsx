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
import { smsverify,smsfindPass } from '@loginApi';
import IceImg from '@icedesign/img';


@withRouter
  @injectIntl
class RetrievePassword extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      phone: this.props.location.state,
      value: {
        code: '',
      },
      time: 60,
      type: 'password',
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(preState=>({
        time: preState.time - 1,
      }),()=>{
        if (this.state.time < 0) {
          this.setState({
            time: 0,
          });
          // clearInterval(this.interval);
        }
      });
    },1000);
  }
  // 解除定时器
  componentWillUnmount() {
    if (this.state.time == 0) {
      console.log(111);
      clearInterval(this.interval);
    }
  }
  /* 文本框输入内容的事件 */
  formChange = (value) => {
    this.setState({
      value,
    });
  };

  // 下一步
  nextBtntwo=(e)=>{
    e.preventDefault();// 如果删除此行，表单将自动提交
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      const { intl } = this.props;
      const phone = this.state.phone;
      const code = values.code;
      smsverify({
        code,
        phone,
      }).then(
        ({ status, data }) => {
          debugger;
          if (data.errCode == 0) {
            // console.log(values);
            // Message.success(intl.formatMessage({ id: 'app.login.Login successfully' }));
            Message.success(data.message);
            this.props.history.push({ pathname: "/user/setnewpassword", state: { phone,code } });
            // this.props.history.push('/user/setnewpassword');
          } else {
            Message.success(data.message);
          }
        }
      );
    });
  }
  // 点击显示和隐藏密码的按钮
  showPassword() {
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password',
    });
  }
  // 重新获取验证码
  newCode=()=>{
    const phone = this.state.phone;
    smsfindPass({
      phone,
    }).then(
      ({ status, data }) => {
        if (data.errCode == 0) {
          Message.success(data.message);
          this.setState({
            time: 60,
          });
        } else {
          Message.success(data.message);
        }
      });
  }
  render() {
    const { intl } = this.props;
    const { phone,time } = this.state;
    const buttons = (<button onClick={time == 0 ? this.newCode : null} style={{ height: '40px',background: '#ccc', border: 'none' }}>{time == 0 ? '重新获取' : (`${time}s`)}</button>);
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <p style={styles.prompt}>请在此填写你的信息和联系方式</p>
          <div style={styles.icon}>
            <img src={require('@img/login/suo.png')} />
          </div>

          <h4 style={styles.title}>
            密码找回
            {/* <FormattedMessage id='app.login.sign.in' /> */}
          </h4>
          <ul style={styles.promptMessage}>
            <li>我们发送了一条短信到<span style={{ color: 'rgba(0,162,251,1)' }}>{phone}</span></li>
            <li>请输入短信中的验证码</li>
          </ul>
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
                    <IceFormBinder name="code" required message="验证码输入错误">
                      <Input
                        // addonTextAfter="重新获取"
                        addonAfter={buttons}
                        hasClear
                        size="large"
                        placeholder='验证码'
                        style={styles.inputCol}
                      />
                    </IceFormBinder>
                  )}
                </FormattedMessage>
                <IceFormError name="username" />
              </div>

              {/*              <div style={styles.formItem}>
                <IceIcon type="lock" size="small" style={styles.inputIcon} />
                <FormattedMessage id='app.login.pass.errormessage'>
                  {txt => (
                    <IceFormBinder name="password" required message={txt}>
                      <Input
                        size="large"
                        htmlType={this.state.type}
                        placeholder={ intl.formatMessage({ id: 'app.login.password' }) }
                        style={styles.inputCol}
                      />
                    </IceFormBinder>
                  )}
                </FormattedMessage>
                <IceFormError name="password" />
              </div> */}

              {/* <div style={styles.formItem}>
                <IceFormBinder name="checkbox">
                  <Checkbox style={styles.checkbox}>
                    <FormattedMessage id='app.login.storage.number' />
                  </Checkbox>
                </IceFormBinder>
                <a style={{ float: 'right', cursor: 'pointer' }}>
                  <FormattedMessage id='app.login.forget.password' />
                </a>
              </div> */}

              <div style={styles.footer}>
                <Link to="/user/setnewpassword">
                  <Button
                    type="primary"
                    size="large"
                    onClick={this.nextBtntwo}
                    style={styles.submitBtn}
                  >
                  下一步
                    {/* <FormattedMessage id='app.login.sign.in' /> */}
                  </Button>
                </Link>
                <Link to="/user/resetpassword" style={styles.tips}>
                  上一步
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
              <a>400-0165505</a>
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

export default RetrievePassword;

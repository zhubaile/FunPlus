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
import { loginUser } from '../../api';

@withRouter
  @injectIntl
class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: '',
        password: '',
        checkbox: false,
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
    e.preventDefault();// 如果删除此行，表单将自动提交
    this.refs.form.validateAll((errors, values) => {
      // values.username为账号框的内容
      // 可在此处添加ajax方法
      if (errors) {
        console.log('errors', errors);
        return;
      }
      // 访问登录接口
      loginUser({
        name: values.username,
        pwd: values.password,
      });
      console.log(values);
      Message.success('登录成功');
      // this.props.history.push('/');  //可以添加配置的路由为跳转
      window.location.href = "index.html"; // 跳转到中后台界面
      // window.open('index.html');    //打开新的窗口
    });
  }

  // 点击显示和隐藏密码的按钮
  showPassword() {
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password',
    });
  }

  render() {
    // const nnnn = <FormattedMessage id='app.login.sign.in' />; // nnnn的值为登录
    return (
      <div style={styles.container}>
        <h4 style={styles.title}>
          <FormattedMessage id='app.login.sign.in' />
        </h4>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div style={styles.formItems}>
            <div style={styles.formItem}>
              <IceIcon type="person" size="small" style={styles.inputIcon} />
              {/* <IceFormBinder name="username" required message="用户名错误">
                <Input
                  hasClear
                  size="large"
                  maxLength={20}
                  placeholder='邮箱账号'
                  style={styles.inputCol}
                />
              </IceFormBinder>
              <IceFormError name="username" /> */}
              {/* 获取不到用户名的输入框内的值 */}
              {/* <FormattedMessage id='app.login.user.errormessage'>
                {txt => (
                  <IceFormBinder name="username" required message={txt}>
                    <FormattedMessage id="app.login.send">
                      {txt =>(
                        <Input
                          hasClear
                          size="large"
                          maxLength={20}
                          placeholder={txt}
                          style={styles.inputCol}
                        />
                      )}
                    </FormattedMessage>
                  </IceFormBinder>
                )}
              </FormattedMessage>
              <IceFormError name="username" /> */}
              <FormattedMessage id='app.login.user.errormessage'>
                {txt => (
                  <IceFormBinder name="username" required message={txt}>
                    <Input
                      hasClear
                      size="large"
                      maxLength={20}
                      placeholder='用户名'
                      style={styles.inputCol}
                    />
                  </IceFormBinder>
                )}
              </FormattedMessage>
              <IceFormError name="username" />
            </div>

            <div style={styles.formItem}>
              <IceIcon type="lock" size="small" style={styles.inputIcon} />
              <FormattedMessage id='app.login.pass.errormessage'>
                {txt => (
                  <IceFormBinder name="password" required message={txt}>
                    <Input
                      size="large"
                      htmlType={this.state.type}
                      placeholder="密码"
                      style={styles.inputCol}
                    />
                  </IceFormBinder>
                )}
              </FormattedMessage>
              {/* <IceFormBinder name="password" required message="密码错误">
                <Input
                  size="large"
                  htmlType={this.state.type}
                  placeholder="密码"
                  style={styles.inputCol}
                />
              </IceFormBinder> */}
              <IceFormError name="password" />
            </div>

            <div style={styles.formItem}>
              <IceFormBinder name="checkbox">
                <Checkbox style={styles.checkbox}>
                  <FormattedMessage id='app.login.storage.number' />
                </Checkbox>
              </IceFormBinder>
            </div>

            <div style={styles.footer}>
              <Button
                type="primary"
                size="large"
                onClick={this.handleSubmit}
                style={styles.submitBtn}
              >
                <FormattedMessage id='app.login.sign.in' />
              </Button>
              <Link to="/user/sendmailbox" style={styles.tips}>
                <FormattedMessage id='app.login.register.now' />
              </Link>
            </div>
          </div>
        </IceFormBinderWrapper>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '400px',
    padding: '40px',
    background: '#fff',
    borderRadius: '6px',
  },
  title: {
    margin: '0 0 40px',
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: '28px',
    fontWeight: '500',
    textAlign: 'center',
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
    paddingLeft: '20px',
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
  },
};

export default UserLogin;

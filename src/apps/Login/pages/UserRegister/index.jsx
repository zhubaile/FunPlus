/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/icon';
import { FormattedMessage, injectIntl } from 'react-intl';
import { registerUser } from '../../api';

@injectIntl
@withRouter
class UserRegister extends Component {
  static displayName = 'UserRegister';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        tel: '',
        email: '',
        passwd: '',
        rePasswd: '',
      },
    };
  }

  checkPasswd = (rule, values, callback) => {
    const { intl } = this.props;
    const pass = intl.formatMessage({ id: 'app.register.user.errorpass' }),
      minpass = intl.formatMessage({ id: 'app.register.user.minpass' }),
      maxpass = intl.formatMessage({ id: 'app.register.user.maxpass' });
    debugger;
    if (!values) {
      callback(pass);
    } else if (values.length < 8) {
      callback(minpass);
    } else if (values.length > 16) {
      callback(maxpass);
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    const { intl } = this.props;
    const pass = intl.formatMessage({ id: 'app.register.user.errorpass' }),
      Atypism = intl.formatMessage({ id: 'app.register.user.Atypism' });
    if (!values) {
      callback(pass);
    } else if (values && values !== stateValues.passwd) {
      callback(Atypism);
    } else {
      callback();
    }
  };
  checkTel=(rule, values, callback)=>{
    const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    const { intl } = this.props;
    const phone = intl.formatMessage({ id: 'app.register.user.phone' });
    if (!values || !(phoneReg.test(values))) {
      callback(phone);
    } else {
      callback();
    }
  };
  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      const { intl } = this.props;
      // 注册的ajax请求
      registerUser({
        name: 'values.name',
        tel: 'values.tel',
        email: 'values.email',
        passwd: 'values.passwd',
        rePasswd: 'values.rePasswd',
      }).then(
        ({ status, data }) => {
          console.log(values);
          Message.success(intl.formatMessage({ id: 'app.register.success' }));
          // Message.success('注册成功');
          this.props.history.push('/user/login');
        }
      ).catch(
        ({ status, data }) => {
          console.log(values);
          Message.success(intl.formatMessage({ id: 'app.register.error' }));
          // Message.success('注册失败');
          this.props.history.push('/user/register');
        }
      );
    });
  };

  render() {
    const { intl } = this.props;
    return (
      <div style={styles.container}>
        <h4 style={styles.title}>
          <FormattedMessage id="app.register.register" />
        </h4>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div style={styles.formItems}>
            <div style={styles.formItem}>
              <IceIcon type="person" size="small" style={styles.inputIcon} />
              <FormattedMessage id='app.register.user.errorname'>
                {txt => (
                  <IceFormBinder name="name" required message={txt}>
                    <Input
                      size="large"
                      placeholder={intl.formatMessage({ id: 'app.login.username' })}
                      style={styles.inputCol}
                    />
                  </IceFormBinder>
                )}
              </FormattedMessage>
              <IceFormError name="name" />
            </div>

            <div style={styles.formItem}>
              <IceIcon type="phone" size="small" style={styles.inputIcon} />
              <IceFormBinder label="tel" format="tel" name="tel" required validator={this.checkTel}>
                <Input
                  format="tel"
                  name="tel"
                  size="large"
                  placeholder={intl.formatMessage({ id: 'app.register.phone' })}
                  style={styles.inputCol}
                />
              </IceFormBinder>
              <IceFormError name="tel" />
            </div>

            <div style={styles.formItem}>
              <IceIcon type="mail" size="small" style={styles.inputIcon} />
              <FormattedMessage id='app.register.user.errormailbox'>
                {txt => (
                  <IceFormBinder type="email" name="email" required message={txt}>
                    <Input
                      size="large"
                      maxLength={20}
                      placeholder={intl.formatMessage({ id: 'app.register.mailbox' })}
                      style={styles.inputCol}
                    />
                  </IceFormBinder>
                )}
              </FormattedMessage>
              <IceFormError name="email" />
            </div>

            <div style={styles.formItem}>
              <IceIcon type="lock" size="small" style={styles.inputIcon} />
              <IceFormBinder
                name="passwd"
                required
                validator={this.checkPasswd}
              >
                <Input
                  htmlType="password"
                  size="large"
                  placeholder={intl.formatMessage({ id: 'app.register.user.minpass' })}
                  style={styles.inputCol}
                />
              </IceFormBinder>
              <IceFormError name="passwd" />
            </div>

            <div style={styles.formItem}>
              <IceIcon type="lock" size="small" style={styles.inputIcon} />
              <IceFormBinder
                name="rePasswd"
                required
                validator={(rule, values, callback) =>
                  this.checkPasswd2(rule, values, callback, this.state.value)
                }
              >
                <Input
                  htmlType="password"
                  size="large"
                  placeholder={intl.formatMessage({ id: 'app.register.confirm password' })}
                  style={styles.inputCol}
                />
              </IceFormBinder>
              <IceFormError name="rePasswd" />
            </div>

            <div className="footer">
              <Button
                type="primary"
                onClick={this.handleSubmit}
                style={styles.submitBtn}
                size="large"
              >
                <FormattedMessage id="app.register.register" />
              </Button>
              <Link to="/user/login" style={styles.tips}>
                <FormattedMessage id="app.sendregister.newaccount" />
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

export default UserRegister;

/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import { Input, Radio, Switch, Upload, Grid, Form } from '@alifd/next';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 6, s: 3, l: 3 },
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

class SettingsForm extends Component {
  static displayName = 'SettingsForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        gender: 'male',
        notice: false,
        email: '',
        avatar: [],
        siteUrl: '',
        githubUrl: '',
        twitterUrl: '',
        description: '',
      },
    };
  }

  onDragOver = () => {
    console.log('dragover callback');
  };

  onDrop = (fileList) => {
    console.log('drop callback : ', fileList);
  };

  formChange = (value) => {
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
    const {
      intl: { formatMessage },
    } = this.props;
    return (
      <div className="settings-form">
        <IceContainer>
          <Form value={this.state.value} onChange={this.formChange} ref="form">
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}>
                {/* <FormattedMessage id="app.setting.pagetitle" /> */}
                企业认证
              </h2>

              <FormItem
                label={formatMessage({ id: 'app.setting.name' })}
                {...formItemLayout}
                required
                maxLength={10}
                requiredMessage={formatMessage({
                  id: 'app.setting.name.message',
                })}
              >
                <Input name="name" placeholder="请输入您的企业名称" />
              </FormItem>

              <FormItem
                label={formatMessage({ id: 'app.setting.avatar' })}
                {...formItemLayout}
                required
                requiredMessage={formatMessage({
                  id: 'app.setting.avatar.message',
                })}
              >
                {/* action 为代理的模式，在.webpackrc.js中设置 */}
                <Upload.Card
                  action="/web/beta/v1.0/uploadPhoto"
                  name="avatar"
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

              <FormItem
                label={formatMessage({ id: 'app.setting.gender' })}
                {...formItemLayout}
                required
                requiredMessage={formatMessage({
                  id: 'app.setting.gender.message',
                })}
              >
                <RadioGroup name="gender">
                  <Radio value="male">
                    <FormattedMessage id="app.setting.male" />
                  </Radio>
                  <Radio value="female">
                    <FormattedMessage id="app.setting.female" />
                  </Radio>
                </RadioGroup>
              </FormItem>

              <FormItem
                label={formatMessage({ id: 'app.setting.notification' })}
                {...formItemLayout}
              >
                <Switch name="notice" />
              </FormItem>

              <FormItem
                label={formatMessage({ id: 'app.setting.email' })}
                {...formItemLayout}
                required
                requiredMessage={formatMessage({
                  id: 'app.setting.email.message',
                })}
              >
                <Input htmlType="email" name="email" />
              </FormItem>

              <FormItem
                label={formatMessage({ id: 'app.setting.website' })}
                {...formItemLayout}
                required
                requiredMessage={formatMessage({
                  id: 'app.setting.website.message',
                })}
                format="url"
              >
                <Input
                  name="siteUrl"
                  type="url"
                  placeholder="https://alibaba.github.io/ice"
                />
              </FormItem>

              <FormItem
                label={formatMessage({ id: 'app.setting.github' })}
                {...formItemLayout}
                required
                requiredMessage={formatMessage({
                  id: 'app.setting.github.message',
                })}
                format="url"
              >
                <Input
                  type="url"
                  name="githubUrl"
                  placeholder="https://github.com/alibaba/ice"
                />
              </FormItem>

              <FormItem
                label={formatMessage({ id: 'app.setting.twitter' })}
                {...formItemLayout}
                required
                requiredMessage={formatMessage({
                  id: 'app.setting.twitter.message',
                })}
                format="url"
              >
                <Input name="twitterUrl" placeholder="https://twitter.com" />
              </FormItem>

              <FormItem
                label={formatMessage({ id: 'app.setting.description' })}
                {...formItemLayout}
              >
                <Input.TextArea placeholder="请输入描述..." name="description" />
              </FormItem>

              <Row style={{ marginTop: 20 }}>
                <Col offset="3">
                  <Form.Submit
                    type="primary"
                    style={{ width: 100 }}
                    validate
                    onClick={this.validateAllFormField}
                  >
                    <FormattedMessage id="app.setting.submit" />
                  </Form.Submit>
                </Col>
              </Row>
            </div>
          </Form>
        </IceContainer>
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

export default injectIntl(SettingsForm);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Icon,Form } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';
import Administrators from '../../components/Administrators/Administrators';
import Customerservice from '../../components/Customerservice';
import '../../../../layouts/BasicLayout/components/Header/index.scss';
import '../../../index.css';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    fixedSpan: 10,
  },
  wrapperCol: {
    span: 14,
  },
};
const { Row, Col } = Grid;
export default class HelpCenteraddition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  btnClick() {
    // console.log(this.input.value,this);
    // ;
    this.props.editor(this.input.getInputNode().value);
  }
  render() {
    return (
      <div>
        <div className='personal-top'>
          <span>帮助中心</span>
          <div className='personal-top-border' />
          <div className='helpcenter-search'>
            <i className="os-icon os-icon-search" />
            <Input placeholder='搜索您想了解的问题' style={{ width: '300px' ,paddingLeft: '25px', height: '30px', borderRadius: '5px' }} hasClear />
          </div>
        </div>
        <div className='helpcenteraddition'>
          <div className='helpcenteraddition-left'>
            <div className='helpcenteraddition-left-common'>
              <div className='lefttitle'>常见问题</div>
              <div className='mainbox'>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.3FunPlus系统是否安全</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.3FunPlus产品介绍</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.如何选择合适的支付通道</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.因联手单行</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='clearfix' />
              </div>
            </div>

            <div className='helpcenteraddition-left-common'>
              <div className='lefttitle'>接入开发问题</div>
              <div className='mainbox'>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.3FunPlus系统是否安全</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.如何选择合适的支付通道</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.因联手单行</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='clearfix' />
              </div>
            </div>

            <div className='helpcenteraddition-left-common'>
              <div className='lefttitle'>支付渠道问题</div>
              <div className='mainbox'>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.如何选择合适的支付通道</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.因联手单行</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='clearfix' />
              </div>
            </div>

            <div className='helpcenteraddition-left-common'>
              <div className='lefttitle'>费用问题</div>
              <div className='mainbox'>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.3FunPlus系统是否安全</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.3FunPlus产品介绍</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='clearfix' />
              </div>
            </div>
            <div className='helpcenteraddition-left-common'>
              <div className='lefttitle'>安全隐私问题</div>
              <div className='mainbox'>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.3FunPlus系统是否安全</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='helpcenteraddition-left-common-box'>
                  <p>.3FunPlus产品介绍</p>
                  <a href="javascript:;">查看详细文档</a>
                </div>
                <div className='clearfix' />
              </div>
            </div>
          </div>
          <div className='helpcenteraddition-right'>
            <Administrators />
          </div>
        </div>
        <Customerservice />
      </div>
    );
  }
}
const styles = {
  containerTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
  },

};

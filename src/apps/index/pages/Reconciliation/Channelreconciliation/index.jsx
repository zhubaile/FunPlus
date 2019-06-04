import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button , Grid, DatePicker , Tab,Message } from '@alifd/next';
import { actions, reducers, connect } from '@indexStore';

import IceContainer from '@icedesign/container';
import '../../index.css';

const { Row, Col } = Grid;
export default class Channelreconciliation extends Component {
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
      <IceContainer className='reconcilichannel'>
        <Tab shape='pure' className='reconcilichannel-tab'>
          <Tab.Item title="渠道对账">
            <Message type='notice' className='reconcilichannel-tab-message'>
              管理平台提供的对账功能，帮助对接了3FunPlus聚合支付接口的客户，确认通过聚合支付发起的交易金额，与支付渠道的结算资金是否一致。
            </Message>
            <div className='reconcilichannel-tab-left'>
              3FunPlus管理平台提供的对账功能，帮助对接了 3FunPlus 聚合支付接口的客户，确认通过聚合支付发起的交易金额，与支付渠道的结算资金是否一致。财务/运营人员，在进行交易对账时，需要在支付渠道的商户平台网页下载支付渠道「对账单」，同时在 3FunPlus管理平台中下载《3FunPlus 交易报表》。两份报表下载完成后，财务/运营人员使用表格处理软件，将两份报表中的交易明细逐一比对。根据比对结果，财务/运营人员可以定位哪几笔交易，导致支付渠道结算资金和已记录的交易资金不一致。在 3FunPlus管理平台开启交易对账功能后，3FunPlus 每日会自动完成聚合支付交易和支付渠道对账单数据的比对，向客户直接展示比对结果。
              <br />1. 支持的支付渠道和交易类型<br />
              目前，由支付宝、微信、银联进行处理的支付、退款、撤销类型的交易，都可以由 3FunPlus 进行自动对账。支付宝、微信、银联支持对账的支付方式见右侧图例。
              <br />2. 开启交易对账功能<br />
              在每个应用的“应用设置”菜单中，有“对账开关”入口。点击“对账开关”菜单，开启对账功能后，即可在打开对账开关的第二天上午 10 点后（根据开通支付渠道不同，对账结果显示时间可能延后），查看到当天的对账结果。3FunPlus 只会对开启对账开关后的聚合支付交易，每日进行自动对账；未开启对账开关前的历史交易，不进行对账处理。
              <br />3. 查看对账结果<br />
              当前 APP 开启交易对账功能，可在对账菜单的“对账汇总”页面，查看当前 APP 每天的对账结果，包括当前 APP 整体交易的对账结果，和支付宝、微信、银联单个支付平台的对账结果。如果当天支付渠道对账单每笔交易的金额、结算总金额，和 3FunPlus 聚合支付每笔交易明细、交易总金额，双方记录结果都是一致的，则“对账汇总”页面展示的对账结果为“对账成功”。如果当天支付渠道对账单中有一笔或多笔交易的交易日期、交易金额等信息，和 3FunPlus 聚合支付记录的交易信息不一致，则“对账结果”页面展示的交易结果为“有差错”。当天对账结果为“有差错”，可以在操作列点击“查看差错”，进入“差错交易”菜单查看具体的差错交易信息。如果您在 3FunPlus 创建了多个 APP，并在这几个 APP 中共用一套支付参数；或者有其他项目未使用 3FunPlus 聚合支付服务，并配置了当前APP的支付参数，则会在当天的对账结果中显示“有渠道交易未通过本应用发起。
              <br /> 4. 查看差错交易<br />
              差错交易菜单包括“未处理差错”和“已处理差错”两个子菜单。未处理差错菜单用于显示对账后的差错交易，供财务/运营人员查看差错交易的详细信息，并按照本公司的差错交易处理方式，以提交工单的方式，告知 3FunPlus 运维人员更新差错交易信息。由 3FunPlus 运维人员处理后的差错交易，会更新为已处理差错交易，并在“已处理差错”交易菜单进行展示。

            </div>
            <div className='reconcilichannel-tab-right'>
              <span>支付宝、微信、银联支持对账的支付方式</span>
              <div className='reconcilichannel-tab-right-top'>
                <img src={require('@img/demoience/zfb.png')} alt="" />
                <ul>
                  <li>支付宝APP支付</li>
                  <li>支付宝条码支付</li>
                  <li>支付宝扫码支付</li>
                </ul>
                <ul>
                  <li>支付宝手机网站支付</li>
                  <li>支付宝电脑网站支付</li>
                  <li>支付宝小程序支付</li>
                </ul>
              </div>
              <div className='reconcilichannel-tab-right-top'>
                <img src={require('@img/demoience/d.wx.png')} alt="" />
                <ul>
                  <li>支付宝APP支付</li>
                  <li>支付宝条码支付</li>
                  <li>支付宝扫码支付</li>
                </ul>
                <ul>
                  <li>支付宝手机网站支付</li>
                  <li>支付宝电脑网站支付</li>
                  <li>支付宝小程序支付</li>
                </ul>
              </div>
              <div className='reconcilichannel-tab-right-top'>
                <img src={require('@img/demoience/yl.png')} alt="" />
                <ul>
                  <li>支付宝APP支付</li>
                  <li>支付宝条码支付</li>
                  <li>支付宝扫码支付</li>
                </ul>
                <ul>
                  <li>支付宝手机网站支付</li>
                  <li>支付宝电脑网站支付</li>
                  <li>支付宝小程序支付</li>
                </ul>
              </div>
            </div>
          </Tab.Item>
        </Tab>
      </IceContainer>
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

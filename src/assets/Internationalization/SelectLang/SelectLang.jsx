import React, { Component } from 'react';
import { Select,Icon } from '@alifd/next';
import { getLocale, setLocale } from '../locale';

const Option = Select.Option;
const LANG_CONFIG = {
  'zh-CN': {
    text: '简体中文',
    icon: '🇨🇳',
  },
  'en-US': {
    text: 'English',
    icon: '🇬🇧',
  },
};

export default class SelectLang extends Component {
  changeLang = (key) => {
    setLocale(key);
  };

  render() {
    const selectedLang = getLocale();
    return (
      <Select
        onChange={this.changeLang}
        value={selectedLang}
        size="small"
        autoWidth={false}
        hasBorder={false}
        style={{ display: 'flex', alignItems: 'center' }}
        popupStyle={{ border: 'none',borderRadius: '4px' }}
      >
        {Object.keys(LANG_CONFIG).map((lang) => {
          return (
            <Option value={lang} key={lang} >
              {LANG_CONFIG[lang].text}
            </Option>
          );
        })}
      </Select>
    );
  }
}

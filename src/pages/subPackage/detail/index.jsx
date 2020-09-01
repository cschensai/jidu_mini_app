
import React, { Component } from 'react';
import Taro, { getCurrentInstance } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';
import styles from './index.scss'

@connect(({ detail }) => {
  const { detailInfo = {} } = detail;
  return {
    detailInfo,
  };
})

class Detail extends Component {
  getSongDetail = () => {
    const { songId } = getCurrentInstance()?.router?.params??{};
    Taro.showLoading({ title: '加载中...', mask: true });
    this.props.dispatch({
      type: 'detail/getSongDetail',
      payload: { songId },
      cb() {
        Taro.hideLoading();
      },
    })
  }
  componentDidMount() {
    this.getSongDetail();
  }

  render() {
    const { detailInfo } = this.props;
    const { score, lyricText, link } = detailInfo;
    const { name } = getCurrentInstance()?.router?.params??{};
    const audioName = decodeURI(name);
    const node = `<div>
        <h4 style="color: red;">${score}</h4>
        ${lyricText}
      </div>
    `;
    return (
      <View className={styles.detail}>
        <audio src={link} name={audioName} controls></audio>
        <rich-text nodes={node}></rich-text>
      </View>
    )
  }
}

export default Detail;

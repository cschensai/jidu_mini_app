import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtIndexes } from 'taro-ui'
import { connect } from 'react-redux';
import styles from './index.scss';

@connect(({ index }) => {
  const { data = [] } = index;
  return {
    data,
  };
})

export default class Index extends Component {
  getSongs = () => {
    Taro.showLoading({ title: '加载中...', mask: true });
    this.props.dispatch({
      type: 'index/getSongs',
      cb() {
        Taro.hideLoading();
      },
    })
  }
  componentDidMount () {
    this.getSongs();
  }
  handleNavigate = item => {
    Taro.navigateTo({
      url: `/pages/detail/index?songId=${item.value}&name=${encodeURI(item.name)}`,
    });
  }

  render () {
    const { data } = this.props;
    return (
      <View className={styles.index}>
        <AtIndexes list={data} onClick={this.handleNavigate} />
      </View>
    )
  }
}

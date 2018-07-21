import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Space from '../../components/space'
import AddressAndSearch from './components/address-and-search'
import HomeSwiper from './components/home-swiper'
import HomeCategory from './components/home-category'
import HomeRecommend from './components/home-recommend'
import WellSelect from './components/well-select'

import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='index'>
        <AddressAndSearch />
        <HomeSwiper />
        <HomeCategory />
        <Space />
        <HomeRecommend />
        <Space />
        <HomeRecommend />
        <WellSelect />
      </View>
    )
  }
}

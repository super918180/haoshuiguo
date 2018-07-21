import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Space from '../../components/space'
import ProductSwiper from './components/product-swiper'
import ProductHeader from './components/product-header'
import ProductNumber from './components/product-number'
import ProductAction from './components/product-action'
import './index.less'

export default class ProductDetail extends Component {
  config = {
    navigationBarTitleText: '商品详情'
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
      <View>
        <ProductSwiper />
        <ProductHeader />
        <Space />
        <ProductNumber />
        <Space />
        <ProductAction />
      </View>
    )
  }
}

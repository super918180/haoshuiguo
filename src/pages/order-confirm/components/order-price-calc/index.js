import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

export default class OrderPriceCalc extends Component {

  render() {
    const { total, coupon, freight } = this.props;
    return (
      <View className='order-price-calc'>
        <View className='price-item'>
          <View className='price-label'>商品总额</View>
          <View className='price-value'>￥{total}</View>
        </View>
        <View className='price-item'>
          <View className='price-label'>优惠券</View>
          <View className='price-value'>￥{coupon}</View>
        </View>
        <View className='price-item'>
          <View className='price-label'>配送费</View>
          <View className='price-value'>￥{freight}</View>
        </View>
      </View>
    )
  }
}

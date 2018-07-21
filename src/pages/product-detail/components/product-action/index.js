import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

export default class ProductAction extends Component {
  render() {
    return (
      <View className='product-action'>
        <View className='collect'>
          <Image className='collect-image' src={require('./images/collect.png')} />
          <Text className='collect-text'>收藏</Text>
        </View>
        <View className='split' />
        <View className='car'>
          <Image className='car-image' src={require('./images/car.png')} />
          <Text className='car-text'>收藏</Text>
        </View>

        <View className='add-in-car'>加入购物车</View>
        <View className='buy-now'>立即购买</View>
      </View>
    )
  }
}

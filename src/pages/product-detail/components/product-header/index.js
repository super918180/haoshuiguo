import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class ProductHeader extends Component {
  render() {
    const { data } = this.props
    return (
      <View className='product-header'>
        <View className='product-name'>{data.name}</View>
        <View className='product-subtitle'>{data.subtitle}</View>
        <View className='price-and-sales'>
          <View className='price'>
            <Text className='sale-price'>￥{data.price}</Text>
            <Text className='market-price'>￥{data.originPrice}</Text>
          </View>
          <View className='sales'>
            <Text className='sales-tag'>已售</Text>
            <Text className='sales-number'>{data.sealNumber}</Text>
          </View>
        </View>
      </View>
    )
  }
}

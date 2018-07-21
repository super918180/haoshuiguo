import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class ProductHeader extends Component {
  render() {
    return (
      <View className='product-header'>
        <Text className='product-name'>进口新西兰柠檬500g/4个进口新西兰柠檬</Text>
        <View className='price-and-sales'>
          <View className='price'>
            <Text className='sale-price'>￥47.90</Text>
            <Text className='market-price'>￥78.00</Text>
          </View>
          <View className='sales'>
            <Text className='sales-tag'>已售</Text>
            <Text className='sales-number'>1290</Text>
          </View>
        </View>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

export default class OrderProductItem extends Component {

  render() {
    const {data} = this.props
    return (
      <View className='order-product-item'>
        <View className='item-body'>
          <Image className='item-body-left' src={data.image} />
          <View className='item-body-right'>
            <View className='name'>{data.name}</View>
            <View className='description'>{data.description}</View>
            <View className='price-and-number'>
              <View className='price'>￥{data.price}</View>
              <View className='number'>×{data.number}</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

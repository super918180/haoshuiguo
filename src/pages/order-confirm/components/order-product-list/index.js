import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import OrderProductItem from '../../../components/order-product-item'
import './index.less'

export default class OrderListItem extends Component {

  render() {
    const { data } = this.props;
    return (
      <View className='order-product-list'>
        <View className='list-item-header'>
          <Image className='left-image' src={require('./images/pages.png')} />
          <View className='left-text'>商品清单</View>
        </View>
        {data.map((v, i) => (
          <View key={i}>
            <OrderProductItem data={v} />
          </View>
        ))}
      </View>
    )
  }
}

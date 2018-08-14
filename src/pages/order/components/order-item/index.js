import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import OrderProductItem from '../../../components/order-product-item'
import './index.less'


const orderStatus = {
  1: '待支付',
  2: '待发货',
  3: '待收货',
  4: '已完成',
  5: '已取消',
}
export default class OrderItem extends Component {

  render() {
    const { data } = this.props
    return (
      <View className='order-item'>
        <View className='item-header'>
          <View className='header-left'>
            订单号：{data.orderId}
          </View>
          <View className='header-right'>
            {orderStatus[data.status]}
          </View>
        </View>
        {data.list.map((v, i) => (
          <View key={i}>
            <OrderProductItem data={v} />
          </View>
        ))}
        <View className='item-footer'>
          <View className='item-footer-left'>
            <View className='total-tag'>合计：</View>
            <View className='total-price'>￥{data.totalPrice}</View>
          </View>
          <View className='item-footer-right'>
            {
              data.status === 1 && <View className='item-footer-right-buttons'>
                <View className='action-hollow'>取消订单</View>
                <View className='action-solid'>去支付</View>
              </View>
            }
            {
              data.status === 3 && <View className='item-footer-right-buttons'>
                <View className='action-hollow'>申请售后</View>
                <View className='action-solid'>确认收货</View>
              </View>
            }
            {
              data.status === 5 && <View className='item-footer-right-buttons'>
                <View className='action-hollow'>删除订单</View>
              </View>
            }

          </View>
        </View>
      </View>
    )
  }
}

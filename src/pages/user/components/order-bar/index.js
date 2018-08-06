import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

const orderArray = [
  {
    title: '全部订单',
    icon: require('./images/all.png')
  },
  {
    title: '待支付',
    icon: require('./images/pay.png')
  },
  {
    title: '待收货',
    icon: require('./images/car.png')
  },
  {
    title: '已完成',
    icon: require('./images/down.png')
  },
  {
    title: '售后',
    icon: require('./images/service.png')
  },
]

export default class OrderBar extends Component {
  toOrderList(i) {
    Taro.navigateTo({
      url: `/pages/order/index?index=${i}`
    })
  }

  render() {
    return (
      <View className='order-bar'>
        {orderArray.map((v, i) => (
          <View key={i} className='order-bar-item' onClick={this.toOrderList.bind(this, i)}>
            <Image className='order-bar-image' src={v.icon} />
            <Text className='order-bar-text'>{v.title}</Text>
          </View>
        ))}
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default class OrderAction extends Component {

  render() {
    const { total } = this.props;
    return (
      <View className='order-action'>
        <View className='action-left'>
          <View className='action-left-label'>实付款:</View>
          <View className='action-left-value'>￥{total}</View>
        </View>
        <View className='action-right'>
          提交订单
        </View>
      </View>
    )
  }
}

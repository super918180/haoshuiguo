import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

export default class OrderListItem extends Component {

  render() {
    const { name, image } = this.props;
    return (
      <View className='order-list-item'>
        <View className='list-item-left'>
          <Image className='left-image' src={image} />
          <View className='left-text'>{name}</View>
        </View>
        <View className='list-item-right'>
          <Image className='list-more' src={require('./images/right.png')} />
        </View>
      </View>
    )
  }
}

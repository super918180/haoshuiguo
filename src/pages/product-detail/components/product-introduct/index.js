import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

export default class ProductIntroduce extends Component {
  render() {
    const { data } = this.props
    return (
      <View className='product-introduce'>
        <View className='introduce-header'>
          商品详情
        </View>
        {data.map((v, i) => (
          <Image className='introduce-image' key={i} src={v} />
        ))}
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import ProductItem from '../../../components/product-item/index'
import './index.less'

export default class WellSelect extends Component {
  render() {
    const { data } = this.props
    return (
      <View className='well-select'>
        <View className='header'>
          <Image className='hot-image' src={require('../../../components/product-item/images/hot.png')} />
          <Text className='hot-text'>热卖商品</Text>
        </View>
        <ProductItem data={data} />
      </View>
    )
  }
}

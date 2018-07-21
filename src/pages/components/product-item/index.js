import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

export default class ProductItem extends Component {
  render() {
    const {data} = this.props
    return (
      <View className='product-item'>
        {data.map(v => (
          <View className='item'>
            <Image className='item-image' src={v.image} />
            <View className='item-des'>
              <Text className='item-name'>{v.name}</Text>
              <Text className='item-subtitle'>{v.subtitle}</Text>
              <Text className='item-description'>{v.description}</Text>
              <View className='item-price-and-car'>
                <Text className='item-price'>{v.price}</Text>
                <Image className='item-car' src={require('../../../asset/images/shopping-car.png')} />
              </View>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

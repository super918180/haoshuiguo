import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

export default class HomeCategory extends Component {
  render() {
    const { data } = this.props
    return (
      <View className='home-category'>
        {data.map((v, i) => (
          <View key={i} className='item'>
            <Image className='item-image' src={v.image} />
            <Text className='item-text'>{v.text}</Text>
          </View>
        ))}
      </View>
    )
  }
}

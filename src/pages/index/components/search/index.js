import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'

export default class Search extends Component {
  render() {
    return (
      <View className='search'>
        <Image className='search-image' src={require('./images/search.png')} />
        <Text className='search-text'>请输入商品名称</Text>
      </View>
    )
  }
}

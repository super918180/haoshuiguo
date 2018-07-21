import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'

export default class AddressSelect extends Component {
  render() {
    return (
      <View className='address-select'>
        <Text className='text'>贵州市观山湖区</Text>
        <Image className='arrow-down' src={require('./images/arrow-down.png')}></Image>
      </View>
    )
  }
}

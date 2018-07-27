import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'

export default class AddressSelect extends Component {
  toDestionation() {
    Taro.navigateTo({
      url: '/pages/destination/index'
    })
  }

  render() {
    const { data } = this.props;
    return (
      <View className='address-select' onClick={this.toDestionation}>
        <Text className='text'>{data||'掌众科技-南京'}</Text>
        <Image className='arrow-down' src={require('./images/arrow-down.png')} />
      </View>
    )
  }
}

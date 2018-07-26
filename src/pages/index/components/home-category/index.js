import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Tools from '../../../../utils/tools'
import './index.less'

export default class HomeCategory extends Component {
  clickEvent(text){
    Tools.goToProductList(text)
  }
  
  render() {
    const { data } = this.props
    return (
      <View className='home-category'>
        {data.map((v, i) => (
          <View key={i} className='item' onClick={this.clickEvent.bind(this, v.text)}>
            <Image className='item-image' src={v.image} />
            <Text className='item-text'>{v.text}</Text>
          </View>
        ))}
      </View>
    )
  }
}

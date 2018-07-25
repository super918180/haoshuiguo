import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import './index.less'

export default class HomeRecommend extends Component {
  render() {
    const { title, data } = this.props
    return (
      <View className='home-recommend'>
        <View className='header'>
          <View className='header-title'>{title}</View>
          <View className='header-more'>
            <View className='header-more-text'>查看更多</View>
            <Image className='header-more-image' src={require('./images/arrow-right.png')} />
          </View>
        </View>
        <View className='content'>
          <ScrollView className='scroll-view_H' scroll-x>
            <View className='scroll-view-container'>
              {data.map((v, i) => (
                <View key={i} className='scroll-item'>
                  <Image className='item-image' src={v.image} />
                  <Text className='item-title'>{v.name}</Text>
                  <View className='item-price-and-car'>
                    <Text className='item-price'>{v.price}</Text>
                    <Image className='item-car' src={require('../../../../asset/images/shopping-car.png')} />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

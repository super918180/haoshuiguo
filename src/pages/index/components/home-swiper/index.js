import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'

export default class HomeSwiper extends Component {
  render() {
    const {data} = this.props
    return (
      <View className='home-swiper'>
        <Swiper
          className='activity'
          circular
          indicatorDots='true'
          indicatorActiveColor='#009a44'
          autoplay='true'
          interval='5000'
          duration='500'
        >
          {data.map((item, index) => {
            return (<SwiperItem className='swiper-item' key={index}>
              <Image src={item} className='swiper-image' />
            </SwiperItem>)
          })}
        </Swiper>
      </View>
    )
  }
}

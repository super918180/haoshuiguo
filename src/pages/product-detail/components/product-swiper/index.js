import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'

export default class ProductSwiper extends Component {
  render() {
    return (
      <View className='product-swiper'>
        <Swiper
          className='activity'
          circular
          indicatorDots='true'
          indicatorActiveColor='#009a44'
          autoplay='true'
          interval='5000'
          duration='500'
        >
          {this.props.data.map((item, index) => {
            return (<SwiperItem key={index}>
              <Image src={item} className='swiper-image' />
            </SwiperItem>)
          })}
        </Swiper>
      </View>
    )
  }
}

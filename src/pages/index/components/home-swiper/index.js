import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'

export default class HomeSwiper extends Component {
  render() {
    const imgUrls = [
      'http://5375011.s21i.faiusr.com/2/ABUIABACGAAgvey8sQUo0JuxgAcw7gU43gI.jpg',
      'http://5375011.s21i.faiusr.com/2/ABUIABACGAAg4uy8sQUowMbs-gUw7gU43gI.jpg',
      'http://5375011.s21i.faiusr.com/2/ABUIABACGAAg-afisAUouOrS2wIwlgY4kAM.jpg',
      'http://5375011.s21i.faiusr.com/2/ABUIABACGAAgpdi7sQUogK295AEwlgY43gI.jpg'
    ]
    return (
      <View className='home-swiper'>
        <Swiper
          className='activity'
          circular
          indicatorDots='true'
          autoplay='true'
          interval='5000'
          duration='500'
        >
          {imgUrls.map((item, index) => {
            return (<SwiperItem key={index}>
              <Image src={item} className='swiper-image' />
            </SwiperItem>)
          })}
        </Swiper>
      </View>
    )
  }
}

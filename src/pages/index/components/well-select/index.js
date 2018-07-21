import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

export default class WellSelect extends Component {
  render() {
    const data = [
      {
        productId: '001',
        name: '四川安岳柠檬',
        image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H315-50.jpg',
        subtitle: '口感香甜，甜度适中',
        description: '1份约1200g，合5.5元/斤',
        sealNumber: '245',
        price: '35.8'
      },
      {
        productId: '001',
        name: '四川安岳柠檬',
        image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H315-50.jpg',
        subtitle: '口感香甜，甜度适中',
        description: '1份约1200g，合5.5元/斤',
        sealNumber: '245',
        price: '35.8'
      },
      {
        productId: '001',
        name: '四川安岳柠檬',
        image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H315-50.jpg',
        subtitle: '口感香甜，甜度适中',
        description: '1份约1200g，合5.5元/斤',
        sealNumber: '245',
        price: '35.8'
      },
      {
        productId: '001',
        name: '四川安岳柠檬',
        image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H315-50.jpg',
        subtitle: '口感香甜，甜度适中',
        description: '1份约1200g，合5.5元/斤',
        sealNumber: '245',
        price: '35.8'
      },
      {
        productId: '001',
        name: '四川安岳柠檬',
        image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H315-50.jpg',
        subtitle: '口感香甜，甜度适中',
        description: '1份约1200g，合5.5元/斤',
        sealNumber: '245',
        price: '35.8'
      },
      {
        productId: '001',
        name: '四川安岳柠檬',
        image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H315-50.jpg',
        subtitle: '口感香甜，甜度适中',
        description: '1份约1200g，合5.5元/斤',
        sealNumber: '245',
        price: '35.8'
      }
    ]

    return (
      <View className='well-select'>
        <View className='header'>
          <Image className='hot-image' src={require('./images/hot.png')}/>
          <Text className='hot-text'>热卖商品</Text>
        </View>
        <View className='content'>
          {data.map(v => (
            <View className='item'>
              <Image className='item-image' src={v.image}/>
              <View className='item-des'>
                <Text className='item-name'>{v.name}</Text>
                <Text className='item-subtitle'>{v.subtitle}</Text>
                <Text className='item-description'>{v.description}</Text>
                <View className='item-price-and-car'>
                  <Text className='item-price'>{v.price}</Text>
                  <Image className='item-car' src={require('../../../../asset/images/shopping-car.png')}/>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

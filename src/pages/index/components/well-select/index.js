import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import ProductItem from '../../../components/product-item'
import './index.less'

export default class WellSelect extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      data: [
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
    }
  }

  render() {
    const {data} = this.state
    return (
      <View className='well-select'>
        <View className='header'>
          <Image className='hot-image' src={require('../../../components/product-item/images/hot.png')} />
          <Text className='hot-text'>热卖商品</Text>
        </View>
        <ProductItem data={data} />
      </View>
    )
  }
}

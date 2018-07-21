import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

export default class HomeCategory extends Component {
  render() {
    const data = [
      {
        image: require('./images/caomei.png'),
        text: '草莓'
      },
      {
        image: require('./images/chengzi.png'),
        text: '橙子'
      },
      {
        image: require('./images/huolongguo.png'),
        text: '火龙果'
      },
      {
        image: require('./images/mihoutao.png'),
        text: '猕猴桃'
      }, {
        image: require('./images/ningmeng.png'),
        text: '柠檬'
      },
      {
        image: require('./images/putao.png'),
        text: '葡萄'
      },
      {
        image: require('./images/taozi.png'),
        text: '桃子'
      },
      {
        image: require('./images/tiangua.png'),
        text: '甜瓜'
      },
      {
        image: require('./images/xiangjiao.png'),
        text: '香蕉'
      },
      {
        image: require('./images/yingtao.png'),
        text: '樱桃'
      }
    ]
    return (
      <View className='home-category'>
        {data.map((v,i) => (
          <View key={i} className='item'>
            <Image className='item-image' src={v.image}></Image>
            <Text className='item-text'>{v.text}</Text>
          </View>
        ))}
      </View>
    )
  }
}

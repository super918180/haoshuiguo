import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.less'

export default class Category extends Component {
  config = {
    navigationBarTitleText: '分类'
  }

  constructor() {
    super(...arguments)
    this.state = {
      selectIndex: '001',
      data: {
        '001': {
          name: '水果',
          data: [
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '橙子',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
          ]
        },
        '002': {
          name: '生鲜',
          data: [
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '海带',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
            {
              code: '001000',
              name: '全部',
              image: 'https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg'
            },
          ]
        }
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  changeSelect = (value) => {
    this.setState({
      selectIndex: value
    })
  }

  render() {
    const {selectIndex, data} = this.state
    return (
      <View className='category'>
        <View className='category-left'>
          {Object.keys(data).map(v => (
            <View
              key={v}
              className={'left-item' + (selectIndex === v ? ' left-item-active' : '')}
              onClick={this.changeSelect.bind(this,v)}
            >
              {data[v].name}
            </View>
          ))}
        </View>
        <View className='category-right'>
          {data[selectIndex].data.map(v => (
            <View className='right-item'>
              <Image className='item-image' src={v.image} />
              <Text className='item-name'>{v.name}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

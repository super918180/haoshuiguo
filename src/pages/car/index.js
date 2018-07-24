import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import './index.less'

class Index extends Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className="clock-container">
          <View className="clock-text">全场满30元包邮</View>
        </View>
      </View>
    )
  }
}

export default Index

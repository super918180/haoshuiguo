import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import './index.less'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
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
        <View>Hello, World</View>
      </View>
    )
  }
}

export default Index

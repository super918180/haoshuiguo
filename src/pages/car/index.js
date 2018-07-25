import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Checkbox } from '@tarojs/components'

import './index.less'

class Index extends Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index vertical-center'>
        <View className="clock-container vertical-center">
          <Text className="clock-text">全场满30元包邮</Text>
        </View>
        <View className="cart-tip-container vertical-center">
          <View className="cart-tip vertical-center">
            <Text className="cart-tip-text">全场满￥30.00包运费，还差￥10.00包邮</Text>
          </View>
        </View>
        <View className='goods-container'>
          <View className="cart-item">
            <Checkbox checked={true} className='goods-choose'/>
            <Image className='goods-image' src="https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg">
            </Image>
          </View>
          <View>
          <View className='goods-content'>
             <Text className='goods-name'>进口牛油果500g/4g</Text>
             
             <View className='goods-bottom'>
             <Text className='goods-spec'>规格：500g/4个</Text>
             <Text className='goods-price'>￥20.00</Text>
             </View>
          
          </View>
          </View>
     
        </View>

      </View>
    )
  }
}

export default Index

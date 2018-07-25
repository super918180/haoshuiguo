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
        <View className="clock-container">
          <Text className="clock-text">全场满30元包邮</Text>
        </View>
        <View className="cart-tip-container vertical-center">
          <View className="cart-tip vertical-center">
            <Text className="cart-tip-text">全场满￥30.00包运费，还差￥10.00包邮</Text>
          </View>
        </View>
        <View className='goods-container'>
          <View className='goods-choose'>
            <Checkbox checked={true} />
          </View>
          <View className="cart-item">
            <Image className='goods-image' src="https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg">
            </Image>
          </View>
          <View className='goods-content'>
            <Text className='goods-name'>进口牛油果500g/4个</Text>
            <Text className='goods-spec'>规格：500g/4个</Text>
            <View className='goods-bottom'>
              <Text className='goods-price'>￥20.00</Text>
              <Text className='goods-count'>x1</Text>
            </View>
          </View>
        </View>
        <View className='goods-container'>
          <View className='goods-choose'>
            <Checkbox checked={true} />
          </View>
          <View className="cart-item">
            <Image className='goods-image' src="https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H459.jpg">
            </Image>
          </View>
          <View className='goods-content'>
            <Text className='goods-name'>西红柿西红柿西红柿西红柿西红柿西红柿西红柿西红柿西红柿西红柿西红柿西红柿西红柿</Text>
            <Text className='goods-spec'>规格：2.0Kg/1箱子</Text>
            <View className='goods-bottom'>
              <Text className='goods-price'>￥25.00</Text>
              <Text className='goods-count'>x10000</Text>
            </View>
          </View>
        </View>
        <View className='botton-bar'>        
          <View className='goods-choose'>
            <Checkbox checked={true} />
            <Text className='choose-text'>全选</Text>
          </View>
          <View className='buy-middle'>
            <Text className='total-price'>合计:￥25.00</Text>
            <Text className='delivery-price'>配送费:￥5.00</Text>
          </View>
          <View className='buy-botton'>
            <Text className='buy-text'>去结算</Text>
          </View>
        </View>

      </View>
    )
  }
}

export default Index

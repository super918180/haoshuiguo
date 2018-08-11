import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'

export default class OrderAddressSelect extends Component {
  toAddress() {
    Taro.navigateTo({
      url: '/pages/address/index'
    })
  }

  render() {
    const { data } = this.props;
    return (
      <View className='order-address-select'>
        <View className='address-item'>
          <View className='address-left' onClick={this.toAddress}>
            <Image className='address-icon' src={require('./images/address-icon.png')} />
            <View className='address-default'>
              {
                data ?
                  <View>
                    <View className='address-top'>收货人：{data.name} {data.phone}</View>
                    <View className='address-bottom'>收货地址：{data.detail}</View>
                  </View>
                  :
                  <View className='address-top'>新增收货地址</View>
              }

            </View>
          </View>
          <Image className='address-right' src={require('./images/right.png')} />
        </View>
      </View>
    )
  }
}

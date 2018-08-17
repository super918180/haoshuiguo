import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import UICheckbox from '../../components/ui-checkbox'
import './index.less'


const mapStateToProps = ({ couponList }) => ({
  ...couponList,
})

const mapActionsToProps = dispatch => bindActionCreators({

}, dispatch)


@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class Coupon extends Component {
  config = {
    navigationBarTitleText: '优惠券选择'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return <View className='index'>
      <View className='coupon-container'>
        <View className='coupon-left'>
          <Text className='left-text'>￥100</Text>
        </View>
        <View className='coupon-right'>
          <Text className='right-text'>2017.09.06-2018.10.15</Text>
        </View>
      </View>
      <View className='coupon-container'>
        <View className='coupon-left'>
          <Text className='left-text'>￥100</Text>
        </View>
        <View className='coupon-right'>
          <Text className='right-text'>2017.09.06-2018.10.15</Text>
        </View>
      </View>
      <View className='coupon-container'>
        <View className='coupon-left'>
          <Text className='left-text'>￥100</Text>
        </View>
        <View className='coupon-right'>
          <Text className='right-text'>2017.09.06-2018.10.15</Text>
        </View>
      </View>      
      <View className='botton-bar'>
        <View className='botton-left'>
          <UICheckbox isSelect={true} />
          <Text className='botton-left-text'>不使用优惠券</Text>
        </View>
        <View className='botton-confirm'>
          <Text className='botton-confirm-text'>确定</Text>
        </View>
      </View>
    </View>
  }
}

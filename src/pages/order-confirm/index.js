import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View, Image } from '@tarojs/components'
import OrderAddressSelect from './components/order-address-select'
import { orderConfirmInit } from './redux';

import './index.less'

const mapStateToProps = ({ orderConfirm }) => ({
  ...orderConfirm,
})
const mapActionsToProps = dispatch => bindActionCreators({
  orderConfirmInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class OrderConfirm extends Component {
  config = {
    navigationBarTitleText: '我的地址'
  }

  constructor() {
    super(...arguments)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.orderConfirmInit()
  }

  onPullDownRefresh() {
    this.props.orderConfirmInit(true, () => {
      Taro.stopPullDownRefresh()
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const { init, address } = this.props
    return (
      <View>
        {
          init &&
          <View className='order-confirm'>
            <OrderAddressSelect data={address} />
          </View>
        }
      </View>
    )
  }
}

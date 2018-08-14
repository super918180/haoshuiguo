import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View } from '@tarojs/components'
import OrderAddressSelect from './components/order-address-select'
import OrderListItem from './components/order-list-item'
import OrderProductList from './components/order-product-list'
import OrderPriceCalc from './components/order-price-calc'
import OrderAction from './components/order-action'
import { orderConfirmInit } from './redux';

import './index.less'

const mapStateToProps = ({ orderConfirm, shoppingCartList }) => ({
  ...orderConfirm,
  list: shoppingCartList.list.filter(v => v.checked == true)
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
    navigationBarTitleText: '确认订单'
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
    const { init, address, list } = this.props
    const selectList = list.filter(v => v.checked == true)
    return (
      <View>
        {
          init &&
          <View className='order-confirm'>
            <OrderAddressSelect data={address} />
            <OrderListItem name='优惠券' image={require('./images/coupon.png')} />
            <OrderProductList data={selectList} />
            <OrderPriceCalc total={this.getTotalPrice(selectList)} coupon={0.00} freight={0.00} />
            <OrderAction total={this.getTotalPrice(selectList)} />
          </View>
        }
      </View>
    )
  }

  getTotalPrice(data) {
    let price = 0
    data.map(item => {
      price += item.price * parseInt(item.number, 10)
    })
    return price.toFixed(2)
  }
}

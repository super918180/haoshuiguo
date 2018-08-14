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
    const { init, address } = this.props
    return (
      <View>
        {
          init &&
          <View className='order-confirm'>
            <OrderAddressSelect data={address} />
            <OrderListItem name='优惠券' image={require('./images/coupon.png')} />
            <OrderProductList data={[{
              "id": "001",
              "name": "四川安岳柠檬",
              "image": "https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H315-50.jpg",
              "subtitle": "口感香甜，甜度适中",
              "description": "1份约1200g，合5.5元/斤",
              "sealNumber": "245",
              "price": "35.8",
              "number": 5
            }, {
              "id": "001",
              "name": "四川安岳柠檬",
              "image": "https://www.fruitzj.com/uploads/allimg/180604/4-1P6041H315-50.jpg",
              "subtitle": "口感香甜，甜度适中",
              "description": "1份约1200g，合5.5元/斤",
              "sealNumber": "245",
              "price": "35.8",
              "number": 5
            }]}
            />
            <OrderPriceCalc total={20.00} coupon={5.00} freight={5.00} />
            <OrderAction total={20.00} />
          </View>
        }
      </View>
    )
  }
}

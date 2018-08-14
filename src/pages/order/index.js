import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View } from '@tarojs/components'
import Tabs from '../../components/tabs/index'
import Space from '../../components/space/index'
import { orderInit } from './redux';
import OrderItem from './components/order-item/index';

import './index.less'


const orderTabs = [
  {
    title: '全部订单',
  },
  {
    title: '待支付',
  },
  {
    title: '待收货',
  },
  {
    title: '已完成',
  },
  {
    title: '售后',
  }
]

const mapStateToProps = ({ order }) => ({
  ...order,
})
const mapActionsToProps = dispatch => bindActionCreators({
  orderInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class Order extends Component {
  config = {
    navigationBarTitleText: '我的订单'
  }

  constructor() {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.orderInit()
  }

  onPullDownRefresh() {
    this.props.orderInit(true, () => {
      Taro.stopPullDownRefresh()
    })
  }

  onReachBottom() {
    this.props.orderInit()
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const { init, list } = this.props
    const type = this.$router.params.index;
    return (
      <View>
        {
          init &&
          <View className='order'>
            <View className='list-header'>
              <Tabs defaultValue={type} data={orderTabs} />
            </View>
            <View className='list-content'>
              <Space />
              {list.map((v, i) => (<View key={i}>
                  <OrderItem data={v} />
                  <Space />
                </View>
              ))}
            </View>
          </View>
        }
      </View>
    )
  }
}

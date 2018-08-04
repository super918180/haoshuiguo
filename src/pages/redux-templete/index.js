import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View, Image } from '@tarojs/components'
import { addressInit } from './redux';

import './index.less'

const mapStateToProps = ({ address }) => ({
  ...address,
})
const mapActionsToProps = dispatch => bindActionCreators({
  addressInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class Address extends Component {
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
    this.props.addressInit()
  }

  onPullDownRefresh() {
    this.props.addressInit(true, () => {
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
    const { init } = this.props
    return (
      <View >
        {
          init &&
          <View className='address'>

          </View>
        }
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View } from '@tarojs/components'
import { destinationInit, selectDestination } from './redux';

import './index.less'

const mapStateToProps = ({ destination }) => ({
  ...destination,
})
const mapActionsToProps = dispatch => bindActionCreators({
  destinationInit, selectDestination
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class Destination extends Component {
  config = {
    navigationBarTitleText: '配送点'
  }

  constructor() {
    super(...arguments)
    this.state = {}
  }

  select(v) {
    this.props.selectDestination(v)
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.destinationInit()
  }

  onPullDownRefresh() {
    this.props.destinationInit(true, () => {
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
    const { init, data } = this.props
    return (
      <View>
        {
          init &&
          <View className='destination'>
            <View className='header'>已开通地区</View>
            <View className='content'>
              {data.map((v, i) => (
                <View key={i} className='item' onClick={this.select.bind(this, v)}>{v}</View>
              ))}
            </View>
          </View>
        }
      </View>
    )
  }
}

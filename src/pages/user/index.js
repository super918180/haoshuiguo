import Taro, { Component } from '@tarojs/taro'
import { bindActionCreators } from 'redux'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { userInit } from './redux'
import './index.less'

const mapStateToProps = ({ user }) => ({
  ...user
})
const mapActionsToProps = dispatch => bindActionCreators({
  userInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)
export default class Index extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  componentDidMount() {
    this.props.userInit()
  }

  onPullDownRefresh() {
    this.props.userInit(true, () => {
      Taro.stopPullDownRefresh()
    })
  }

  render() {
    const { init } = this.props
    return (
      <View>
        {
          init &&
          <View className='user'>
            <View className='header'>
              <Image className='header-bg-image' src={require('./images/bg.png')} />
            </View>
          </View>
        }
      </View>
    )
  }
}

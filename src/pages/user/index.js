import Taro, { Component } from '@tarojs/taro'
import { bindActionCreators } from 'redux'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import  Space  from '../../components/space/index'
import { userInit } from './redux'
import OrderBar from './components/order-bar'
import ListItem from './components/list-item'
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
              <View className='user-info'>
                <Image className='avatar' src='http://i1.bvimg.com/655263/a59121a555453775.pngg' />
                <Text className='name'>宋小雨</Text>
              </View>
            </View>
            <Space />
            <OrderBar />
            <Space />
            <ListItem />
          </View>
        }
      </View>
    )
  }
}

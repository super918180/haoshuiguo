import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View, Image, Input, Text } from '@tarojs/components'
import { searchInit } from './redux';

import './index.less'

const mapStateToProps = ({ search }) => ({
  ...search,
})
const mapActionsToProps = dispatch => bindActionCreators({
  searchInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class Cearch extends Component {
  config = {
    navigationBarTitleText: '搜索'
  }

  constructor() {
    super(...arguments)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.searchInit()
  }

  onPullDownRefresh() {
    this.props.searchInit(true, () => {
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
      <View className='search'>
        {
          init &&
          <View>
            <View className='search-input'>
              <View className='search-input-left'>
                <Image className='search-image' src={require('./images/search.png')} />
                <Input className='search-text' placeholder='请输入商品名称' />
              </View>
              <View className='search-input-right'>
                <Text className='search-button'>搜索</Text>
              </View>
            </View>
            <View className='search-hot-key'>
              <View className='hot-key-header'>
                <Image className='hot-image' src={require('./images/hot.png')} />
                <Text className='hot-text'>热门搜索</Text>
              </View>
              <View className='hot-list'>
                {data.map((v, i) => (
                  <View key={i} className='hot-item'>{v}</View>
                ))}
              </View>
              <View className='search-history'>
                <View className='history-header'>
                  <Image className='history-image' src={require('./images/history.png')} />
                  <Text className='history-text'>搜索历史</Text>
                </View>
                <View className='history-list'>
                  {data.map((v, i) => (
                    <View key={i} className='history-item'>{v}</View>
                  ))}
                </View>
              </View>
            </View>
            <View className='clear-history'>
              <Image className='clear-image' src={require('./images/clear.png')} />
              <Text className='clear-text'>清空搜索历史</Text>
            </View>
          </View>
        }
      </View>
    )
  }
}

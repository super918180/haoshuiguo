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
    this.state = {
      inputValue: '',
      searchHistory: []
    }
  }

  getHistoryData() {
    Taro.getStorage({ key: 'searchHistory' })
      .then(res => this.setState({
        searchHistory: JSON.parse(res.data)
      }))
      .catch(() => this.setState({
        searchHistory: []
      }))
  }

  search() {
    if (this.state.inputValue) {
      Taro.getStorage({ key: 'searchHistory' })
        .then(res => this.saveHistory(res.data))
        .catch(() => this.saveHistory())
    } else {
      Taro.showToast({ title: '请输入商品名称', icon: 'none' })
    }

  }

  saveHistory(data = '[]') {
    let currentArr = JSON.parse(data)
    currentArr.push(this.state.inputValue)
    Taro.setStorage({
      key: 'searchHistory',
      data: JSON.stringify(currentArr)
    }).then(() => this.getHistoryData())
  }

  clearHistory() {
    Taro.removeStorage({ key: 'searchHistory' })
      .then(() => {
        Taro.showToast({ title: '搜索历史已经被清空', icon: 'none' })
        this.getHistoryData()
      })
  }

  inputChange(e) {
    this.setState({
      inputValue: e.detail.value
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.searchInit()
    // 获取storage中的history数据
    this.getHistoryData()
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
    const { inputValue, searchHistory } = this.state
    const { init, hotData } = this.props
    return (
      <View className='search'>
        {
          init &&
          <View>
            <View className='search-input'>
              <View className='search-input-left'>
                <Image className='search-image' src={require('./images/search.png')} />
                <Input
                  className='search-text'
                  placeholder='请输入商品名称'
                  value={inputValue}
                  onInput={this.inputChange}
                />
              </View>
              <View className='search-input-right'>
                <Text className='search-button' onClick={this.search}>搜索</Text>
              </View>
            </View>
            <View className='search-hot-key'>
              <View className='hot-key-header'>
                <Image className='hot-image' src={require('./images/hot.png')} />
                <Text className='hot-text'>热门搜索</Text>
              </View>
              <View className='hot-list'>
                {hotData.map((v, i) => (
                  <View key={i} className='hot-item'>{v}</View>
                ))}
              </View>
              <View className='search-history'>
                <View className='history-header'>
                  <Image className='history-image' src={require('./images/history.png')} />
                  <Text className='history-text'>搜索历史</Text>
                </View>
                <View className='history-list'>
                  {searchHistory.map((v, i) => (
                    <View key={i} className='history-item'>{v}</View>
                  ))}
                </View>
              </View>
            </View>
            <View className='clear-history'>
              <Image className='clear-image' src={require('./images/clear.png')} />
              <Text className='clear-text' onClick={this.clearHistory}>清空搜索历史</Text>
            </View>
          </View>
        }
      </View>
    )
  }
}

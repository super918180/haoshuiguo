import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View, Image, Text } from '@tarojs/components'
import { categoryInit } from './redux';

import './index.less'
import Tools from '../../utils/tools';

const mapStateToProps = ({ category }) => ({
  ...category,
})
const mapActionsToProps = dispatch => bindActionCreators({
  categoryInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class Category extends Component {
  config = {
    navigationBarTitleText: '分类'
  }

  constructor() {
    super(...arguments)
    this.state = {
      selectIndex: '001',
    }
  }

  toProductList(name) {
    Tools.goToProductList(name)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.categoryInit()
  }

  onPullDownRefresh() {
    this.props.categoryInit(true, () => {
      Taro.stopPullDownRefresh()
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  changeSelect = (value) => {
    this.setState({
      selectIndex: value
    })
  }

  render() {
    const { selectIndex } = this.state
    const { init, data } = this.props
    return (
      <View>
        {
          init &&
          <View className='category'>
            <View className='category-left'>
              {Object.keys(data).map((v, i) => (
                <View
                  key={i}
                  className={'left-item' + (selectIndex === v ? ' left-item-active' : '')}
                  onClick={this.changeSelect.bind(this, v)}
                >
                  {data[v].name}
                </View>
              ))}
            </View>
            <View className='category-right'>
              {data[selectIndex].data.map((v, i) => (
                <View key={i} className='right-item' onClick={this.toProductList.bind(this, v.name)}>
                  <Image className='item-image' src={v.image} />
                  <Text className='item-name'>{v.name}</Text>
                </View>
              ))}
            </View>
          </View>
        }
      </View>

    )
  }
}

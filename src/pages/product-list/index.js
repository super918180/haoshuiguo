import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import cls from 'classnames'
import { View } from '@tarojs/components'
import { productListInit } from './redux';
import ProductItem from '../components/product-item';


import './index.less'

const mapStateToProps = ({ productList }) => ({
  ...productList,
})
const mapActionsToProps = dispatch => bindActionCreators({
  productListInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class ProductList extends Component {
  config = {
    navigationBarTitleText: '商品列表'
  }

  constructor() {
    super(...arguments)
    this.state = {
      selectIndex: 0,
      isAscend: true
    }
  }

  changeSelectIndex(index) {
    if (index === 2) {
      this.setState({
        selectIndex: index,
        isAscend: !this.state.isAscend
      })
    } else {
      this.setState({
        selectIndex: index
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    console.log(this.$router.params.key);
    this.props.productListInit()
  }

  onPullDownRefresh() {
    this.props.productListInit(true, () => {
      Taro.stopPullDownRefresh()
    })
  }

  onReachBottom() {
    this.props.productListInit()
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const { init, list } = this.props
    const { selectIndex, isAscend } = this.state
    return (
      <View>
        {
          init &&
          <View className='product-list'>
            <View className='list-header'>
              <View
                className={cls('header-item', { active: selectIndex === 0 })}
                onClick={this.changeSelectIndex.bind(this, 0)}
              >
                <View className='item-text'>默认</View>
              </View>
              <View className='split' />
              <View
                className={cls('header-item', { active: selectIndex === 1 })}
                onClick={this.changeSelectIndex.bind(this, 1)}
              >
                <View className='item-text'>销量</View>
              </View>
              <View className='split' />
              <View
                className={cls('header-item', { active: selectIndex === 2 })}
                onClick={this.changeSelectIndex.bind(this, 2)}
              >
                <View className='item-text item-text-price'>
                  <View>价格</View>
                  <View className='triangle'>
                    <View
                      className={cls('triangle-up', { ['active-up']: selectIndex === 2 && isAscend })}
                    />
                    <View className={cls('triangle-down', { ['active-down']: selectIndex === 2 && !isAscend })} />
                  </View>
                </View>
              </View>
            </View>
            <View className='list-content'>
              <ProductItem data={list} />
            </View>
          </View>
        }
      </View>
    )
  }
}

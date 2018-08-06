import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { shoppingCartListInit, changeGoodsValue } from './redux'
import Stepper from '../../components/stepper'
import UICheckbox from '../../components/ui-checkbox'
import Tools from '../../utils/tools';
import Empty from './components/empty'
import './index.less'


const mapStateToProps = ({ shoppingCartList }) => ({
  ...shoppingCartList,
})

const mapActionsToProps = dispatch => bindActionCreators({
  shoppingCartListInit,
  changeGoodsValue
}, dispatch)


@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class Index extends Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.shoppingCartListInit()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { init, list, invalid } = this.props
    return (
      init && <View className='index vertical-center'>
        {
          list.length == 0 ? <Empty /> :
            <View>
              <View className="clock-container">
                <Image className="clock-image" src={require('./img/clock.png')} />
                <Text className="clock-text">全场满30元包邮</Text>
              </View>
              <View className="cart-tip-container vertical-center">
                <View className="cart-tip vertical-center">
                  <Text className="cart-tip-text">全场满￥30.00包运费，还差￥10.00包邮</Text>
                </View>
              </View>
              <ScrollView style='padding-bottom:55px'>
                {
                  init && list.length > 0 && list.map(v => {
                    return <View className='goods-container' onClick={this._toProductList.bind(this, v.shoppingCartId)}>
                      <View className='goods-choose'>
                        <UICheckbox isSelect={true} />
                      </View>
                      <View className="cart-item">
                        <Image className='goods-image' src={v.image}>
                        </Image>
                      </View>
                      <View className='goods-content'>
                        <Text className='goods-name'>{v.name}}</Text>
                        <Text className='goods-spec'>{v.specText}</Text>
                        <View className='goods-bottom'>
                          <Text className='goods-price'>￥{v.price}</Text>
                          <Stepper onChange={this._changeGoodsValue} />
                        </View>
                      </View>
                    </View>
                  })
                }
                {

                  init && invalid.length > 0 && invalid.map(v => {
                    return <View className='goods-container' style='opacity:0.5;'>
                      <View className='goods-choose'>
                        {/* <UICheckbox isSelect={true} /> */}
                      </View>
                      <View className="cart-item">
                        <Image className='goods-image' src={v.image}>
                        </Image>
                        <View className='goods-mask'>
                          <Text className='mask-text'>已卖光</Text>
                        </View>
                      </View>
                      <View className='goods-content'>
                        <Text className='goods-name'>{v.name}}</Text>
                        <Text className='goods-spec'>{v.specText}</Text>
                        <View className='goods-bottom'>
                          <Text className='goods-price'>￥{v.price}</Text>
                          <Image className='goods-delete' src={require('./img/delete.png')} ></Image>
                        </View>
                      </View>
                    </View>
                  })
                }
              </ScrollView>

              <View className='botton-bar'>
                <View className='goods-choose'>
                  <UICheckbox isSelect={true} />
                  <Text className='choose-text'>全选</Text>
                </View>
                <View className='buy-middle'>
                  <Text className='total-price'>合计:￥{this._totalPrice()}</Text>
                  <Text className='delivery-price'>配送费:￥5.00</Text>
                </View>
                <View className='buy-botton'>
                  <Text className='buy-text'>去结算</Text>
                </View>
              </View>
            </View>
        }
      </View>
    )
  }


  _changeGoodsValue(value) {
    this.props.changeGoodsValue(3, value)
  }


  //商品总价
  _totalPrice() {
    const { list } = this.props
    let price = 0
    list.map(item => {
      price += item.price
    })
    return price.toFixed(2)
  }


  //跳转到商品详情页面
  _toProductList(id) {
    Tools.goToProductDetail(id)
  }
}

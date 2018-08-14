import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { bindActionCreators } from 'redux'
import { connect } from '@tarojs/redux'
import './index.less'
import { productDetailBuy, } from "../../../car/redux";


const mapStateToProps = ({ shoppingCartList }) => ({
  ...shoppingCartList,
})
const mapActionsToProps = dispatch => bindActionCreators({
  productDetailBuy,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)
export default class ProductAction extends Component {
  render() {
    return (
      <View className='product-action'>
        <View className='collect'>
          <Image className='collect-image' src={require('./images/collect.png')} />
          <Text className='collect-text'>收藏</Text>
        </View>
        <View className='split' />
        <View className='car'>
          <Image className='car-image' src={require('./images/car.png')} />
          <Text className='car-text'>收藏</Text>
        </View>

        <View className='add-in-car'>加入购物车</View>
        <View className='buy-now' onClick={this.buy}>立即购买</View>
      </View>
    )
  }

  buy = () => {
    const { data } = this.props;
    this.props.productDetailBuy([
      {
        checked: true,
        id: data.id,
        name: data.name,
        image: data.image,
        description: data.description,
        price: data.price,
        number: 1
      }
    ])
    Taro.navigateTo({
      url: '/pages/order-confirm/index'
    })
  }
}

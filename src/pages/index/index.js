import Taro, { Component } from '@tarojs/taro'
import { bindActionCreators } from 'redux'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Space from '../../components/space/index'
import AddressAndSearch from './components/address-and-search'
import HomeSwiper from './components/home-swiper'
import HomeCategory from './components/home-category'
import HomeRecommend from './components/home-recommend'
import WellSelect from './components/well-select'
import { homeInit } from './redux'
import './index.less'

const mapStateToProps = ({ home, destination }) => ({
  ...home,
  destination
})
const mapActionsToProps = dispatch => bindActionCreators({
  homeInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount() {
    this.props.homeInit()
  }

  onPullDownRefresh() {
    this.props.homeInit(true, () => {
      Taro.stopPullDownRefresh()
    })
  }

  render() {
    const { init, swiperData, categoryData, newProductData, recommendProductData, hotProductData, destination } = this.props
    return (
      <View className='index'>
        {
          init &&
          <View>
            <AddressAndSearch data={destination.select} />
            <HomeSwiper data={swiperData} />
            <HomeCategory data={categoryData} />
            <Space />
            <HomeRecommend title='新品上市' data={newProductData} />
            <Space />
            <HomeRecommend title='店长推荐' data={recommendProductData} />
            <WellSelect data={hotProductData} />
          </View>
        }
      </View>
    )
  }
}

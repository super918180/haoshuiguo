import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/category/index',
      'pages/car/index',
      'pages/user/index',
      'pages/order/index',
      'pages/address/index',
      'pages/product-list/index',
      'pages/product-detail/index',
      'pages/search/index',
      'pages/destination/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#009a44',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#656565",
      selectedColor: "#009a44",
      backgroundColor: "#ffffff",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./asset/images/index.png",
          selectedIconPath: "./asset/images/index_focus.png"
        },
        {
          pagePath: "pages/category/index",
          text: "分类",
          iconPath: "./asset/images/category.png",
          selectedIconPath: "./asset/images/category_focus.png"
        },
        {
          pagePath: "pages/car/index",
          text: "购物车",
          iconPath: "./asset/images/car.png",
          selectedIconPath: "./asset/images/car_focus.png"
        },
        {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "./asset/images/user.png",
          selectedIconPath: "./asset/images/user_focus.png"
        }]
    }
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentCatchError() {
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

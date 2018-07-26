import Taro from '@tarojs/taro'

export default class Tools {
  static goToProductList(key) {
    Taro.navigateTo({
      url: `/pages/product-list/index?key=${key}`
    })
  }

  static goToProductDetail(id) {
    Taro.navigateTo({
      url: `/pages/product-detail/index?id=${id}`
    })
  }
}

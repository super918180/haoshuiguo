import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import AddressSelect from '../address-select'
import Search from '../search'
import './index.less'

export default class AddressAndSearch extends Component {
  render() {
    return (
      <View className='address-and-search'>
        <AddressSelect />
        <Search />
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import AddressSelect from '../address-select'
import Search from '../search'
import './index.less'

export default class AddressAndSearch extends Component {
  render() {
    const { data } = this.props
    return (
      <View className='address-and-search'>
        <AddressSelect data={data} />
        <Search />
      </View>
    )
  }
}

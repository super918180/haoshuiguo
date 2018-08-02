import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import AddressSelect from '../address-select/index'
import Search from '../search/index'
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

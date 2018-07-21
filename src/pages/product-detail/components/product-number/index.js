import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Stepper from '../../../../components/stepper'
import './index.less'

export default class ProductNumber extends Component {
  render() {
    return (
      <View className='product-number'>
        <Text>购买数量</Text>
        <View>
          <Stepper />
        </View>
      </View>
    )
  }
}

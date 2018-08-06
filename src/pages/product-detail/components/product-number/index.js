import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Stepper from '../../../../components/stepper/index'
import './index.less'

export default class ProductNumber extends Component {
  constructor() {
    super(...arguments)
  }

  changeValue = (v) => {
    console.log(v)
  }

  render() {
    return (
      <View className='product-number'>
        <Text>购买数量</Text>
        <View>
          <Stepper onChange={this.changeValue} />
        </View>
      </View>
    )
  }
}

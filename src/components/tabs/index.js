import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import cls from 'classnames'

import './index.less'

export default class Tabs extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      selectIndex: this.props.defaultValue || 0,
    }
  }

  changeSelectIndex(index) {
    const { onChange } = this.props

    this.setState({
      selectIndex: index
    })
    onChange && onChange(index)
  }

  render() {
    const { data } = this.props
    const { selectIndex } = this.state
    return (
      <View className='tabs'>
        {data.map((v, i) => (
          <View
            key={i}
            className={cls('tabs-item', { active: selectIndex == i })}
            onClick={this.changeSelectIndex.bind(this, i)}
          >
            <View className='item-text'>{v.title}</View>
          </View>
        ))}
      </View>
    )
  }
}

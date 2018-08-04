import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import cls from 'classnames'
import './index.less'

export default class Checkbox extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      isSelect: this.props.isSelect || false,
    }
  }

  changeSelect() {
    const { onChange } = this.props
    this.setState({
      isSelect: !this.state.isSelect
    }, () => (
      onChange && onChange()
    ))
  }

  render() {
    const { square, children } = this.props
    console.log(children)
    let imgObj = {
      select: require('./images/select.png'),
      unselect: require('./images/unselect.png'),
    }
    if (square) {
      imgObj = {
        select: require('./images/select1.png'),
        unselect: require('./images/unselect1.png'),
      }
    }
    return (
      <View className='ui-checkbox' onClick={this.changeSelect.bind(this)}>
        <View className={cls({ square: square })}>
          {
            this.state.isSelect
              ?
              <Image className='icon' src={imgObj.select} />
              :
              <Image className='icon' src={imgObj.unselect} />
          }
          {children}
        </View>
      </View>
    )
  }
}

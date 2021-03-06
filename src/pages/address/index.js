import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View, Image } from '@tarojs/components'
import cls from 'classnames'
import Space from '../../components/space/index'
import UICheckbox from '../../components/ui-checkbox/index'
import { addressInit } from './redux';

import './index.less'

const mapStateToProps = ({ address }) => ({
  ...address,
})
const mapActionsToProps = dispatch => bindActionCreators({
  addressInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class Address extends Component {
  config = {
    navigationBarTitleText: '我的地址'
  }

  constructor() {
    super(...arguments)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.addressInit()
  }

  onPullDownRefresh() {
    this.props.addressInit(true, () => {
      Taro.stopPullDownRefresh()
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  changeDefault(i) {
    console.log(i)
  }

  editAddress() {
    Taro.navigateTo({
      url:'/pages/address-edit/index'
    })
  }

  render() {
    const { init, config } = this.props
    return (
      <View>
        {
          init &&
          <View className='address'>
            {
              config.map((v, i) => (
                <View key={i} className='address-item'>
                  <Space />
                  <View className='name-and-phone'>
                    <View className='name'>{v.name}</View>
                    <View className='phone'>{v.phone}</View>
                  </View>
                  <View className='detail'>
                    {v.detail}
                  </View>
                  <View className='action'>
                    <View className='action-left'>
                      <UICheckbox square isSelect={v.default} onChange={this.changeDefault.bind(this, i)}>
                        <View className={cls('select', { active: v.default })}>
                          {
                            v.default ? '默认地址' : '设为默认'
                          }
                        </View>
                      </UICheckbox>
                    </View>
                    <View className='action-right'>
                      <View className='right-item' onClick={this.editAddress}>
                        <Image className='edit-image' src={require('./images/edit.png')} />
                        <View>编辑</View>
                      </View>
                      <View className='right-item'>
                        <Image className='delete-image' src={require('./images/delete.png')} />
                        <View>删除</View>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            }
          </View>
        }
      </View>
    )
  }
}

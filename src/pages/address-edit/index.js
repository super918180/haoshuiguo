import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import { View, Input, Textarea, Image } from '@tarojs/components'
import UICheckbox from '../../components/ui-checkbox'
import { addressEditInit } from './redux';

import './index.less'

const mapStateToProps = ({ addressEdit }) => ({
  ...addressEdit,
})
const mapActionsToProps = dispatch => bindActionCreators({
  addressEditInit,
}, dispatch)

@connect(
  mapStateToProps,
  mapActionsToProps,
)

export default class addressEdit extends Component {
  config = {
    navigationBarTitleText: '编辑地址'
  }

  constructor() {
    super(...arguments)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.addressEditInit()
  }

  onPullDownRefresh() {
    this.props.addressEditInit(true, () => {
      Taro.stopPullDownRefresh()
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  setDefaultAddress(value) {
    console.log(value)
  }

  render() {
    const { init } = this.props
    return (
      <View>
        {
          init &&
          <View className='address-edit'>
            <View className='address-form'>
              <View className='select-Item'>
                <View className='form-item'>
                  <View className='form-label'>姓名：</View>
                  <Input className='form-input' />
                </View>
              </View>
              <View className='select-Item'>
                <View className='form-item'>
                  <View className='form-label'>手机：</View>
                  <Input className='form-input' />
                </View>
              </View>
              <View className='select-Item'>
                <View className='form-item'>
                  <View className='form-label'>所在地区：</View>
                  <View className='form-select'>
                    江苏省南京市
                  </View>
                </View>
                <Image className='select-right' src={require('./images/right.png')} />
              </View>
              <View className='textarea-item'>
                <View className='form-label'>详细地址：</View>
                <Textarea className='form-textarea' />
              </View>
              <View className='select-Item'>
                <View className='form-item'>
                  <View className='form-radio'>
                    <UICheckbox onChange={this.setDefaultAddress.bind(this)}>
                      设为默认地址
                    </UICheckbox>
                  </View>
                </View>
              </View>
            </View>
            <View className='address-submit'>保存</View>
          </View>
        }
      </View>
    )
  }
}

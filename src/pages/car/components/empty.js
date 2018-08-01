import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Checkbox, Image, ScrollView } from '@tarojs/components'
import '../index.less'

export default class Empty extends Component {
    render() {
        return <View className='cart-empty'>
                <Image className='empty-image' src={require('../img/empty.png')}></Image>
             </View>        
    }
}

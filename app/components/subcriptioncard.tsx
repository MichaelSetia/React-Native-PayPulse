import {View, Text, Image} from 'react-native'
import React from 'react'

const Subcriptioncard = ({name, price, currency, icon, billing} : SubscriptionCardProps) => {
    return (
        <View className='sub-card bg-card'>
            <View className='sub-head'>
                <View className='sub-main'>
                    <Image className='sub-icon' source={icon}/>
                    <View className='sub-copy'>
                        <Text className='sub-title' numberOfLines={1}>{name}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Subcriptioncard

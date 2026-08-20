import {View, Text, Image} from 'react-native'
import React from 'react'
import {formatCurrency} from "@/lib/utils";

    const Listupcomingsubscriptions = ({
                                           data: { name, price, daysLeft, icon, currency }
                                       } : {
        data: UpcomingSubscription;
    }) => {
    return (
        <View className='upcoming-card'>
            <View className='upcoming-row'>
                <Image className='upcoming-icon' source={icon}></Image>
                <View>
                    <Text className='upcoming-price'>{formatCurrency(price,currency)}</Text>
                    <Text className='upcoming-meta'>{daysLeft > 1 ?`${daysLeft} day left` : 'last day'}</Text>
                </View>
            </View>
            <Text className='upcoming-name'numberOfLines={1}>{name}</Text>
        </View>


    )
}
export default Listupcomingsubscriptions

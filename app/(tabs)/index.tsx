import "@/global.css"
import {Image, Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context'
import {styled} from "nativewind";
import image from "@/constants/image"
import {HOME_USER} from "@/constants/data";
import {icons} from "@/constants/icons";

const SafeAreaView = styled(RNSafeAreaView)
export default function App() {
    return (
        <SafeAreaView className="flex-1 p-5 bg-background">
            <Text className="text-5xl font-sans-extrabold text-primary">
                Welcome to Nativewind!
            </Text>
            <View className="home-header p-4 bg-primary corner-rounded">
                <View className="home-user">
                    <Image className="home-avatar" source={image.avatar} >
                    </Image>
                    <Text className="home-user-name">{HOME_USER.name}</Text>
                </View>
                <Image source={icons.add} className="home-add-icon " tintColor="#FFFFFF"></Image>
            </View>

        </SafeAreaView>
    );
}

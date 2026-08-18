import "@/global.css"
import { Text } from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context'
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView)
export default function App() {
    return (
        <SafeAreaView className="flex-1 p-5 bg-background">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">
                Go to onboarding
            </Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">
                Sign In
            </Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">
                Sign Up
            </Link>
        </SafeAreaView>
    );
}

import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        className="absolute h-full w-full"
        source={require('assets/images/bg.png')}
      />
      <SafeAreaView className="flex flex-1">
        {/* search section */}
        <View style={{ height: '7%' }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: 'transparent',
            }}
          ></View>
        </View>
      </SafeAreaView>
    </View>
  );
}

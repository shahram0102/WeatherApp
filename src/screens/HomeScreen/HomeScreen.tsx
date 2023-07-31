import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
} from 'react-native-heroicons/outline';
import { theme } from 'src/theme/theme';

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  function onPress() {
    setShowSearch((state) => !state);
  }

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        className="absolute h-full w-full"
        source={require('assets/images/bg.png')}
      />
      <SafeAreaView className="flex flex-1 pt-10">
        {/* search section */}
        <View style={{ height: '7%' }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent',
            }}
          >
            {showSearch && (
              <TextInput
                placeholder="search city"
                placeholderTextColor="lightgray"
                className="pl-6 h-10 pb-1 flex-1 text-base text-white"
              />
            ) }
            <TouchableOpacity
              style={{
                backgroundColor: theme.bgWhite(0.3),
              }}
              className="p-3 rounded-full m-1"
              onPress={onPress}
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
          {locations.length && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                const showBorder = index + 1 != locations.length;
                const borderClass = showBorder
                  ? ' border-b-2 border-b-gray-400'
                  : '';
                return (
                  <TouchableOpacity
                    key={index}
                    // onPress={()=> handleLocation(loc)}
                    className={
                      'flex-row items-center border-0 p-3 px-4 mb-1 ' +
                      borderClass
                    }
                  >
                    <MapPinIcon size="20" color="gray" />
                    <Text className="text-black text-lg ml-2">hiii</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <></>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

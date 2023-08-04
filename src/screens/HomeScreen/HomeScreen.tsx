import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CalendarDaysIcon,
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
            )}
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
        {/* forecast section */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          {/* location */}
          <Text className="text-white text-center text-2xl font-bold">
            {/* {location?.name}, */}
            <Text className="text-lg font-semibold text-gray-300">
              {/* {location?.country} */}
            </Text>
          </Text>
          {/* weather icon */}
          <View className="flex-row justify-center">
            {/* <Image
              // source={{uri: 'https:'+current?.condition?.icon}}
              source={weatherImages[current?.condition?.text || 'other']}
              className="w-52 h-52"
            /> */}
          </View>
          {/* degree celcius */}
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              {/* {current?.temp_c}&#176; */}
            </Text>
            <Text className="text-center text-white text-xl tracking-widest">
              {/* {current?.condition?.text} */}
            </Text>
          </View>

          {/* other stats */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require('assets/icons/wind.png')}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                {/* {current?.wind_kph}km */}
              </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require('assets/icons/drop.png')}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                {/* {current?.humidity}% */}
              </Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require('assets/icons/sun.png')}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                {/* {weather?.forecast?.forecastday[0]?.astro?.sunrise} */}
              </Text>
            </View>
          </View>
        </View>

        {/* forecast for next days */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size="22" color="white" />
            <Text className="text-white text-base">Daily forecast</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            {/* {
                    weather?.forecast?.forecastday?.map((item,index)=>{
                      const date = new Date(item.date);
                      const options = { weekday: 'long' };
                      let dayName = date.toLocaleDateString('en-US', options);
                      dayName = dayName.split(',')[0];

                      return (
                        <View 
                          key={index} 
                          className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" 
                          style={{backgroundColor: theme.bgWhite(0.15)}}
                        >
                          <Image 
                            // source={{uri: 'https:'+item?.day?.condition?.icon}}
                            source={weatherImages[item?.day?.condition?.text || 'other']}
                              className="w-11 h-11" />
                          <Text className="text-white">{dayName}</Text>
                          <Text className="text-white text-xl font-semibold">
                            {item?.day?.avgtemp_c}&#176;
                          </Text>
                        </View>
                      )
                    })
                  } */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

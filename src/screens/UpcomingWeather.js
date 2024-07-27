import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
  Platform
} from 'react-native'
import ListItem from '../components/ListItem'

const Empty = () => {
  return (
    <View>
      <Text>Empty</Text>
    </View>
  )
}

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image, AndroidSafeArea } = styles
  return (
    <SafeAreaView style={[container, AndroidSafeArea]}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background.jpg')}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          // ItemSeparatorComponent={() => (
          //   <View style={{ backgroundColor: 'red', height: 2 }} />
          // )}
          // ListEmptyComponent={<Empty />}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'royalblue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather

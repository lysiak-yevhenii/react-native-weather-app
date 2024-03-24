import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
  Platform
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]

const Empty = () => {
  return (
    <View>
      <Text>Empty</Text>
    </View>
  )
}

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  // In FlatList we can use keyExtractor or if we have key in the data
  // we can use data key

  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/upcoming-background.jpg')}
      >
        <Text>Upcoing Weather</Text>
        <FlatList
          data={DATA}
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
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather

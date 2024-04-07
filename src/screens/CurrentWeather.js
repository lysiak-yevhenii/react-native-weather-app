import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    boddyWrapper,
    description,
    message
  } = styles
  console.log(weatherData)

  const {
    main: { tempo, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={temp}>{tempo}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          containerStyle={highLowWrapper}
          messageOneStyles={highLow}
          messageOne={`High: ${temp_max}`}
          messageTwoStyles={highLow}
          messageTwo={`Low: ${temp_min}`}
        />
        <RowText
          containerStyle={boddyWrapper}
          messageOneStyles={description}
          messageOne={weather[0].description}
          messageTwoStyles={message}
          messageTwo={weatherType[weatherCondition].message}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  boddyWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    margintop: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 40
  }
})

export default CurrentWeather

import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import RowText from '../components/RowText'

const CurrentWeather = () => {
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
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          containerStyle={highLowWrapper}
          messageOneStyles={highLow}
          messageOne={'High: 8'}
          messageTwoStyles={highLow}
          messageTwo={'Low: 6'}
        />
        <RowText
          containerStyle={boddyWrapper}
          messageOneStyles={description}
          messageOne={'Its sunny'}
          messageTwoStyles={message}
          messageTwo={'Its perferct t-shirt weather'}
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

import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.containter}>
      <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: 'royalblue'
  }
})

export default App

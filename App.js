import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
  const [loading, error, weatherData] = useGetWeather()

  console.log(loading, error, weatherData)

  if (weatherData && weatherData.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weatherData} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'}></ActivityIndicator>
    </View>
  )
  // return (<Counter></Counter>)
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default App

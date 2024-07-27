import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [loading, error, weatherData] = useGetWeather()

  console.log(loading, error, weatherData)

  if (weatherData && weatherData.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weatherData} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'}></ActivityIndicator>
      )}
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

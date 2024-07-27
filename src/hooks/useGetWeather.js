import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_APP_KEY } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [weatherData, setWeatherData] = useState([])
  const [error, setError] = useState(null)
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const featchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_APP_KEY}`
      )
      const data = await response.json()
      setWeatherData(data)
      setLoading(false)
    } catch (error) {
      setError('Could not featch weather' + error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await featchWeatherData()
    })()
  }, [lat, lon])

  return [loading, error, weatherData]
}

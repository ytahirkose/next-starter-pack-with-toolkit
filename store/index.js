import {configureStore} from '@reduxjs/toolkit'
import counter from './counterSlice'

export const initializeStore = () => {
  return configureStore({
    reducer: {
      counter,
    }
  })
}

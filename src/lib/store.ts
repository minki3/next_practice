import { configureStore } from '@reduxjs/toolkit'
import counter from '@/lib/features/counter/counter'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { combineReducers, Store } from 'redux'
import { createWrapper, MakeStore } from 'next-redux-wrapper'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducers = combineReducers({ counter: counter })

const persistedReducer = persistReducer(persistConfig, reducers)

export const makeStore = () => {
  return configureStore({
    reducer: { counter },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

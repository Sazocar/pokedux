import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { Spin } from 'antd'
// import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux'
// import thunk from 'redux-thunk'
// import { logger } from './middlewares'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from '@reduxjs/toolkit'
import localforage from 'localforage'
// import storage from 'redux-persist/lib/storage'
import './index.css'

const persistConfig = {
  key: 'root',
  storage: localforage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const composedEnhancers = composeAlt(applyMiddleware(thunk, logger))

// // const store = createStore(rootReducer, composedEnhancers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<Spin spinning tip='Loading...' size='large' />}
        persistor={persistor}
      >
        <Root />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)





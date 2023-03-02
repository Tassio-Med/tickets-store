import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store';

import Routes from './routes'
import Header from './Components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </Provider>
  )
}

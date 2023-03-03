import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store';
import history from './services/history';

import Routes from './routes'
import Header from './Components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header/>
        <Routes/>
      </Router>
    </Provider>
  )
}

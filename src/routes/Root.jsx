import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { App } from '../components/App'
import { Test } from '../components/Test'

const Root = () => {

  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/favorites' element={<Test text={'Favorites'} />} />
        </Route>

        <Route path='*' element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default Root







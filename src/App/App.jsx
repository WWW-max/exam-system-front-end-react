import React, { Component } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from '../Login/Login';

export default class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/login" element={<Login/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Login from './loginIn'
import Welcome from './welcome'
export default class index extends Component {
 render() {
  return (
   <div>
    {
     true ? <Welcome/> : <Login/>
    }
   </div>
  )
 }
}

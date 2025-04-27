import { Link, Router } from '@reach/router'
import React from 'react'
import Home from './Home'
import UserProfile from './UserProfile'

const users = [ {id:1,name:'aaa',salar:1000}]

export default function RouterApp() {
  return (
    <div>
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/user/1">ram</Link> | 
      <Link to="/user/2">User 2 Profile</Link>
    </nav>
    <Router>
      <Home path="/" />
      <UserProfile path="/user/:id" />
      {/* <UserList users = {users} /> */}
    </Router>
  </div>
  )
}

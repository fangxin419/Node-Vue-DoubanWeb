import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index'
import Search from '../pages/Search'
import Book from '../pages/Book'
import BroadCast from '../pages/BroadCast'
import Movie from '../pages/Movie'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Detail from '../pages/Detail'
import Users from '../pages/Users'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/broadcast',
      name: 'BroadCast',
      component: BroadCast
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }, 
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/*',
      redirect: "/index"
    }
  ]
})

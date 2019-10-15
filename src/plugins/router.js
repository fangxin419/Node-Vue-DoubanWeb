import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index'
import Book from '../pages/Book'
import Broadcast from '../pages/Broadcast'
import Group from '../pages/Group'
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
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }, 
    {
      path: '/group',
      name: 'Group',
      component: Group
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

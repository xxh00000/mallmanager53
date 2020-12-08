/*
 * @Author: your name
 * @Date: 2020-12-07 12:36:20
 *  stEditTime: 2020-12-07 15:10:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mallmanager53\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

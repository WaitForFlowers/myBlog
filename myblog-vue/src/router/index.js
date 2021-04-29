import Vue from 'vue'
import Router from 'vue-router'
import BlogMain from '@/components/blogMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogMain',
      component: BlogMain
    }
  ]
})

/**
 * Created by Doming on 2016/11/16.
 */
import Layout from './layout'
import Index from './pages/index'
import About from './pages/about'

const routes = {
  path: '/',
  component: Layout,
  indexRoute: {
    component: Index
  },
  childRoutes: [
    {
      path: 'about',
      component: About
    },
  ]
}

export default routes
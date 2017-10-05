import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '/jbosscontrol',
      component: require('@/components/TabPage/JbossControl')
    },
    {
      path: '/test',
      component: require('@/components/TabPage/test')
    },
    {
      path: '/login',
      component: require('@/components/TabPage/Login')
    },
    {
      path: '/Backupprogram',
      component: require('@/components/TabPage/Backupprogram')
    },
    {
      path: '/uploadprogram',
      component: require('@/components/TabPage/UploadProgram')
    },
    {
      path: '/uploadprogram2',
      component: require('@/components/TabPage/UploadProgram2')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

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
      path: '/tab2',
      component: require('@/components/TabPage/Tab2')
    },
    {
      path: '/login',
      component: require('@/components/TabPage/Login')
    },
    {
      path: '/backupjboss',
      component: require('@/components/TabPage/BackupJboss')
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

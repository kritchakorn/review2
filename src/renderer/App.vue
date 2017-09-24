<template>
  <div id="app">
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import Tab from '@/components/Tab'
  import Common from '@/helper/Common'
  export default {
    userlist: [],
    name: 'review',
    created () {
      this.userlist = Common.readuserconf()
      console.log('load user' + this.userlist)
    },
    data () {
      return {
        userlist: []
      }
    },
    components: {
      Tab
    }
  }
</script>

<style>
  /* CSS */
</style>

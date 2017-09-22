<template>
  <div id="app">
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import Tab from '@/components/Tab'
  export default {
    name: 'review',
    components: {
      Tab
    }
  }
</script>

<style>
  /* CSS */
</style>

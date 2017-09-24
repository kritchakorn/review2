<template>
  <div>
    tab2
    <router-link class="button is-info" to="/">Go to home</router-link>
    <a @click="debug()">tst</a>
    <a class="button" @click="onCheckAction()">Check {{i}}</a>
    <a class="button" @click="onCheckAction2()">Start</a>
    <a class="button" @click="onCheckAction3()">Stop</a>
    <a class="button" @click="onCheckAction4()">write file</a>
    <a class="button" @click="onCheckAction5()">read file</a>
  </div>
</template>

<script>
import jbossutil from '@/helper/jbossutil'
import Common from '@/helper/Common'
export default {

  mounted () {
    console.log('test')
  },
  data () {
    return {
      lists: [],
      username: '',
      password: '',
      i: 'none'}
  },
  components: {
  },
  methods: {
    debug () {
      console.log('dd')
    },
    onCheckAction () {
      this.i = jbossutil.checkstatus('10.250.3.36', 'root', 'password')
    },
    onCheckAction2 () {
      console.log(jbossutil.startjboss('10.250.3.36', 'root', 'password'))
    },
    onCheckAction3 () {
      console.log(jbossutil.stopjboss('10.250.3.36', 'root', 'password'))
    },
    onCheckAction4 () {
      console.log(Common.writefileconf())
    },
    onCheckAction5 () {
      console.log(Common.readfileconf())
    }
  }
}
</script>

<style lang="css">

</style>

<template>
  <div class="container">
    <div class="section">
      <div class="field">
        <div class="control">
          <h1>EaZSetup Vesion 1.0</h1>
        </div>
      </div>
      <div class="field">
        {{ model }}
        <a @click="test()" class="button">show</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing-page',
  data () {
    return {
      message: 'hello',
      model: ''
    }
  },
  components: {
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    test () {
      alert(this.model)
    },
    add (a, b) {
      return a + b
    }
  }
}
</script>

<style lang="css" scoped>
.section {
  padding: 30px;
}
</style>

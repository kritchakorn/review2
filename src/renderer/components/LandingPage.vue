<template>
  <div class="container">
    <div class="section">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="" v-model="model">
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

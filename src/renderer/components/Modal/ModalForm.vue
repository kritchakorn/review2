<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input
          type="input"
          :value="email"
          @input="onInputChange('email', $event)"
          placeholder="Your email"
          required>
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input
        type="password"
        :value="password"
        password-reveal
        @input="onInputChange('password', $event)"
        placeholder="Your password"
        required>
      </b-input>
    </b-field>

  </section>
  <footer class="modal-card-foot">
    <button class="button" type="button" @click="$parent.close()">Close</button>
    <button class="button is-primary" @click="login">Login</button>
    <button class="button is-primary" @click="showData()">Test</button>
  </footer>
</div>
</form>
</template>

<script>
export default {
  props: ['email', 'password'],
  created () {

  },
  methods: {
    showData () {
      console.log(this.email)
    },
    onInputChange (field, value) {
      this.$emit('onFormChange', field, value)
    },
    login () {
      this.$emit('login')
      this.$parent.close()
    }
  }
}
</script>

<style scoped>
.modal-card {
  width: auto;
}
</style>

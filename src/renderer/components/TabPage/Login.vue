<template>
  <section class="section">
    <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="Email">
      <span class="icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fa fa-check"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fa fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button class="button is-success">
        Login
      </button>
    </p>
  </div>
  </section>
</template>

<script>
import Common from '@/helper/Common'
import ModalForm from '@/components/Modal/ModalForm'

export default {
  created () {
    for (var i = 1; i < 5; i++) {
      var item = {}
      item.id = 200 + i
      item.name = 'AS' + i
      item.status = 'active'
      this.lists.push(item)
    }
    console.log(this.lists)
  },
  data () {
    return {
      lists: [],
      showModal: false,
      email: '',
      password: ''
    }
  },
  components: {
    ModalForm
  },
  methods: {
    btnClick () {
      console.log(Common.hello())
    },
    onCheckAction (data, index) {
      // data call cheeck jbossstatus
      this.lists[index].status = 'inactive'
      this.showModal = true
    },
    renderTag (status) {
      if (status === 'active') {
        return 'is-success'
      } else if (status === 'inactive') {
        return 'is-danger'
      }
    },
    login () {
      console.log(this.email, this.password)
    },
    emailChange (email) {
      this.email = email
    },
    onFormChange (field, value) {
      this[field] = value
    }
  }
}
</script>

<style lang="css">

</style>

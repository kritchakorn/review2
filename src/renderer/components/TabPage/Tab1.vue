<template>
  <section class="section">
    <table class="table" style="width:100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Plaza Id</th>
          <th>Jboss Status</th>
          <th>Control</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in lists">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td><span :class="['tag', renderTag(data.status)]">{{ data.status }}</span></td>
          <td><a class="button" @click="onCheckAction(data, index)">Check Status</a>
            <a class="button" @click="onCheckAction(data, index)">Start Jboss</a></td>
          </tr>
        </tbody>
      </table>
      <router-link class="button" to="/">Go to home</router-link>
      <a @click="btnClick" class="button is-warning">btun</a>
      <b-modal :active.sync="showModal" has-modal-card>
        <modal-form :email="email" :password="password" @onFormChange="onFormChange" @login="login"></modal-form>
      </b-modal>
    </section>
  </template>

  <script>
  import Common from '@/helper/Common'
  import ModalForm from '@/components/Modal/ModalForm'

  export default {
  /* created2 () {
      for (var i = 1; i < 5; i++) {
        var item = {}
        item.id = 200 + i
        item.name = 'AS' + i
        item.status = 'active'
        this.lists.push(item)
      }
    }, */
    created () {
      this.lists = Common.readfileconf()
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

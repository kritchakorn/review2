<template>
  <section class="section">
    <table class="table" style="width:100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Plaza Id</th>
          <th>Backup Status</th>
          <th>Control</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in lists">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td><span :class="['tag', renderTag(data.status)]">{{ data.status }}</span></td>
          <td>
            <a class="button" @click="onCheckAction2()">Backup Program</a>
            <a class="button" @click="onCheckAction1()">Check Backup Status</a>
          </td>
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
import Checkjboss from '@/helper/Checkjboss'
import ModalForm from '@/components/Modal/ModalForm'

export default {
  created () {
    for (var i = 1; i < 5; i++) {
      var item = {}
      item.id = 200 + i
      item.name = 'AS' + i
      item.status = 'none backup'
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
  onCheckAction1 () {
    console.log(Checkjboss.checkbackupjboss('10.250.3.36', 'root', 'password'))
  },
  onCheckAction2 () {
    console.log(Checkjboss.stopjboss('10.250.3.36', 'root', 'password'))
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

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
            <a class="button" @click="checkbackup(data, index)">Check Backup</a>
            <a class="button" @click="backupear(data, index)">Backup</a>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link class="button" to="/">Go to home</router-link>
    <a @click="btnClick" class="button is-warning">btun</a>
  </section>
</template>

<script>
import Common from '@/helper/Common'
import jbossutil from '@/helper/jbossutil'
import ModalForm from '@/components/Modal/ModalForm'

export default {
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
    backupear (data, index) {
      console.log('check jboss')
      console.log(data.ipaddress)
      var msg = ''
      jbossutil.backupjboss(data.ipaddress, 'root', 'password').then((mssg) => {
        msg = mssg
        console.log('######success########' + mssg)
        if (msg === 'active') {
          console.log('set status' + msg)
          this.lists[index].status = 'active'
        } else if (msg === 'inactive') {
          console.log('set status' + msg)
          this.lists[index].status = 'inactive'
        } else {
          console.log('set status' + msg)
          this.lists[index].status = 'none'
        }
      }).catch((error) => {
        console.log('######error########' + error)
        msg = error
      })
    },
    checkbackup  (data, index) {
      console.log('check jboss')
      console.log(data.ipaddress)
      var msg = ''
      jbossutil.checkbackupjboss(data.ipaddress, 'root', 'password').then((mssg) => {
        msg = mssg
        console.log('######success########' + mssg)
        if (msg === 'active') {
          console.log('set status' + msg)
          this.lists[index].status = 'active'
        } else if (msg === 'inactive') {
          console.log('set status' + msg)
          this.lists[index].status = 'inactive'
        } else {
          console.log('set status' + msg)
          this.lists[index].status = 'none'
        }
      }).catch((error) => {
        console.log('######error########' + error)
        msg = error
      })
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

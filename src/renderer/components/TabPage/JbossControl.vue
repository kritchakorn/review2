<template>
  <section class="section">
    <table class="table" style="width:100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Plaza Id</th>
          <th>Jboss Status</th>
          <th  align='center'>Control</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in lists">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td><span :class="['tag', renderTag(data.status)]">{{ data.status }}</span></td>
          <td><a class="button" @click="onjbossutil(data, index)">Check Status</a>
            <a class="button" @click="onstartjboss(data, index)">Start Jboss</a>
            <a class="button" @click="onstopjboss(data, index)">Stop Jboss</a></td>
          </tr>
        </tbody>
      </table>
      <router-link class="button" to="/">Go to home</router-link>
      <a @click="btnClick" class="button is-warning">btun</a>

    </section>
  </template>

  <script>
import Common from '@/helper/Common'
import Checkjboss from '@/helper/Checkjboss'
// import Uptime from '@/helper/Uptime'
// import ModalForm from '@/components/Modal/ModalForm'

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
    //   ModalForm
  },
  methods: {
    btnClick () {
      console.log(Common.hello())
    },
    oncheckjboss (data, index) {
      console.log('check jboss')
      console.log(data.ipaddress)
      // Checkjboss.echo()
      // Uptime.upt()

      var msg = ''
      Checkjboss.checkstatus(data.ipaddress, 'root', 'password').then((mssg) => {
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
      console.log('hellp')
      this.lists[index].status = 'inactive'
      // this.showModal = true
    },
    renderTag (status) {
      if (status === 'active') {
        return 'is-success'
      } else if (status === 'inactive') {
        return 'is-danger'
=======
  import Common from '@/helper/Common'
  import jbossutil from '@/helper/jbossutil'
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
      //   ModalForm
    },
    methods: {
      btnClick () {
        console.log(Common.hello())
      },
      onjbossutil (data, index) {
        console.log('check jboss')
        console.log(data.ipaddress)
        var msg = ''
        jbossutil.checkstatus(data.ipaddress, 'root', 'password').then((mssg) => {
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
      onstartjboss (data, index) {
        console.log('start jboss')
        console.log(data.ipaddress)
        var msg = ''
        console.log(jbossutil.startjboss('10.250.3.36', 'root', 'password')).then((mssg) => {
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
      onstopjboss (data, index) {
        console.log('start jboss')
        console.log(data.ipaddress)
        var msg = ''
        console.log(jbossutil.stopjboss('10.250.3.36', 'root', 'password')).then((mssg) => {
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
        console.log('hellp')
        this.lists[index].status = 'inactive'
        // this.showModal = true
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
>>>>>>> ee0b81b1653cb2bce11e310f1b886596396f8957
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

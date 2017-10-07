<template>
  <section class="section">
    <table class="table" style="width:100%">
      <thead>
        <tr>
          <th>Check</th>
          <th>Id</th>
          <th>Plaza Id</th>
          <th>Jboss Status</th>
          <th  align='center'>Control </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in lists">
          <td>
            <input type="checkbox" :value="index" v-model="checkes">
            <label for="checkbox">{{ data.ipadderess }}</label>
          </td>
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td><span :class="['tag', renderTag(data.status)]">{{ data.status }}</span></td>
          <td><a class="button" @click="oncheckjboss(data, index)">Check Status</a>
            <a class="button" @click="onstartjboss(data, index)">Start Jboss</a>
            <a class="button" @click="onstopjboss(data, index)">Stop Jboss</a>
            <a class="button" @click="onkilljboss(data, index)">Force Kill Jboss</a></td>
          </tr>
        </tbody>
      </table>
      <a @class="btnClick" class="button is-info" @click="oncheckjboss2()">Check Status</a>
      <a @class="btnClick" class="button is-success" @click="onstartjboss2()">Start Jboss</a>
      <a @class="btnClick" class="button is-warning" @click="onstopjboss2()">Stop Jboss</a>
      <a @class="btnClick" class="button is-danger" @click="onkilljboss2()">Force Kill Jboss</a>
    </section>
  </template>

  <script>
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
        password: '',
        checkes: []
      }
    },
    components: {
      //   ModalForm
    },
    methods: {
      btnClick () {
        console.log(Common.hello())
      },
      onkilljboss (data, index) {
        console.log('check jboss')
        console.log(data.ipaddress)
        var msg = ''
        jbossutil.killjboss(data.ipaddress, 'root', 'password')
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
      onkilljboss2 () {
        console.log('check jboss')
        this.checkes.forEach((index) => {
          let data = this.lists[index]
          console.log(data.ipaddress)
          var msg = ''
          jbossutil.killjboss(data.ipaddress, 'root', 'password')
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
        })
      },
      oncheckjboss (data, index) {
        console.log('check jboss')
        console.log(data.ipaddress)
        var msg = ''
        //
        jbossutil.checkstatus(data.ipaddress, 'bemhq', '@HQbem246').then((mssg) => {
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
            this.lists[index].status = 'ERROR'
          }
        }).catch((error) => {
          this.lists[index].status = 'ERROR'
          console.log('######error########' + error)
          msg = error
        })
      },
      oncheckjboss2 () {
        console.log('check jboss')
        //  console.log(data.ipaddress)
        var msg = ''
        this.checkes.forEach((index) => {
          let data = this.lists[index]
          jbossutil.checkstatus(data.ipaddress, 'bemhq', '@HQbem246').then((mssg) => {
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
              this.lists[index].status = 'ERROR'
            }
          }).catch((error) => {
            this.lists[index].status = 'ERROR'
            console.log('######error########' + error)
            msg = error
          })
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
      onstartjboss2 () {
        this.checkes.forEach((index) => {
          let data = this.lists[index]
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
      onstopjboss2 () {
        this.checkes.forEach((index) => {
          let data = this.lists[index]
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
        } else if (status === 'ERROR') {
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

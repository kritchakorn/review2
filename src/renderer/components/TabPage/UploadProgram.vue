<template>
  <div id="app">
    <header class="navbar">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"></label>
        </div>
        <label class="file-label">
          <h1 class="title is-1">
            Upload Program
          </h1>
          <h1 class="title is-1">

          </h1>
        </label>
      </div>
    </header>

    <div class="container">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <div class="field">
                <div class="file is-warning is-boxed">
                  <label class="file-label">
                    <img :src="image" />
                    <input class="file-input" type="file" name="file" id="file" @change="onFileChange">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fa fa-cloud-upload"></i>
                      </span>
                      <a>{{Message}}</a>
                      <span class="file-label">
                        <table class="table" style="width:100%">
                          <thead>
                            <tr>
                              <th>File Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(data,index) in lists2">
                              <center>{{data}}</center>
                            </tr>
                          </tbody>
                        </table>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field is-grouped">
                <p class="control is-expanded has-icons-left">
                  <div class="column">
                    <a class="button is-primary" @click="uploadFile">Submit</a>
                  </div>
                  <div class="column">
                    <a class="button is-light" @click="clearfile" >Clear File</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="field-body">
          <div class="field is-expanded">
            <h1 class="title is-1">
              Deploy Program
            </h1>
          </div>
        </div>
      </div>
      <section class="section">
        <table class="table" style="width:100%">
          <thead>
            <tr>
              <th>Check</th>
              <th>Id</th>
              <th>Plaza Id</th>
              <th>Deploy Status</th>
              <th><center>Control</center></th>
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
              <td>
                <center><a class="button" @click="deployprogram(data, index)">Deploy Program</a></center>
              </td>
            </tr>
          </tbody>
        </table>
        <a @class="btnClick" class="button is-info" @click="deployprogram2()">Deploy Program</a>
      </section>
    </div>
  </div>
</template>

<script>
import Common from '@/helper/Common'
import jbossutil from '@/helper/jbossutil'
var config = require('@/helper/config')
var fs = require('fs')
export default {
  created () {
    this.lists = Common.readfileconf()
    this.lists2 = Common.readuploadfile('src/tmpfile')
    // var test = Promise.resolve(this.lists2)
    console.log('RETURN' + this.lists2)
  },
  data () {
    // var filejar
    return {
      lists2: [],
      lists: [],
      image: '',
      Message: '1',
      filejar: '',
      checkes: []
    }
  },
  methods: {
    deployprogram (data, index) {
      console.log('upload' + data.ipaddress + config.SORCE + config.DESC)
      jbossutil.createdeployfolder(data.ipaddress, config.SSH_USER, config.SSH_PASS)
      jbossutil.deployfile(data.ipaddress, config.SSH_USER, config.SSH_PASS)
      jbossutil.movetojboss(data.ipaddress, config.SSH_USER, config.SSH_PASS)
    },
    deployprogram2 () {
      this.checkes.forEach((index) => {
        let data = this.lists[index]
        console.log(data.ipaddress)
        console.log('upload' + data.ipaddress + config.SORCE + config.DESC)
        jbossutil.createdeployfolder(data.ipaddress, config.SSH_USER, config.SSH_PASS)
        jbossutil.deployfile(data.ipaddress, config.SSH_USER, config.SSH_PASS)
        jbossutil.movetojboss(data.ipaddress, config.SSH_USER, config.SSH_PASS)
      })
    },
    uploadFile (e) {
      console.log('upload' + this.filejar.size)
      if (this.check()) {
        var path = 'src/tmpfile/' + this.filejar.name
        this.copyFile(this.filejar.path, path)
        this.lists2 = Common.readuploadfile('src/tmpfile')
      }
      return 'error'
    },
    clearfile (e) {
      Common.clearfile('src/tmpfile')
      this.lists2 = Common.readuploadfile('src/tmpfile')
    },
    uploadFile2 () {
      // jbossutil.changeuser('10.201.1.17', 'bemhq', '@HQbem246')
      console.log('test su jboss')
      jbossutil.changeuser('10.201.1.17', config.SSH_USER, config.SSH_PASS)
    },
    check () {
      // console.log(files.name)
      if (!this.filejar.size) {
        console.log('false')
        return false
      }
      console.log('true')
      return true
    },
    renderTag (status) {
      if (status === 'BACKUP') {
        return 'is-success'
      } else if (status === 'NO') {
        return 'is-danger'
      }
    },
    onFileChange (e) {
      console.log('140' + e.target.files)
      // console.log('141' + e.dataTransfer.files)
      var files = e.target.files || e.dataTransfer.files
      console.log(141 + files)
      if (!files.length) {
        return
      }
      // get name
      this.filejar = files[0]
      console.log('path' + files[0].webkitRelativePath)
      console.log(files[0].name)
      console.log(files[0].size)
      console.log(files[0].type)
      console.log(files[0].path)
      this.createImage(files[0])
    },
    createImage (file) {
      var image = new Image()
      console.log('149' + image)
      var reader = new FileReader()
      reader.onload = (e) => {
        console.log('158' + e.target.result)
        this.image = file[0]
      }

      console.log('158' + file)
      // console.log('157' + reader.readAsDataURL(file))
      // console.log('158' + reader.readAsArrayBuffer(file))
    },
    copyFile (source, target) {
      return new Promise(function (resolve, reject) {
        var rd = fs.createReadStream(source)
        rd.on('error', rejectCleanup)
        var wr = fs.createWriteStream(target)
        wr.on('error', rejectCleanup)
        function rejectCleanup (err) {
          rd.destroy()
          wr.end()
          reject(err)
        }
        wr.on('finish', resolve)
        rd.pipe(wr)
      })
    },
    uploadImage: function (e) {
      var files = e.target.files
      if (!files[0]) {
        return
      }
      var data = new FormData()
      data.append('media', files[0])
      var reader = new FileReader()
      reader.onload = (e) => {
        this.imageSrc = e.target.result
        alert(e.target.result)
      }
      reader.readAsDataURL(files[0])
    },
    btnClick () {
      console.log(Common.hello())
    }
  }
}
</script>

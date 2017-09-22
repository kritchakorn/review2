<template>
  <div id="app">
    <header class="navbar">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"></label>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <p class="control is-expanded has-icons-left">
              <label class="file-label">
                <h1 class="title is-1">
                  Upload Program
                </h1>
                <h1 class="title is-1">

                </h1>
              </label>
            </p>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Choose upload File</label>
        </div>
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
                        Warning file…
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
                    <a class="button is-light">Cancel</a>
                  </p>
                </div>
              </div>
            </div>
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
                    <a class="button is-primary" @click="uploadFile2">changeuser</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field is-expanded">
              <p class="control is-expanded has-icons-left">
                <div class="column">
                </div>
              </div>
            </div></div>
          </div>
        </div>

      </div>
    </div>
  </template>

  <script>
  import Checkjboss from '@/helper/Checkjboss'
  // import axios from 'axios'
  var fs = require('fs')

  // var Future = require('fibers/future')
  // var os = require('os')
  export default {
    name: 'app',
    data () {
      // var filejar
      return {
        image: '',
        Message: '1',
        filejar: ''
      }
    },
    methods: {
      uploadFile (e) {
        console.log('upload' + this.filejar.size)
        // var ee = document.getElementByName('file')
        // console.log('upload' + e)
        // console.log('upload2' + ee.target.files)

        if (this.check()) {
          var path = 'src/tmpfile/' + this.filejar.name
          this.copyFile(this.filejar.path, path)
        }
        return 'error'
      },
      uploadFile2 () {
        // Checkjboss.changeuser('10.201.1.17', 'bemhq', '@HQbem246')
        console.log('test su jboss')
        Checkjboss.changeuser('10.201.1.17', 'bemhq', '@HQbem246')
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
      }
    }
  }
  </script>

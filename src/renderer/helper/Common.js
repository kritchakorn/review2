var fs = require('fs')
var os = require('os')
var a = {
  hello (text = 'test') {
    return 'hello' + text
  },
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

  readfileconf () {
    var lists = []
    var array = fs.readFileSync('src/renderer/helper/plaza.txt').toString().trim().split(os.EOL)
    console.log('arra' + array)
    var j = 0
    var last = array.length
    console.log(last)
    for (var i in array) {
      if (j >= 1 && j <= 3) {
        var item = {}
        console.log(i)
        var arr = array[i].trim().split(',')
        item.ipaddress = arr[0]
        item.id = arr[1]
        item.name = arr[2]
        item.status = arr[3]
        lists.push(item)
        console.log(lists)
      }
      j++
    }
    return lists
  },
  readuserconf () {
    var lists = []
    var array = fs.readFileSync('src/renderer/helper/user.txt').toString().trim().split(os.EOL)
    console.log('arra' + array)
    var j = 0
    var last = array.length
    console.log(last)
    for (var i in array) {
      if (j >= 1 && j <= 3) {
        var item = {}
        console.log(i)
        var arr = array[i].trim().split(',')
        item.username = arr[0]
        item.passwoord = arr[1]
        lists.push(item)
        console.log(lists)
      }
      j++
    }
    return lists
  },
  writefileconf () {
    fs.writeFile('src/renderer/helper/test.text', 'AS1,10.201.1.17', function (err) {
      if (err) {
        return console.log(err)
      }
      console.log('The file was saved!')
    })
  },
  writeuploadfile () {

  }
}
export default a

var dateFormat = require('dateformat')
var Client = require('ssh2').Client
// var ping = require('ping')
// var conn = new Client()
var fs = require('fs')
var msg = ''
var b = {
  echo () {
    console.log('Checkjboss')
  },
  checkstatus (ipaddress = '10.250.3.36', username = 'root', password = 'password') {
    var Client = require('ssh2').Client
    var conn = new Client()
    conn.on('ready', function () {
      console.log('checkstatus Client :: ready')
      conn.exec('sh /home/bemhq/script/checkjboss.sh', function (err, stream) {
        if (err) throw err
        stream.on('close', function (code, signal) {
          console.log('Stream :: close :: code: ' + code + ', signal: ' + signal + ' ' + msg + ' ' + err)
          conn.end()
        }).on('data', function (data) {
          if (data.indexOf('RUN') > -1) {
            msg = 'active'
          } else {
            msg = 'inactive'
          }
          console.log('STDOUT: ' + data + msg)
          return msg
        }).stderr.on('data', function (data) {
          console.log('STDERR: ' + data)
          return msg
        })
      })
    }).connect({
      host: ipaddress,
      port: 22,
      username: username,
      password: password,
      readyTimeout: 99999
      // stream.allowHalfOpen = true
      // privateKey: require('fs').readFileSync('src/renderer/helper/')
      //  privateKey: require('fs').readFileSync('/here/is/my/key')
    })
    return msg
  },
  startjboss (ipaddress = '10.250.3.36', username = 'root', password = 'password') {
    var conn = new Client()
    console.log('F.startjboss')
    conn.on('ready', function () {
      console.log('Client :: ready')
      conn.exec('service jboss start', function (err, stream) {
        if (err) throw err
        stream.on('close', function (code, signal) {
          console.log('Stream :: close :: code: ' + code + ', signal: ' + signal)
          conn.end()
        }).on('data', function (data) {
          console.log('STDOUT: ' + data)
          return data
        }).stderr.on('data', function (data) {
          console.log('STDERR: ' + data)
          return data
        })
      })
    }).connect({
      host: ipaddress,
      port: 22,
      username: username,
      password: password,
      readyTimeout: 99999
      // privateKey: require('fs').readFileSync('./')
      //  privateKey: require('fs').readFileSync('/here/is/my/key')
    })
  },
  stopjboss (ipaddress = '10.250.3.36', username = 'root', password = 'password') {
    var conn = new Client()
    console.log('F.stopjboss')
    conn.on('ready', function () {
      console.log('Client :: ready')
      conn.exec('service jboss stop', function (err, stream) {
        if (err) throw err
        stream.on('close', function (code, signal) {
          console.log('Stream :: close :: code: ' + code + ', signal: ' + signal)
          conn.end()
        }).on('data', function (data) {
          console.log('STDOUT: ' + data)
          return data
        }).stderr.on('data', function (data) {
          console.log('STDERR: ' + data)
          return data
        })
      })
    }).connect({
      host: ipaddress,
      port: 22,
      username: username,
      password: password,
      readyTimeout: 99999
      // privateKey: require('fs').readFileSync('./')
      //  privateKey: require('fs').readFileSync('/here/is/my/key')
    })
  },
  backupjboss (ipaddress = '10.201.1.17', username = 'bemhq', password = '@HQbem246') {
    var conn = new Client()
    console.log('F.backupjboss')
    var now = new Date()
    var dd = dateFormat(now, 'YYYY-MM-DD')
    conn.on('ready', function () {
      console.log('start backup' + dd)
      conn.exec('sudo su - jboss; sh ./home/jboss/jboss-4.2.3.GA/server/default/ear_backup.sh;' + dd, function (err, stream) {
        if (err) throw err
        stream.on('close', function (code, signal) {
          console.log('Stream :: close :: code: ' + code + ', signal: ' + signal)
          conn.end()
        }).on('data', function (data) {
          console.log('STDOUT: ' + data)
          return data
        }).stderr.on('data', function (data) {
          console.log('STDERR: ' + data)
          return data
        })
      })
    }).connect({
      host: ipaddress,
      port: 22,
      username: username,
      password: password,
      readyTimeout: 99999
      // privateKey: require('fs').readFileSync('./')
      //  privateKey: require('fs').readFileSync('/here/is/my/key')
    })
  },
  checkbackupjboss (ipaddress = '10.250.3.36', username = 'root', password = 'password') {
    var conn = new Client()
    console.log('F.checkbackupjboss')
    var now = new Date()
    var dd = dateFormat(now, 'yyyy-mm-dd')
    conn.on('ready', function () {
      console.log('Client :: ready')
      conn.shell(function (err, stream) {
        if (err) throw err
        stream.on('close', function () {
          console.log('Stream :: close')
          conn.end()
        }).on('data', function (data) {
          console.log('STDOUT: ' + data)
        }).stderr.on('data', function (data) {
          console.log('STDERR: ' + data)
        })
        stream.end('sudo su - jboss\nls /home/jboss/jboss-4.2.3.GA/server/default/backup_ear/backup_' + dd + '\n')
      })
    }).connect({
      host: ipaddress,
      port: 22,
      username: username,
      password: password
    })
  },
  deployfile (host = '10.250.3.36', username = 'root', password = 'password', filename = '') {
    var conn = new Client()
    var connSettings = {
      host: host,
      port: 22, // Normal is 22 port
      username: username,
      password: password
    }
    // var remotePathToList = '/var/www/ourcodeworld'
    if (filename !== '') {
      console.log(filename)
      conn.on('ready', function () {
        conn.sftp(function (err, sftp) {
          if (err) throw err
          var readStream = fs.createReadStream('./src/tmpfile/' + filename)
          var writeStream = sftp.createWriteStream(filename)
          writeStream.on('close', function () {
            console.log('- file transferred succesfully')
          })
          writeStream.on('end', function () {
            console.log('sftp connection closed')
            conn.close()
            return 'success'
          })
          readStream.pipe(writeStream)
        })
      }).connect(connSettings)
    } else {
      return 'error'
    }
  },
  changeuser (ipaddress = '10.201.1.17', username = 'bemhq', password = '@HQbem246') {
    var conn = new Client()
    console.log('changeuser')
    conn.on('ready', function () {
      conn.exec('pwd \n su - jboss \n pwd', function (err, stream) {
        if (err) throw err
        stream.on('close', function (code, signal) {
          console.log('Stream :: close :: code: ' + code + ', signal: ' + signal)
          conn.end()
        }).on('data', function (data) {
          console.log('STDOUT: ' + data)
          return data
        }).stderr.on('data', function (data) {
          console.log('STDERR: ' + data)
          return data
        })
      })
    }).connect({
      host: ipaddress,
      port: 22,
      username: username,
      password: password,
      readyTimeout: 99999
      // privateKey: require('fs').readFileSync('./')
      //  privateKey: require('fs').readFileSync('/here/is/my/key')
    })
  }
}
export default b

// example output:
// Client :: ready
// STDOUT:  17:41:15 up 22 days, 18:09,  1 user,  load average: 0.00, 0.01, 0.05
//
// Stream :: exit :: code: 0, signal: undefined
// Stream :: close

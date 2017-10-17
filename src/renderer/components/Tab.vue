<template>
  <div class="tabs is-centered">
    <ul>
      <li :class="{'is-active': currentPage == 'jbosscontrol'}">
        <router-link to="/jbosscontrol"><span class="icon is-small"><i class="fa fa-image"></i></span>Control Jboss</router-link>
      </li>
      <li>
        <router-link to="/backupprogram"><span class="icon is-small"><i class="fa fa-image"></i></span>Backup Program</router-link>
      </li>
      <li>
        <a>
          <router-link to="/UploadProgram"><span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
          <span>Upload Program</span></router-link>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentPage: '/jbosscontrol'
      }
    },
    components: {
    },
    methods: {
    }
  }
</script>

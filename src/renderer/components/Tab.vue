<template>
  <div class="tabs is-centered">
    <ul>
      <li :class="{'is-active': currentPage == 'tab2'}">
        <router-link to="/jbosscontrol"><span class="icon is-small"><i class="fa fa-image"></i></span>Check Jboss Status</router-link>
      </li>
      <li>
        <router-link to="/backupprogram"><span class="icon is-small"><i class="fa fa-image"></i></span>Backup Program</router-link>
      </li>
      <li>
        <a>
          <router-link to="/UploadProgram"><span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
          <span>uploadprogram</span></router-link>
        </a>
      </li>
      <li>
        <a>
          <router-link to="/test"><span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
          <span>test function </span></router-link>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentPage: 'tab1'
      }
    },
    components: {
    },
    methods: {
    }
  }
</script>

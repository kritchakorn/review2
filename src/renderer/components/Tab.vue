<template>
  <div class="tabs is-centered">
    <ul>
      <li :class="{'is-active': currentPage == 'tab1'}">
        <a>
          <router-link to="/login"><span class="icon is-small"><i class="fa fa-image"></i></span>
          <span>Main Page</span></router-link>
        </a>
      </li>
      <li :class="{'is-active': currentPage == 'tab2'}">
        <router-link to="/jbosscontrol"><span class="icon is-small"><i class="fa fa-image"></i></span>Check Jboss Status</router-link>
      </li>
      <li>
        <router-link to="/backupjboss"><span class="icon is-small"><i class="fa fa-image"></i></span>Backup Program</router-link>
      </li>
      <li>
        <router-link to="/tab3"><span class="icon is-small"><i class="fa fa-image"></i></span>ssh test</router-link>
      </li>
      <li>
        <a>
          <router-link to="/tab2"><span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
          <span>Documents</span></router-link>
        </a>
      </li>
      <li>
        <a>
          <router-link to="/UploadProgram"><span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
          <span>uploadprogram</span></router-link>
        </a>
      </li>
      <li>
        <a>
          <router-link to="/UploadProgram2"><span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
          <span>uploadprogram2</span></router-link>
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

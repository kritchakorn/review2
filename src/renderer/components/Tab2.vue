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
        <router-link to="/checkobustatus"><span class="icon is-small"><i class="fa fa-image"></i></span>checkobustatus</router-link>
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

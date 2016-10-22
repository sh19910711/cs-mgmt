<template lang='pug'>
  .cs-page
    .cs-nav
      .cs-nav-left
        h1.cs-nav-brand codestand.io
        .cs-nav-team TODO(select team)
      .cs-nav-right
        ul.cs-nav-list
          li
            router-link(to="/dashboard") Dashboard
          li
            router-link(to="/applications") Applications
          li
            router-link(to="/devises") Devises
          li
            .cs-avater TODO(avater)
    .cs-apps
      .cs-panel(v-for="app in apps")
        .cs-panel-head {{app.name}}
        .cs-panel-body {{app.desc}}
</template>

<script>
  import WebAPI from 'webapi';

  export default {
    data() {
      return {
        apps: []
      };
    },
    created() {
      const client = new WebAPI(localStorage.getItem('cs-token'));
      const username = localStorage.getItem('cs-username');
      client.apps(username).then(apps => this.apps = apps);
    }
  }
</script>

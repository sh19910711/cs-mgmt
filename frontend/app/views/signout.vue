<template lang='pug'>
  .cs-page
    .cs-panel
      .cs-panel-header
        .cs-panel-title Sign out
      .cs-panel-body
        .cs-state {{state}}
        .cs-errors(v-if="errors.length > 0") {{errors}}
      .cs-panel-footer
        router-link(to="/") Home
</template>

<script>
  import WebAPI from 'webapi';

  export default {
    props: ['user-session-path'],
    data() {
      return {
        state: "Processing now...",
        errors: []
      }
    },
    mounted() {
      console.log('signout: created', localStorage.getItem('cs-token'));
      new WebAPI(localStorage.getItem('cs-token'))
        .signout(this.userSessionPath)
        .then(
          res => {
            this.state = 'OK, see you.';
            this.reset();
            this.move(150);
          },
          res => {
            this.state = 'Oops...';
            this.errors = res.response && res.response.errors || res.statusText;
            this.move(5000);
          }
        )
    },
    methods: {
      reset() {
        localStorage.removeItem('cs-token');
        localStorage.removeItem('cs-username');
      },
      move(delay) {
        setTimeout(_ => { this.$root.$router.push('/'); }, delay);
      }
    }
  }
</script>

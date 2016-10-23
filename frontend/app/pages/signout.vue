<template lang='pug'>
  .page
    .panel
      .panel-header
        .panel-title Sign out
      .panel-body
        .state {{state}}
        .message.message-error(v-if='error') {{error}}
      .panel-footer
        router-link(to='/') Home
</template>

<script>
  import API from 'lib/api';

  export default {
    data() {
      return { state: 'Processing now...', error: null }
    },
    mounted() {
      new API(localStorage.getItem('cs-token'))
        .signout()
        .then(
          res => {
            localStorage.removeItem('cs-token');
            localStorage.removeItem('cs-username');
            this.$root.$router.push('/');
            this.state = 'OK, see you';
          },
          err => {
            this.error = err;
            this.state = 'Error';
          }
        )
    }
  }
</script>

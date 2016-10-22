<style lang='sass' scoped>
  .cs-panel
    width: 360px
    margin: 128px auto
</style>

<template lang='pug'>
  .cs-page
    .cs-panel
      .cs-panel-title Sign in
      .cs-panel-body
        user-form(firstState="Sign in", method="post", :action="userSessionPath", :inputs="formInputs")
        hr
        router-link(to="/signup") Create new account
        span &nbsp;|&nbsp;
        router-link(to="/") Back
</template>

<script>
  export default {
    name: 'signin',
    props: ['user-session-path'],
    components: { 'user-form': require('components/form.vue') },
    data: () => {
      return {
        formSuccessCallback(xhr) {
          localStorage.setItem('cs-token', xhr.getResponseHeader('token'));
          localStorage.setItem('cs-username', xhr.getResponseHeader('username'));
          this.$router.push('/dashboard');
        },
        formInputs: [
          { name: 'name', type: 'text', placeholder: 'username', },
          { name: 'password', type: 'password', placeholder: 'password' }
        ]
      };
    }
  }
</script>

<template lang='pug'>
  .cs-page
    .cs-panel
      .cs-panel-title Sign in
      .cs-panel-body
        user-form(firstState="Sign in", method="post", :action="userSessionPath", :inputs="formInputs")
      .cs-panel-footer
        ul
          li
            span New to codestand.io?&nbsp;
            router-link(to="/signup") Sign up now.
          li
            router-link(to="/") Back to home
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
          this.$router.push('/');
        },
        formInputs: [
          { name: 'username', type: 'text', placeholder: 'username', },
          { name: 'password', type: 'password', placeholder: 'password' }
        ]
      };
    }
  }
</script>

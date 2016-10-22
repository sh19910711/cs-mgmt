<template lang='pug'>
  .cs-page
    .cs-panel
      .cs-panel-header
        .cs-panel-title Sign up
      .cs-panel-body
        user-form(firstState="Sign up", successCallback="/signin", method="post", :action="userRegistrationPath", :inputs="formInputs")
      .cs-panel-footer
        ul
          li
            span Have an account?&nbsp;
            router-link(to="/signin") Sign in.
          li
            router-link(to="/") Back to home
</template>

<script>
  export default {
    name: 'signup',
    props: ['user-registration-path'],
    components: {
      'user-form': require('components/form.vue')
    },
    data: _=> {
      return {
        formInputs: [
          { name: 'email', type: 'text', placeholder: 'e.g., brine@example.com' },
          { name: 'name', type: 'text', placeholder: 'e.g., brine', },
          { name: 'password', type: 'password', placeholder: 'at least 8 characters' }
        ]
      };
    }
  }
</script>

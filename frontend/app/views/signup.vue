<style lang='sass' scoped>
  .cs-panel
    width: 360px
    margin: 128px auto
</style>

<template lang='pug'>
  .cs-page
    .cs-panel
      .cs-panel-title Sign up
      .cs-panel-body
        user-form(firstState="Sign up", successCallback="/signin", method="post", :action="userRegistrationPath", :inputs="formInputs")
        hr
        router-link(to="/") Back
</template>

<script>
  export default {
    name: 'signin',
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

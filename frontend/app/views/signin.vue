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
        user-form(firstState="Sign in", :method="method", :action="action", :inputs="formInputs")
        hr
        router-link(to="/signup") Create new account
</template>

<script>
  export default {
    name: 'signin',
    props: ['method', 'action'], // to be passed from rails view
    components: {
      'user-form': require('components/form.vue')
    },
    data: _=> {
      return {
        formInputs: [
          { name: 'name', type: 'text', placeholder: 'username', },
          { name: 'password', type: 'password', placeholder: 'and password' }
        ]
      };
    }
  }
</script>

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
        user-form(firstState="Sign up", :method="method", :action="action", :inputs="formInputs")
        hr
        router-link(to="/") Back
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
          { name: 'name', type: 'text', placeholder: 'e.g., brine', },
          { name: 'email', type: 'text', placeholder: 'e.g., brine@example.com' },
          { name: 'password', type: 'password', placeholder: 'at least 8 characters' }
        ]
      };
    }
  }
</script>

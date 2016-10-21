<style lang='sass'>
  @import "../styles/color"
  body
    background: $color-main-light
</style>

<template lang='pug'>
  div.cs-page.cs-page-signin
    SignupForm(method="post" action="/api/auth/sign_up")
</template>

<script>
  export default {
    name: 'signin',
    components: {
      SignupForm: require('./signup/form.vue')
    },
    data: _=> {
      return {
      };
    }
  }
</script>

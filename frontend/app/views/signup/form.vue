<style lang="sass" scoped>
  .cs-panel
    background: #fff
    width: 360px
    padding: 9px
</style>

<template lang="pug">
  div.cs-panel
    div.cs-title Sign Up
    form.cs-form.cs-form-userform
      input(type="text")
      button Login
</template>

<script>
  export default {
    name: "userform"
  }
</script>

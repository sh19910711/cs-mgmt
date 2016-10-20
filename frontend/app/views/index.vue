<style lang="sass" scoped>
  $h1-color: #f00
  h1
    color: $h1-color
</style>

<template lang="pug">
  div.index
    h1 index
    p msg: {{msg}}
    input(type="text" v-model="msg")
    app(:name="appName")
    input(type="text" v-model="appName")
</template>

<script>
  module.exports = {
    name: 'index',
    components: {
      app: require('./app.vue')
    },
    data: _=> {
      return { msg: "hello", appName: "index-app" };
    }
  }
</script>

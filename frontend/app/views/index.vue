<style lang="sass" scoped>
  $h1-color: #f00
  h1
    color: $h1-color
</style>

<template>
  <div class="index">
    <h1>index</h1>
    <p>msg: {{msg}}</p>
    <app :name=appName></app>
    <input type="text" v-model="appName">
  </div>
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

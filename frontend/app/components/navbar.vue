<template lang='pug'>
  .navbar
    // login
    .nav(v-if='currentUser()')
      .nav-left
        h1.nav-brand
          router-link(to='/') codestand.io
      .nav-right
        ul.nav-list
          li
            router-link(to='/') Home
          li
            router-link(to='/applications') Applications
          li
            router-link(to='/devises') Devises
          li
            // TODO: show gravater or something and show pulldown menu
            router-link(to='/signout') Sign out

    // not login
    .nav(v-else)
      .nav-left
        h1.nav-brand
          router-link(to='/') codestand.io
      .nav-right
        ul.nav-list
          li
            router-link(to='/signin') Sign in
          li
            router-link(to='/signup') Sign up
</template>

<script>
  export default {
    name: 'navbar',
    methods: {
      currentUser() {
        return localStorage.getItem('cs-username');
      }
    }
  }
</script>

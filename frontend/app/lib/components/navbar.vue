<template lang='pug'>
  .cs-navbar
    // login
    .cs-nav(v-if='currentUser()')
      .cs-nav-left
        h1.cs-nav-brand
          router-link(to='/') codestand.io
      .cs-nav-right
        ul.cs-nav-list
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
    .cs-nav(v-else)
      .cs-nav-left
        h1.cs-nav-brand
          router-link(to='/') codestand.io
      .cs-nav-right
        ul.cs-nav-list
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

<style lang="sass" scoped>
  .cs-block
    margin-bottom: 32px
</style>

<template lang='pug'>
  .cs-page
    .cs-nav
      .cs-nav-left
        h1.cs-nav-brand codestand.io
      .cs-nav-right
        ul.cs-nav-list
          li
            router-link(to="/signin") Sign in
          li
            router-link(to="/signup") Sign up

    .cs-leading
      .cs-leading-head
        h1.cs-leading-title Welcome to codestand.io
      .cs-leading-body
        p Getting started with codestand.io.

    // descriptions
    .cs-container
      .cs-block
        h2.cs-block-head 1. Install CLI Toolchain
        .cs-block-body
          code
            | $ brew install codestand/codestand/codestand

      .cs-block
        h2.cs-block-head 2. Create and register your app
        .cs-block-body 
          code
            | $ codestand new --register led-blink

      .cs-block
        h2.cs-block-head 3. Link your device to the codestand.io
        .cs-block-body 
          code
            | $ codestand install

      .cs-block
        h2.cs-block-head 4. Deploy the app to the device
        .cs-block-body
          code
            | $ codestand deploy
      
</template>

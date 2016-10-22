<style lang="sass" scoped>
  .cs-block
    margin-bottom: 32px
</style>

<template lang='pug'>
  .cs-page
    navbar

    .cs-leading
      .cs-leading-head
        h1.cs-leading-title Welcome to codestand.io
      .cs-leading-body
        p Getting started with codestand.io.

    // descriptions
    .cs-container
      .cs-block
        h2.cs-block-head 1. Install CLI toolchain
        .cs-block-body
          h3 Mac OSX
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

<script>
  export default {
    components: {
      navbar: require('components/navbar.vue')
    }
  }
</script>

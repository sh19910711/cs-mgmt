<style lang='sass' scoped>
  .block
    margin-bottom: 32px
</style>

<template lang='pug'>
  .page
    navbar

    .leading
      .leading-header
        h1.leading-title Welcome to codestand.io
      .leading-body
        p Getting started with codestand.io.

    // descriptions
    .container
      .block
        h2.block-header 1. Install CLI toolchain
        .block-body
          h3 Mac OSX
          code
            | $ brew install codestand/codestand/codestand

      .block
        h2.block-header 2. Create and register your app
        .block-body
          code
            | $ codestand new --register led-blink

      .block
        h2.block-header 3. Link your device to the codestand.io
        .block-body
          code
            | $ codestand install

      .block
        h2.block-header 4. Deploy the app to the device
        .block-body
          code
            | $ codestand deploy

</template>

<script>
  export default {
    components: { navbar: require('components/navbar.vue') }
  }
</script>

<template lang='pug'>
  form.cs-form(:method='method', :action='action', onsubmit='return false;')
    .cs-form-control(v-for='input in inputs')
      userform-input(:input='input')
      .cs-form-errors(v-if='errors[input.name] && errors[input.name].length')
        | ERR: {{errors[input.name]}}

    .cs-form-control
      button.cs-button-success(v-on:click='submit') {{state}}
</template>

<script>
  import Request from 'request';

  export default {
    name: 'userform',
    components: { userformInput: require('./userform/input.vue') },
    props: ['success-callback', 'first-state', 'method', 'action', 'inputs'],
    data() {
      return {
        state: this.firstState,
        errors: {}
      };
    },
    methods: {
      submit() {
        const success = (xhr) => {
          this.state = 'Welcome';
          if (this.successCallback) this.$root.$router.push(this.successCallback);
          if (this.$parent.formSuccessCallback)  this.$parent.formSuccessCallback(xhr);
        }

        const fail = (xhr) => {
          const res = xhr.response;
          if (res && res.status === 'error') {
            this.errors = res.errors;
          } else {
            this.errors = { msg: xhr.statusText };
          }
          this.state = 'Retry';
        }

        this.state = 'Processing now...'
        const values = this.inputs.reduce((v, i) => { v[i.name] = i.value; return v }, {})
        Request.sendJSON(this.method, this.action, values).then(success, fail);
      }
    }
  }
</script>

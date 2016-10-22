<template lang='pug'>
  form.cs-form(:method="method", :action="action", onsubmit="return false;")
    .cs-form-control(v-for="input in inputs")
      label(:for="input.name") {{input.name}}
      div(v-if="input.type === 'password'")
        input(type="password", :name="input.name", :autocomplete="input.name", v-model="values[input.name]", :placeholder="input.placeholder")
      div(v-else)
        input(type="text", :name="input.name", :autocomplete="input.name", v-model="values[input.name]", :placeholder="input.placeholder")
      .cs-form-errors(v-if="errors[input.name] && errors[input.name].length")
        | ERR: {{errors[input.name]}}
    .cs-form-control
      button.cs-button-success(v-on:click='submit') {{state}}
</template>

<script>
  import Request from 'request';

  function getInitialValues(inputs) {
    return inputs.reduce(function(values, input) {
      values[input.name] = '';
      return values;
    }, {})
  }

  export default {
    name: 'user-form',
    props: ['success-callback', 'first-state', 'method', 'action', 'inputs'],
    data() {
      return {
        state: this.firstState,
        values: getInitialValues(this.inputs),
        errors: {},
      };
    },
    methods: {
      needAutoComplete() {
        return "off";
      },
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
        Request.sendJSON(this.method, this.action, this.values).then(success, fail);
      }
    }
  }
</script>

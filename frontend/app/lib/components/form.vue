<template lang='pug'>
  .cs-form
    .cs-form-control(v-for="input in inputs")
      label(:for="input.name") {{input.name}}
      div(v-if="input.type === 'password'")
        input(type="password", :name="input.name", v-model="values[input.name]", :placeholder="input.placeholder")
      div(v-else)
        input(type="text", v-model="values[input.name]", :placeholder="input.placeholder")
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
    props: ['first-state', 'method', 'action', 'inputs'],
    data() {
      return {
        state: this.firstState,
        values: getInitialValues(this.inputs),
        errors: {},
      };
    },
    methods: {
      submit() {
        const success = (res) => {
          if (res.status === 'success') {
            this.$root.$router.push('signin');
          } else {
            throw new Error(res);
          }
        }

        const fail = (res) => {
          if (res.status === 'error') {
            console.log(res.errors);
            this.errors = res.errors;
            this.state = 'Retry'
          } else {
            throw new Error(res);
          }
        }

        this.state = 'Sending...'

        Request.sendJSON(this.method, this.action, this.values).then(success).catch(fail);
      }
    }
  }
</script>

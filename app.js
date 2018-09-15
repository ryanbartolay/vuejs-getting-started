new Vue({
  el: '#vue-app',
  data: {
    output: "Pizza"
  },
  methods: {
    submitFood: function() {
      this.output = this.$refs.input.value;
    }
  },
  computed: {

  }
});

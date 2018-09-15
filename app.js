new Vue({
  el: '#vue-app',
  data: {
    name: "Ryan",
    job: "Software Engineer"
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name
    }
  }
});

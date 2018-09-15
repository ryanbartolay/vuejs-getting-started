new Vue({
  el: '#vue-app',
  data: {
    name: "Ryan",
    job: "Software Engineer",
    website: "http://ryan.com",
    age: 33,
    websiteHTML: '<a href="http://ryan.com">Home</a>'
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name
    }
  }
});

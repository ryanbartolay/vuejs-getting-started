new Vue({
  el: '#vue-app',
  data: {
    name: "Ryan",
    job: "Software Engineer",
    website: "http://ryan.com",
    age: 33,
    websiteHTML: '<a href="http://ryan.com">Home</a>',
    x: 0,
    y: 0,
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name
    },
    add: function(value) {
      this.age += value
    },
    subtract: function(value) {
      this.age -= value
    },
    updateXY: function(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
});

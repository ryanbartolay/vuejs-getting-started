new Vue({
  el: '#vue-app',
  data: {
    age: 33,
    a: 0,
    b: 0
  },
  computed: {
    addToA: function() {
      console.log("running a")
      return this.age + this.a
    },
    addToB: function() {
      console.log("running b")
      return this.age + this.b
    }
  }
});

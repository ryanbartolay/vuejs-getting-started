var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: "Vue App One"
  },
  methods: {

  },
  computed: {
    greet: function() {
      return "Hello from App ONE";
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: "Vue App Two"
  },
  methods: {
    changeTitle: function() {
      one.title = "title changed";
    }
  },
  computed: {
    greet: function() {
      return "Hello from App Two";
    }
  }
});

two.title="changed from outside";

Vue.component('greeting', {
  template: `
  <span>Hello World {{name}}
  <button v-on:click="changeName()">Change Name</button>
  </span>
  `,
  data: function() {
    return {
      name: "Ryan"
    }
  },
  methods: {
    changeName: function() {
      this.name = "Miguel";
    }
  }
});

var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: "Vue App One"
  },
  methods: {

  },
  computed: {

  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: "Vue App Two"
  },
  methods: {

  },
  computed: {

  }
});

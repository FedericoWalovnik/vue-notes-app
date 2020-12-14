const app = Vue.createApp({
  data() {
    return {
      notes: [],
      modalVisible: false,
    };
  },
  computed: {
    visible() {
      if (this.modalVisible) {
        return { visible: true };
      } else {
        return { hidden: true };
      }
    },
  },
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
      console.log(this.modalVisible);
    },
  },
});

app.mount("#vueInteractivity");

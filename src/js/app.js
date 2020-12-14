const app = Vue.createApp({
  data() {
    return {
      notes: [],
      modalVisible: false,
    };
  },
  computed: {},
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
      if (this.modalVisible) {
        return { modalVisible: true };
      } else {
        return { modalHidden: true };
      }
    },
  },
});

app.mount("#vueInteractivity");

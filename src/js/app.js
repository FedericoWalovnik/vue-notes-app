const app = Vue.createApp({
  data() {
    return {
      notes: [
        {
          text: "Hey hey hey, this note is comming from Vue. How cool is this?",
          date: "Dec 14, 2020",
          color: "orange",
        },
        {
          text: "Hey this is another note comming from Vue",
          date: "Dec 14, 2020",
          color: "pink",
        },
        {
          text: "There is no two without a three",
          date: "Dec 14, 2020",
          color: "pink",
        },
        {
          text: "There is no two without a three",
          date: "Dec 14, 2020",
          color: "green",
        },
        {
          text: "There is no two without a three",
          date: "Dec 14, 2020",
          color: "pink",
        },
      ],
      userTextInput: "",
      userColorInput: "cyan",
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
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    addNote() {
      const now = new Date();
      const userInputs = {
        text: this.userTextInput,
        date: `${this.formatDate(now)}`,
        color: this.userColorInput,
      };
      this.notes.push(userInputs);
      this.userTextInput = "";
      this.userColorInput = "cyan";
      this.toggleModal();
    },
    formatDate(now) {
      const month = now.getMonth();
      const day = now.getDay();
      const year = now.getFullYear();

      let formatedDate = `${month + 1}-${day}-${year}`;
      return formatedDate;
    },
  },
});

app.mount("#vueInteractivity");

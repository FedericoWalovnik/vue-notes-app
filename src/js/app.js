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
      userColorInput: "",
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
      this.userTextInput = "";
      this.userColorInput = "";
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    addNote() {
      const date = new Date();
      const userInputs = {
        text: this.userTextInput,
        date: date.getFullYear(),
        color: this.userColorInput,
      };
      this.notes.push(userInputs);
      this.toggleModal();
    },
  },
});

app.mount("#vueInteractivity");

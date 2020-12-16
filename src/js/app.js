const app = Vue.createApp({
  data() {
    return {
      notes: [],
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

      if (this.validateText(this.userTextInput)) {
        this.notes.push(userInputs);
        this.userTextInput = "";
        this.userColorInput = "cyan";
        this.toggleModal();
      } else {
        alert("Your note should be more than 3 characters!");
      }
    },
    formatDate(now) {
      let month = now.getMonth() + 1;
      const day = now.getDate();
      const year = now.getFullYear();

      //God of programming forgive me for doing this, I promise that I will learn to do it in a better way.
      if (month === 1) {
        month = "Jan";
      } else if (month === 2) {
        month = "Feb";
      } else if (month === 3) {
        month = "Mar";
      } else if (month === 4) {
        month = "Apr";
      } else if (month === 5) {
        month = "May";
      } else if (month === 6) {
        month = "Jun";
      } else if (month === 7) {
        month = "Jul";
      } else if (month === 8) {
        month = "Aug";
      } else if (month === 9) {
        month = "Sep";
      } else if (month === 10) {
        month = "Oct";
      } else if (month === 11) {
        month = "Nov";
      } else if (month === 12) {
        month = "Dec";
      }

      let formatedDate = `${month} ${day}, ${year}`;
      return formatedDate;
    },
    validateText(userInput) {
      if (userInput.length > 3) {
        return true;
      } else {
        return false;
      }
    },
  },
});

app.mount("#vueInteractivity");

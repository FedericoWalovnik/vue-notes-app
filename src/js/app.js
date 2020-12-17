const app = Vue.createApp({
  data() {
    return {
      notes: [],
      textInput: "",
      userColorInput: "cyan",
      modalVisible: false,
      action: "add",
      indexNote: "",
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
  mounted() {
    if (localStorage.getItem("notes")) {
      try {
        this.notes = JSON.parse(localStorage.getItem("notes"));
      } catch (e) {
        localStorage.removeItem("notes");
      }
    }
  },
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    },
    handleOpenButtons(event, inputAction) {
      this.action = inputAction;
      if (inputAction === "edit") {
        this.indexNote = event.target.getAttribute("index");
        this.textInput = this.notes[this.indexNote].text;
      }
      this.toggleModal();
    },
    handleSubmitButton() {
      if (this.action === "add") {
        this.addNote();
      } else if (this.action === "edit") {
        console.log(this.indexNote);
        this.editNote(this.indexNote);
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
      this.saveNotes();
    },
    addNote() {
      const now = new Date();
      const userInputs = {
        text: this.textInput,
        date: `${this.formatDate(now)}`,
        color: this.userColorInput,
      };

      if (this.validateText(this.textInput)) {
        this.notes.push(userInputs);
        this.textInput = "";
        this.userColorInput = "cyan";
        this.saveNotes();
        this.toggleModal();
      } else {
        alert("Your note should be more than 3 characters!");
      }
    },
    editNote(index) {
      this.notes[index].text = this.textInput;
      this.notes[index].color = this.userColorInput;
      this.textInput = "";
      this.saveNotes();
      this.toggleModal();
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
    saveNotes() {
      let parsed = JSON.stringify(this.notes);
      localStorage.setItem("notes", parsed);
    },
  },
});

app.mount("#vueInteractivity");

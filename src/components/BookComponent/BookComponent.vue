<template>
  <li class="list-item column">
    <div>
      <h3 class="book-title">{{ title }}</h3>
      <p v-if="isAuthorOpen">{{ author }}</p>
      <ButtonComponent
        :text="isAuthorOpen ? 'Hide author' : 'show author'"
        @action="showAuthor"
      />
      <ButtonComponent
        v-if="isMark"
        text="Unmark"
        color="danger"
        @action="unmark"
      />
      <ButtonComponent
        v-if="!isMark"
        color="primary"
        text="Mark"
        @action="mark"
      />
      <ButtonComponent
        :text="isShowBooks ? 'hide other books' : 'show other books'"
        @action="showBooks"
        :color="isShowBooks ? 'danger' : ''"
      />
    </div>
    <div v-if="isShowBooks" class="pt-1">
      <BookListComponent :books="books" />
    </div>
  </li>
</template>

<script>
import ButtonComponent from "../ButtonComponent";
import BookListComponent from "../BookListComponent";
export default {
  //   props: ["title", "author", "id", "isOpen"],

  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: Boolean,

    isMark: Boolean,
    books: Array,
  },

  emits: {
    addPoint: null,
    removePoint: null,
    markedBooks(id) {
      if (id) {
        return true;
      }
      console.log("No id for emit");
      return false;
    },
    unmarkedBooks(id) {
      if (id) {
        return true;
      }
      console.log("No id for emit");
      return false;
    },
  },
  data() {
    return {
      isAuthorOpen: this.isOpen,
      isShowBooks: false,
    };
  },
  methods: {
    checkAuthor() {
      if (this.isAuthorOpen) {
        this.$emit("removePoint");
      }
      this.isAuthorOpen = false;
    },
    showBooks() {
      this.isShowBooks = !this.isShowBooks;
    },
    showAuthor() {
      this.isAuthorOpen = !this.isAuthorOpen;
      if (this.isAuthorOpen) {
        this.$emit("addPoint");
      }
      if (!this.isAuthorOpen) {
        this.$emit("removePoint");
      }
    },
    mark() {
      this.checkAuthor();
      this.$emit("markedBooks", this.id);
    },
    unmark() {
      this.checkAuthor();
      this.$emit("unmarkedBooks", this.id);
    },
  },
  components: {
    ButtonComponent,
    BookListComponent,
  },
};
</script>
<style>
.book-title {
  max-width: 500px;
}
.column {
  flex-direction: column;
}
</style>

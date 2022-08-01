<template>
  <li class="list-item">
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
  </li>
</template>

<script>
import ButtonComponent from "../ButtonComponent";
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
    };
  },
  methods: {
    checkAuthor() {
      if (this.isAuthorOpen) {
        this.$emit("removePoint");
      }
      this.isAuthorOpen = false;
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
  },
};
</script>
<style>
.book-title {
  max-width: 500px;
}
</style>

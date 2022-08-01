<template>
  <li class="list-item">
    <h3 class="book-title">{{ title }}</h3>
    <p v-if="isAuthorOpen">{{ author }}</p>
    <button class="btn" @click="showAuthor">
      {{ isAuthorOpen ? "Hide author" : "show author" }}
    </button>
    <button v-if="!isMark" class="btn primary" @click="mark">Mark</button>
  </li>
</template>

<script>
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
  },
  data() {
    return {
      isAuthorOpen: this.isOpen,
    };
  },
  methods: {
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
      if (this.isAuthorOpen) {
        this.$emit("removePoint");
      }
      this.isAuthorOpen = false;

      this.$emit("markedBooks", this.id);
    },
  },
};
</script>
<style>
.book-title {
  max-width: 500px;
}
</style>

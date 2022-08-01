<template>
  <li class="list-item">
    <h3 class="book-title">{{ title }}</h3>
    <p v-if="isAuthorOpen">{{ author }}</p>
    <button class="btn" @click="showAuthor">
      {{ isAuthorOpen ? "Hide author" : "show author" }}
    </button>
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
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
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
  },
};
</script>
<style>
.book-title {
  max-width: 500px;
}
</style>

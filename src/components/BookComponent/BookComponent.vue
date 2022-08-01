<template>
  <li class="list-item">
    <h3>{{ title }}</h3>
    <p v-if="isOpen">{{ author }}</p>
    <button class="btn" @click="isOpen = !isOpen">show author</button>
  </li>
</template>

<script>
export default {
  //   props: ["title", "author", "id", "isOpen"],
  props: {
    title: String,
    author: String,
    id: Number,
    isOpen: Boolean,
  },
  data() {
    return {};
  },
};
</script>

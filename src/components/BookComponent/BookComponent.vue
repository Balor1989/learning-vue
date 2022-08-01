<template>
  <ul class="card center">
    <li>
      <h3>{{ title }}</h3>
      <p v-if="isOpen">{{ author }}</p>
      <button class="btn" @click="isOpen = !isOpen">show author</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["title", "author", "id", "isOpen"],
  data() {
    return {};
  },
};
</script>

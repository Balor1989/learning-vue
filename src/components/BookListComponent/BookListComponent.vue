<template>
  <ul>
    <li v-for="({ id, title }, idx) in books" :key="id">
      {{ idx + 1 }}. {{ title }}
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["books"],
};
</script>

<style></style>

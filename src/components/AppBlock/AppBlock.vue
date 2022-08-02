<template>
  <div class="container pt-1">
    <div class="card">
      <slot name="title"></slot>

      <!-- has name "default" -->
      <slot>No text</slot>

      <div v-if="$slots.button">
        <slot name="button"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

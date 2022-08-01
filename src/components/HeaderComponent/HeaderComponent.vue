<template>
  <div class="card center">
    <h2 class="header-title">{{ title }}</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum doloremque
      hic consequatur voluptate? Dolore, iure!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "This is the header from data",
    };
  },
};
</script>

<style>
.header-title {
  font-weight: 700;
}
</style>

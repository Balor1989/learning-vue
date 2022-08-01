<template>
  <div class="card">
    <div class="title-container">
      <h2 class="header-title">{{ title }}</h2>
      <p class="rate">Open:{{ openRate }}</p>
    </div>
    <div class="description">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
        doloremque hic consequatur voluptate? Dolore, iure!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openRate: Number,
  },
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
.title-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.description {
  text-align: center;
}
.rate {
  font-size: 18px;
}
</style>

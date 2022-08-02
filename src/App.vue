<template>
  <div class="container pt-1">
    <div class="card center"><h2>Slots</h2></div>
  </div>

  <AppBlock>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut obcaecati
      veniam illo, perferendis inventore nulla.
    </p>
    <template v-slot:title>
      <h3>This is title</h3>
    </template>
    <template #button>
      <button class="btn">Button</button>
    </template>
  </AppBlock>
  <AppList></AppList>
</template>

<script>
import AppBlock from "./components/AppBlock";
import AppList from "./components/AppList";
export default {
  components: { AppBlock, AppList },
};
</script>

<style scoped>
h3 {
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>

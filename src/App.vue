<template>
  <div class="container pt-1">
    <div class="card center">
      <AsyncComponent />
      <h2>Dymamic and Async components</h2>
      <div class="d-flex">
        <ButtonComponent
          :color="firstColor"
          text="first"
          @action="active = 'first'"
        />

        <ButtonComponent
          :color="secondColor"
          text="second"
          @action="active = 'second'"
        />
      </div>
    </div>
    <FirstTestComponent v-if="active === 'first'" />
    <SecondTestComponent v-else-if="active === 'second'" />
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import ButtonComponent from "./components/ButtonComponent";
import { SecondTestComponent } from "./components/TestComponents";
import { FirstTestComponent } from "./components/TestComponents";
export default {
  data() {
    return {
      active: "first",
    };
  },
  computed: {
    componentName() {
      if (this.active === "first") {
        return "FirstTestComponent";
      }
      return "SecondTestComponent";
    },
    firstColor() {
      return this.active === "first" ? "primary" : "";
    },
    secondColor() {
      return this.active === "second" ? "primary" : "";
    },
  },
  components: {
    ButtonComponent,
    FirstTestComponent,
    SecondTestComponent,
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}
</style>

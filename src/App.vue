<template>
  <div class="container pt-1">
    <HeaderComponent />
    <ul class="card">
      <BookComponent
        v-for="{ id, title, author } in books"
        :key="id"
        :id="id"
        v-bind:title="title"
        :author="author"
        :is-open="isOpen"
      />
    </ul>
  </div>
</template>

<script>
import BookComponent from "./components/BookComponent";
export default {
  name: "App",
  components: {
    BookComponent,
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title:
            "PYTHON: PROGRAMMING: A BEGINNER’S GUIDE TO LEARN PYTHON IN 7 DAYS",
          author: "Ramsey Hamilton",
        },
        {
          id: 2,
          title:
            "Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People",
          author: "Aditya Bhargava",
        },
        {
          id: 3,
          title: "YOU DON`T KNOW JAVASCRIPT 6 VOLUME SET ",
          author: "Kyle Simpson",
        },
      ],
      isOpen: false,
    };
  },
};
</script>

<style></style>

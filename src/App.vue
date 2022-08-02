<template>
  <div class="container pt-1">
    <HeaderComponent :open-rate="openRate" :marked="marked" />

    <ul class="card">
      <BookComponent
        v-for="{ id, title, author, isMark } in books"
        :key="id"
        :id="id"
        v-bind:title="title"
        :author="author"
        :is-open="isOpen"
        :is-mark="isMark"
        :books="books"
        v-on:add-point="openRate += 1"
        @remove-point="openRate -= 1"
        @marked-books="markedBooks"
        @unmarked-books="unmarkedBooks"
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
  methods: {
    markedBooks(id) {
      const idx = this.books.findIndex((book) => book.id === id);
      this.books[idx].isMark = true;
      this.marked += 1;
    },
    unmarkedBooks(id) {
      const book = this.books.find((book) => book.id === id);
      book.isMark = false;
      this.marked -= 1;
    },
  },
  data() {
    return {
      openRate: 0,
      marked: 0,
      books: [
        {
          id: 1,
          title:
            "PYTHON: PROGRAMMING: A BEGINNER’S GUIDE TO LEARN PYTHON IN 7 DAYS",
          author: "Ramsey Hamilton",
          isMark: false,
        },
        {
          id: 2,
          title:
            "Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People",
          author: "Aditya Bhargava",
          isMark: false,
        },
        {
          id: 3,
          title: "YOU DON`T KNOW JAVASCRIPT 6 VOLUME SET ",
          author: "Kyle Simpson",
          isMark: false,
        },
      ],
      isOpen: false,
    };
  },
};
</script>

<style></style>

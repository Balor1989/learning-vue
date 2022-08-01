<template>
  <div class="container pt-1">
    <div class="card center">
      <h2 class="header-title">{{ title }}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
        doloremque hic consequatur voluptate? Dolore, iure!
      </p>
    </div>
    <ul class="card" v-for="{ id, title, author } in books" :key="id">
      <li>
        <h3>{{ title }}</h3>
        <p>{{ author }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "This is the header from data",
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
          title: "YOU DON`T KNOW JS 6 VOLUME SET",
          author: "Kyle Simpson",
        },
      ],
    };
  },
};
</script>

<style>
.header-title {
  font-weight: 700;
}
</style>

<template>
  <div class="container">
    <div class="card">
      <ul>
        <li v-for="item in 5" :key="item"><slot :i="item"></slot></li>
      </ul>
    </div>
  </div>
</template>

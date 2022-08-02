<template>
  <div class="container">
    <div class="card">
      <ul>
        <li v-for="item in 5" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<template>
  <div class="card">
    <img :src="user.image" alt="Image" />
    <h3>{{ user.Nom }}</h3>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserCard',
  props: {
    user: Object
  }
})
</script>

<style scoped>
  main {
    border: 1px solid black;
    width: 90vw;
    height: 90%;
  }
  .card {
  width: 300px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card img {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.card h3 {
  margin: 16px;
  font-size: 24px;
}
</style>
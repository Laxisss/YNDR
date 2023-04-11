<template>
  <main>
    {{ user.Nom }}
  </main>
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
</style>
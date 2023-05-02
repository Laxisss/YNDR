<template>
  <main>
    <UserCarousel v-for="(user, index) in userList" :key="index" :index="index" :user="user"/>
    <h3>Il n'y a plus de joueurs dans votre région</h3>
  </main>
</template>

<script>
import UserCarousel from "./UserCarousel.vue"
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    UserCarousel
  },
  data() {
    return {
      userList: []
    }
  },
  mounted () {
    fetch('http://localhost:3000/users/')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.userList = data
    })
  }
};
</script>

<style scoped>
main {
  overflow-y: hidden;
  height: 100%;
}
</style>
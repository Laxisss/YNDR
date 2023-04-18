<template>
  <swiper ref="swiperRef" :options="swiperOptions" @slideChange="onSlideChange" @init="onSwiperInit">
    <swiper-slide
      v-for="(user, index) in userList"
      :key="index"
    >
      <!-- <div class="card">
        <img :src="user.image" alt="Image" />
        <h3>{{ user }}</h3>
      </div> -->
      <UserCard :user="user"/>
    </swiper-slide>
    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import UserCard from "@/components/UserCard.vue";
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    UserCard
  },
  data() {
    return {
      userList: [],
      swiperReady: false,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
          slideChange: (swiper) => {
            this.onSlideChange(swiper);
          },
        },
      },
      slides: [
        { image: "url_image_1", title: "Titre 1" },
        { image: "url_image_2", title: "Titre 2" },
        // Ajoutez d'autres diapositives ici
      ],
    };
  },
  methods: {
    onSwiperInit() {
      this.swiperReady = true;
    },
    onSlideChange(swiper) {
      console.log("slideChanged")
      if (this.swiperReady) {
        // swiper.slideNext();
      }
      else {
        return
      }
      if (swiper.activeIndex > swiper.previousIndex) {
        this.onSwipeRight();
      } else {
        this.onSwipeLeft(swiper);
      }
    },
    onSwipeLeft(swiper) {
      console.log("Swipe vers la gauche");
      swiper.slideNext();
      swiper.slideNext();
      // Ajoutez votre code ici pour gérer le swipe vers la gauche
    },
    onSwipeRight() {
      console.log("Swipe vers la droite");
      // Ajoutez votre code ici pour gérer le swipe vers la droite
    },
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
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 300px;
  height: 400px;
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
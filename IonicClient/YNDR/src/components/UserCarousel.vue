<template>
  <swiper :class="!active ? 'idle' : ''" ref="swiperRef" :options="swiperOptions" @slideChange="onSlideChange" @init="onSwiperInit">
    <swiper-slide :class="!active ? 'idle' : ''">Left</swiper-slide>
    <swiper-slide>
      <UserCard :user="user"/>
    </swiper-slide>
    <swiper-slide :class="!active ? 'idle' : ''">right</swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import UserCard from "@/components/UserCard.vue";
import "swiper/swiper-bundle.min.css";

export default {
  name: 'userCarousel',
  components: {
    Swiper,
    SwiperSlide,
    UserCard
  },
  props: {
    user: Object,
    index: Number
  },
  data() {
    return {
      active: false,
      swiperReady: false,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: true,
        on: {
          slideChange: (swiper) => {
            this.onSlideChange(swiper);
          },
        },
      }
    };
  },
  methods: {
    onSwiperInit(swiper) {
      this.swiperReady = true;
      swiper.slideNext();
      // console.log('init')
      this.active = true
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
        this.onSwipeLeft();
      }
    },
    onSwipeLeft() {
      console.log("Swipe vers la gauche");
      // swiper.slideNext();
      // swiper.slideNext();
      this.active = false
      // Ajoutez votre code ici pour gérer le swipe vers la gauche
    },
    onSwipeRight() {
      console.log("Swipe vers la droite");
      this.active = false
      // Ajoutez votre code ici pour gérer le swipe vers la droite
    },
  }
};
</script>

<style scoped>
.idle {
  display: none;
  /* animation: 1s disappear; */
}
/* @keyframes disappear {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0);
    display: none;
  }
} */
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
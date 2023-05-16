<template>
  <swiper :class="!active ? 'idle' : ''" ref="swiperRef" :options="swiperOptions" @slideChange="onSlideChange"
    @init="onSwiperInit">
    <swiper-slide :class="!active ? 'idle' : ''">Left</swiper-slide>
    <swiper-slide>
      <span class="dislike-container">
        <span class="html-entity">
          &times;
        </span>
      </span>
      <UserCard :user="user" />
      <span class="like-container">
        <span class="html-entity">
          &hearts;
        </span>
      </span>
    </swiper-slide>
    <swiper-slide :class="!active ? 'idle' : ''">right</swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import UserCard from "@/components/UserCard.vue";
import "swiper/swiper-bundle.min.css";
import Swal from 'sweetalert2'

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
      console.log("Swipe vers la droite");
      if (this.active) {
        fetch('http://localhost:3000/likes', {
          method: 'post',
          headers: {
            authorization: `Bearer ${localStorage.getItem('YNDR-Token')}`
          },
          body: {
            ID_Utilisateur: this.user.ID_Utilisateur
          }
        })
          .then(res => res.text())
          .then(data => {
            console.log(data)

            fetch('http://localhost:3000/likes/' + this.user.ID_Utilisateur + "/me", {
              method: 'get',
              headers: {
                authorization: `Bearer ${localStorage.getItem('YNDR-Token')}`
              }
            })
              .then(res => res.json())
              .then(data => {
                if (data.length > 0) {
                  console.log('me')
                  Swal.fire({
                    title: "It's a match !",
                    text: "Vous et "+ this.user.Prenom +" "+ this.user.Nom +" vous êtes likés mutuellement",
                    icon: 'success',
                    backdrop: false
                  })
                }
              })
          })
      }
      this.active = false
      // Ajoutez votre code ici pour gérer le swipe vers la gauche
    },
    onSwipeRight() {
      console.log("Swipe vers la gauche");
      // if(this.active) {

      // }
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

.html-entity {
  filter: invert(1);
}

.dislike-container {
  border-radius: 50%;
  background-color: red;
  aspect-ratio: 1 / 1;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  margin-right: 1rem;
}

.like-container {
  border-radius: 50%;
  background-color: rgb(71, 212, 71);
  aspect-ratio: 1 / 1;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  margin-left: 1rem;
}

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
}</style>
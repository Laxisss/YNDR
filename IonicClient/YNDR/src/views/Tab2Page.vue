<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="page" :fullscreen="true">
      <!-- <div class="container carousel" ref="carousel">
        <Swiper
        :modules="modules"
        :slides-per-view="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="(item, index) in userList" :key="index">
            <UserCard :user="item" />
          </SwiperSlide>
        </Swiper>
      </div> -->
      <TinderCarousel/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
// import UserCard from '@/components/UserCard.vue';
import TinderCarousel from '@/components/TinderCarousel.vue'
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/zoom';
// import '@ionic/vue/css/ionic-swiper.css';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Pagination, Scrollbar, Zoom } from 'swiper';


export default defineComponent({
  name: 'Tab2Page',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, TinderCarousel //UserCard,// Swiper, SwiperSlide
  },
  data () {
    return {
      userList: [],
      //modules: [Pagination, Scrollbar, Zoom]
    }
  },
  methods: {

  },
  
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-content {
  padding: 16px;
  text-align: center;
}

.card-content h2 {
  margin-bottom: 8px;
  font-size: 24px;
}

.card-content p {
  font-size: 16px;
  color: #777;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mon Profil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mon Profil</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="container">
        <div class="img-container">
          <img :src="randomImage()"/>
        </div>
        <div class="data-container">
          <h3>{{ me.Nom }} {{ me.Prenom }}</h3>
          <p>
            {{ me.AdresseMail }}
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tab3Page',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent
  },
  data () {
    return {
      me: {}
    }
  },
  methods: {
    randomImage () {
      const rand = Math.floor(Math.random() * 5);
      const imgName = `profile-${rand}.png`;
      const img = require(`@/assets/avatars/${imgName}`);
      return img;
    }
  },
  mounted () {
    fetch("http://localhost:3000/users/me", {
      method: 'get',
      headers: {
        authorization: `Bearer ${localStorage.getItem('YNDR-Token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.me = data
    })
    fetch("http://localhost:3000/link/me", {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem('YNDR-Token')}`
      }
    })
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 5px 5px 5px 5px gainsboro;
  margin-top: 10px;
  gap: 1rem;
}

</style>

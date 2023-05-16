<template>
  <div class="card">
    <!-- {{ traits }}
    {{ myTraits }} -->
    <img :src="user.image || randomImage()" alt="Image" />
    <div class="info">
      <h3>{{ user.Nom }}</h3>
      <p>{{ user.Prenom }}</p>
      <span v-for="(monTrait, index) in myTraits" style="overflow-y: scroll;" :key="index">
        <span v-if="index > 0">, </span>
        <span v-if="traits.find(leTrait => leTrait.ID_Trait == monTrait)?.Nom">
          {{ traits.find(leTrait => leTrait.ID_Trait == monTrait).Nom }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserCard',
  props: {
    user: Object
  },
  data () {
    return {
      traits: [],
      myTraits: []
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
    const id = this.user.ID_Utilisateur;
    fetch('http://localhost:3000/traits', {
      method: 'get',
      headers: {
        authorization: `Bearer ${localStorage.getItem('YNDR-Token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.traits = data
    })

    fetch('http://localhost:3000/link/'+id, {
      method: 'get',
      headers: {
        authorization: `Bearer ${localStorage.getItem('YNDR-Token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.myTraits = data.map(elem => elem.ID_Trait)
    })
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

.card .info {
  margin: 16px;
  /* font-size: 24px; */
}

.card img {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

</style>
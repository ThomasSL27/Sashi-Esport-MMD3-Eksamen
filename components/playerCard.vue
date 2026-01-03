<script setup>
import { ref } from 'vue';

const url = 'https://mmd3.finnw.dk/wp-json/wp/v2/posts?_embed';
const { data } = await useAsyncData('players', () => $fetch(url));

// Track flipped state per card
const flipped = ref({});
const toggleFlip = (id) => {
  flipped.value[id] = !flipped.value[id];
};
</script>

<template>
  <div class="player-card" v-for="player in data?.slice(0, 5)" :key="player.id">
    <div 
      class="card-inner" 
      :class="{ flipped: flipped[player.id] }" 
      @click="toggleFlip(player.id)"
    >
      <div class="card-front">

        <!-- IMAGE + HOVER TEXT -->
        <div class="img-hover-wrap">
          <img :src="player.acf?.playerpic" alt="Player Picture">

          <!-- TEXT ON HOVER -->
          <span class="hover-text">Shoot To Flip!</span>
        </div>

        <hr class="hr">

        <div class="info">
          <h3>{{ player.acf?.playername }}</h3>

          <div class="row">
            <i class="fa-solid fa-star"></i>
            <p>{{ player.acf?.playerrole }}</p>
          </div>

          <div class="row">
            <i class="fa-solid fa-location-dot"></i>
            <p>{{ player.acf?.playercountry }}</p>
          </div>
        </div>
      </div>

      <div class="card-back">
        <h3>HLTV Rating: {{ player.acf?.playerrating }}</h3>
        <p>{{ player.acf?.playername }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 1. THE CONTAINER */
.player-card {
  width: 220px;
  min-height: 400px;
  perspective: 1000px;
  background-color: transparent;
  cursor: url(/assets/img/Vector\ \(3\).svg), auto;
  margin-bottom: 2rem;
}

/* 2. THE INNER WRAPPER */
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

/* Flipped on click */
.card-inner.flipped {
  transform: rotateY(180deg);
}

/* 3. SHARED SIDE STYLES */
.card-front, .card-back {
  width: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  background-color: rgb(19, 19, 19);
  color: white;
  padding: 0.5rem;

}

.card-front {
  position: relative;
  z-index: 2;
}

.card-back {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


/* 5. IMAGE HOVER BOX EFFECT */
.img-hover-wrap {
  position: relative;
  display: inline-block;
  width: 100%;
}

.img-hover-wrap img {
  width: 100%;
  height: auto;
  display: block;
}

/* Yellow border behind image */
.img-hover-wrap::before {
  content: "";
  position: absolute;
  top: -8px;
  right: -8px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  border-top: 15px solid red;
  border-right: 15px solid red;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translate(10px, 10px);
}

.player-card:hover .img-hover-wrap::before {
  opacity: 1;
  transform: translate(0, 0);
}

/* 6. TEXT THAT APPEARS ON HOVER */
.hover-text {
  position: absolute;
  top: -30px; /* sits above the image */
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  background: red;
  color: white;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 2px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.player-card:hover .hover-text {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* 7. CONTENT STYLES */
.info { 
  margin: 0.5rem;
}

.row { 
  display: flex; 
  padding: 0.1rem; 
  align-items: center; 
  gap: 1.5rem; 
}

h3 { 
  padding: 0; 
  margin: 0.3rem 0; 
}

i { 
  color: red; 
}

.fa-star + p { 
  color: red; 
}

.fa-location-dot { 
  color: white; 
}

p { 
  margin: 0; 
}

.hr { 
  border: 0; 
  border-top: 1px solid #333; 
  margin: 0.5rem 0; 
}
</style>

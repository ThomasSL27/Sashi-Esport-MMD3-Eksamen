<script setup>

const url = 'https://mmd3.finnw.dk/wp-json/wp/v2/posts?_embed';
const { data} = await useAsyncData('players', () => $fetch(url));



</script>

<template>
  <div class="player-card" v-for="player in data?.slice(0, 5)" :key="player.id">
    <img :src="player.acf?.playerpic" alt="Player Picture">
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
</template>


<style scoped>
.info{
    margin: .5rem;
}
.player-card {
    border: 2px solid transparent;
    padding: .5rem;
    background-color: rgb(19, 19, 19);
  color: white;
  width: 250px;
  img{
    width: 100%;
    margin: 0 auto;
  }
  cursor: pointer;
}

.player-card:hover {
  border: 2px solid var(--mainRed);
}


.row {
  display: flex;
  padding: .1rem;
  align-items: center;
  gap: 8px; 
}

h3{
    padding: 0;
    margin: 0.3rem 0;
}

i {
  color: red;
}
.fa-star + p {
  color: red;
}

.fa-location-dot{
    color: white;
}

p {
  margin: 0; 
}

</style>
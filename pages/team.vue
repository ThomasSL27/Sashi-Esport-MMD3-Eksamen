<script setup>

</script>

<template>
<main>
<TheNav />
<gameSlider />
<section class="hero">
    <img src="/assets/img/SashiRetakeWin.jpg" alt="">
</section>
<section class="team">
    <h1>SASHI <span>ESPORT</span> Team</h1>
    <div class="cards">
        <playerCard />
    </div>
</section>
</main>
</template>

<style scoped>
.hero img{
    width: 100vw;
    height: 50vh;
    object-fit: cover;
     -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0,0,0,1) 70%,
    rgba(0,0,0,0) 100%
  );
  mask-image: linear-gradient(
    to bottom,
    rgba(0,0,0,1) 70%,
    rgba(0,0,0,0) 100%
  );
}
.cards {
  display: grid;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  gap: .5rem;
  justify-items: center;
  align-items: center;
}
.team h1 {
  text-align: center;
}

.team{
    margin: 2rem;
}
</style>
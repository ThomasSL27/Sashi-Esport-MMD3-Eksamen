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
        <hr class="hr">
        <WinCounter />
        <hr class="hr">
<section class="voiceComms">
  <div class="video">
<iframe width="800" height="450" src="https://www.youtube.com/embed/zRUhOwvVBvo?si=fPhgpOBNWgo2uOpZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class="videoText">
    <h2>Inside the server: <span>Team Voice Comms</span></h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi mollitia quos modi, perferendis iure deserunt impedit officia quae porro unde ullam accusantium debitis facilis provident quam! Quod eum corrupti sunt?</p>
  </div>
</section>
<hr class="hr">
<calendar />
    <TheFooter /> 
</main>
</template>

<style scoped>
.voiceComms{
  display: flex;
  gap: 1rem;
  padding: 2rem;
}
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
@media (max-width: 700px){
  .cards {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-items: center;
  align-items: center;
}
iframe{
  width: 100%;
  height: 300px;
}
.voiceComms{
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  padding: 0;
  p, h2{
    padding: .5rem;
  }
}
}
</style>
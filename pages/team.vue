<script setup>
</script>

<template>
<main>
<TheNav />
<gameSlider />
<section class="hero">
    <img src="/assets/img/SashiRetakeWin.webp" alt="Sashi Esport Winning OMEN RETAKE">
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
<section class="voiceCommsSection">
  <div class="video">
<iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/zRUhOwvVBvo?si=fPhgpOBNWgo2uOpZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div class="white-box">
    <h2>Inside the server: <span>Team Voice Comms</span></h2>
    <p>Jump inside the action and hear every moment unfold. <br> Listen to the comms from our match against Ruby as Sashi Esport fires off callouts, reacts in real time, and battles through every clutch situation.</p>
  </div>
</section>
<hr class="hr">
<calendar />
</main>
 <scrollToTop />
<TheFooter /> 
</template>

<style scoped>
/* highlights section styling */
/* styling af video */
.voiceCommsSection{
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem 4rem;
}

/* styling af kassen */
.white-box {
  background: white;
  padding: 2rem;
  width: clamp(200px, 350px, 500px);
  height: clamp(200px, 300px, 400px);
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.white-box p{
  color: black;
}
.white-box h2{
  color: black;
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
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem;
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
  width: 100vw;
  height: 300px;
  padding: 0;
}
.voiceCommsSection{
  flex-direction: column;
  padding: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
}
</style>
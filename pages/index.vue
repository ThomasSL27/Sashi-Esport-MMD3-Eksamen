<script setup>
// Side‑metadata til <head> (titel og beskrivelse til SEO)
useHead({
  title: "Sashi Esport - Forside",
  meta: [
    { name: "description", content: "Forside for Sashi Esport" }
  ]
})
</script>

<template>
  <main>
    <TheNav />
    <gameSlider />
    <section>
    <TheLogo />
    </section>
    <hr class="hr">
    <section class="wins">
      <WinCounter />
    </section>
    <section>
    </section>
    <hr class="hr">
    <section class="team" data-aos="fade-up" data-aos-duration="1000">
      <div class="teamIntro" id="teamIntro">
        <h2>Our <span>Roster</span></h2>
        <p>Meet our players</p>
        <p id="flip">Flip cards for more info</p>
      </div>
      <div class="cards">
        <playerCard />
      </div>
      <div class="coach">
        <p>Coach: Hunden</p>
      </div>
    </section>
    <hr class="hr">
    <section class="youtube">
      <div class="sashiYT">
        <h2>Sashi <span>Vlogs</span></h2>
      </div>
      <updates />
    </section>
    <hr class="hr">
    <section class="results">
      <h2>Recent <span>Results</span></h2>
      <calendar />
    </section>
  </main>
  <scrollToTop />
    <TheFooter />
</template>

<style scoped>
  #flip{
    display: none;
  }
  .youtube{
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1rem;
  }
.sashiYT{
  display: flex;
  justify-content: center;
}
.sashiYT h2{
  padding-bottom: 2rem;
}

.coach{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(55, 55, 55);
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  width: fit-content;
}
.results{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem;
  gap: 1rem;
}
.greyBtn{
  color: white;
  background-color: rgb(55, 55, 55);
  border: none;
  padding: 1rem;
  cursor: pointer;
}
.greyBtn:hover{
  background-color: rgb(72, 72, 72);
}
.redBtn{
  color: white;
  background-color: red;
  border: none;
  padding: 1rem;
  cursor: pointer;
}
.redBtn:hover{
    background-color: rgb(190, 0, 0);
  }
.buttonDiv{
  display: flex;
  gap: 1rem;
}
.teamIntro{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    padding: 0;
    margin: 0;
  }
  p{
    padding: 0;
    margin: 1rem;
    color: white;
    font-size: 1rem;
  }
}
.cards {
  display: grid;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  gap: .5rem;
  justify-items: center;
  padding-top: 1rem;
}

.team{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem;
}


@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 0.8;
  }
}
@media (max-width: 700px){

.cards {
  display: flex;
  flex-direction: column;
}
.youtube{
  padding: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.results{
  display: flex;
  flex-direction: column;
  padding: 0rem;
  gap: 1rem;
}
.results h2{
  padding-top: 2rem;
}
#flip{
  display: block;
}
}
</style>
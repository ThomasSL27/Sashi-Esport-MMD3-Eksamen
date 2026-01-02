<script setup>
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
      <article data-aos="fade-up">
        <div class="smoke"></div>
        <img src="@/assets/img/sashiEsportLogo.png" alt="Sashi Logo" id="sashiLogo" data-aos="zoom-in">
        <h1>SASHI <span>ESPORT</span></h1>
        <h2>Proffesional Counter-Strike 2 Team</h2>
        <div class="buttonDiv">
          <NuxtLink to="/team"><button class="redBtn">Meet the team</button></NuxtLink>
          <NuxtLink to="/results"><button class="greyBtn">View restults</button></NuxtLink><
        </div>
        <a href="#teamIntro" class="arrowLink"><i class="fa-solid fa-arrow-down"></i></a>
      </article>
    </section>
    <hr class="hr">
    <section class="team" data-aos="fade-up" data-aos-duration="1000">
      <div class="teamIntro" id="teamIntro">
        <h2>Our <span>Roster</span></h2>
        <p>Meet our players</p>
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
        <h2>Sashi <span>Youtube</span></h2>
      </div>
      <div class="video">
        <iframe width="960" height="540" src="https://www.youtube.com/embed/LChNu342EUQ?si=Ek5ArL24JoMiR40E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur deserunt dolore vero at asperiores hic eligendi incidunt corrupti odit dolor quidem maiores quia culpa quod ipsam libero beatae ex eaque nostrum error rerum atque, ipsum nulla illum. Architecto dolores quos laudantium distinctio, animi nulla voluptates quam excepturi ab deleniti non sit id dolorem! Tenetur, reprehenderit amet? Nobis deleniti animi omnis reiciendis, repellat molestiae iste doloremque! Veniam illum tenetur sequi mollitia laboriosam velit odit? Nisi, veniam consectetur autem eos quam asperiores doloremque. Et ipsum assumenda velit voluptatibus quas neque est ratione?</p>
      </div>
    </section>
    <hr class="hr">
    <section class="results">
      <h2>Recent <span>Results</span></h2>
      <gameResult />
      <gameResult />
      <gameResult />
    </section>
  </main>
  <scrollToTop />
    <TheFooter />
</template>

<style scoped>
  .youtube{
      padding-top: 2rem;
  padding-bottom: 2rem;
  }
.sashiYT{
  display: flex;
  justify-content: center;
}

.video{
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.coach{
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(55, 55, 55);
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  width: 10%;
}
.results{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 1rem;
}
.arrowLink {
  position: absolute; 
  bottom: 1rem; 
  color: white; 
  font-size: 2rem; 
  text-decoration: none;
  animation: float 2s ease-in-out infinite;
}

.arrowLink:hover {
  color: red; 
}

@keyframes float {
  0% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
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
}

h2{
  padding-bottom: 2rem;
}
.team{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
article{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 6rem;
}
#sashiLogo{
  width: 15%;
  position: relative;
  z-index: 1337;
}
h1{
  color: white;
}
span{
  color: red;
}
main {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  background: linear-gradient(
    to bottom right,
    black,
    #18181b,
    black
  );
}

main::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.1;

  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(139, 0, 0, 0.3) 2px,
    rgba(139, 0, 0, 0.3) 4px
  );

  pointer-events: none; 
}
.smoke {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(134, 3, 3) 0%, rgba(143, 5, 5, 0) 70%);
  filter: blur(40px);
  transform: translate(-50%, -50%) scale(1);
  z-index: 1;
  pointer-events: none;
  animation: pulse 4s ease-in-out infinite;
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
</style>
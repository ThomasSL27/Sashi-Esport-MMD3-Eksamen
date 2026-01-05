<script setup>
useHead({
  title: "Sashi Esport - Sashi Pro Leaague",
  meta: [
    { name: "description", content: "Sashi Pro League" }
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
        <img src="@/assets/img/SashiProLeague.png" alt="Sashi Esport League Logo" id="sashiLogo" data-aos="zoom-in">
        <h1>SASHI <span>PRO LEAGUE</span></h1>
        <h2>Professional Counter-Strike 2 League</h2>
      </article>
      <hr class="hr">
    </section>
    <section data-aos="fade-up" data-aos-duration="1000" class="leagueIntro">
      <div>
        <h2>About the <span>League</span></h2>
        <p>The Sashi Pro League is a premier Counter-Strike 2 competition featuring top-tier teams from around the globe. Established to foster competitive play and showcase elite talent, the league offers thrilling matches, strategic gameplay, and a platform for players to demonstrate their skills on an international stage. With a commitment to excellence and sportsmanship, the Sashi Pro League aims to elevate the esports community and provide fans with unforgettable gaming experiences.</p>
      </div>
      <div>
        <img src="../assets/img/SashiRetakeWin.jpg" alt="">
      </div>
    </section>
    <section class="highlights">
      <hr class="hr">
      <article data-aos="fade-up">
        <h1>Highlights</h1>
<iframe width="800" height="450" src="https://www.youtube.com/embed/SMXECrd1WQE?si=zG41ML7HrnXewoxl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </article>
    </section>
  
    <Leaderboard />
    <hr class="hr">
    <section class="joinLeague">
      <div class="title">
        <h2>Join <span>Sashi Pro League</span></h2>
        <p>Want to improve your game? In Sashi Pro League, we are ALWAYS aiming higher! #EatOrBeEaten</p>
      </div>

      <div class="requirements">
        <!-- Skill Rating -->
        <div class="requirement-card">
          <div class="requirement-icon">
            <i class="fa-solid fa-arrow-trend-up"></i>
          </div>
          <div class="requirement-header">
            <h4>Skill Rating</h4>
            <i class="fa-solid fa-check"></i>
          </div>
          <p class="requirement-text">
            Minimum rank of Master Guardian Elite (MGE) or equivalent in CS2.
          </p>
        </div>

        <!-- Communication -->
        <div class="requirement-card">
          <div class="requirement-icon">
            <i class="fa-solid fa-headphones"></i>
          </div>
          <div class="requirement-header">
            <h4>Communication</h4>
            <i class="fa-solid fa-check"></i>
          </div>
          <p class="requirement-text">
            Working microphone and Discord for clear, consistent team communication.
          </p>
        </div>

        <!-- Team Player -->
        <div class="requirement-card">
          <div class="requirement-icon">
            <i class="fa-solid fa-people-group"></i>
          </div>
          <div class="requirement-header">
            <h4>Team Player</h4>
            <i class="fa-solid fa-check"></i>
          </div>
          <p class="requirement-text">
            Positive attitude and willingness to work with teammates and staff.
          </p>
        </div>
      </div>

    </section>
</main>
<TheFooter />
</template>

<style scoped>
  .joinLeague{
    padding: 3rem 1rem 4rem;
    max-width: 1280px;
    margin: 0 auto;
  }
  .joinLeague .title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }

  .joinLeague .title p{
    max-width: 40rem;
  }

  .requirements{
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 700px){
    .requirements{
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .requirement-card{
    background-color: rgb(19, 19, 19);
    border-radius: 1rem;
    padding: 1.75rem;
    border: 1px solid rgba(148, 27, 27, 0.7);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    overflow: hidden;
  }

  .requirement-card > *{
    position: relative;
    z-index: 1;
  }

  .requirement-icon{
    width: 56px;
    height: 56px;
    border-radius: 1.1rem;
    background: rgba(220, 38, 38, 0.16);
    border: 1px solid rgba(239, 68, 68, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f97373;
    margin-bottom: 0.25rem;
  }

  .requirement-icon i{
    font-size: 1.4rem;
  }

  .requirement-header{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
  }

  .requirement-header h4{
    margin: 0;
    font-size: 1.15rem;
    font-weight: 600;
  }

  .requirement-header i.fa-check{
    color: #f97373;
    font-size: 0.9rem;
  }

  .requirement-text{
    margin: 0;
    color: #ffffff;
    font-size: 0.95rem;
    line-height: 1.6;
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
img{
  width: 50rem;
  margin-top: 2rem;
}
.leagueIntro{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}
.leagueIntro p{
  color: white;
  text-align: left;
}
.leagueIntro div{
  margin: 1rem;
  padding: 1rem;
}
iframe{
  margin-top: 2rem;
  border-radius: 1rem;
}
.highlights{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
}
.highlights .hr{
  margin-bottom: 2rem;
}
p{
  margin: 1rem;
  font-size: 1.2rem;
  
}
@media (max-width: 700px){
  #sashiLogo{
    width: 60%;
  }
  .leagueIntro{
  display: flex;
  flex-direction: column;
  padding: 0;
  img{
    width: 100%;
    height: 300px;
  }
}
.leagueIntro div{
  margin: 0;
  padding: 0;
}
iframe{
  width: 100%;
  height: 300px;
  padding: 0;
  border-radius: 0;
}
.highlights{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
}
.highlights .hr{
  margin-bottom: 0;
}
.highlights article{
  padding: 0;
}
}
</style>
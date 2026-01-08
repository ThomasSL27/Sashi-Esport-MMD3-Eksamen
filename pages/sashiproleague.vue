<script setup>
// Side‑metadata til <head> (titel og beskrivelse til SEO)
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
    <TheProleaguelogo />
    <hr class="hr">
    <section data-aos="fade-up" data-aos-duration="1000" class="leagueIntro">
      <div class="aboutText">
        <h2>About the <span>League</span></h2>
        <p>The Sashi Pro League is a premier Counter-Strike 2 competition featuring top-tier teams from around the globe. Established to foster competitive play and showcase elite talent, the league offers thrilling matches, strategic gameplay, and a platform for players to demonstrate their skills on an international stage. With a commitment to excellence and sportsmanship, the Sashi Pro League aims to elevate the esports community and provide fans with unforgettable gaming experiences.</p>
      </div>
      <div>
        <img src="../assets/img/SashiRetakeWin.jpg" alt="">
      </div>
    </section>
    <hr class="hr">
    <section class="HighlightSection" data-aos="fade-up" data-aos-duration="1000">
        <div>
          <iframe width="800" height="450" src="https://www.youtube.com/embed/SMXECrd1WQE?si=zG41ML7HrnXewoxl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="white-box">
          <h2>Highlights</h2>
          <p>Check out the highlights from our Sashi Esport Leauge.
          The biggest plays, clutch moments, and momentum shifting rounds all packed into one fast paced recap. See how the game unfolded through the plays that mattered most!</p>
        </div>
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
      <div class="joinNow">
        <h2>Ready to <span>improve?</span></h2>
        <p>
        Compete against skilled players, sharpen your instincts, enhance your strategies, and take your game to the next level. Step into the action, push your limits! 
        </p>
        <h3>
          Join the Sashi Pro League today!
        </h3>
        <a href="https://faceit.com/en/inv/Qc4Kay8" target="_blank" rel="noopener noreferrer">
          <button>Join now!</button>
        </a>
      </div>
    </section>
</main>
 <scrollToTop />
<TheFooter />
</template>

<style scoped>
.aboutText h2{
  padding-top: 2rem;
}
  .joinNow{
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .joinNow button{
    border: none;
    padding: 1rem;
    color: white;
    background-color: red;
    cursor: pointer;
    border-radius: 10px;
  }
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
    .requirements{
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    
img{
  width: 40rem;
}


.leagueIntro{
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem;
}
.leagueIntro div{
  margin: 0 1.5rem;
}
.leagueIntro div p{
  padding-top: 1rem;
}
.aboutText{
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* highlights section styling */
/* styling af video */
.HighlightSection{
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
  color: red;
}


@media (max-width: 700px){
  .HighlightSection{
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  }
  .leagueIntro{
  display: flex;
  flex-direction: column;
  padding: 0;
  img{
    width: 100%;
    height: 300px;
  }
  p{
    padding: 1rem;
  }
}
.leagueIntro div{
  margin: 0;
  padding: 0;
}
iframe{
  width: 100vw;
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

.highlights article{
  padding: 0;
}
}
</style>
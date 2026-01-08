<script setup>
// Side‑metadata til <head> (titel og beskrivelse til SEO)
useHead({
  title: "Sashi Esport - About Us",
  meta: [
    { name: "description", content: "About Sashi Esport" }
  ]
})
</script>

<template>
  <main>
    <TheNav />
    <gameSlider />
    <section>
      <article class="aboutSashi" data-aos="fade-right">
        <h2>About SASHI <span>ESPORT</span></h2>
        <p>Founded in 2022 and owned by Claus Nielsen (D0KT0R3N), Sashi Esport is a professionally run esports organization focused on structure, discipline, and longterm competitive growth. Our Counter-Strike team is built on strong communication, tactical preparation, and a commitment to high-level performance.
Supported by dedicated management and coaching staff, we provide a stable environment where players can develop and compete internationally.</p>
        <div class="bulletPoints">
          <div class="bullet">
            <i class="fa-solid fa-bullseye"></i>
              <div class="bullet-content">
               <h4>Our Mission</h4>
               <p>To compete with integrity, push our limits, and inspire the gaming community.</p>
              </div>
          </div>
          <div class="bullet">
             <i class="fa-solid fa-medal"></i>
              <div class="bullet-content">
              <h4>Our Values</h4>
              <p>Teamwork, perseverance, respect, and passion for excellence.</p>
              </div>
          </div>
          <div class="bullet">
           <i class="fa-solid fa-bolt-lightning"></i>
             <div class="bullet-content">
             <h4>Our Vision</h4>
             <p>To be an Esports organization, recognized for skill, innovation, and community impact.</p>
            </div>
          </div>
        </div>
      </article>
      <article class="aboutSashiImg" data-aos="fade-left">
        <img src="@/assets/img/SashiHoldingTrophy.webp" alt="Sashi Esport holding trophy">
      </article>
    </section>
    <hr class="hr">
    <section class="JnMeat">
      <div>
 <img src="@/assets/img/JNMeatLogo.webp" alt="JN Meat Logo">
      </div>
      <div>
        <article>
          <h2><span>Our Sponsor</span></h2>
      <h3>JN Meat - Award - Winning Producer of Premium Steaks</h3>
      <p>
JN Meat is a Danish meat producer and wholesaler based in Slagelse, recognized worldwide for delivering some of the finest steaks on the market. As a multi-award-winning company, including several gold medals from the World Steak Challenge, JN Meat has earned a global reputation for exceptional quality, craftsmanship, and consistency.
<br><br>
Their philosophy is built on one core belief: <span>Quality has no limits</span>. <br><br>JN Meat relies on skilled specialists, strict hygiene standards, and rigorous internal quality control to ensure every cut meets the highest expectations.
<br><br>
The company supplies the Danish HORECA sector, retailers, and international partners, supported by reliable distribution and a strong commitment to sustainability and responsible sourcing.
<br><br>
Blending tradition, expertise, and modern production standards, JN Meat continues to set the benchmark for premium meat <br><br> proving that you don't need to be the biggest to be the best.</p>
</article>
</div>
</section>
</main>
     <scrollToTop />
    <TheFooter />
</template>

<style scoped>
p{
  margin-top: 0;
  margin-bottom: 1.5rem;
}
i{
    background-color: rgba(255, 0, 0, 0.407);
    padding: .5rem;
    border: 1px solid rgb(255, 0, 0);
    font-size: 2rem;
    color: red;
    border-radius: 6px;
}
.bulletPoints {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bullet {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.bullet-content {
  display: flex;
  flex-direction: column;
  margin: 0;
}
.bullet-content h4 {
  margin-top: 0;
  margin-bottom: 0.25rem;
}
section{
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem;
  column-gap: 2.5rem;
}
.aboutSashi{
  margin: 0;
}
.aboutSashiImg img{
  width: 100%;
}
/* jn meat section styling */
.JnMeat{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  gap: 3rem;
}
.JnMeat img{
  width: 100%;
  background-color: white;
  padding: 1rem;
}

@media (max-width: 700px){
  section{
    display: flex;
    flex-direction: column;
  }
  .JnMeat{
    display: flex;
    flex-direction: column;
  }
  .JnMeat img{
    width: 100vw;
  }
 } 
</style>
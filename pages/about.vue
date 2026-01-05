<script setup>
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
        <h1>About SASHI <span>ESPORT</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora rem. Velit temporibus saepe autem, sed ducimus veritatis assumenda repudiandae ipsum recusandae vero tempora ex quo, expedita optio molestiae consequatur placeat aperiam, alias eaque doloribus cupiditate harum ratione aliquid? Consequuntur saepe magni impedit facere, iste cupiditate nulla laudantium neque ipsa.</p>
        <div class="bulletPoints">
          <div class="bullet">
            <i class="fa-solid fa-bullseye"></i>
              <div class="bullet-content">
               <h4>Our Mission</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, qui.</p>
              </div>
          </div>
          <div class="bullet">
             <i class="fa-solid fa-medal"></i>
              <div class="bullet-content">
              <h4>Our Values</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt.</p>
              </div>
          </div>
          <div class="bullet">
           <i class="fa-solid fa-bolt-lightning"></i>
             <div class="bullet-content">
             <h4>Our Vision</h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dignissimos.</p>
            </div>
          </div>
        </div>
      </article>
      <article class="aboutSashiImg" data-aos="fade-left">
        <img src="@/assets/img/SashiRetakeWin.jpg" alt="">
      </article>
    </section>
    </main>
    <hr class="hr">
    <section class="JnMeat">
      <div>
 <img src="@/assets/img/JNMeatLogo.png" alt="JN Meat Logo">
      </div>
      <div>
       
                    <h2>JN Meat - Award - Winning Producer of Premium Steaks</h2>
          <p>
JN Meat is a Danish meat producer and wholesaler based in Slagelse, recognized worldwide for delivering some of the finest steaks on the market. As a multi-award-winning company, including several gold medals from the World Steak Challenge, JN Meat has earned a global reputation for exceptional quality, craftsmanship, and consistency.
<br>
Their philosophy is built on one core belief: <span>Quality has no limits</span>. <br>JN Meat relies on skilled specialists, strict hygiene standards, and rigorous internal quality control to ensure every cut meets the highest expectations.
<br>
The company supplies the Danish HORECA sector, retailers, and international partners, supported by reliable distribution and a strong commitment to sustainability and responsible sourcing.
<br>
Blending tradition, expertise, and modern production standards, JN Meat continues to set the benchmark for premium meat — proving that you don't need to be the biggest to be the best.</p>
       
      </div>
    </section>
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
}
.aboutSashi{
  margin: 2rem;
}
.aboutSashiImg img{
  width: 100%;
}
/* jn meat section styling */
.JnMeat{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 4rem 2rem;
  gap: 2rem;
}
.JnMeat img{
  width: 100%;
  padding: 1rem;
}

@media (max-width: 700px){
  section{
    display: flex;
    flex-direction: column;
  }
 } 
</style>
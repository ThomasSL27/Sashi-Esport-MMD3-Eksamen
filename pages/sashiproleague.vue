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
    <section>
      <article data-aos="fade-up">
        <div class="smoke"></div>
        <img src="@/assets/img/SashiProLeague.png" alt="Sashi Esport League Logo" id="sashiLogo" data-aos="zoom-in">
        <h1>SASHI <span>Pro League</span></h1>
        <h2>Professional Counter-Strike 2 League</h2>
  
      </article>
    </section>
    <TheFooter />
</main>
</template>

<style scoped>
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
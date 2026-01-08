<script setup>
</script>

<template>
    <section>
      <article data-aos="fade-up">
        <div class="smoke"></div>
        <img 
          src="@/assets/img/sashiEsportLogo.webp" 
          alt="Sashi Logo" 
          id="sashiLogo" 
          data-aos="zoom-in" 
          width="600" 
          height="300" 
          loading="eager"
        >
        <h1>SASHI <span>ESPORT</span></h1>
        <h2>Professional Counter-Strike 2 Team</h2>

        <a href="#teamIntro" class="arrowLink" aria-label="Press Arrow for scroll">
          <i class="fa-solid fa-arrow-down"></i>
        </a>
      </article>
    </section>
</template>

<style scoped>
/* --- Smoke Effect --- */
.smoke {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(134, 3, 3) 0%, rgba(143, 5, 5, 0) 70%);
  filter: blur(20px); /* reduced blur for performance */
  transform: translate(-50%, -50%) scale(1);
  z-index: 1;
  pointer-events: none;
  animation: pulse 4s ease-in-out infinite 1s; /* delayed start to avoid LCP blocking */
}

/* --- Logo --- */
#sashiLogo {
  width: 15%;
  max-width: 100%;
  height: auto; /* keeps aspect ratio */
  position: relative;
  z-index: 1337;
  display: block; /* helps browser layout */
}

/* --- Article Layout --- */
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 6rem;
}

/* --- Arrow Link --- */
.arrowLink {
  position: absolute; 
  bottom: 1rem; 
  color: white; 
  font-size: 2rem; 
  text-decoration: none;
  animation: float 2s ease-in-out infinite 1s; /* delayed to avoid LCP blocking */
}

.arrowLink:hover {
  color: red; 
}

/* --- Animations --- */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
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

/* --- Responsive --- */
@media (max-width: 700px) {
  #sashiLogo {
    width: 60%;
  }
}
</style>

<script setup>
// Footer-komponent med links, kontaktinfo og sociale medier
// Indeholder navigation links, kontaktinformation og sociale medie-ikoner
</script>

<template>
<footer>
    <hr class="hr">
    <div id="column1">
        <img src="@/assets/img/sashiEsportLogo.png" alt="Sashi Esport Logo">
        <p>Professional Counter-Strike 2 team competing at the highest level of esports.</p>
        <div class="socials">
            <a href="https://x.com/SashiProLeague" target="_blank" aria-label="Follow us on X"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.youtube.com/@sashiesport" target="_blank" aria-label="Follow us on Youtube"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.instagram.com/sashi_esport/" target="_blank" aria-label="Follow us on Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.twitch.tv/d0kt0r3n" target="_blank" aria-label="Follow us on Twitch"><i class="fa-brands fa-twitch"></i></a>
        </div>
    </div>
    <div id="column2">
        <p>Quick Links</p>
        <NuxtLink to="/">Team</NuxtLink>
        <NuxtLink to="/results">Results</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact us</NuxtLink>
    </div>
    <div id="column3">
        <p>Contact</p>
        <p>Email: <a href="mailto:email@email.com">email@email.com</a></p>
    </div>
</footer>
</template>

<style scoped>
/* ============================================
   HR DIVIDER
   ============================================ */
.hr {
  grid-column: 1 / -1;
}

/* ============================================
   SOCIAL MEDIA LINKS
   ============================================ */
.socials{
    display: flex;
    gap: 1rem;
}
#column1 a{
    background-color: rgb(22,19,19);
    padding: .5rem;
    border: 1px solid white;
}
#column1 a:hover{
    border: 1px solid red;
}
#column2 a {
  width: max-content;
}

a:hover{
    color: red;
}
/* ============================================
   LOGO IMAGE
   ============================================ */
img {
  width: 10%;
}

/* ============================================
   FOOTER MAIN CONTAINER
   ============================================ */
footer {
  box-sizing: border-box;
  padding: 0rem 3rem 3rem 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  background-color: black;
  color: white;
  a{
    color: white;
    text-decoration: none;
  }
}

#column2,
#column3 {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ============================================
   RESPONSIVE - MOBIL LAYOUT
   ============================================ */
@media (max-width: 768px) {
  footer {
    grid-template-columns: 1fr;
    text-align: center;
  }
}


</style>
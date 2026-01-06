<script setup>
import { ref, watch } from 'vue'

const isOpen = ref(false)

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <nav>
    <div class="navlogo">
      <NuxtLink to="/">
        <img src="@/assets/img/sashiEsportLogo.png" alt="" id="sashiLogo">
      </NuxtLink>
    </div>

    <!-- BURGER -->
    <button class="burger" @click="isOpen = !isOpen">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>

    <!-- FULLSCREEN OVERLAY MENU -->
    <div 
      class="mobileMenu" 
      v-if="isOpen" 
      data-aos="fade-left" 
      data-aos-duration="700"
    >
      <NuxtLink to="/" @click="isOpen = false">Home</NuxtLink>
      <NuxtLink to="/team" @click="isOpen = false">Team</NuxtLink>
      <NuxtLink to="/sashiproleague" @click="isOpen = false">Sashi Pro League</NuxtLink>
      <NuxtLink to="/about" @click="isOpen = false">About</NuxtLink>
      <NuxtLink to="/contact" @click="isOpen = false">Contact us</NuxtLink>
    </div>

    <!-- DESKTOP LINKS -->
    <div class="navLinks">
      <NuxtLink to="/team">Team</NuxtLink>
      <NuxtLink to="/sashiproleague">Sashi Pro League</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact us</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
a.router-link-exact-active {
  color: red;
}

nav {
  background-color: transparent;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 20;
  border-bottom: 1px solid grey;
}

.navlogo img {
  width: 3rem;
}

/* Desktop links */
.navLinks {
  display: flex;
  gap: 4rem;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: red;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 99999;
}

.burger span {
  width: 28px;
  height: 3px;
  background: white;
  transition: 0.3s;
}

.burger span.open:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobileMenu {
  position: fixed;
  inset: 0; 
  background-color: rgb(19, 19, 19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  z-index: 9999;
}

.mobileMenu a {
  font-size: 2rem;
  color: white;
}

@media (max-width: 768px) {
  .navLinks {
    display: none;
  }

  .burger {
    display: flex;
  }

  .navlogo img{
    display: none;
  }
}
</style>

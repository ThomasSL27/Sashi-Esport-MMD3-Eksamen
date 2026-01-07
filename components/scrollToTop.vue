<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Viser / skjuler knappen afhængig af hvor langt brugeren har scrollet ned
const showButton = ref(false);

const toggleScrollButton = () => {
  showButton.value = window.scrollY > 600;
};

// Glat scroll tilbage til toppen af siden
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Lyt efter scroll-events når komponenten er aktiv
onMounted(() => {
  window.addEventListener("scroll", toggleScrollButton);
});

// Ryd event listener op igen når komponenten fjernes
onUnmounted(() => {
  window.removeEventListener("scroll", toggleScrollButton);
});
</script>

<template>
  <button
    v-if="showButton"
    class="scrollToTop"
    @click="scrollToTop"
  >
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>

<style scoped>
.scrollToTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  
  background-color: red;
  color: white;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2000;
  opacity: 0.9;

  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scrollToTop:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>

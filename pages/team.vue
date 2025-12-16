<script setup>

</script>

<template>
<main>
<TheNav />
<section data-aos="fade-up">
    <h1>SASHI <span>ESPORT</span> Team</h1>
    <div class="cards">
        <playerCard />
    </div>
</section>
</main>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  gap: .5rem;
  justify-items: center;
}
section{
    margin: 2rem;
}
</style>
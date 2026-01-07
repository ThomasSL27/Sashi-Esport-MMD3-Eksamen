<script setup>
// Ref til selve container‑elementet i DOM'en, så IntersectionObserver kan overvåge det
const containerRef = ref(null)
let observer = null

// Data til tællerne – target = slutværdi, value = den værdi der animeres op til
const counters = ref([
  { target: 15, label: '1st places', value: 0, animated: false },
  { target: 23, label: '2nd places', value: 0, animated: false },
  { target: 18, label: '3rd places', value: 0, animated: false }
])

// Animerer én tæller fra 0 til dens target ved hjælp af requestAnimationFrame
function animateCounter(counter) {
  const duration = 2000 // animationens længde i millisekunder
  const frameRate = 20
  const increment = counter.target / (duration / frameRate)
  let current = 0

  const update = () => {
    current += increment
    if (current < counter.target) {
      counter.value = Math.floor(current)
      requestAnimationFrame(update)
    } else {
      counter.value = counter.target
    }
  }

  update()
}

// Når komponenten er monteret, opsættes en IntersectionObserver
// så tællerne kun starter, når brugeren har scroll'et dem i viewporten
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        counters.value.forEach(counter => {
          if (!counter.animated) {
            counter.animated = true
            animateCounter(counter)
          }
        })

        // Vi kan disconnecte efter første gang, så animationen kun sker én gang
        observer.disconnect()
      }
    },
    {
      threshold: 0.3 // trigges når ca. 30% af elementet er synligt
    }
  )

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})

// Ryd op efter observer når komponenten fjernes
onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div ref="containerRef" class="counters">
    <div
      v-for="(counter, index) in counters"
      :key="index"
      class="counter-box"
    >
      <div class="counter-value">
        {{ counter.value }}
      </div>
      <div class="counter-label">
        {{ counter.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.counters {
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

.counter-box {
  text-align: center;
  padding: 2rem;
}

.counter-value {
  font-size: clamp(3rem, 7vw, 8rem);
  font-weight: bold;
  color: #ff0000;
  margin: 0;
}

.counter-label {
  font-size: clamp(1rem, 4vw, 2rem);
  color: white;
  margin-top: 5px;
}
@media (max-width: 700px){
  .counters{
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }
}

</style>

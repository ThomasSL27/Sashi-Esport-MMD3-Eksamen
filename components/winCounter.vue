<script setup>

const containerRef = ref(null)
let observer = null

const counters = ref([
  { target: 15, label: '1st places', value: 0, animated: false },
  { target: 23, label: '2nd places', value: 0, animated: false },
  { target: 18, label: '3rd places', value: 0, animated: false }
])

function animateCounter(counter) {
  const duration = 2000
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

        observer.disconnect() // run once
      }
    },
    {
      threshold: 0.3 // trigger when 30% visible
    }
  )

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})

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
  font-size: 8rem;
  font-weight: bold;
  color: #ff0000;
  margin: 0;
}

.counter-label {
  font-size: 2rem;
  color: white;
  margin-top: 5px;
}
</style>

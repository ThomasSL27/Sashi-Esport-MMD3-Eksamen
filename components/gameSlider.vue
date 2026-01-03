<script setup>
import matches from '~/data/matches.js'

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

const scoreForUs = (score) => score.split('-')[0]
const scoreForThem = (score) => score.split('-')[1]
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="scroll scrollbar-custom">
        <div class="cards">
          <div
            v-for="match in matches"
            :key="match.id"
            class="card"
            :class="match.result"
          >
            <!-- Header -->
            <div class="card-header">
              <span class="competition">{{ match.competition }}</span>
              <span class="result">{{ match.result }}</span>
            </div>

            <!-- Teams -->
            <div class="teams">
              <div class="team">
                <span class="logo"><img src="/assets/img/sashiEsportLogo.png" alt="sashi logo"></span>
                <span>Sashi Esport</span>
                <strong>{{ scoreForUs(match.score) }}</strong>
              </div>

              <div class="divider" />

              <div class="team">
                <span class="logo">{{ match.opponentLogo }}</span>
                <span>{{ match.opponent }}</span>
                <strong>{{ scoreForThem(match.score) }}</strong>
              </div>
            </div>

            <!-- Date -->
            <div class="date">
              {{ formatDate(match.date) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: transparent;
  padding-bottom: 1rem;
}

.container {
  max-width: 100%;
  margin: auto;
}

.scroll {
  overflow-x: auto;
  padding-bottom: 1rem;
}

.cards {
  display: flex;
  gap: 1rem;
}

.card {
  width: 16rem;
  background: rgb(19,19,19);
  border-radius: 0.75rem;
  padding: .5rem;
  border: 2px solid;
  flex-shrink: 0;
}

.card.win {
  border-color: rgba(34, 197, 94, 0.5);
}

.card.loss {
  border-color: rgba(239, 68, 68, 0.5);
}

.card-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
  color: #94a3b8;
}


.card.win .result {
  color: #4ade80;
}

.card.loss .result {
  color: #f87171;
}

.teams {
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.team {
 display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
}

.logo img {
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
}


.divider {
    display: none;
}

.date {
  margin-top: .35rem;
  font-size: 0.65rem;
  text-align: center;
  color: #94a3b8;
}

.scrollbar-custom::-webkit-scrollbar {
  height: 8px;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 4px;
}
</style>

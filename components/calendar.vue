<script setup>
// Importerer kampdata fra matches.js
import matches from '~/data/matches.js'

// Helper-funktion til at formatere datoer i et læsbart format
// Konverterer DD-MM-YYYY til format som "Dec 23, 2025"
const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',    // Forkortet månednavn (Dec, Nov, osv.)
    day: 'numeric',    // Dag som tal
    year: 'numeric'    // År som tal
  })

// Computed property: Seneste 4 kampe (alle resultater) sorteret efter dato, nyeste først
const latestResults = computed(() =>
  [...matches]
    .sort((a, b) => new Date(b.date) - new Date(a.date))  // Sorter efter dato, faldende
    .slice(0, 4)                                            // Tag kun de første 4
)

// Computed property: Seneste 4 sejre, sorteret efter dato, nyeste først
const latestWins = computed(() =>
  [...matches]
    .filter(match => match.result === 'win')              // Filtrer kun sejre
    .sort((a, b) => new Date(b.date) - new Date(a.date))  // Sorter efter dato, faldende
    .slice(0, 4)                                            // Tag kun de første 4
)
</script>

<template>
<section class="calendarSec">
    <div class="wrapper">
        <div class="itemsWrapper">
            <h2>Calendar</h2>
            <div class="items">
                <h3>TBA</h3>
                <p>*CURRENTLY WINTHERBREAK*</p>
            </div>
            <div class="items">
                <h3>TBA</h3>
                <p>*CURRENTLY WINTHERBREAK*</p>
            </div>
            <div class="items">
                <h3>TBA</h3>
                <p>*CURRENTLY WINTHERBREAK*</p>
            </div>
            <div class="items">
                <h3>TBA</h3>
                <p>*CURRENTLY WINTHERBREAK*</p>
            </div>
        </div>
        <div class="itemsWrapper">
            <h2>Latest results</h2>
            <div
              v-for="result in latestResults"
              :key="result.id"
              class="items"
            >
                <h3>{{ formatDate(result.date) }}</h3>
                <p>{{ result.competition }} — {{ result.opponent }} ({{ result.score }})</p>
            </div>
        </div>
        <div class="itemsWrapper">
            <h2>Latest wins</h2>
            <div
              v-for="result in latestWins"
              :key="result.id"
              class="items"
            >
                <h3>{{ formatDate(result.date) }}</h3>
                <p>{{ result.competition }} — {{ result.opponent }} ({{ result.score }})</p>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
/* ============================================
   MAIN CONTAINER
   ============================================ */
.calendarSec {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1rem;
}

/* ============================================
   WRAPPER - FLEX LAYOUT
   ============================================ */
.wrapper {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
}

/* ============================================
   ITEMS WRAPPER
   ============================================ */
.itemsWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.itemsWrapper h2 {
    color: white;
    margin-bottom: 0.5rem;
    text-align: center;
}

/* ============================================
   ITEMS - INDIVIDUELLE KAMP/EVENT KORT
   ============================================ */
.items {
    display: flex;
    padding: 1.25rem 1.5rem;
    gap: 1rem;
    background: linear-gradient(to right, rgba(23, 23, 23, 0.5), rgba(0, 0, 0, 0.5));
    border: 1px solid rgba(127, 29, 29, 0.5);
    border-left: 4px solid rgba(38, 38, 38, 0.3);
    border-radius: 0.5rem;
    align-items: center;
    transition: background-color 0.2s;
    backdrop-filter: blur(4px);
}

.items:hover {
    background: rgba(76, 5, 25, 0.3);
    border-left-color: rgba(239, 68, 68, 0.3);
}

.items h3 {
    color: #d4d4d4;
    text-align: center;
    font-size: 1.25rem;
    margin: 0;
    min-width: 80px;
}

.items p {
    color: #a3a3a3;
    max-width: 50ch;
    margin: 0;
}

/* ============================================
   RESPONSIVE - MOBIL LAYOUT
   ============================================ */
@media (max-width: 768px) {
    .wrapper {
        flex-direction: column;
        gap: 2rem;
    }
    
    .items {
        flex-direction: column;
        text-align: center;
    }
    
    .items h3 {
        min-width: auto;
    }
}
</style>
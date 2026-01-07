<script setup>
// Statisk liste over hold i ligaen med point, W/L og præmiepulje
const teams = [
  { id: 1, name: "Natus Vincere", points: 2850, wins: 28, losses: 5, prize: "$50,000", logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop", change: 2 },
  { id: 2, name: "FaZe Clan", points: 2720, wins: 26, losses: 7, prize: "$30,000", logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop", change: -1 },
  { id: 3, name: "Team Liquid", points: 2680, wins: 25, losses: 8, prize: "$20,000", logo: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop", change: 1 },
  { id: 4, name: "G2 Esports", points: 2540, wins: 24, losses: 9, prize: "$15,000", logo: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=100&h=100&fit=crop", change: 0 },
  { id: 5, name: "Vitality", points: 2420, wins: 23, losses: 10, prize: "$10,000", logo: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=100&h=100&fit=crop", change: 3 },
  { id: 6, name: "MOUZ", points: 2310, wins: 21, losses: 12, prize: "$7,500", logo: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop", change: -2 },
  { id: 7, name: "Heroic", points: 2180, wins: 20, losses: 13, prize: "$5,000", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop", change: 1 },
  { id: 8, name: "Cloud9", points: 2050, wins: 19, losses: 14, prize: "$3,000", logo: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop", change: -1 }
];

// Hjælpefunktion der returnerer en CSS‑klasse baseret på placering (1., 2., 3. osv.)
const getRankClass = (rank) => {
  if (rank === 1) return "rank-1";
  if (rank === 2) return "rank-2";
  if (rank === 3) return "rank-3";
  return "rank-default";
};
</script>

<template>
    <hr class="hr">
  <div class="leaderboard-container">
    
    <!-- Header -->
    <div class="leaderboard-header">
      <h1 class="leaderboard-title">Sashi proleague Leaderboard</h1>
      <p class="leaderboard-subtitle">
        Top teams competing for the championship title and prize pool. Rankings update in real-time based on tournament performance.
      </p>
    </div>

    <!-- Prize Pool -->
    <div class="prize-pool-grid">
      <div class="prize-card-first">
        <span class="prize-label">1st Place</span>
        <p class="prize-amount">$50,000</p>
      </div>
      <div class="prize-card-second">
        <span class="prize-label">2nd Place</span>
        <p class="prize-amount">$30,000</p>
      </div>
      <div class="prize-card-third">
        <span class="prize-label">3rd Place</span>
        <p class="prize-amount">$20,000</p>
      </div>
    </div>

    <!-- Leaderboard Table -->
    <div class="leaderboard-table">
      
      <!-- Table Header -->
      <div class="table-header">
        <div class="header-cell col-span-1">Rank</div>
        <div class="header-cell col-span-4">Team</div>
        <div class="header-cell col-span-2 text-center">Points</div>
        <div class="header-cell col-span-2 text-center">W/L</div>
        <div class="header-cell col-span-2 text-center">Change</div>
        <div class="header-cell col-span-1 text-right">Prize</div>
      </div>

      <!-- Table Body -->
      <div class="table-body">
        <div
          v-for="(team, index) in teams"
          :key="team.id"
          class="table-row"
          :class="getRankClass(index + 1)"
        >
          <!-- Rank -->
          <div class="rank-number col-span-1">
            {{ index + 1 }}
          </div>

          <!-- Team -->
          <div class="team-section col-span-4">
            <img :src="team.logo" :alt="team.name" class="team-logo" />
            <span class="team-name">{{ team.name }}</span>
          </div>

          <!-- Points -->
          <div class="col-span-2 points-cell">
            <span class="points-badge">
              {{ team.points.toLocaleString() }}
            </span>
          </div>

          <!-- W/L -->
          <div class="win-loss col-span-2">
            <span class="wins">{{ team.wins }}W</span>
            <span class="slash">/</span>
            <span class="losses">{{ team.losses }}L</span>
          </div>

          <!-- Change in the league -->
          <div class="col-span-2 change-cell">
            <span
              :class="{
                'change-positive': team.change > 0,
                'change-negative': team.change < 0,
                'change-neutral': team.change === 0
              }"
            >
              {{ team.change > 0 ? '+' + team.change : team.change || '-' }}
            </span>
          </div>

          <!-- Prize -->
          <div class="prize-text col-span-1">
            {{ team.prize }}
          </div>
        </div>
      </div>
    </div>

    <!-- last update -->
    <div class="leaderboard-footer">
      Last updated: {{ new Date().toLocaleString() }}
    </div>

  </div>
</template>

<style scoped>
/* Main Container */
.leaderboard-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

/* Header Section */
.leaderboard-header {
  text-align: center;
  margin-bottom: 3rem;
}

.leaderboard-title {
  color: white;
  margin-bottom: 1rem;
}

.leaderboard-subtitle {
  color: #a3a3a3;
  max-width: 42rem;
  margin: 0 auto;
}

/* Prize Pool Cards */
.prize-pool-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .prize-pool-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.prize-card-first {
  background: linear-gradient(to bottom right, rgba(220, 38, 38, 0.2), rgba(127, 29, 29, 0.2));
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.prize-card-second {
  background: linear-gradient(to bottom right, rgba(220, 38, 38, 0.15), rgba(127, 29, 29, 0.15));
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.prize-card-third {
  background: linear-gradient(to bottom right, rgba(220, 38, 38, 0.1), rgba(127, 29, 29, 0.1));
  border: 1px solid rgba(239, 68, 68, 0.15);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.prize-label {
  color: #d4d4d4;
}

.prize-amount {
  color: white;
}

/* Leaderboard Table */
.leaderboard-table {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(127, 29, 29, 0.5);
  border-radius: 0.5rem;
  overflow: hidden;
  backdrop-filter: blur(4px);
}

/* Table Header */
.table-header {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid rgba(127, 29, 29, 0.5);
}

.header-cell {
  color: #a3a3a3;
}

/* Table Body */
.table-body {
  border-top: 1px solid rgba(127, 29, 29, 0.3);
}

.table-row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(127, 29, 29, 0.3);
  border-left: 4px solid;
  transition: background-color 0.2s;
}

.table-row:hover {
  background: rgba(76, 5, 25, 0.3);
}

/* Rank Colors */
.rank-1 {
  background: linear-gradient(to right, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.1));
  border-left-color: rgba(239, 68, 68, 0.5);
}

.rank-2 {
  background: linear-gradient(to right, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.05));
  border-left-color: rgba(239, 68, 68, 0.3);
}

.rank-3 {
  background: linear-gradient(to right, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
  border-left-color: rgba(239, 68, 68, 0.2);
}

.rank-default {
  background: linear-gradient(to right, rgba(23, 23, 23, 0.5), rgba(0, 0, 0, 0.5));
  border-left-color: rgba(38, 38, 38, 0.3);
}

/* Rank Number */
.rank-number {
  color: #d4d4d4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Team Section */
.team-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.team-logo {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(127, 29, 29, 0.5);
}

.team-name {
  color: white;
}

/* Points Cell */
.points-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Points Badge */
.points-badge {
  color: white;
  padding: 0.25rem 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 9999px;
  border: 1px solid rgba(127, 29, 29, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Win/Loss */
.win-loss {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.wins {
  color: #4ade80;
}

.slash {
  color: #525252;
}

.losses {
  color: #737373;
}

/* Change Cell */
.change-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Change Indicator */
.change-positive {
  color: #f87171;
}

.change-negative {
  color: #737373;
}

.change-neutral {
  color: #525252;
}

/* Prize */
.prize-text {
  color: white;
  text-align: right;
}

/* Footer */
.leaderboard-footer {
  margin-top: 2rem;
  text-align: center;
  color: #525252;
}

/* Column Spans */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
.col-span-4 { grid-column: span 4; }

/* Alignment */
.text-center { text-align: center; }
.text-right { text-align: right; }
</style>
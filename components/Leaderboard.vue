<script setup>

</script>

<template>
    <hr class="hr">
<section>
    <article data-aos="fade-left" class="leaderboard">
        <h2>Leaderboard</h2>
        <div class="placing">
            <div class="team">
                <p>1.</p>
                <p>Team Alpha</p>
                <span>
                    <p>100 points</p>
                </span>
            </div>
            <div class="team">
                <p>2.</p>
                <p>Team Beta</p>
                <span>
                    <p>90 points</p>
                </span>
            </div>
            <div class="team">
                <p>3.</p>
                <p>Team Gamma</p>
                <span>
                    <p>80 points</p>
                </span>
            </div>
        </div>
    </article>
    <article data-aos="fade-right">
        <h2>Upcoming Matches</h2>
        <div class="matches">
            <div class="team">
                <p>Team Delta vs Team Epsilon</p>
                <span>
                    <p>March 15, 2024 - 5:00 PM</p>
                </span>
            </div>
            <div class="team">
                <p>Team Zeta vs Team Eta</p>
                <span>
                    <p>March 16, 2024 - 6:00 PM</p>
                </span>
            </div>
            <div class="team">
                <p>Team Theta vs Team Iota</p>
                <span>
                    <p>March 17, 2024 - 7:00 PM</p>
                </span>
            </div>
        </div>
    </article>
</section>
</template>

<style scoped>
    section{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin: 2rem;
    }
.leaderboard{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
    border: dotted 2px white;
    border-radius: 0.6rem;

}
 .team{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 35rem;
    padding-bottom: 5rem;

 }
 h2{
    color: red;
    padding: 2rem;
 }
 span p{
    color: red;
    font-weight: bold;
 }
 p{
  margin: 1rem;
  font-size: 1.2rem;
 }
 
</style>
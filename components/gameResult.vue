<script setup>
    
</script>
<template>
    <div class="gameResult">

        <div class="left">
            <h3>Sashi Esport vs <span>AMKAL</span></h3>
            
            <div class="info">
                <div class="date">
                    <i class="fa-solid fa-calendar"></i>
                    <p>23/11/2025</p>
                </div>
                
                <div class="tournament">
                    <i class="fa-solid fa-trophy"></i>
                    <p>OMEN Retake Season 11 Finals</p>
                </div>
            </div>
        </div>
        
        <div class="result">
            <p class="win">W</p>
            <p>3-1</p>
        </div>
    </div>
    </template>

<style scoped>
.info, .tournament{
    color: white;
}
.gameResult {
    border: .5px solid white;
    padding: 1.5rem;
    width: 90%;
    height: auto;
    background-color: rgb(19, 19, 19);
    display: flex;
    justify-content: space-between;
}

/* Left column (h3 + info) */
.left {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* Date + tournament side-by-side */
.info {
    display: flex;
    gap: 15px;
}

.date, .tournament {
    display: flex;
    align-items: center;
    gap: 5px;
}

/* Result on the right (W above 3-1) */
.result {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 20px;
    font-weight: bold;
    gap: 0.25rem;
}
</style>

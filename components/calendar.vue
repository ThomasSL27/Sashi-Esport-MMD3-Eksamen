<script setup>

</script>

<template>
<section class="calendarSec">
    <div class="wrapper">
        <div class="itemsWrapper">
            <h2>Calendar</h2>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
        </div>
        <div class="itemsWrapper">
            <h2>Latest results</h2>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
        </div>
        <div class="itemsWrapper">
            <h2>Latest wins</h2>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
/* Main Container */
.calendarSec {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1rem;
}

/* Wrapper */
.wrapper {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
}

/* Items Wrapper */
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

/* Items */
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

/* Responsive */
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
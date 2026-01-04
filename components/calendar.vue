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
                <h3>20 DEC</h3><span></span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3><span></span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3><span></span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, blanditiis.</p>
            </div>
            <div class="items">
                <h3>20 DEC</h3><span></span>
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
    .calendarSec{
        padding: 2rem;
    }
    h3{
        color: red;
        text-align: center;
        font-size: 1.5rem;
    }
.itemsWrapper{
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.items{
    display: flex;
    padding: .5rem;
    gap: 1rem;
    p{
        max-width: 50ch;
    }
    background-color: rgba(255, 0, 0, .1);
    border: dotted 1px red;
    align-items: center;
}
.wrapper{
    display: flex;
    gap: .5rem;
    justify-content: space-between;
}
@media (max-width: 700px){
    .wrapper{
        flex-direction: column;
        gap: 2rem;
    }
    .items{
        flex-direction: column;
    }

}
</style>
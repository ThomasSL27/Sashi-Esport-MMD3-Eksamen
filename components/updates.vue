<script setup>
</script>

<template>
  <div class="video-container">
    <!-- Video on the left -->
    <iframe 
      width="800" 
      height="450" 
      src="https://www.youtube.com/embed/LChNu342EUQ?si=Ek5ArL24JoMiR40E" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>

    <!-- Updates stacked vertically on the right -->
    <div class="updates-column">
      <div class="updates">
        <p><span>Video</span> - 12.12-2025</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tempora in aliquid similique quo esse non aliquam, recusandae temporibus quia!</p>
      </div>
      <div class="updates">
        <p><span>Video</span> - 12.12-2025</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tempora in aliquid similique quo esse non aliquam, recusandae temporibus quia!</p>
      </div>
      <div class="updates">
        <p><span>Video</span> - 12.12-2025</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tempora in aliquid similique quo esse non aliquam, recusandae temporibus quia!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p{
    margin: 0;
    padding-bottom: 1rem;
}
.video-container {
  display: flex;
  align-items: center;
}

.updates-column {
  display: flex;
  flex-direction: column; 
}

.updates {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 3px dotted white;
  margin: .5rem;
}
</style>

<script setup>
const updates = [
  {
    id: 1,
    type: 'VLOG',
    date: '21.12.2025',
    description: 'DreamHack Knockdown Stockholm 2025 - Day 2 (English subtitles)',
    videoUrl: 'https://www.youtube.com/embed/x0WwpgmclW8?si=vnpkAvCSuusDeEzv'
  },
  {
    id: 2,
    type: 'VLOG',
    date: '15.12.2025',
    description: 'DreamHack Knockdown Stockholm 2025 - Day 1 (English subtitles)',
    videoUrl: 'https://www.youtube.com/embed/LChNu342EUQ?si=Ek5ArL24JoMiR40E'
  },
  {
    id: 3,
    type: 'VLOG',
    date: '24.11.2025',
    description: 'OMEN Retake VLOG - Day 3 in Portugal - We take a win (English subtitles)',
    videoUrl: 'https://www.youtube.com/embed/_04iss9wkXM?si=d07NvAXkMu8-9Ei4'
  }
]

const currentVideo = ref(updates[0].videoUrl)

const setVideo = (update) => {
  currentVideo.value = update.videoUrl
}
</script>

<template>
  <div class="video-container">
    <!-- Video on the left -->
    <iframe 
      width="800" 
      height="450" 
      :src="currentVideo" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>

    <!-- Updates stacked vertically on the right -->
    <div class="updates-column">
      <div 
        v-for="update in updates" 
        :key="update.id" 
        class="updates"
        :class="{ active: update.videoUrl === currentVideo }"
        @click="setVideo(update)"
      >
        <p><span>{{ update.type }}</span> - {{ update.date }}</p>
        <p>{{ update.description }}</p>
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
  border-top: 3px dotted white;
  margin: .5rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.15s;
}

.updates:hover {
  background-color: rgba(148, 27, 27, 0.25);
  transform: translateY(-2px);
}

.updates.active {
  background-color: rgba(148, 27, 27, 0.4);
}
@media (max-width: 700px){
  .video-container{
    display: flex;
    flex-direction: column;
  }
  iframe{
    width: 100%;
    height: 300px;
  }
}
</style>

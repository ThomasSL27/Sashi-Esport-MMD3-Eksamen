<script setup>
const { data, error } = await useFetch('/api/faceit/hub')
</script>

<template>
  <div>
    <h1>FACEIT Hub Data</h1>
    <pre v-if="data">{{ data }}</pre>
    <p v-else-if="error">Failed to load hub</p>
  </div>
</template>
<style scoped>
h1{
    color: black;
}
pre{
    color: black;
}
p{
    color: black;
}
</style>
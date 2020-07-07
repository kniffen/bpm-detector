<template>
  <main>
    <div class="detectionMethods">
      <h1>Select detection method</h1>

      <nuxt-link to="/file">
        <svg-icon name="file" class="icon" width="80" height="80" viewBox="0 0 80 80" />
        <p>From media files</p>
      </nuxt-link>

      <nuxt-link to="/listen">
        <svg-icon name="microphone" class="icon" width="80" height="80" viewBox="0 0 80 80" />
        <p>Audio device</p>
      </nuxt-link>

      <nuxt-link to="/tap">
        <svg-icon name="tap" class="icon" width="80" height="80" viewBox="0 0 80 80" />
        <p>Tap the beat</p>
      </nuxt-link>
    </div>

    <Share />
  </main>
</template>

<script>
  import Share  from "@/components/Share"
  
  export default {
    name: "home",

    components: {Share}
  }
</script>

<style scoped>
  .detectionMethods {
    display: grid;
    grid-gap: var(--spacing);
    align-content: top;
    text-align: center;
  }

  .detectionMethods > a {
    display: grid;
    background-color: var(--color-gray);
    justify-items: center;
    color: var(--color-white);
    text-decoration: none;
    padding: var(--spacing);
    grid-gap: var(--spacing);
    align-content: center;
  }

  .detectionMethods .icon {
    fill: var(--color-white);
  }

  @media (min-width: 768px) {
    .detectionMethods h1 {
      grid-column: 1 / 4;
    }

    .detectionMethods {
      grid-template-columns: repeat(3, 200px);
      justify-content: center;
    }

    .detectionMethods > a {
      height: 200px;
    }
  }
</style>

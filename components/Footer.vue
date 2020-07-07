<template>
  <footer>
    <Nav />

    <p>
      Copyright <a href="http://kniffentechnologies.net">Kniffen Technologies</a> 2019
    </p>
  </footer>
</template>

<script>
  import Nav from '@/components/Nav'
  
  export default {
    name: 'Footer',
  
    components: {Nav},
  }
</script>

<style scoped>
  footer {
    background-color: var(--color-gray);
    color: var(--color-white);
    text-align: center;
    display: grid;
    grid-gap: var(--spacing);
    padding: var(--spacing);
  }

  a {
    color: var(--color-white);
  }

  p {
    font-size: .8rem;
  }
</style>
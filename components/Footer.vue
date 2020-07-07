<template>
  <footer>
    <Nav />

    <p>
      Copyright <a href="http://knifftech.org">KniffTech</a> 2019-{{year}}
    </p>
  </footer>
</template>

<script>
  import Nav from '@/components/Nav'
  
  export default {
    name: 'Footer',
  
    components: {Nav},

    computed: {
      year: function() {
        const d = new Date()
        return d.getFullYear()
      }
    }
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
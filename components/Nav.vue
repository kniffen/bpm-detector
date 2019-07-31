<template>
  <nav :class="vertical ? 'vertical' : 'horizontal'">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/file">Detect from files</nuxt-link>
    <nuxt-link to="/listen">Detect by listening</nuxt-link>
    <nuxt-link to="/tap">Detect by tapping</nuxt-link>
    <nuxt-link to="/accuracy">How accurate is it?</nuxt-link>
  </nav>
</template>

<script>
  export default {
    name: "Nav",

    props: ["vertical"]
  }
</script>

<style scoped>
  a {
    color: var(--color-white);
    text-decoration: none;
  }

  nav {
    display: grid;
    grid-gap: calc(var(--spacing) * 2);
  }

  nav.vertical {
    background-color: var(--color-gray);
    position: absolute;
    top: calc(30px + var(--spacing) * 2);
    right: 0;
    left: 0;
    z-index: 10;
    text-align: center;
    font-size: 1.7em;
    padding: calc(var(--spacing) * 4);
  }

  @media (min-width: 600px) {
    nav.horizontal {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    nav.horizontal a:not(:last-child) {
      margin-right: var(--spacing);
    }

    nav.horizontal a:not(:last-child)::after {
      content: "|";
      margin-left: var(--spacing);
    }
  }
</style>
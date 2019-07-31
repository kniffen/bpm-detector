<template>
  <header>
    <nuxt-link to="/" class="logo">
      <h2>BPM Detector</h2>
    </nuxt-link>

    <div :class="`navToggle ${showNav ? 'navVisible' : ''}`" v-on:click="() => showNav = !showNav">
      <span></span>
    </div>

    <Nav v-if="showNav" class="nav" :vertical="true"/>
  </header>
</template>

<script>
  import Nav from '@/components/nav'
  
  export default {
    name: 'Header',

    components: {Nav},

    data: function() {
      return {
        showNav: false
      }
    },

    watch: {
      $route: function() {
        this.showNav = false
      }
    }
  }
</script>

<style scoped>
  header {
    background-color: var(--color-gray);
    color: var(--color-white);
    padding: var(--spacing);
    display: grid;
    grid-template-columns: minmax(0, 1fr) 30px;
    align-items: center;
  }

  .logo {
    color: var(--color-white);
    text-decoration: none;
  }

  .navToggle {
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .navToggle span,
  .navToggle span::before,
  .navToggle span::after {
    background-color: var(--color-white);
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    transition: .3s ease-in-out;
  }
  
  .navToggle span::before,
  .navToggle span::after {
    content: "";
  }

  .navToggle span {
    top: -1px;
    bottom: 0;
    margin: auto;
    right: 0;
  }

  .navToggle span::before {
    top: -11px;
  }

  .navToggle span::after {
    bottom: -10px;
  }

  .navVisible span {
    height: 0;
  }

  .navVisible span::before,
  .navVisible span::after {
    top: 0;
  }

  .navVisible span::before {
    transform: rotate(45deg);
  }

  .navVisible span::after {
    transform: rotate(-45deg);
  }
</style>
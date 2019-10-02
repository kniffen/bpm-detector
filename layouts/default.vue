<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  
  export default {
    components: {Header, Footer}
  }
</script>

<style>
  :root {
    --color-black:     #24292B;
    --color-dark-gray: #272C31;
    --color-gray:      #32383D;
    --color-gray-2:    #404A54;

    --color-light-gray: #737373;

    --color-white: #F9F9F9;

    --spacing: 10px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-color: var(--color-white);
    color: var(--color-black);
    word-wrap: break-word;
  }

  .wrapper {
    display: grid;
  }

  main {
    display: grid;
    min-height: 100vh;
    padding: calc(var(--spacing) * 4) var(--spacing);
    grid-gap: calc(var(--spacing) * 8);
    align-content: start;
    grid-template-columns: minmax(0, 1fr);
  }

  a {
    color: var(--color-black);
  }

  h1,
  h2,
  h3 {
    text-transform: uppercase;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
  }

  .icon {
    fill: var(--color-black);
  }

  button,
  input[type="submit"] {
    background-color: var(--color-gray);
    max-width: 150px;
    margin: 0 auto;
    border: none;
    color: var(--color-white);
    font-weight: bold;
    text-transform: uppercase;
    padding: var(--spacing);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    main {
      padding: calc(var(--spacing) * 8) calc(var(--spacing) * 2);
      grid-gap: calc(var(--spacing) * 16);
    }
  }
</style>

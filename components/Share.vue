<template>
  <div class="share">
    <h1>Share</h1>

    <!-- AddToAny BEGIN -->
    <div class="shareButtons a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-url="https://bpmdetector.net" data-a2a-title="BPM Detector">
      <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
      <a class="a2a_button_facebook"></a>
      <a class="a2a_button_twitter"></a>
      <a class="a2a_button_email"></a>
      <a class="a2a_button_pinterest"></a>
      <a class="a2a_button_google_gmail"></a>
      <a class="a2a_button_tumblr"></a>
      <a class="a2a_button_digg"></a>
      <a class="a2a_button_myspace"></a>
      <a class="a2a_button_vk"></a>
    </div>
    <script>
    var a2a_config = a2a_config || {};
    a2a_config.num_services = 10;
    </script>
    <script async src="https://static.addtoany.com/menu/page.js"></script>
    <!-- AddToAny END -->
  </div>
</template>

<style scoped>
  .share {
    text-align: center;
    padding: calc(var(--spacing) * 8) 0;
  }
  
  .shareButtons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .shareButtons a:not(:last-child) {
    margin: 0 var(--spacing) var(--spacing) 0;
  }
</style>
<template>
  <main>
    <div class="metronome">
      <h1>Metronome</h1>

      <h2>{{bpm}}<span>bpm</span></h2>

      <div class="buttons">
        <button @click="playSound">Play</button>
        <button @click="stopSound">Stop</button>
      </div>

      <input type="range" name="speed" min="0" max="200" v-model="bpm" @change="bpmChange">
    </div>

    <Share />

  </main>
</template>

<script>
  import Share  from "@/components/Share"

  let interval

  export default {
    name: "listen",

    components: {Share},

    validate: function({ params }) {
      return !isNaN(+params.bpm)
    },

    asyncData: async function({ params }) {
      return {
        bpm:      params.bpm || 138,
        isActive: false
      }
    },

    methods: {
      playSound: function() {
        if (!this.audio) return

        if (this.isActive) clearInterval(interval)

        interval      = setInterval(() => this.audio.play(), parseInt(60000 / this.bpm))
        this.isActive = true
      },

      stopSound: function() {
        if (interval) {
          clearInterval(interval)
          this.isActive = false
        }
      },

      bpmChange: function(e) {
        this.$router.replace({
          params: {bpm:  this.bpm},
          query:  {play: this.isActive}
        })
      }
    },

    mounted: async function() {
      this.audio = new Audio("/audio/tick.wav")

      if (this.$route.query.play) this.playSound()
    },

    beforeDestroy: function() {
      clearInterval(interval)
      delete this.audio
    }
  }
</script>

<style scoped>
  .metronome {
    display: grid;
    grid-gap: calc(var(--spacing) * 2);
    align-content: start;
    text-align: center;
  }

  h2 span {
    font-weight: normal;
    font-size: .7rem;
  }

  input[type="range"] {
    max-width: 500px;
    margin: 0 auto;
  }

</style>
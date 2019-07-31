<template>
  <main>
    <div class="tap">
      <h1>From tapping the beat</h1>

      <input type="text" id="tapper" v-on:keydown="calculateBPM"/>
      <p>Select the square above and start tapping with your keyboard</p>

      <div class="results">
        <div>
          <span>Average BPM:</span>
          <span>{{bpm < 1000 ? bpm : 0}}</span>
        </div>
        <div>
          <span>Rounded BPM:</span>
          <span>{{Math.round(bpm < 1000 ? bpm : 0)}}</span>
        </div>
        <div>
          <span>Taps:</span>
          <span>{{taps}}</span>
        </div>
      </div>
  
      <button id="reset" v-on:click="reset">Reset</button>
    </div>

    <Advert />

    <Share />
  </main>
</template>

<script>
  import Advert from "@/components/Advert"
  import Share  from "@/components/Share"

  export default {
    name: "tap",

    components: {Advert, Share},
    
    data: function() {
      return {
        bpm:   0,
        taps:  0,
        start: 0,
        end:   0
      }
    },

    methods: {
      calculateBPM: function(e) {
        e.preventDefault()

        if (this.bpm == 0) this.start = e.timeStamp
        
        this.taps++
        this.end = e.timeStamp
        this.bpm = (this.taps / ((this.end - this.start) / 60000)).toFixed(2)
      },

      reset: function(e) {
        this.bpm   = 0
        this.taps  = 0
        this.start = 0
        this.end   = 0
      }
    }
  }
</script>

<style scoped>
  .tap {
    display: grid;
    grid-gap: calc(var(--spacing) * 2);
    align-content: start;
    text-align: center;
  }

  #tapper {
    width: 50px;
    height: 50px;
    margin: auto;
    border: 2px dashed black;
    text-align: center;
  }

  .results {
    max-width: 500px;
    font-weight: bold;
    margin: 0 auto;
  }

  .results div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--spacing);
  }
</style>
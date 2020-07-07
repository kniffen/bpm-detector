<template>
  <main>
    <div class="tap">
      <h1>From tapping the beat</h1>

      <div id="desktopTapper">
        <input type="text" class="tapper" v-on:keydown="calculateBPM" v-on:click="calculateBPM"/>
        <p>Select the square above and start tapping with your keyboard or mouse</p>
      </div>

      <div id="touchScreenTapper">
        <div class="tapper" v-touch:tap="calculateBPM"></div>
        <p>Tap the square to the beat</p>
      </div>

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
          <span>{{taps < 2 ? 0 : taps - 1}}</span>
        </div>
      </div>
  
      <button id="reset" v-on:click="reset">Reset</button>
    </div>

    <Share />
  </main>
</template>

<script>
  import Share  from "@/components/Share"

  export default {
    name: "tap",

    components: {Share},
    
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
        this.bpm = ((this.taps - 1) / ((this.end - this.start) / 60000)).toFixed(2)
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
  #touchScreenTapper {
    display: none;
  }
  
  .tap {
    display: grid;
    grid-gap: calc(var(--spacing) * 2);
    align-content: start;
    text-align: center;
  }

  .tapper {
    width: 50px;
    height: 50px;
    margin: auto;
    border: 2px dashed black;
    text-align: center;
  }

  #touchScreenTapper .tapper {
    width: 100px;
    height: 100px;
    border: 4px dashed black; 
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

  @media (hover: none) {
    #desktopTapper {
      display: none;
    }

    #touchScreenTapper {
      display: block;
    }
  }
</style>
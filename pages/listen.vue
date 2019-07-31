<template>
  <main>
    <div class="listener">
      <h1> Listen to audio device</h1>
      
      <svg-icon 
        name="microphone" 
        class="icon" 
        width="300" 
        height="300" 
        viewBox="0 0 300 300" 
        :style="`animation-duration: ${isListening ? 60 / bpm : 0}s;`"
      />
      
      <div class="status">
        <span v-if="isFail">Error collecting samples<br /></span>
        <span v-else-if="device">Collecting samples from<br />{{device}}</span>
        <span v-else>Awaiting input<br /></span>
      </div>

      <button v-on:click="toggleListening">{{isListening ? "Cancel" : "Start listening"}}</button>

      <h1>{{isFail ? 0 : bpm}}BPM</h1>
    </div>

    <Advert />
    
    <Share />

  </main>
</template>

<script>
  import audioBufferUtils from "audio-buffer-utils"
  import calculateBPMFromAudioBuffer from "@/utils/calculateBPMFromAudioBuffer"

  import Advert from "@/components/Advert"
  import Share  from "@/components/Share"

  let audioContext = null
  let scriptNode   = null
  let source       = null
  let audioBuffer  = []
  let timer        = null

  export default {
    name: "listen",

    components: {Advert, Share},

    data: function() {
      return {
        bpm: 0,
        isListening: false,
        isFail:      false,
        device:      ""
      }
    },

    methods: {
      toggleListening: function(e) {
        e.preventDefault()
        if (!this.isListening) {
          navigator.getUserMedia({audio: true, video: false}, this.startListening, (err) => {
            this.isFail = true
            this.stopListening()
            console.log(err)
          })
        } else {
          this.stopListening()
        }
      },

      startListening: async function(stream) {
        clearTimeout(timer)
        
        try {
          if (audioContext.state == "suspended") await audioContext.resume()

          this.device = stream.getTracks()[0].label
          audioBuffer = []
          this.bpm = 0
          source = audioContext.createMediaStreamSource(stream)
          source.connect(scriptNode)
          scriptNode.connect(audioContext.destination)
          this.isListening = true

          timer = setTimeout(() => {
            if (audioBuffer.length <= 0) {
              this.isFail = true
              this.stopListening()
              return
            }

            this.stopListening()
          }, 30000)
        } catch (err) {
          clearTimeout(timer)
          this.isFail = true
          this.stopListening()
        }
      },

      stopListening: function() {
        clearTimeout(timer)

        try {
          source.disconnect(scriptNode)
          scriptNode.disconnect(audioContext.destination)
        } catch(err) {
          console.log(err)
        }

        this.device = ""
        this.isListening = false
      }
    },

    mounted: async function() {
      const that = this

      navigator.getUserMedia = ( navigator.getUserMedia ||
                                 navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia ||
                                 navigator.msGetUserMedia)

      if (!audioContext) audioContext = new AudioContext()

      scriptNode = audioContext.createScriptProcessor(4096, 1, 1)

      scriptNode.onaudioprocess = function(e) {
        if (that.isListening && (!audioBuffer.duration || audioBuffer.duration < 30)) {
          audioBuffer = audioBufferUtils.concat(audioBuffer, e.inputBuffer)
          that.bpm    = calculateBPMFromAudioBuffer(audioBuffer)
        }
      }

      that.stopListening()
    },

    beforeDestroy: function() {
      this.stopListening()
    }
  }
</script>

<style scoped>
  .listener {
    display: grid;
    grid-gap: calc(var(--spacing) * 2);
    align-content: start;
    text-align: center;
  }

  @keyframes shadow-pulse{
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 1);
    }
    100% {
      box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
    }
  }

  .icon  {
    margin: 0 auto;
    border-radius: 50%;
    padding: var(--spacing);
    animation: shadow-pulse .5s infinite;
  }

  .status {
    height: 2rem;
  }

</style>
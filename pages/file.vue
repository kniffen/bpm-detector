<template>
  <main>
    <div class="file">
      <h1>From files</h1>

      <form class="fileForm" 
            v-on:dragover="fileOver"
            v-on:dragenter="fileOver"
            v-on:dragLeave="fileLeave"
            v-on:drop="fileDrop"
      >
        <div class="fileFormInner">
          <input type="file" name="files[]" id="file"  v-on:change="fileDrop" multiple />
          <label for="file" v-if="!isDetecting"><strong>Choose some files</strong><span>or drag them here</span></label>
          <label for="file" v-if="isDetecting"><span>{{current}}</span><strong>Detecting BPM...</strong></label>
          <div class="lds-ring" v-if="isDetecting"><div></div><div></div><div></div><div></div></div>
        </div>
      </form>
    </div>

    <Advert />

    <div class="results" ref="results" v-if="results.length > 0">
      <h1>Results</h1>
      
      <div>
        <span>Filename</span>
        <span>BPM</span>
      </div>
      <div v-for="result in results" :key="result.id">
        <span>{{result.filename}}</span>
        <span>{{result.bpm}}</span>
      </div>
    </div>
  
    <Share />

  </main>
</template>

<script>
  import decode from "audio-decode"
  import calculateBPMFromAudioBuffer from "@/utils/calculateBPMFromAudioBuffer"
  import Advert from "@/components/Advert"
  import Share  from "@/components/Share"

  export default {
    name: 'file',

    components: {Advert, Share},

    data: function() {
      return {
        isDetecting: false,
        current: "",
        results: []
      }
    },

    methods: {
      fileOver: function(e) {
        e.preventDefault()
      },

      fileLeave: function(e) {
        e.preventDefault()
      },

      fileDrop: async function(e) {
        e.preventDefault()
        this.isDetecting = true

        const files = e.target.files || e.dataTransfer.files

        for (let i = 0; i < files.length; i++) {
          this.current = files[i].name
          await this.analyzeFile(files[i])
          if (i == 0) this.$refs.results.scrollIntoView({behavior: "smooth", block: "start"})
        }
        
        this.current = ""
        this.isDetecting = false
      },

      analyzeFile: function(file) {
        const that = this
        return new Promise(function(resolve, reject) {
          const reader = new FileReader()
          
          reader.onload = function() {
            const arrayBuffer = new Uint8Array(reader.result)

            decode(arrayBuffer, function(err, audioBuffer) {
              if (err || !audioBuffer) {
                that.results.push({
                  filename: file.name,
                  bpm: "Failed!"
                })
                alert(`Failed to detect BPM of ${file.name}`)
                if (err) console.log(err)
                return resolve()
              }

              const bpm = calculateBPMFromAudioBuffer(audioBuffer)

              that.results.push({
                filename: file.name,
                bpm
              })

              resolve()
            })
          }

          reader.readAsArrayBuffer(file)
        
        })
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-bottom: var(--spacing);
  }

  .fileForm {
    position: relative;
    background-color: rgba(0, 0, 100, 0.075);
    width: 100%;
    max-width: 700px;
    min-height: 250px;
    margin: auto;
    text-align: center;
  }

  .fileFormInner {
    position: absolute;
    border: 2px dashed var(--color-light-gray);
    margin: var(--spacing);
    width: calc(100% - var(--spacing) * 2);
    height: calc(100% - var(--spacing) * 2);
    align-items: center;
  }

  .fileForm label {
    display: grid;
    align-content: center;
    height: 100%;
    cursor: pointer;
  }

  #file {
    display: none;
  }

  .results > div {
    display: grid;
    max-width: 700px;
    margin: 0 auto;
    grid-template-columns: minmax(0, 1fr) 50px;
    padding: var(--spacing);
  }

  .results > div:nth-child(2) {
    background-color: var(--color-gray);
    color: var(--color-white);
    font-weight: bold;
  }

  .results > div:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .lds-ring {
    display: inline-block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: rgba(0, 0, 0, .05) transparent transparent transparent;
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
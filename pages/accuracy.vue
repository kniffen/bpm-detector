<template>
  <main>
    <div class="description">
      <h1>Accuracy</h1>

      <p>How accurate is the BPM detection?</p>
      <p>Well it really depends on the genre and quality of the audio, most electronic genres work great but it struggles with more complicated oens like Drum & Bass and Breakbeat.</p>
      <p>below are some samples results</p>
    </div>

    <Advert />

    <div class="samples">
      <div v-for="genre in genres">
        <h2>{{genre}} {{samples.filter(song => song.genre == genre && song.bpm == song.detected).length / 10 * 100}}%</h2>

        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Accurate BPM</th>
              <th>Detected BPM</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="song in samples.filter(song => song.genre == genre)">
              <td>{{song.artist}}</td>
              <td>{{song.title}}</td>
              <td>{{song.bpm}}</td>
              <td>{{song.detected}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Advert2 />

    <Share />

  </main>
</template>

<script>
  import Advert  from "@/components/Advert"
  import Advert2 from "@/components/Advert2"
  import Share   from "@/components/Share"

  export default {
    name: "accuracy",

    components: {Advert, Share},

    data: function() {
      return {
        genres:  [],
        samples: require("../static/data/samples.json")
      }
    },

    created: function() {
      for (const song of this.samples) {
        if (!this.genres.includes(song.genre)) this.genres.push(song.genre)
      }
    }
  }
</script>

<style scoped>
  .description {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .samples {
    display: grid;
    grid-gap: calc(var(--spacing) * 4);
  }

  .samples > div {
    margin: 0 auto;
  }

  .samples > div > div:nth-child(2) {
    display: none;
  }

  thead {
    background-color: var(--color-gray);
    color: var(--color-white);
  }

  tbody tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  tr {
    display: grid;
    grid-template-columns: 270px 270px 80px 80px;
    grid-gap: var(--spacing);
  }

  th {
    text-align: left;
  }

  @media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    .samples > div {
      margin: 0;
    }

    table, thead, tbody, th, td, tr { 
      display: block;
      width: 100%;
    }
    
    thead tr { 
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    
    td { 
      border: none;
      border-bottom: 1px solid #eee; 
      position: relative;
      padding-left: 50%; 
    }

    tr {
      margin-bottom: var(--spacing);
    }
    
    td:before { 
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%; 
      padding-right: 10px; 
      white-space: nowrap;
      font-weight: bold;
    }

    td:nth-of-type(1):before { content: "Artist"; }
    td:nth-of-type(2):before { content: "Title"; }
    td:nth-of-type(3):before { content: "Accurate BPM"; }
    td:nth-of-type(4):before { content: "Detected BPM"; }
  }
</style>
export default function calculateBPMFromAudioBuffer(audioBuffer) {
  const _channelData = [
    audioBuffer.getChannelData(0),
    audioBuffer.numberOfChannelsaudio > 1 ? Buffer.getChannelData(1) : audioBuffer.getChannelData(0)
  ]

  const peaks = getPeaks(_channelData, audioBuffer.sampleRate)
  const bars  = getBars(peaks, audioBuffer.sampleRate)

  return bars[0] ? bars[0].tempo : 0
}

function getPeaks(data, sampleRate) {
  const samples = data[0].length / sampleRate
  let peaks = []

  for (let i = 0; i < samples; i++) {
    let max = 0

    for (let j = i * sampleRate; j < (i + 1) * sampleRate; j++) {
      const volume = Math.max(Math.abs(data[0][j]), Math.abs(data[1][j]))

      if (!max || (volume > max.volume)) {
        max = {
          position: j,
          volume
        }
      }
    }

    peaks.push(max)
  }

  return peaks
}

function getBars(peaks, sampleRate) {
  const bars = []
  
  for (let i = 0; i < peaks.length; i++) {
    const peak = peaks[i]

    for (let j = 1; j < 8; j++) {
      if (i + j >= peaks.length) break
      const nextPeak = peaks[i + j]
      let tempo      = (60 * sampleRate) / (nextPeak.position - peak.position)

      while (tempo < 90)  tempo *= 2
      while (tempo > 180) tempo /= 2

      tempo = Math.round(tempo)

      const existingIndex = bars.findIndex(existing => existing.tempo == tempo)

      existingIndex >= 0 ? bars[existingIndex].count++ : bars.push({tempo, count: 1})
    }
  }

  bars.sort((a, b) => b.count - a.count)

  return bars
}
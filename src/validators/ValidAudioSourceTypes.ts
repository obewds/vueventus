// ./src/validators/ValidAudioSourceTypes.ts

const ValidAudioSourceTypes = [
    'audio/flac',
    'audio/mp4',
    'audio/mpeg',
    'audio/ogg',
    'audio/x-flac',
    'audio/webm',
] as const

type ValidAudioSourceTypes = typeof ValidAudioSourceTypes[number]
  
export default ValidAudioSourceTypes

// ./src/validators/ValidVideoSourceTypes.ts

const ValidVideoSourceTypes = [
    'video/mp4',
    'video/ogg',
    'video/webm',
] as const

type ValidVideoSourceTypes = typeof ValidVideoSourceTypes[number]
  
export default ValidVideoSourceTypes

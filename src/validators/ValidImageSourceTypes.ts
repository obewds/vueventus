// ./src/validators/ValidImageSourceTypes.ts

const ValidImageSourceTypes = [
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/webp',
] as const

type ValidImageSourceTypes = typeof ValidImageSourceTypes[number]
  
export default ValidImageSourceTypes

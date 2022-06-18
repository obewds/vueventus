// ./src/validators/ValidColorModes.ts

const ValidColorModes = [
    'light',
    'dark',
] as const

type ValidColorModes = typeof ValidColorModes[number]
  
export default ValidColorModes

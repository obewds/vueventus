// ./src/validators/ValidUrlDecorations.ts

const ValidUrlDecorations = [
    'underline',
    'overline',
    'none',
] as const

type ValidUrlDecorations = typeof ValidUrlDecorations[number]
  
export default ValidUrlDecorations

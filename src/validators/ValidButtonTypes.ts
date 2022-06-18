// ./src/validators/ValidButtonTypes.ts

const ValidButtonTypes = [
    'button',
    'submit',
    'reset',
] as const

type ValidButtonTypes = typeof ValidButtonTypes[number]
  
export default ValidButtonTypes

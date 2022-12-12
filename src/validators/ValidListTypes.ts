// ./src/validators/ValidListTypes.ts

const ValidListTypes = [
    'ul',
    'ol',
] as const

type ValidListTypes = typeof ValidListTypes[number]
  
export default ValidListTypes

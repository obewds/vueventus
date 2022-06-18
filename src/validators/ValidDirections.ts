// ./src/validators/ValidDirections.ts

const ValidDirections = [
    'up',
    'down',
    'left',
    'right',
    '',
] as const

type ValidDirections = typeof ValidDirections[number]
  
export default ValidDirections

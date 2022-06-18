// ./src/validators/ValidHeadingLevels.ts

const ValidHeadingLevels = [ 1, 2, 3, 4, 5, 6 ] as const

type ValidHeadingLevels = typeof ValidHeadingLevels[number]
  
export default ValidHeadingLevels

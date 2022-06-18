// ./src/validators/ValidFontAwesomeFamilies.ts

const ValidFontAwesomeFamilies = [
    'fab',
    'fad',
    'fal',
    'far',
    'fas',
    'fat',
] as const

type ValidFontAwesomeFamilies = typeof ValidFontAwesomeFamilies[number]
  
export default ValidFontAwesomeFamilies

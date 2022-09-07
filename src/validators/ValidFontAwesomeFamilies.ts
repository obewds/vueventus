// ./src/validators/ValidFontAwesomeFamilies.ts

// https://github.com/FortAwesome/Font-Awesome/blob/d3a7818c253fcbafff9ebd1d4abb2866c192e1d7/js-packages/%40fortawesome/fontawesome-common-types/index.d.ts#L2

const ValidFontAwesomeFamilies = [
    'fab',
    'fad',
    'fak',
    'fal',
    'far',
    'fas',
    'fass',
    'fat',
] as const

type ValidFontAwesomeFamilies = typeof ValidFontAwesomeFamilies[number]
  
export default ValidFontAwesomeFamilies

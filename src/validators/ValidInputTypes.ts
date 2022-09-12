// ./src/validators/ValidInputTypes.ts

const ValidInputTypes = [
    // 'button', // (use VvButton)
    // 'checkbox', // (use VvCheckbox)
    'color',
    'date',
    'datetime-local',
    'email',
    // 'file', // (use TBD)
    // 'hidden',
    // 'image', // (use TBD)
    'month',
    'number',
    'password',
    // 'radio', // (use VvRadio)
    // 'range', // (use TBD)
    // 'reset', // (use VvButton)
    'search',
    // 'submit', // (use VvButton)
    'tel',
    'text',
    'time',
    'url',
    // 'week', // (use TBD)
] as const

type ValidInputTypes = typeof ValidInputTypes[number]
  
export default ValidInputTypes

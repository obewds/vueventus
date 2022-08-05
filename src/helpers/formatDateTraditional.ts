// ./src/helpers/formatDateTraditional.ts

// TODO: Add tests for formatDateTraditional.ts
// TODO: Add docs for formatDateTraditional.ts

import monthNames from './monthNames'

export default function (date: Date, format: 'long' | 'short' = 'long', language: 'english' | 'french' | 'spanish' = 'english'): string {
    return monthNames[language][format][date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
}

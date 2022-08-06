// ./src/helpers/formatDateTraditional.ts

import monthNames from './monthNames'

export default function (date: Date, format: 'long' | 'short' = 'long', language: 'english' | 'french' | 'spanish' = 'english'): string {
    return monthNames()[language][format][date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
}

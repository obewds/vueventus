// ./src/types/MonthNames.ts

import type { MonthNamesTypes } from './MonthNamesTypes'

export interface MonthNames {
    english: MonthNamesTypes
    french: MonthNamesTypes
    spanish: MonthNamesTypes
    [key: string]: MonthNamesTypes
}

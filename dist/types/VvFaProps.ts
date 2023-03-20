// ./src/types/VvFaProps.ts

import ValidFontAwesomeFamilies from '../validators/ValidFontAwesomeFamilies'
import ValidFontAwesomeSizes from '../validators/ValidFontAwesomeSizes'

export interface VvFaProps {
    debug: boolean
    family: ValidFontAwesomeFamilies
    icon: string
    size: ValidFontAwesomeSizes
}

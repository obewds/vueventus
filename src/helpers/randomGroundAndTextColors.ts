// ./src/helpers/randomGroundAndTextColors.ts

import { tinycolor } from '@thebespokepixel/es-tinycolor'
import randomHex from './randomHex'
import type { GroundTextColors } from '../types/GroundTextColors'


export default function (darkTextColor: string = '#fff', lightTextColor: string = '#000'): GroundTextColors {

    let colors = {  backgroundColor: '', color: '' }
    let ground = tinycolor(randomHex(), {})
    let groundIsDark = ground.isDark()

    colors.backgroundColor = '#' + String(ground.toHex(false))
    colors.color = groundIsDark ? darkTextColor : lightTextColor

    return colors

}

// ./src/helpers/appColorPairs.ts

import { tinycolor } from '@thebespokepixel/es-tinycolor'
import type { AppColors } from '../types/AppColors'
import type { AppColorPairs } from '../types/AppColorPairs'
import type { AppTintShadePairs } from '../types/AppTintShadePairs'
import type { GroundTextColors } from '../types/GroundTextColors'

export default function( appColorsJson: AppColors, darkGroundText: string = '#fff', lightGroundText: string = '#000' ): AppColorPairs {

    let data = JSON.parse(JSON.stringify(appColorsJson))
    let colors: string[] = Object.keys(data)
    let output: AppColorPairs = {}

    for (let i=0; i < colors.length; i++) {

        if (typeof data[colors[i]] === 'string' || typeof data[colors[i]] === 'number') {

            const tc = tinycolor(data[colors[i]], {})

            if (tc.isValid()) {

                output[colors[i]] = <GroundTextColors>{
                    backgroundColor: tc.toHexString(false),
                    color: tc.isDark() ? darkGroundText : lightGroundText,
                }
            
            }

        } else if (typeof data[colors[i]] === 'object') {

            const family: string[] = Object.keys(data[colors[i]])
            const familyObj: AppTintShadePairs = {}

            for (let j=0; j < family.length; j++) {

                if (typeof data[colors[i]][family[j]] === 'string') {

                    const tc = tinycolor(data[colors[i]][family[j]], false)

                    if (tc.isValid()) {
                    
                        familyObj[family[j]] = <GroundTextColors>{
                            backgroundColor: tc.toHexString(true),
                            color: tc.isDark() ? darkGroundText : lightGroundText,
                        }

                    }

                }

            }

            output[colors[i]] = familyObj

        }

    }

    return output

}

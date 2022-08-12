// ./src/helpers/appColorPairs.ts

import { tinycolor } from '@thebespokepixel/es-tinycolor'
import type { AppColors } from '../types/AppColors'
import type { AppColorPairs } from '../types/AppColorPairs'
import type { GroundTextColors } from '../types/GroundTextColors'

export default function( appColorsJson: AppColors, darkGroundText: string = '#fff', lightGroundText: string = '#000' ): AppColorPairs {

    let keys: string[] = Object.keys(appColorsJson)
    let output: AppColorPairs = {}

    for (let i=0; i < keys.length; i++) {

        if (typeof appColorsJson[keys[i]] === 'string') {

            const tc = tinycolor(appColorsJson[keys[i]], {})

            output[keys[i]] = {
                backgroundColor: tc.toHexString(false),
                color: tc.isDark() ? darkGroundText : lightGroundText,
            }

        } else if (typeof appColorsJson[keys[i]] === 'object') {

            const famKeys: string[] = Object.keys(appColorsJson[keys[i]])
            const familyObj: AppColorPairs = {}

            for (let j=0; j < famKeys.length; j++) {
                
                if (typeof appColorsJson[keys[i]][famKeys[j]] === 'string') {

                    const tc = tinycolor(appColorsJson[keys[i]][famKeys[j]], false)

                    familyObj[famKeys[j]] = <GroundTextColors>{
                        backgroundColor: tc.toHexString(true),
                        color: tc.isDark() ? darkGroundText : lightGroundText,
                    }

                }

            }

            output[keys[i]] = familyObj

        }

    }

    return output

}

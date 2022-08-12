// ./src/helpers/appColorPairs.ts

import { tinycolor } from '@thebespokepixel/es-tinycolor'
import type { AppColors } from '../types/AppColors'
import type { AppColorPairs } from '../types/AppColorPairs'
import type { GroundTextColors } from '../types/GroundTextColors'

export default function( appColorsJson: AppColors, darkGroundText: string = '#fff', lightGroundText: string = '#000' ): AppColorPairs {

    let data = JSON.parse(JSON.stringify(appColorsJson))
    let keys: string[]|number[] = Object.keys(data)
    let output: AppColorPairs = {}

    for (let i=0; i < keys.length; i++) {

        if (typeof data[keys[i]] === 'string' || typeof data[keys[i]] === 'number') {

            const tc = tinycolor(data[keys[i]], {})

            if (tc.isValid()) {

                output[keys[i]] = <GroundTextColors>{
                    backgroundColor: tc.toHexString(false),
                    color: tc.isDark() ? darkGroundText : lightGroundText,
                }
            
            }

        } else if (typeof data[keys[i]] === 'object') {

            const famKeys: string[]|number[] = Object.keys(data[keys[i]])
            const familyObj: AppColorPairs = {}

            for (let j=0; j < famKeys.length; j++) {

                if (typeof data[keys[i]][famKeys[j]] === 'string') {

                    const tc = tinycolor(data[keys[i]][famKeys[j]], false)

                    if (tc.isValid()) {
                    
                        familyObj[famKeys[j]] = <GroundTextColors>{
                            backgroundColor: tc.toHexString(true),
                            color: tc.isDark() ? darkGroundText : lightGroundText,
                        }

                    }

                }

            }

            output[keys[i]] = familyObj

        }

    }

    return output

}

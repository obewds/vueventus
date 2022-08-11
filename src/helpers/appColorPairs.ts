// ./src/helpers/appColorPairs.ts

import { tinycolor } from '@thebespokepixel/es-tinycolor'
import type { AppColors } from '../types/AppColors'
import type { AppColorPairs } from '../types/AppColorPairs'
import type { GroundTextColors } from '../types/GroundTextColors'

export default function( appColorsJson: AppColors, darkText: string = '#000', lightText: string = '#fff' ): AppColorPairs {

    let data = appColorsJson
    let keys: string[] = Object.keys(data)

    let output: AppColorPairs = {}

    for (let i=0; i < keys.length; i++) {

        if (typeof data[keys[i]] === 'string') {

            const tc = tinycolor(data[keys[i]], {})

            output[keys[i]] = {
                backgroundColor: tc.toHexString(false),
                color: tc.isDark() ? lightText : darkText,
            }

        } else if (typeof data[keys[i]] === 'object') {

            const famKeys: string[] = Object.keys(data[keys[i]])

            const familyObj: AppColorPairs = {}

            for (let j=0; j < famKeys.length; j++) {
                
                if (typeof data[keys[i]][famKeys[j]] === 'string') {

                    // console.log(keys[i] + '.' + famKeys[j] + ': ' +  data[keys[i]][famKeys[j]])

                    const tc = tinycolor(data[keys[i]][famKeys[j]], false)

                    familyObj[famKeys[j]] = <GroundTextColors>{
                        backgroundColor: tc.toHexString(true),
                        color: tc.isDark() ? darkText : lightText,
                    }

                }

            }

            output[keys[i]] = familyObj

        }

    }

    return output

}

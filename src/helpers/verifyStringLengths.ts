// ./src/helpers/verifyStringLengths.ts

import verifyType from './verifyType'

export default function ( data: string, minLength: number = 1, maxLength: number = 100 ): boolean {

    if ( verifyType(data, 'string') ) {

        return data.length >= minLength && data.length <= maxLength ? true : false

    }

    return false

}

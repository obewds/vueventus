// ./cli/helpers/gradientText.mjs

import gradient from 'gradient-string'

export default function (string) {

    return gradient('lightGreen', 'cyan')(string)

}

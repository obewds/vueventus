// ./cli/helpers/writeFileMainTs.mjs

import fs from 'fs-extra'
import cwd from './cwd.mjs'
import generateMainFileCode from './generateMainFileCode.mjs'

export default function (userOptionsObject, stackDepFaObj, stackDepFaProObj, stackDepGsapObj) {
    
    let settings = {
        faFree: false,
        faPro: false,
        gsap: false,
    }

    if (userOptionsObject.deps.includes(stackDepFaObj.name) || userOptionsObject.deps.includes(stackDepFaProObj.name)) {

        if (userOptionsObject.deps.includes(stackDepFaObj.name)) {
            settings.faFree = true
        }

        if (userOptionsObject.deps.includes(stackDepFaProObj.name)) {
            settings.faFree = false
            settings.faPro = true
        }
        
    }

    if (userOptionsObject.deps.includes(stackDepGsapObj.name)) {
        settings.gsap = true
    }

    fs.writeFileSync(cwd + '/src/main.ts', generateMainFileCode(settings), { flag: 'w+' })

}
// ./cli/helpers/writeFileMainTsSsg.mjs

import fs from 'fs-extra'
import cwd from './cwd.mjs'
import generateMainFileCodeSsg from './generateMainFileCodeSsg.mjs'

export default function (userOptionsObject, stackDepFaObj, stackDepFaProObj, stackDepGsapObj, stackDepPrismObj) {
    
    let settings = {
        faFree: false,
        faPro: false,
        gsap: false,
        prismThemeVarsCss: false,
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

    if (userOptionsObject.deps.includes(stackDepPrismObj.name)) {
        settings.prismThemeVarsCss = true
    }

    fs.writeFileSync(cwd + '/src/main.ts', generateMainFileCodeSsg(settings), { flag: 'w+' })

}
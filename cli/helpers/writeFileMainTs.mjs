// ./cli/helpers/writeFileMainTs.mjs

import fs from 'fs-extra'

import mainTsFile from '../generators/mainTsFile.mjs'

import cwd from './cwd.mjs'

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

    fs.outputFileSync(cwd + '/src/main.ts', mainTsFile(settings), { flag: 'w+' })

}
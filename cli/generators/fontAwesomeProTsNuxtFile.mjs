// ./cli/generators/fontAwesomeProTsNuxtFile.mjs

export default function () {

const output = `// ./plugins/fontAwesomePro.ts

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This is important, let Nuxt handle the FontAwesome CSS file
config.autoAddCss = false

// duotone family icons
import { faHouse as FaDuotoneHouse } from '@fortawesome/pro-duotone-svg-icons/faHouse'

// light family icons
import { faHouse as FaLightHouse } from '@fortawesome/pro-light-svg-icons/faHouse'

// regular family icons
import { faHouse as FaRegularHouse} from '@fortawesome/pro-regular-svg-icons/faHouse'

// solid family icons
import { faFaceSurprise as FaSolidFaceSurprise } from '@fortawesome/pro-solid-svg-icons/faFaceSurprise'
import { faHouse as FaSolidHouse } from '@fortawesome/pro-solid-svg-icons/faHouse'

// sharp family icons
import { faHouse as FaSharpHouse } from '@fortawesome/sharp-solid-svg-icons/faHouse'

// thin family icons
import { faHouse as FaThinHouse } from '@fortawesome/pro-thin-svg-icons/faHouse'

// brand family icons
// import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
// import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap'
// import { faCss3Alt } from '@fortawesome/free-brands-svg-icon/faCss3Alt'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
// import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
// import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
// import { faLaravel } from '@fortawesome/free-brands-svg-icons/faLaravel'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
// import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm'
// import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'

// 
library.add(

    // duotone family icons
    FaDuotoneHouse,

    // light family icons
    FaLightHouse,

    // solid family icons
    FaSolidFaceSurprise,
    FaSolidHouse,

    // sharp family icons
    FaSharpHouse,

    // thin family icons
    FaThinHouse,

    // brand family icons
    // faApple,
    // faBootstrap,
    // faCss3Alt,
    // faFacebook,
    // faGithub,
    // faGoogle,
    // faHtml5,
    // faInstagram,
    // faJs,
    // faLaravel,
    // faLinkedin,
    // faNpm,
    // faPinterest,
    // faTwitter,
    faVuejs,
    // faYoutube,

)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

`

return output
    
}

// ./cli/generators/fontAwesomeTsFile.mjs

export default function () {

const output = `// ./src/fontawesome.ts

import { library } from '@fortawesome/fontawesome-svg-core'

//
import { faFaceSurprise as FaSolidFaceSurprise } from '@fortawesome/free-solid-svg-icons/faFaceSurprise'
import { faHouse as FaSolidHouse } from '@fortawesome/free-solid-svg-icons/faHouse'

// Default app guide brand icon imports
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
    FaSolidFaceSurprise,
    FaSolidHouse,

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

`

return output
    
}

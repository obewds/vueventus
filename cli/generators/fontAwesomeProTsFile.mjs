// ./cli/generators/fontAwesomeProTsFile.mjs

export default function () {

const output = `// ./src/fontAwesomePro.ts

import { library } from '@fortawesome/fontawesome-svg-core'

//
import { faHouse as FaDuotoneHouse } from '@fortawesome/pro-duotone-svg-icons/faHouse'
import { faHouse as FaLightHouse } from '@fortawesome/pro-light-svg-icons/faHouse'
import { faHouse as FaRegularHouse} from '@fortawesome/pro-regular-svg-icons/faHouse'
import { faHouse as FaSolidHouse } from '@fortawesome/pro-solid-svg-icons/faHouse'
import { faHouse as FaThinHouse } from '@fortawesome/pro-thin-svg-icons/faHouse'


// Default app guide brand icon imports
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs'
// import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
// import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap'
// import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt'
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
// import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'

// 
library.add(
    FaDuotoneHouse,
    FaLightHouse,
    FaRegularHouse,
    FaSolidHouse,
    FaThinHouse,

    faVuejs,
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
    // faYoutube,
)

`

return output
    
}

// ./cli/generators/vvRouterLinkTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/anchors/VvRouterLink.test.js

import { mount } from '@vue/test-utils'
import VvRouterLink from '../../../../src/components/vv/anchors/VvRouterLink.vue'
import appVv from '../../../../src/app.vv'


test('VvRouterLink.vue component mounts successfully', async () => {
    
    expect(VvRouterLink).toBeTruthy()

})

`

return output

}

// ./cli/generators/vvElTestJsFile.mjs

// TODO add this file to vitest build processes

export default function () {

const output = `// ./tests/components/vv/elements/VvEl.test.js

import { mount } from '@vue/test-utils'
import VvEl from '../../../../src/components/vv/elements/VvEl.vue'


test('VvEl.test.vue component mounts successfully', async () => {
    
    expect(VvEl).toBeTruthy()

})

`

return output

}

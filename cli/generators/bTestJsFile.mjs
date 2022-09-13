// ./cli/generators/bTestJsFile.mjs

export default function () {

const output = `// ./tests/pages/b.test.js

import { mount } from '@vue/test-utils'
import b from '../../src/pages/b.vue'


test('b.vue page mounts successfully', async () => {
    
    expect(b).toBeTruthy()

})

`

return output

}

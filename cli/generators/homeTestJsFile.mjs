// ./cli/generators/homeTestJsFile.mjs

export default function () {

const output = `// ./tests/pages/Home.test.js

import { mount } from '@vue/test-utils'
import Home from '../../src/pages/Home.vue'


test('Home.vue page mounts successfully', async () => {
    
    expect(Home).toBeTruthy()

})

`

return output

}

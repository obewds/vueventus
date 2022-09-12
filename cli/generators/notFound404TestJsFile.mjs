// ./cli/generators/notFound404TestJsFile.mjs

export default function () {

const output = `// ./tests/pages/NotFound404.test.js

import { mount } from '@vue/test-utils'
import NotFound404 from '../../src/pages/NotFound404.vue'


test('NotFound404.vue page mounts successfully', async () => {
    
    expect(NotFound404).toBeTruthy()

})

`

return output

}

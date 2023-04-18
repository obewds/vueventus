// ./cli/generators/vvSelectTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/selects/VvSelect.test.js

import { mount } from '@vue/test-utils'
import VvSelect from '../../../../src/components/vv/selects/VvSelect.vue'


test('VvSelect.test.vue component imports successfully', async () => {
    
    expect(VvSelect).toBeTruthy()

})

`

return output

}

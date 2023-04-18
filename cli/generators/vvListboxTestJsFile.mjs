// ./cli/generators/vvListboxTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/selects/VvListbox.test.js

import { mount } from '@vue/test-utils'
import VvListbox from '../../../../src/components/vv/selects/VvListbox.vue'


test('VvListbox.test.vue component imports successfully', async () => {
    
    expect(VvListbox).toBeTruthy()

})

`

return output

}

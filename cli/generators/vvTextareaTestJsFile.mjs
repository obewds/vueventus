// ./cli/generators/vvTextareaTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/textareas/VvTextarea.test.js

import { mount } from '@vue/test-utils'
import VvTextarea from '../../../../src/components/vv/textareas/VvTextarea.vue'


test('VvTextarea.test.vue component imports successfully', async () => {
    
    expect(VvTextarea).toBeTruthy()

})

`

return output

}

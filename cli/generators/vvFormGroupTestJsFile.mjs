// ./cli/generators/vvFormGroupTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/forms/VvFormGroup.test.js

import { mount } from '@vue/test-utils'
import VvFormGroup from '../../../../src/components/vv/forms/VvFormGroup.vue'


test('VvFormGroup.test.vue component imports successfully', async () => {
    
    expect(VvFormGroup).toBeTruthy()

})

`

return output

}
    
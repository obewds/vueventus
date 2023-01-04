// ./cli/generators/vvQuadFormGroupTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/forms/VvQuadFormGroup.test.js

import { mount } from '@vue/test-utils'
import VvQuadFormGroup from '../../../../src/components/vv/forms/VvQuadFormGroup.vue'


test('VvQuadFormGroup.test.vue component mounts successfully', async () => {
    
    expect(VvQuadFormGroup).toBeTruthy()

})

`

return output

}
    
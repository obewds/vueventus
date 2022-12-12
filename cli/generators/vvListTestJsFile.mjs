// ./cli/generators/vvListTestJsFile.mjs

export default function () {

const output = `// ./tests/components/vv/lists/VvList.test.js

import { mount } from '@vue/test-utils'
import VvList from '../../../../src/components/vv/lists/VvList.vue'


test('VvList.test.vue component mounts successfully', async () => {
    
    expect(VvList).toBeTruthy()

})

`

return output

}

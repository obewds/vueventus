// ./cli/generators/vvListItemTestJsFile.mjs

// TODO add this file to vitest build processes

export default function () {

const output = `// ./tests/components/vv/lists/VvListItem.test.js

import { mount } from '@vue/test-utils'
import VvListItem from '../../../../src/components/vv/lists/VvListItem.vue'


test('VvListItem.test.vue component mounts successfully', async () => {
    
    expect(VvListItem).toBeTruthy()

})

`

return output

}

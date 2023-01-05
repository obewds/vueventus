// ./tests/helpers/appColorPairs.test.js

import { appColorPairs } from '../../src/index'
import appColors from '../../src/app.colors.json'


test('appColorPairs helper module returns a truthy value', async () => {
    
    expect(appColorPairs).toBeTruthy()

})


test('appColorPairs helper module returns expected values', async () => {

    const result = appColorPairs(appColors)
    
    expect(result).toBeTruthy()

})

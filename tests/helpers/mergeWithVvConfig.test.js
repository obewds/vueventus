// ./tests/helpers/mergeWithVvConfig.test.js

import { mergeWithVvConfig } from '../../src/index'
import { VvConfig } from '../../src/index'


test('mergeWithVvConfig helper module returns a truthy value', async () => {

    expect(mergeWithVvConfig).toBeTruthy()

})


test('mergeWithVvConfig helper module returns a truthy value', async () => {

    const testVal = 'test-value'
    const testAddition = {
        test: {
            testProp: testVal
        },
        anchors: {
            palettes: {
                default: testVal
            }
        }
    }

    const testMerged = mergeWithVvConfig(testAddition)
    
    expect(testMerged.test.testProp).toBe(testVal)
    expect(testMerged.anchors.palettes.default).toBe(testVal)

})


test('mergeWithVvConfig helper module returns a default VvConfig if passed an empty object to merge', async () => {

    const testMerged = mergeWithVvConfig({})
    
    expect(testMerged).toBe(VvConfig)

})

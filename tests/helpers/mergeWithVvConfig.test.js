// ./tests/helpers/mergeWithVvConfig.test.js

import { mergeWithVvConfig } from '../../src/index'


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

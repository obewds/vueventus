// ./tests/configs/Inputs.test.js

import { Inputs } from '../../src/index'
import { VvConfig } from '../../src/index'


test('Inputs component returns a truthy value', async () => {

    expect(Inputs).toBeTruthy()

})


test('Inputs component returns a truthy object for "display", "ring", "text" properties', async () => {

    expect(Inputs.display).toBeTruthy()
    expect(Inputs.ring).toBeTruthy()
    expect(Inputs.text).toBeTruthy()

})


test('Inputs component returns a truthy value for the "base()" method', async () => {

    const base = Inputs.base()
    
    expect(base).toBeTruthy()

})

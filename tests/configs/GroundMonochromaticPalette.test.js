// ./tests/GroundMonochromaticPalette.test.js

import { GroundMonochromaticPalette } from '../../src/index'



test('GroundMonochromaticPalette component returns a truthy value', async () => {

    expect(GroundMonochromaticPalette).toBeTruthy()

})



test('GroundMonochromaticPalette.monochromatic component returns an object with a truthy monochromatic property', async () => {

    expect(GroundMonochromaticPalette.monochromatic).toBeTruthy()

})



test('GroundMonochromaticPalette.monochromatic.colors component returns an object with a truthy colors property', async () => {

    expect(GroundMonochromaticPalette.monochromatic.colors).toBeTruthy()

})



test('GroundMonochromaticPalette component returns an object with the standard five monochromatic color names', async () => {

    expect(GroundMonochromaticPalette.monochromatic.colors['default']).toBeTruthy()
    expect(GroundMonochromaticPalette.monochromatic.colors['error']).toBeTruthy()
    expect(GroundMonochromaticPalette.monochromatic.colors['primary']).toBeTruthy()
    expect(GroundMonochromaticPalette.monochromatic.colors['secondary']).toBeTruthy()
    expect(GroundMonochromaticPalette.monochromatic.colors['success']).toBeTruthy()

})

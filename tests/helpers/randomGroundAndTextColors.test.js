// ./tests/helpers/randomGroundAndTextColors.test.js

import { randomGroundAndTextColors } from '../../src/index'


test('randomGroundAndTextColors helper module returns a truthy value', async () => {
    
    expect(randomGroundAndTextColors).toBeTruthy()

})


test('randomGroundAndTextColors helper module returns expected values', async () => {

    for (let i=0; i<25; i++) {

        const result = randomGroundAndTextColors()
    
        expect(result.backgroundColor).toBeTruthy()
        expect(result.color).toBeTruthy()

    }

})

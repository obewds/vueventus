// ./src/helpers/appColorPairs.ts
import { tinycolor } from '@thebespokepixel/es-tinycolor';
export default function (appColorsJson, darkGroundText = '#fff', lightGroundText = '#000') {
    let data = JSON.parse(JSON.stringify(appColorsJson));
    let keys = Object.keys(data);
    let output = {};
    for (let i = 0; i < keys.length; i++) {
        if (typeof data[keys[i]] === 'string' || typeof data[keys[i]] === 'number') {
            const tc = tinycolor(data[keys[i]], {});
            if (tc.isValid()) {
                output[keys[i]] = {
                    backgroundColor: tc.toHexString(false),
                    color: tc.isDark() ? darkGroundText : lightGroundText,
                };
            }
        }
        else if (typeof data[keys[i]] === 'object') {
            const famKeys = Object.keys(data[keys[i]]);
            const familyObj = {};
            for (let j = 0; j < famKeys.length; j++) {
                if (typeof data[keys[i]][famKeys[j]] === 'string') {
                    const tc = tinycolor(data[keys[i]][famKeys[j]], false);
                    if (tc.isValid()) {
                        familyObj[famKeys[j]] = {
                            backgroundColor: tc.toHexString(true),
                            color: tc.isDark() ? darkGroundText : lightGroundText,
                        };
                    }
                }
            }
            output[keys[i]] = familyObj;
        }
    }
    return output;
}
//# sourceMappingURL=appColorPairs.js.map
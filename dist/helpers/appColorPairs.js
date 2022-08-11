// ./src/helpers/appColorPairs.ts
import { tinycolor } from '@thebespokepixel/es-tinycolor';
export default function (appColorsJson, darkGroundText = '#fff', lightGroundText = '#000') {
    let keys = Object.keys(appColorsJson);
    let output = {};
    for (let i = 0; i < keys.length; i++) {
        if (typeof appColorsJson[keys[i]] === 'string') {
            const tc = tinycolor(appColorsJson[keys[i]], {});
            output[keys[i]] = {
                backgroundColor: tc.toHexString(false),
                color: tc.isDark() ? darkGroundText : lightGroundText,
            };
        }
        else if (typeof appColorsJson[keys[i]] === 'object') {
            const famKeys = Object.keys(appColorsJson[keys[i]]);
            const familyObj = {};
            for (let j = 0; j < famKeys.length; j++) {
                if (typeof appColorsJson[keys[i]][famKeys[j]] === 'string') {
                    const tc = tinycolor(appColorsJson[keys[i]][famKeys[j]], false);
                    familyObj[famKeys[j]] = {
                        backgroundColor: tc.toHexString(true),
                        color: tc.isDark() ? darkGroundText : lightGroundText,
                    };
                }
            }
            output[keys[i]] = familyObj;
        }
    }
    return output;
}
//# sourceMappingURL=appColorPairs.js.map
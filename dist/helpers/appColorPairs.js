// ./src/helpers/appColorPairs.ts
import { tinycolor } from '@thebespokepixel/es-tinycolor';
export default function (appColorsJson, darkGroundText = '#fff', lightGroundText = '#000') {
    let data = JSON.parse(JSON.stringify(appColorsJson));
    let colors = Object.keys(data);
    let output = {};
    for (let i = 0; i < colors.length; i++) {
        if (typeof data[colors[i]] === 'string' || typeof data[colors[i]] === 'number') {
            const tc = tinycolor(data[colors[i]], {});
            if (tc.isValid()) {
                output[colors[i]] = {
                    backgroundColor: tc.toHexString(false),
                    color: tc.isDark() ? darkGroundText : lightGroundText,
                };
            }
        }
        else if (typeof data[colors[i]] === 'object') {
            const family = Object.keys(data[colors[i]]);
            const familyObj = {};
            for (let j = 0; j < family.length; j++) {
                if (typeof data[colors[i]][family[j]] === 'string') {
                    const tc = tinycolor(data[colors[i]][family[j]], false);
                    if (tc.isValid()) {
                        familyObj[family[j]] = {
                            backgroundColor: tc.toHexString(true),
                            color: tc.isDark() ? darkGroundText : lightGroundText,
                        };
                    }
                }
            }
            output[colors[i]] = familyObj;
        }
    }
    return output;
}
//# sourceMappingURL=appColorPairs.js.map
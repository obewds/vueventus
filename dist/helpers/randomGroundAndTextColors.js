// ./src/helpers/randomGroundAndTextColors.ts
import { tinycolor } from '@thebespokepixel/es-tinycolor';
import randomHex from './randomHex';
export default function (darkTextColor = '#fff', lightTextColor = '#000') {
    let colors = { backgroundColor: '', color: '' };
    let ground = tinycolor(randomHex(), {});
    let groundIsDark = ground.isDark();
    colors.backgroundColor = '#' + String(ground.toHex(false));
    colors.color = groundIsDark ? darkTextColor : lightTextColor;
    return colors;
}
//# sourceMappingURL=randomGroundAndTextColors.js.map
// ./src/helpers/verifyStringLengths.ts
import verifyType from './verifyType';
export default function (data, minLength = 1, maxLength = 100) {
    if (verifyType(data, 'string')) {
        return data.length >= minLength && data.length <= maxLength ? true : false;
    }
    return false;
}
//# sourceMappingURL=verifyStringLengths.js.map
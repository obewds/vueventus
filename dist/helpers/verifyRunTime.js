// ./src/validation/verifyRunTime.ts
import verifyType from './verifyType';
export default function (data, decimals = 3) {
    if (verifyType(data, 'string')) {
        if (decimals !== 1 && decimals !== 2 && decimals !== 3) {
            return false;
        }
        if (decimals === 1) {
            return /^([0-2]?[0-3][:])?([0-5]?[0-9][:])?([0-5]?[0-9])([.][0-9]{1})$/.test(data) ? true : false;
        }
        else if (decimals === 2) {
            return /^([0-2]?[0-3][:])?([0-5]?[0-9][:])?([0-5]?[0-9])([.][0-9]{2})$/.test(data) ? true : false;
        }
        else if (decimals === 3) {
            return /^([0-2]?[0-3][:])?([0-5]?[0-9][:])?([0-5]?[0-9])([.][0-9]{3})$/.test(data) ? true : false;
        }
    }
    return false;
}
//# sourceMappingURL=verifyRunTime.js.map
// ./src/validation/verifyDateMMDDYYYY.ts
import verifyType from './verifyType';
export default function (data) {
    if (verifyType(data, 'string')) {
        // accepts date with a year between 0001 and 9999
        return data.length === 10 &&
            /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/[0-9]{4}$/.test(data) ? true : false;
    }
    return false;
}
//# sourceMappingURL=verifyDateMMDDYYYY.js.map
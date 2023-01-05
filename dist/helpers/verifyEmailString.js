// ./src/validation/verifyEmailString.ts
import verifyType from './verifyType';
export default function (data, maxLength = 150) {
    if (verifyType(data, 'string')) {
        return data.length >= 6 &&
            data.length <= maxLength &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data) ? true : false;
    }
    return false;
}
//# sourceMappingURL=verifyEmailString.js.map
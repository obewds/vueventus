// ./src/helpers/decimalsOnly.ts
export default function (value, originalNumber) {
    const val = (String(value)).trim();
    // Allow only number and dot characters
    if (/^[0-9]*\.?[0-9]*$/.test(val)) {
        return Number(val);
    }
    else {
        return originalNumber;
    }
}
//# sourceMappingURL=decimalsOnly.js.map
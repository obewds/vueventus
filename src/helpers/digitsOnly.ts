// ./src/helpers/digitsOnly.ts

export default function (value: number|string, originalNumber: number): number {

    const val = (String(value)).trim()

    // Allow only be positive integer b/w 1 and 9
    if (/^[1-9]\d*$/.test(val)) {

        return Number(val)
        
    } else {

        return originalNumber

    }

}

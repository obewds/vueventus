// ./src/helpers/decimalsOnly.ts

export default function (value: number|string, originalNumber: number): number {

    const val = (String(value)).trim()

    // Allow only number and dot characters
    if (/^[0-9]*\.?[0-9]*$/.test(val)) {

        return Number(val)
        
    } else {

        return originalNumber

    }

}

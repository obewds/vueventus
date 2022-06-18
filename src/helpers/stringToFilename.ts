// ./src/helpers/stringToFilename.ts

export default function(str: string): string {

    return str.replace(/[^A-z0-9._-]/gi, '')

}

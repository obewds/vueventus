// ./src/helpers/stringToFilename.ts

export default function(string: string): string {

    return string.replace(/[^A-z0-9._-]/gi, '')

}

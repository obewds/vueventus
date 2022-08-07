// ./src/helpers/slugifyString.ts
// https://gist.github.com/codeguy/6684588#gistcomment-3243980

export default function (text: string, separator: string = '-'): string {

    let txt = text ? text : ''
    let sep = separator ? separator : '-'

    return (txt)
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .trim()
        .replace(/\s+/g, sep)
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, sep)
        
}
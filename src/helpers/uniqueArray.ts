// ./src/helpers/uniqueArray.ts

export default function(array: any[]): any[] {
    return array.filter((value, index, self) => self.indexOf(value) === index)
}

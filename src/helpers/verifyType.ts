// ./src/helpers/verifyType.ts

export default function ( data: any, type: 'string'|'number'|'boolean'|'symbol'|'undefined'|'object'|'function' ): boolean {

    return typeof data === type && data !== null ? true : false

}

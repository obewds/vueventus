// ./tests/helpers/timestampToDateTimeAmPm.test.js

import { timestampToDateTimeAmPm } from '../../src/index'


test('timestampToDateTimeAmPm helper module returns a truthy value', async () => {
    
    expect(timestampToDateTimeAmPm).toBeTruthy()

})


test('timestampToDateTimeAmPm helper module returns expected values', async () => {

    const timestamp = 1660166705
    const timestampAm = 1672824527
    const timestampMidnight = 1672790400
    const timestampNoon = 1672833600
    const timestampZero = 0
    
    const test1 = timestampToDateTimeAmPm( timestamp )

    const test2 = timestampToDateTimeAmPm( timestamp, 'long' )
    const test3 = timestampToDateTimeAmPm( timestamp, 'long', 'french' )
    const test4 = timestampToDateTimeAmPm( timestamp, 'long', 'spanish' )
    const test5 = timestampToDateTimeAmPm( timestamp, 'long', 'english' )
    const test6 = timestampToDateTimeAmPm( timestamp, 'long', 'english', 'am', 'pm' )
    const test7 = timestampToDateTimeAmPm( timestamp, 'long', 'english', 'AM', 'PM' )

    const test8 = timestampToDateTimeAmPm( timestamp, 'short' )
    const test9 = timestampToDateTimeAmPm( timestamp, 'short', 'french' )
    const test10 = timestampToDateTimeAmPm( timestamp, 'short', 'spanish' )
    const test11 = timestampToDateTimeAmPm( timestamp, 'short', 'english' )
    const test12 = timestampToDateTimeAmPm( timestamp, 'short', 'english', 'am', 'pm' )
    const test13 = timestampToDateTimeAmPm( timestamp, 'short', 'english', 'AM', 'PM' )
    
    const test14 = timestampToDateTimeAmPm( timestampAm )
    const test15 = timestampToDateTimeAmPm( timestampMidnight )
    const test16 = timestampToDateTimeAmPm( timestampNoon )
    const test17 = timestampToDateTimeAmPm( timestampZero )
    
    
    
    expect(test1).toBeTruthy()
    expect(test2).toBeTruthy()
    expect(test3).toBeTruthy()
    expect(test4).toBeTruthy()
    expect(test5).toBeTruthy()
    expect(test6).toBeTruthy()
    expect(test7).toBeTruthy()
    expect(test8).toBeTruthy()
    expect(test9).toBeTruthy()
    expect(test10).toBeTruthy()
    expect(test11).toBeTruthy()
    expect(test12).toBeTruthy()
    expect(test13).toBeTruthy()
    expect(test14).toBeTruthy()
    expect(test15).toBeTruthy()
    expect(test16).toBeTruthy()
    expect(test17).toBeTruthy()

})

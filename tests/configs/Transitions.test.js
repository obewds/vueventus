// ./tests/configs/Transitions.test.js

import { Transitions } from '../../src/index'

let testTransitions = {...Transitions}


test('Transitions component returns a truthy value', async () => {

    expect(Transitions).toBeTruthy()

})


test('Transitions component returns a truthy object with "durations", "easings", and "transitions" properties', async () => {

    expect(Transitions.durations).toBeTruthy()
    expect(Transitions.easings).toBeTruthy()
    expect(Transitions.transitions).toBeTruthy()

})


test('Transitions.getDurationClasses() method returns expected values', async () => {
    
    expect(Transitions.getDurationClasses('')).toBe('duration-300')
    expect(Transitions.getDurationClasses('1000')).toBe('duration-1000')
    expect(Transitions.getDurationClasses('700')).toBe('duration-700')
    expect(Transitions.getDurationClasses('500')).toBe('duration-500')
    expect(Transitions.getDurationClasses('300')).toBe('duration-300')
    expect(Transitions.getDurationClasses('200')).toBe('duration-200')
    expect(Transitions.getDurationClasses('150')).toBe('duration-150')
    expect(Transitions.getDurationClasses('100')).toBe('duration-100')
    expect(Transitions.getDurationClasses('75')).toBe('duration-75')
    expect(Transitions.getDurationClasses('wrongValue')).toBe('duration-300')

})


test('Transitions.getDurationClasses() method returns expected values for a custom defined transitions durations property that has no original Transitions.durations key/value pairs, and test that a wrong key that was not defined in the custom ones returns an empty string.', async () => {

    testTransitions.durations = {
        'somethingNew': 'duration-test-value'
    }

    expect(testTransitions.getDurationClasses('somethingNew')).toBe('duration-test-value')
    expect(testTransitions.getDurationClasses('wrongKey')).toBe('')

})


test('Transitions.getEasingClasses() method returns expected values', async () => {
    
    expect(Transitions.getEasingClasses('')).toBe('ease-in-out')
    expect(Transitions.getEasingClasses('linear')).toBe('ease-linear')
    expect(Transitions.getEasingClasses('in')).toBe('ease-in')
    expect(Transitions.getEasingClasses('out')).toBe('ease-out')
    expect(Transitions.getEasingClasses('inOut')).toBe('ease-in-out')
    expect(Transitions.getEasingClasses('wrongValue')).toBe('ease-in-out')

})


test('Transitions.getEasingClasses() method returns expected values for a custom defined transitions easings property that has no original Transitions.easings key/value pairs, and test that a wrong key that was not defined in the custom ones returns an empty string.', async () => {

    testTransitions.easings = {
        'somethingNew': 'duration-test-value'
    }

    expect(testTransitions.getEasingClasses('somethingNew')).toBe('duration-test-value')
    expect(testTransitions.getEasingClasses('wrongKey')).toBe('')

})


test('Transitions.custom() method returns expected values', async () => {
    
    const defaultStr = 'transition ease-in-out duration-300'

    const emptySettings = {
        transitions: '',
        easings: '',
        durations: '',
    }
    
    expect(Transitions.custom()).toBe(defaultStr)
    expect(Transitions.custom({})).toBe(defaultStr)
    expect(Transitions.custom(emptySettings)).toBe(defaultStr)
    expect(Transitions.custom('wrong', 'strings', 'passed')).toBe(defaultStr)

    const customSettings = {
        transitions: 'colors',
        easings: 'linear',
        durations: '1000',
    }

    expect(Transitions.custom(customSettings)).toBe('transition-colors ease-linear duration-1000')

})


test('Transitions.classes() method returns expected values', async () => {
    
    const defaultStr = 'transition ease-in-out duration-300'

    let transitionsKey = ''
    let easingsKey = ''
    let durationsKey = ''
    
    expect(Transitions.classes()).toBe(defaultStr)
    expect(Transitions.classes(transitionsKey, easingsKey, durationsKey)).toBe(defaultStr)
    expect(Transitions.classes('wrong', 'strings', 'passed')).toBe(defaultStr)

    transitionsKey = 'colors'
    easingsKey = 'linear'
    durationsKey = '1000'

    expect(Transitions.classes(transitionsKey, easingsKey, durationsKey)).toBe('transition-colors ease-linear duration-1000')

})


test('Transitions.getTransitionClasses() method returns expected values for a custom defined transitions transitions property that has no original Transitions.transitions key/value pairs, and test that a wrong key that was not defined in the custom ones returns an empty string.', async () => {

    testTransitions.transitions = {
        'somethingNew': 'duration-test-value'
    }

    expect(testTransitions.getTransitionClasses('somethingNew')).toBe('duration-test-value')
    expect(testTransitions.getTransitionClasses('wrongKey')).toBe('')

})

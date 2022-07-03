// ./cli/helpers/mergeJson.js


import merge from 'deepmerge'
import require from './require.js'

export default function (toMergePath, mergeTargetPath) {

    const toMerge = require(toMergePath)

    const mergeTarget = require(mergeTargetPath)

    return merge(toMerge, mergeTarget)

}

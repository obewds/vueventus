// ./cli/helpers/mergeJson.mjs


import merge from 'deepmerge'
import require from './require.mjs'

export default function (toMergePath, mergeTargetPath) {

    const toMerge = require(toMergePath)

    const mergeTarget = require(mergeTargetPath)

    return merge(toMerge, mergeTarget)

}

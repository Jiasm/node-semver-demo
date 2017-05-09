'use strict'

const semver = require('semver')

let versions = ['1.2.3', '1.2.4', '2.0.0', '2.1.0', '3.0.0']
let range1 = '^2'
let range2 = '1.2'
let range3 = '*'

let actual1 = semver.maxSatisfying(versions, range1)
let actual2 = semver.maxSatisfying(versions, range2)
let actual3 = semver.maxSatisfying(versions, range3)

console.log(`actual1: ${actual1}`)
console.log(`actual2: ${actual2}`)
console.log(`actual3: ${actual3}`)

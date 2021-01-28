import * as shell from 'gulp-shell'

export const tsc = shell.task(['tsc'])
export const typedoc = shell.task(['typedoc'])
export const mocha = shell.task(['mocha'])
export const nyc = shell.task(['nyc mocha'])

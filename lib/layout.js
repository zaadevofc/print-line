const chalk = require('chalk')
const cLog = (x, q) => `${chalk?.[x](q)}`

exports.type1 = (title, result, color) => `${chalk?.[color[0]]?.bold('┌─「')} ${chalk?.[color[0]]?.bold(title)} ${chalk?.[color[0]]?.bold('」')}\n${chalk?.[color[0]]?.bold('└>')} ${cLog(color[1], result)}\n`

exports.type2 = (title, result, color) => `${chalk.white.italic('#')} ${chalk?.[color[0]]?.bold('[')} ${chalk?.[color[0]]?.bold(title)} ${chalk?.[color[0]]?.bold(']')} ${chalk?.[color[0]]?.bold('>')} ${cLog(color[1], result)}`

exports.type3 = (title, result, color) => `${chalk.white.italic('>')} ${chalk?.[color[0]]?.bold(title)} ${chalk?.[color[0]]?.bold(':')} ${cLog(color[1], result)}`

exports.type4 = (title, result, color) => `${chalk.white.italic('>')} ${chalk?.[color[0]]?.bold('[')} ${chalk?.[color[0]]?.bold(title)} ${chalk?.[color[0]]?.bold(']')} ${chalk?.[color[0]]?.bold(':')} ${cLog(color[1], result)}`

exports.text = (result, utils) => `${chalk?.[utils[0]]?.[utils[1]](result)}`

const chalk = require('chalk')
const log = console.log
function pint (text, color) {
	return !color ? chalk.green(text)
	  : color === '.' ? chalk.bold.green(text)
	  : color.endsWith('.') ? chalk.bold.keyword(color.split('.')[0])(text)
	  : color.startsWith('#') ? chalk.hex(color)(text)
	  : color.startsWith('-') ? chalk.hex(color.split('-')[1]).bold(text)
	  : chalk.keyword(color)(text)
};
function bgPint (text, color) {
	return !color ? chalk.bgGreen(text)
	  : color === '.' ? chalk.bold.bgGreen(text)
	  : color.endsWith('.') ? chalk.bold.bgKeyword(color.split('.')[0])(text)
	  : color.startsWith('#') ? chalk.bgHex(color)(text)
	  : color.startsWith('-') ? chalk.bgHex(color.split('-')[1]).bold(text)
	  : chalk.bgKeyword(color)(text)
};

module.exports = { log, pint, bgPint }

/*
                                                                       © 𝐙𝐞𝐫𝐨 𝐓𝐰𝐨 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 by Team Zero Two ©
                                                                       IF you want to copy this code you must have to keep
                                                                       this copyright section.
                                                                       
                                                                       OtherWise We will sue you for sure.
                                                                       Thanks to Team Zero and Xeon
                                                                        


 


/*
                                                                       © 𝐙𝐞𝐫𝐨 𝐓𝐰𝐨 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 by Team Zero Two ©
                                                                       IF you want to copy this code you must have to keep
                                                                       this copyright section.
                                                                       
                                                                       OtherWise We will sue you for sure.
                                                                       Thanks to Team Zero and Xeon
                                                                        






*/
const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}

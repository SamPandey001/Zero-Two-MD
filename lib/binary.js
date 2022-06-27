/*
                                                                       © 𝐙𝐞𝐫𝐨 𝐓𝐰𝐨 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 by Team Zero Two ©
                                                                       IF you want to copy this code you must have to keep
                                                                       this copyright section.
                                                                       
                                                                       OtherWise We will sue you for sure.
                                                                       Thanks to Team Zero and Xeon
                                                                        
 





*/
async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }
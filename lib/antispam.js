/*
                                                                       © 𝐙𝐞𝐫𝐨 𝐓𝐰𝐨 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 by Team Zero Two ©
                                                                       IF you want to copy this code you must have to keep
                                                                       this copyright section.
                                                                       
                                                                       OtherWise We will sue you for sure.
                                                                       Thanks to Team Zero and Xeon
                                                                        
 





*/// Message Filter / Message Cooldowns
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 1500);// 1.5 sec is delay before processing next command;
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};

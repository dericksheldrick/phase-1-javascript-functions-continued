// code your solution here
// function declaration 
function saturdayFun(fun = "roller-skate" ){
    return (`This Saturday, I want to ${fun}!`)
}

//function expression
const mondayWork = function (office = "go to the office"){
    return (`This Monday, I will ${office}.`)
}
function wrapAdjective(wrap = "*"){

    return function(adj = "special"){
        return (`You are ${wrap}${adj}${wrap}!`);
    }
    

}
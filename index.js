function  receivesAFunction(callback){
    return callback()
}
function  returnsANamedFunction(){
    const namedFunction= function(){}
    return namedFunction
} 
function returnsAnAnonymousFunction(){
    return function(){}
}
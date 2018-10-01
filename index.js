// function justInvoke(callback){
//   return callback()
// }
const justInvoke = (callback) => callback()

const setThisWithCall = (fn,thisValue,arg) => fn.call(thisValue,arg)

const setThisWithApply = (fn,thisValue,arg) => fn.apply(thisValue,arg)

const returnNewFunctionOf = (functionToBeCopied,thisValue) => functionToBeCopied.bind(thisValue)

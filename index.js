//Your code here
function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  let new_fn = functionToBeCopied.bind(thisValue)
  return new_fn
}

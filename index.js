//Your code here
// justInvoke(fn): The function simply invokes the function passed through to it.
// It also returns the return value of the passed through function.

function justInvoke(fn) {
  return fn();
}

//calls and return the function as a callback
//assigns this to be bob while passing an argument to the invoked function
function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);

}

//invoke the function passed to it (fn)
//change 'this' value of that function
//invoke the passed function with argument
//apple
function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
  //args is an array
}

//write a function that returns a copy
//of the passed through, but sets the
//this value of the functions copy.

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}

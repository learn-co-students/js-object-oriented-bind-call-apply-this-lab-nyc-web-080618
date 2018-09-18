//Your code here

const justInvoke = function_name => function_name()

const setThisWithCall = function (set_function, entered_value, argument) {
  return set_function.call(entered_value, argument);
}

const setThisWithApply = function (set_function, entered_value, argument) {
  return set_function.apply(entered_value, argument);
}


const returnNewFunctionOf = function(set_function,argument){
  const new_function = set_function.bind(argument);
  return new_function;
}

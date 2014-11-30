// From: 
// http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
// In general, \n ends a statement unless:
var semicolons = {}

// The statement has an unclosed paren, array literal, or object literal or ends in some other way that is not a valid way to end a statement. (For instance, ending with . or ,.)
semicolons.unclosedLiteral = function() {}

semicolons.incrementOverNewLine = function(i, j, cb) {

  if ((i || j) == null) return cb(new Error('No iterators provided!')) 

  // Here, i will not be incremented. Instead, j will be.  
  i 
  ++
  j

  return cb(null, i, j) 
}

// It is a for(), while(), do, if(), or else, and there is no {
semicolons.noOpeningBracket = function() {}

//; is a valid JavaScript statement, so if(x); is equivalent to if(x){} or, “If x, do nothing.” 
semicolons.ifDoNothing = function() {

  if(i);
  // No error
}

// That is, if you have a \n immediately after a return, throw, break, or continue token, or a ++ or -- as a postfix operator (that is, x++\n or y--\n), then it will terminate the statement, no exceptions.
semicolons.returnBreak = function(i, cb) {
  return i
      ++ // Will not increment
}

semicolons.infiniteLoop = function(i, cb) {
  // This will go on forever
  while(i);
}

semicolons.infiniteSemicolons = function(i, cb) {
  ;;;i++;;;

  // This will be i++, as all the statements above are valid
  return i
}


exports.iterateOverNewLine = incrementOverNewLine;
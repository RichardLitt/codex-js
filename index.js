// From: 
// http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
var incrementOverNewLine = function(i, j, cb) {

  if ((i || j) == null) return cb(new Error('No iterators provided!')) 

  // Here, i will not be incremented. Instead, j will be.  
  i 
  ++
  j

  return cb(null, i, j) 
}


exports.iterateOverNewLine = incrementOverNewLine;
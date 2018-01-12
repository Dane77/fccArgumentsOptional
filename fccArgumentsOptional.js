function addTogether(a, b) {
  
  if (typeof a === "number" && typeof b === "number"){
    return a+b;
  } else if(typeof a === "number" && !b){
    return function(v){
      return addTogether(a, v);
    };
  }
 return undefined;
}

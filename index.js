//myEach
function myEach (collection, callback) {
    //Check if its an array or Obj
    if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection)
        }
    } else {
        //Object
        for (let key in collection) {
            if(collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }

    return collection;
}

//myMap
function myMap(collection, callback) {
  const newArr = [];
  if (Array.isArray(collection)) {
    //Check if its an array or Obj
    for (let i = 0; i < collection.length; i++) {
      newArr.push(callback(collection[i], i, collection)); 
    }
  } else {
    //Object
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        newArr.push(callback(collection[key], key, collection)); // 
      }
    }
  }
  return newArr; 
}

//myReduce
function myReduce(collection, callback, acc) {
    let values;
    let startIndex = 0;
  
    //Check if collection is array or obj
    if (Array.isArray(collection)) {
      values = collection;
    } else {
      values = Object.values(collection);
    }
  
    //checking if no initial accumulator
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
    }
  
    
    for (let i = startIndex; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  // myFind
  function myFind(collection, predicate) {
    //Check if its an array or obj
    if (Array.isArray(collection)) {
     
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i]; 
        }
      }
    } else {
      //object
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
    return undefined; 
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const result = [];
    //check if its an array or obj
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]); 
        }
      }
    } else {
      //Object
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
          result.push(collection[key]); 
        }
      }
    }
    return result; 
  }

//mySize
function mySize(collection) {
    //check if collection is an Array or Obj
    if (Array.isArray(collection)) {
      return collection.length; 
    } else {
      return Object.keys(collection).length; //If collection is an obj
    }
  }


//myFirst
function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  //myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

// myKeys
function myKeys(object) {
    const keys = [];

    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  // myValues
  function myValues(object) {
    const values = [];

    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]); 
      }
    }
    return values; 
  }











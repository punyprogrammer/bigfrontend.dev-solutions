
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  // your code here
  let resolvedPromises = 0;
  const results = [];
  // for empty arrays 
 
  return new Promise((resolve,reject)=>{
     if(promises.length === 0 ) resolve([]);

    // iterate through promises
    promises.forEach((currPromise,index)=>{
      // To validate if the current entry is use Promise.resolve() method
      Promise.resolve(currPromise).then((response)=>{
        resolvedPromises++;
        results[index]= response;
        if(resolvedPromises === promises.length) resolve(results);
      })
      .catch(error =>reject(error));
    })
  
})
}

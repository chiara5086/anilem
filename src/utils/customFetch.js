let is_ok =true;

//const {products} = require('./products.js');

export const customFetch = (timeout, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (is_ok) {
           resolve (task)
        } else {
            reject("KO")
        }  
        }, timeout)
        
    })
}
export const promiseProducts = (items) => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{ 
            resolve(items)
        },2000)
        
    })

}
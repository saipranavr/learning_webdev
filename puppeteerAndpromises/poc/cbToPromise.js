const { resolveObjectURL } = require('buffer');
let fs = require('fs');
console.log("before");

function cbToPromise(filePath)
{
    return new Promise(function(resolve, reject){
        fs.readFile(filePath,function cb(err,data){
            if(err)
            {
                reject(err);
            }
            else{
                resolve(data);
            }

        })
    });
}

let frp = cbToPromise("./package.json");
frp
.then(function(data){
    // console.log(data) ----> wont give proper answer
    console.log("data->"+data)
})
frp
.catch(function (err)
{
    console.log(err);
})

let frp1 = fs.promises.readFile("f1.txt");
// console.log(frp1);
// console.log(frp);
frp1.then(function(data){
    // console.log(data)
    console.log("data->"+data)
})

console.log("after");
const fs = require('fs')
// 1.1

// function getUserName(callback){
//     setTimeout(()=>{
//         const userName = "yossi";
//         callback(userName)
//     } ,1000)
// }

// getUserName((name)=>{
//     console.clear();
    
//     console.log(`the name is ${name}`);
    
// })

// 1.2

// function loadScore(callback){
//     setTimeout(()=>{
//         const score = 85;
//         callback(score)
//     },1500)
//     console.log("aaa");
    
// }


// loadScore((score)=>{
// console.log(`Loaded score: ${score}`);
    
// })

// 1.3

// function checkLogin(callback) {
//     setTimeout(()=>{
//         const isLoggedIn = true;
//         callback(isLoggedIn)
//     },2000)
// }

// checkLogin((isLoggedIn)=>{
//     if (isLoggedIn){
//         console.log("User is logged in");
//     }
//     else{
//         console.log("User is NOT logged in");
        
//     }
// })

// 1.4

// function getProductPrice(productId, callback) {
    
//     setTimeout(()=> {
//         const price = 99.9;
//         callback(price);
//     }, 1200)
// }

// getProductPrice(123,(price)=>{console.log("Price for product 123 is:" ,price)
// })
// console.log("Requesting product price...");

// 1.5

// function loadConfig(callback) {
//     setTimeout(()=>{
//         const config = {
//             dev : "dev",
//             debug : true
//         }
//         callback(config)
        
//     },500)
// }

// loadConfig((config)=>{console.log("Config loaded:", config);
// })

// 1.6

// function addAsync(a, b, callback) {
//     setTimeout(()=>{
//         const sum = a + b
//         callback(sum)
//     },1000)
    
// }
// addAsync(7,5,(sum)=>{console.log("Sum is:", sum)});

// 1.7

// function getFirstAsync(array, callback) {
//     setTimeout(()=>{const element = array[0]
//     callback(element)}, 700)
    
// }
// getFirstAsync(["a","b","c"], (element)=>{console.log("First:", element);
// })

// 1.8

// function isEvenAsync(number, callback) {
//     setTimeout(()=>{
//         const even = number % 2 === 0;
//         callback(even)
//     },800)

// }
// isEvenAsync(3, (even)=>{console.log("is even:", even);
// })
// isEvenAsync(4, (even)=>{console.log("is even:", even);
// })

// 1.9

// function downloadFile(url, callback) {
//     setTimeout(()=>{
//         console.log("Downloading from:", url);
//         callback("Download finished")
//     }, 1500)
// }
// downloadFile("http://example.com/file", (p)=>{console.log(p);
// })

// 1.10

// function doubleAsync(value, callback) {
//     setTimeout(()=> {
//         const result = value * 2;
//         callback(result)
//     }, 300)
// }

// doubleAsync(10,(r)=> {console.log("Result:", r);
// })


// 2.1



// console.log("start");

// fs.writeFile("note.txt", "hello from async writFile", (err)=>{
//     if (err) {
//         console.error(err)
//     } else {
//         console.log("file written successfully");
        
//     }
// })
// console.log("end");

// 2.2

// console.log("start");
// fs.readFile("note.txt", "utf8", (err, callback)=>{
//     if (err){
//         console.log(err);    
//     } else {
//         console.log(callback);
//     }
// }) 

// 2.3

// fs.appendFile("note.txt", "\nNew line added",(err, callback) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Line appended");
//     }
// });

// 2.4

// fs.mkdir("logs", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("rectory logs created"); 
//     }
// })

// 2.5

// fs.writeFile("logs/log.txt", "First log line", (err, callback) => {
//     if (err) {
//         console.log("Error creating log file");
//     } else {
//             console.log("Log file created"); 
//     }
// })

// 2.6

// fs.readdir("logs", (err, callback) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Files in logs:", callback);
//     }
// })

// 2.7

// fs.stat("note.txt", (err,stats)=>{
//     if (err) {
//         console.log("Error getting stats");
//     } else {
//         console.log( "Is file: " + stats.isFile(),"Size: " + stats.size);
//     }
// })

// 2.8

// fs.unlink("logs/log.txt", (err, callback)=> {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("log.txt deleted");
//     }
// } )

// 2.9

//  fs.writeFile("note.txt", "New content here", (err) => {
//     if (!err) {
//         console.log("note.txt overwritten");
//     }
//  })

// fs.readFile("note.txt", "utf8", (err, callback)=>{
// if (err){
//     console.log(err);    
// } else {
//     console.log(callback);
// }})

// 2.10

// fs.mkdir("data", (err, callback)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile("data/info.txt", "Some info", (error, callback)=>{
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log("Log file created");
                
//             }
//         })
//     }
// })
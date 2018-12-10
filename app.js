var fs = require('fs');

// //challenge 1
// // save to a variable
// let data =
//  //use fs to read file synchronously, creat file path, utf 8 to prevent buffering.
//  fs.readFileSync('./challenge1/info.txt', "utf8");
// console.log(data);

//asynch

// let asyncData = fs.readFile('./challenge1/info.txt', "utf8", (err, data)=> {
//   if (err) {
//     throw err
//   }else {
//     console.log(data)
//   }
// })


//challenge 2
// let names = [ 'Fast Eddy', 'Rico Suave', 'Nancy Drew'];
// //file to manipulate, what you want to append
// fs.appendFileSync('./challenge2/info.txt', names)


//challenge3

// fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt' )


//challenge4

// fs.mkdirSync('./challenge4/copyfolder')
//
// fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');

//challenge5

let text = fs.readFileSync("./challenge5/info.txt", "utf8");
let newText = ''
 for(let i = 0; 1 < text.length; i++) {
   if(text[i] === '-') {
     newText += " ";
   }else {
     newText += text[i]
   }
 }

 fs.writeFileSync('./challenge5/info.txt', newText);



//challenge 6

// let files = fs.readdirSync('./challenge6/');
// // console.log(files);
// let txtFiles = files.filter(file => file.endsWith('.txt'));
// console.log(txtFiles)

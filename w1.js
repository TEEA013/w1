// let prompt = require('prompt-sync')();
// let name = prompt('Input your name : ');
// let lastName = prompt('Input your lastname : ');
// let grade = prompt('Input your grade : ');
// let prompt = require('prompt-sync')();
// let AD_year = prompt('กรอบปีพุทธศ์กราช : ');
// AD_year = parseInt(AD_year);
 
// let prompt = require('prompt-sync')();
// let Side = parseFloat(prompt('ด้าน : ')); 

// console.log(
//   "------------\n" +
//   "จำนวนพื้นที่สี่เหลี่ยมจัตุรัส\n" +
//   "ด้าน : " + Side + "\n" +
//   "พื้นที่สี่เหลี่ยมจัตุรัส : " + (Side * Side) + 
//   "\n------------"
// );


// console.log (
//     "------------\n" + 
//     "ค.ศ." , (AD_year + 543) + "ตรงกับ" + "พ.ศ." , AD_year + 
//     "\n----------"
// )


// console.log (
//     `"---------/n"` + 
//     `fisrt name :` , name  + "/n" +
//     `last name :` , lastName + "/n" +
//     `geade :` , grade + "/n" + 
//     `/n--------`
// )


// console.log (
//     `---------/n` + 
//     name + ` ` + lastName + ` ` + grade +
//     `/n-------`
// )




// console.log (
//     "---------/n" + 
//     "fisrt name : " + name + "\n" + 
//     "last name : " + lastName + "\n" + 
//     "grade :" + grade + "/n"
// )






// console.log(
//     "--------/n" +
//     name + " " + lastName + " " + grade
// )




// console.log(`
// ----------
// ${name}
// ----------
// ${lastName}
// ----------
// ${grade}
// ----------
// `);
// let prompt = require('prompt-sync')();
// let Wide = parseFloat(prompt('กว้าง : '));
// let Length = parseFloat(prompt('ยาว : ')); 

// console.log(
//   "--------------------\n" +
//   "คำนวณพื้นที่สี่เหลี่ยมผืนผ้า\n" +
//   "กว้าง   : " + Wide + "\n" +
//   "ยาว     : " + Length + "\n" +
//   "พื้นที่สี่เหลี่ยมผืนผ้า : " + (Wide * Length) + 
//   "\n--------------------"
// );
let prompt = require('prompt-sync')();
let R = parseFloat(prompt('รัศมี : ')); 
let PI = 3.14;

console.log(
  "------------------------\n" +
  "คำนวณพื้นที่วงกลม\n" +
  "รัศมี       : " + R + "\n" +
  "พื้นที่วงกลม : " + ((R * R) * PI).toFixed(2) + 
  "\n------------------------"
);

//soal no 1 variable dengan tipe data
const biodata = {
    nama : "vicko",
    age : 25,
    email : "vicko.maris.s@gmail.com",
    address : "villa mutiara serpong",
    isMerried : false,
    hobbies : ["nonton", "bulu tangkis", "belajar coding"],
  }
  
  console.log(biodata);
  //console.log(biodata.address);
  let keyObj = "address";
  console.log(biodata[keyObj]);


//soal no 2 genap ganjil
let genapganjil = 5;
for(var i=1; i<=genapganjil; i++){
  if(i%2===0){
    console.log(i,"merupakan bilangan genap")
  }else{
    console.log(i,"merupakan bilangan ganjil")
  }
}


//soal no 3 printsegitiga
let printSegitiga = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= printSegitiga; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);
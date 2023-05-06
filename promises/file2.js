//

let p = new Promise(function (resolve,reject) {
  console.log("starting the async code !");
  // async code
  isSuccess = true;
  if(isSuccess){
    console.log("calling resolve !");
    resolve();
  }else {
    console.log("calling reject !");
    reject();
  }
});

console.log("after the promis creation ! and befor then and catch ... ");

p.then(function () {
  console.log("calling then !");
}).catch(function () {
  console.log("error");
});

console.log("after then and catch !");

//


let promis = new Promise(function (resolve,reject) {
  console.log("starting the async code");
  // async code
  setTimeout(function () {
    document.getElementById('title1').style.visibility="visible";
    resolve();
    console.log("calling resolve");
  },2000);

});
console.log("after the promis creation and befor then and catch");
promis.then(function () {
  console.log("calling then !");
}).catch(function () {
  console.log("error");
});
console.log("after then and catch");

//

/*
let p = new Promise((resolve,reject) =>{
  // async code
  setTimeout(() =>{
    document.getElementById('title1').style.visibility="visible";
    resolve();
  },2000);

});

p.then(() =>{
  console.log("the title 1 on the screen !");
})
*/

// --------------------------------------------------------------- //


new Promise((resolve,reject) =>{
  setTimeout(()=>{
    document.getElementById('title1').style.visibility="visible";
    resolve();
  },2000);
}).then(()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      document.getElementById('title2').style.visibility="visible";
      resolve();
    },2000);
  })
}).then(()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      document.getElementById('title3').style.visibility="visible";
      resolve();
    },2000);
  })
}).then(()=>{
  setTimeout(()=>{
    document.getElementById('title4').style.visibility="visible";
    //resolve();
  },2000);
})

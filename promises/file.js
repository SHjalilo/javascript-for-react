//

// callback hell !!
setTimeout(function () {
  //alert('hello');   // after 1 s => alertBox
  document.getElementById("title1").style.visibility = "visible";
  setTimeout(function () {
    document.getElementById("title2").style.visibility = "visible";
    setTimeout(function () {
      document.getElementById("title3").style.visibility = "visible";
      setTimeout(function () {
        document.getElementById("title4").style.visibility = "visible";
      },1000);
    },1000);
  },1000);
},1000);

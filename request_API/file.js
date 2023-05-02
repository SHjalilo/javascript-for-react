// 

let request = new XMLHttpRequest();
// open(method,url)
request.open("GET","https://jsonplaceholder.typicode.com/posts");
// convert data to json 
request.responseType = "json";
request.send();

//request.onreadystatechange = function(){
    //console.log("done");
     // string
    //console.log(request.responseText);
//}

request.onload = function(){
   
    console.log(typeof request.response); // => object
    let posts = request.response;
    
    for(post of posts){
        document.getElementById("content").innerHTML += `<h1 style="text-align:center; color:green;"> ${post.title} </h1> <br> <hr>`;
        //console.log(post);
    }
}




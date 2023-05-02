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
    if(request.status >= 200 && request.status < 300){
        let posts = request.response;
    	for(post of posts){
        	document.getElementById("content").innerHTML += `<h1 style="text-align:center; color:green;"> 
        	                                                  ${post.title} </h1><br><hr>`;
        //console.log(post);
    	}
    }
    //console.log(typeof request.response); // => object
}

//

function createNewPost(){
    let request = new XMLHttpRequest();
    request.open("POST","https://jsonplaceholder.typicode.com/posts");
    request.responseType = "json";
    request.setRequestHeader("Accept","application/json");
    request.setRequestHeader("Content-type","application/json");
    let bodyParams = `{
        "title" : "hello js",
	"body":"js api ",
	"user_id": 2
    }`;
    request.send(bodyParams);
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
        	let response = request.response;
        	console.log(response);
        	// status code
        	console.log("status code is "+request.status);
        }
    }   
}

//
//createNewPost();

// update

function updatePost(){
    let request = new XMLHttpRequest();
    request.open("PUT","https://jsonplaceholder.typicode.com/posts/1");
    request.responseType = "json";
    request.setRequestHeader("Accept","application/json");
    request.setRequestHeader("Content-type","application/json");
    let bodyParams = `{
        "title" : "oop",
	"body":"js is functional lang ",
	"user_id": 1
    }`;
    request.send(bodyParams);
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
        	let response = request.response;
        	console.log(response);
        	// status code
        	console.log("status code is "+request.status);
        	alert("the post has been updated successfully !");
        }else{
            alert("error !");
        }
    }   
}

// 
//updatePost();

// delete 

function deletePost(){
    let request = new XMLHttpRequest();
    request.open("DELETE","https://jsonplaceholder.typicode.com/posts/1");
    request.responseType = "json";
    request.setRequestHeader("Accept","application/json");
    request.setRequestHeader("Content-type","application/json");
    request.send();
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
        	let response = request.response;
        	console.log(response);
        	// status code
        	console.log("status code is "+request.status);
        	alert("the post has been deleted successfully !");
        }else{
            alert("error !");
        }
    }   
}

// 
//deletePost();

// filter with user ID 

function getPostWithUserId(){
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId=5");
    request.responseType = "json";
    request.send();
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
        	let posts = request.response;
        	for(post of posts){
        	    document.getElementById("test").innerHTML += `<h1 style="text-align:center; color:red;"> 
        	                                                  ${post.title} </h1><br><hr>`;
        	}
        	console.log("status code is "+request.status);
        }else{
            alert("error !");
        }
    }  
}

//

getPostWithUserId();

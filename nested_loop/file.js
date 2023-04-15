// multiplication table challenge :

//document.getElementById("val").innerHTML = ` <h1> Multiplication Table Of x </h1>`;

for(var i = 1; i <= 10; i++){
    console.log(i+"i");
    document.getElementById("val").innerHTML += ` <h1  style="text-align:center;"> Multiplication Table Of ${i} </h1>`;
    for(var j = 1;j <= 10; j++){
        console.log(j+"j");
        document.getElementById("val").innerHTML += ` <h5 style="text-align:center;"> ${i} X ${j} = ${i*j} </h5> `;
    }
    document.getElementById("val").innerHTML += ` <hr>`;
}


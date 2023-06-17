function sum(num1,num2) {
    return num1+num2
}

function calc(num1,num2,callback){
    return callback(num1,num2)
}

console.log(calc(3,5,sum));



setTimeout(() => {
    console.log("hola mundo");
}, 2000);


function saludo(name) {
    console.log(`Hola ${name}`);
}

setTimeout(saludo,3000,"gio")
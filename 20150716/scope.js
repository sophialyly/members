var a = 1;
function say1(){
    var b =2;
    console.log(a,b);
}

function say2(){
    var c =2;
    console.log(a,b,c);
}

//say1();
//say2();

var obj = {name:'zfpx'};
with(obj){
    var name = 'zfpx';
    console.log(name);
}
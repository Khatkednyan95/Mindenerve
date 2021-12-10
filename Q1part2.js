Array.prototype.insert = function(index,item){
this.splice(index,0,item)
}

var a=[2,4,8,5,12,15,6,10,7,30,25,43,46,21];

var d=[]
var len = a.length
var c=0;

a.map((item,i)=>{
if(item %5==0 && !d.includes(item))
{
let b=item;
d.push(b)
a=a.filter(x=>x!==item);

let f=len-c-1

a.insert(f,item)
;

c++
}})
console.log(a);
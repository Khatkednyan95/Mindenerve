var a=[2,4,8,5,12,15,6,10,7,30,25,43,46,21];
a.map((item,i)=>{
if(item %5==0)
{
let b=item;
a=a.filter(x=>x!=item);
a[a.length]=item;

}


})
console.log(a);
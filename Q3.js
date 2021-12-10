var a=[21,43,54,23,67,90,84,34,45,55,76,26,48];
var count=0;
for(var i=0;i<a.length;i++)
{
var tempnum=a[i];
var reversenum=((tempnum%10)*10)+(parseInt(tempnum/10));
if(a.includes(reversenum) && reversenum!=a[i])
{count++;}
}
console.log(count/2)
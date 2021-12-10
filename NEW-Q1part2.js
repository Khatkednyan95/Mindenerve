var a=[2,4,8,5,12,15,6,10,7,30,25,43,46,45,21];
var cnt=0;
var len=a.length;
a.map((item,i)=>{
if(item%5==0 && i<len-cnt-1){

let t;
let s;
loop2:
for(let j=len-1-cnt;j>0;j--){
if(a[j]%5!=0 && j>cnt){
s=a[j]
t=j;
break loop2;
}else{cnt++;
}

}
if(t>i){
let tmp=item;
a[i]=s;
a[t]=tmp;
}
cnt++;

}
})
console.log(a);
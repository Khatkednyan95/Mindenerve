var str="NINIT";
var odd=0;
for(var i=0;i<str.length;i++){

var ch=str.charAt(i);
var cnt=1;
for(var j=0;j<str.length;j++){
if(i!=j && ch==str.charAt(j)){cnt++;}

}
if(cnt%2!=0){odd++;}


}
if(odd>1){console.log("not palindrmable");}
else{console.log("palindrmable");}
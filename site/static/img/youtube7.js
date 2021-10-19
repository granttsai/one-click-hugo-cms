var arr = [];

arr.push("<br><a href=h2.html>語言如何讓我們的思考成型<br><img src=https://img.youtube.com/vi/RKK7wGAYP6k/0.jpg></a>");
arr.push("<br><a href=h3.html>只花20小時學會任何事情<br><img src=https://img.youtube.com/vi/5MgBikgcWnY/0.jpg></a>");
arr.push("<br><a href=h4.html>如何讓發音更像是美式母語般發音<br><img src=https://img.youtube.com/vi/m3g51xfopIE/0.jpg></a>");
arr.push("<br><a href=h5.html>There's more to life than being happy<br><img src=https://img.youtube.com/vi/y9Trdafp83U/0.jpg></a>");
arr.push("<br><a href=h6.html>Is Social Media Hurting Your Mental Health?<br><img src=https://img.youtube.com/vi/Czg_9C7gw0o/0.jpg></a>");
arr.push("<br><a href=h7.html>I Am Not Your Asian Stereotype<br><img src=https://img.youtube.com/vi/_pUtz75lNaw/0.jpg></a>");
//arr.push("<br><a href=h.html><br><img src=https://img.youtube.com/vi//0.jpg></a>");
//arr.push("<br><a href=h.html><br><img src=https://img.youtube.com/vi//0.jpg></a>");


  var rrr=[];

my_ran4(arr.length,1,arr.length);
function my_ran4(n,min,max){
  var arr=[];
  var arr2=[];
  for(i=0;i<max-min+1;i++){
    arr[i]=i+min;
  }
  for(i=0;i<n;i++){
    var x=parseInt(Math.random()*arr.length);
    arr2[i]=arr[x];
    for(j=x;j<arr.length;j++){
      arr[j]=arr[j+1];
    }
    arr.length=arr.length-1;
  }
  rrr=arr2;
}


for (let i = 0; i < arr.length; i++) {
if (arr[rrr[i]] === undefined) {}else{
  document.write(arr[rrr[i]]);}
}

/*
document.write("<br><a href=h.html><br><img src=http://img.youtube.com/vi//0.jpg></a>");
document.write("<br><a href=h.html><br><img src=http://img.youtube.com/vi//0.jpg></a>");
document.write("<br><a href=h.html><br><img src=http://img.youtube.com/vi//0.jpg></a>");
document.write("<br><a href=h.html><br><img src=http://img.youtube.com/vi//0.jpg></a>");
document.write("<br><a href=h.html><br><img src=http://img.youtube.com/vi//0.jpg></a>");
*/

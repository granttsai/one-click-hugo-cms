
var arr = [];

arr.push("<br><a href=s4.html>Olivia Rodrigo Driver License<br><img src=https://img.youtube.com/vi/ZmDBbnmKpqQ/0.jpg></a>");
arr.push("<br><a href=s2.html>BTS防彈少年團Butter<br><img src=https://img.youtube.com/vi/WMweEpGlu_U/0.jpg></a>");
arr.push("<br><a href=s3.html>BTS防彈少年團Permission to Dance<br><img src=https://img.youtube.com/vi/CuklIb9d3fI/0.jpg></a>");
arr.push("<br><a href=s5.html>The Beatles - Here Comes The Sun<br><img src=https://img.youtube.com/vi/KQetemT1sWc/0.jpg></a>");
arr.push("<br><a href=s6.html>Maroon 5 - Girls Like You<br><img src=https://img.youtube.com/vi/aJOTlE1K90k/0.jpg></a>");
arr.push("<br><a href=s7.html>passenger let her go<br><img src=https://img.youtube.com/vi/RBumgq5yVrA/0.jpg></a>");

arr.push("<br><a href=s8.html>Ed Sheeran - Perfect<br><img src=https://img.youtube.com/vi/2Vv-BfVoq4g/0.jpg></a>");

arr.push("<br><a href=s9.html>Sia - Chandelier<br><img src=https://img.youtube.com/vi/2vjPBrBU-TM/0.jpg></a>");

arr.push("<br><a href=s10.html>Imagine Dragons - Believer<br><img src=https://img.youtube.com/vi/7wtfhZwyrcc/0.jpg></a>");
arr.push("<br><a href=s11.html>Rihanna - Diamonds<br><img src=https://img.youtube.com/vi/lWA2pjMjpBs/0.jpg></a>");

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
arr.push("<br><a href=s.html><br><img src=http://img.youtube.com/vi//0.jpg></a>");

*/

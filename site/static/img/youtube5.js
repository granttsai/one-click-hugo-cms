var arr = [];

arr.push("<br><a href=s3.html>IU(아이유)  Celebrity<br><img src=https://img.youtube.com/vi/0-q1KafFCLU/0.jpg></a>");

arr.push("<br><a href=s2.html>Red Velvet 레드벨벳 Queendom<br><img src=https://img.youtube.com/vi/c9RzZpV460k/0.jpg></a>");


arr.push("<br><a href=s7.html>aespa 에스파 Savage<br><img src=https://img.youtube.com/vi/WPdWvnAAurg/0.jpg></a>");

arr.push("<br><a href=s4.html>KEY 키 BAD LOVE<br><img src=https://img.youtube.com/vi/OYWWnd9ACMI/0.jpg></a>");

arr.push("<br><a href=s6.html>NCT 127 엔시티 127 Sticker<br><img src=https://img.youtube.com/vi/1oYWnbTSang/0.jpg></a>");

arr.push("<br><a href=s8.html>SUNGMIN 성민 Goodnight Summer<br><img src=https://img.youtube.com/vi/xSXslki5xIY/0.jpg></a>");

arr.push("<br><a href=s9.html>KANGTA 강타 아마 Maybe<br><img src=https://img.youtube.com/vi/TuAWforbaic/0.jpg></a>");

arr.push("<br><a href=s10.html>SUNGMIN 성민 설렘꽃 Blooming<br><img src=https://img.youtube.com/vi/8sY7uUMkFdo/0.jpg></a>");

arr.push("<br><a href=s11.html>HYO 효연 Second (Feat. 비비 (BIBI))'<br><img src=https://img.youtube.com/vi/rthppvDJ2fA/0.jpg></a>");

arr.push("<br><a href=s12.html>KANGTA 강타 7월의 크리스마스 (Christmas in July)<br><img src=https://img.youtube.com/vi/omRMIR9sQHQ/0.jpg></a>");

arr.push("<br><a href=s13.html>D.O. 디오 Rose<br><img src=https://img.youtube.com/vi/_btxV8tJM7w/0.jpg></a>");

arr.push("<br><a href=s14.html>aespa 에스파 Next Level<br><img src=https://img.youtube.com/vi/4TWR90KJl84/0.jpg></a>");

arr.push("<br><a href=s15.html>NCT 127 gimme gimme<br><img src=https://img.youtube.com/vi/6ZUPsl0EVuk/0.jpg></a>");

arr.push("<br><a href=s16.html>BAEKHYUN ベクヒョン Get You Alone<br><img src=https://img.youtube.com/vi/uqcZUIUb7fk/0.jpg></a>");
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


var korean = document.querySelector('#korean'); //id korean  찾기
var english = document.querySelector('#english'); //id english 찾기
var adventure = document.querySelectorAll('span')[0]; //새로운 도전 찾기
var success = document.querySelectorAll('span')[1]; //성공적이길 찾기
function spanTextColor(color){
  // var slist = document.querySelectorAll('span');
  // var i=0
  // while(i < slist.length){
  //   slist[i].style.color = color;
  //   i=i+1;
  // }
  $('span').css('color',color);//span을 찾아서 css의 color(text color 선택) 매개변수 color
}
function ko_bg_text_color(bgcolor, color){
  // js.style.backgroundColor=bgcolor;
  // js.style.color=color;
  $('#korean').css('backgroundColor', bgcolor); 
  $('#korean').css('color',color);
}
function en_bg_color(bgcolor){
  english.style.backgroundColor=bgcolor;
}
function textColorDivided(color0, color1){
  adventure.style.color=color0;
  success.style.color=color1;
}

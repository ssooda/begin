# updowngame
https://ssooda.github.io/updowngame/updowngame.html
###1~50까지 배열을 만들고 거기서 하나 뽑는 방식으로 할 수도 있음 -> 로또 만들기 하고 다시 수정해볼 것
```html
<!-- 이걸 어떻게 하면 완성할 수 있을까 ? 1~50중에서 숫자뽑기
  function selection (){
    let answerGroup = [];
    answerGroup.push(Math.round((Math.random())*5)); //십의 자리는 0~5까지
    answerGroup.push(Math.round((Math.random())*9)); //일의 자리는 0~9까지
    return answerGroup.join('');
    }
    let answer = selection();
    console.log(answer);
    if(1<=answer<=50){
      return;
    } else{
      selection()
  }
  이렇게 해도 안 됨
  answer값을 어떻게 하면 끌고올 수 있을까
  asnwer이 범위를 벗어나면 계속 다시 숫자를 뽑도록
  if 위에서 변수가 정의되어야하던데
  if 안에서 변수가 정의되어도 되나?
  i
-->
<!--
    //0~9까지 숫자 카드 모둠 만들기
    //이 게임에서는 중복이 가능하므로 숫자 카드 모둠에서 splice할 필요는 없음 
    let number = [];
    for (i=0 ; i<10 ; i++){
      number.push(i);
    }
    console.log(number);

-->
```

const lunch = [
  "한솥",
  "맥주",
  "컵밥",
  "파스타",
  "생라면",
  "불고기",
  "siri얼"
]
//Math.random()을 활용한 구문.
//아래의 구문의 경우, 기본적으로 쓰이는 최소값 최대값 사이의 랜덤값 출력 함수이다.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
let index = getRandomInt(0, lunch.length);
console.log("오늘의 점심은 " + lunch[index]+"입니다!" + " 이것은 " + index +"번째 인덱스입니다.");
console.log("lunch의 length는 " + lunch.length + "이다.");

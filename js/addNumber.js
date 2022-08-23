var num1 = parseInt(prompt("첫 번째 숫자는? "));
var num2 = parseInt(prompt("두 번째 숫자는? "));
addNumber(num1, num2); // 값 2개와 함께 함수 실행

function addNumber(a, b) { // 매개변수 a, b가 있는 함수 선언
  var sum = a + b;
  alter("두 수를 더한 값은 " + sum + "입니다.");
}

addNumber(2, 3);
5
addNumber(10, 20);
30


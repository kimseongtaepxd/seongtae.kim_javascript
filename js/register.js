var userId = document.querySelector("#user-id"); // [아이디 필드를 가져와 변수에 저장]
var pw1 = document.querySelector("#user-pw1"); // '비밀번호' 필드를 가져와 변수에 저장
var pw2 = document.querySelector("#user-pw2"); // '비밀번호 확인' 필드를 가져와 변수에 저장

userId.onchange = checkId;

function checkId() {
  if (userId.value.length < 4 || userId.value.length > 15) { //userId 필드 내용의 길이가 4이하이거나 15 이상일 경우 실행
    alert("4~15자리의 영문과 숫자를 사용하세요."); // 오류 메시지 출력
    userId.selected(); // 다시 입력할 수 있도록 userId 필드 선택
  }
}
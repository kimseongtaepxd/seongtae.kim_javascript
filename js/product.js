var isOpen = false;
var cup = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");
// 변수 선언 소스를 어디에 넣어도 상관 없지만
// 변수 선언 소스끼리 모아 두는 것이 나중에 변수를 확인하기 쉽다.

var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

var view = document.querySelector("#view"); // id="view" 인 요소를 가져옴
view.addEventListener("click", function() { // view를 눌렀을 때 실행할 함수 선언
  if(isOpen == false) {
    // 상세 정보가 감춰져 있을 때 실행할 소스 위치
    document.querySelector("#detail").style.display = "block"; // 상세 정보를 확인
    view.innerText = "상세 설명 닫기"; // 링크 내용 수정
    isOpen = true; // 표시 상태로 지정
  }
  else {
    document.querySelector("#detail").style.display = "none"; // 상세 정보를 화면에서 감춤
    view.innerText = "상세 설명 보기"; // 링크 내용 수정
  }ㅏ;ㅣㅡㅏㅡㅔㅏㅐ'ㅏㅐㅏ
})
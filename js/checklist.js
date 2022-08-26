var itemList = []; 
// var itemList = new Array();를 사용해 새로운 배열을 만드는 것도 가능

var addBtn = document.querySelector("#add"); // #add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener("click",addList); //addBtn을 클릭하면 addList 함수 실행
//add EventListener() 함수 대신 addBtn.on-click = addList;로 사용해도 됩니다.

function addList() {
  var item = document.querySelector("#item").value; // 텍스트 필드 내용 가져옴
  if (item != null) {
    itemList.push(item); //itemList 배열 끝에 item 변숫값 추가
    document.querySelector("#item").value = ""; // id="item"인 요소 값을 지움
    document.querySelector("#item").focus(); // 텍스트 필드에 focuse() 함수 적용
  }
  showList(); //목록을 표시하는 showList() 함수 실행
}

function showList() {
  var list = "<ul>"; //목록을 시작하는 <ul> 태그 저장
  for (var i=0; i<itemList.length; i++) { 
    list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";//배열 요소마다 반복
    // 바깥에 겹따옴표(" ")가 있고 그 안에 다시 따옴표를 써야하므로 class='close' 에서 홑따옴표(' ')를 사용
  }
  list += "</ul>"; //목록을 끝내는 </ul>태그 저장

  document.querySelector("#itemList").innerHTML = list; //list 변숫값 표시

  var remove = document.querySelectorAll(".close"); //삭제 버튼을 변수로 저장. 배열 형태가 됨

  for (var i=0; i<remove.length; i++) { //remove 배열의 모든 요소 확인
    remove[i].addEventListener("click", removeList); // 요소를 클릭하면 removeList() 실행
  }
}

function removeList() {
  var id = this.getAttribute("id");
  itemList.splice(id, 1); //itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
  showList(); //변경된 itemList 배열을 다시 화면에 표시
}
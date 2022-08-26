var check = document.querySelector("#shippingInfo"); // 체크 상자의 id는 shippinginfo

check.addEventListener("click", function() { // check 요소에 click 이벤트가 발생했을 때 실행할 함수
  if (check.checked == true) { //체크된다면
    document.querySelector("#shippingName").value = document.querySelector("#billingName").value; // 주문 정보(이름)을 배송 정보(이름)에 복사
    document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value; // 주문 정보(전화번호)를 배송 정보(전화번호)에 복사
    document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value; // 주문 정보(주소)를 배송 정보(주소)에 복사
  }
  else { // 체크가 해제된다면 배송 정보 필드를 지움
    document.querySelector("#shippingName").value = "";
    document.querySelector("#shippingTel").value = "";
    document.querySelector("#shippingAddr").value = "" ;
  }
});
//HTML 의 DOM 정보들을 변수로 선언하는공간

const userWriteMainDiv = document.querySelector(".bottomContents"); // 작성구간 전체가져오는구간

const mainTitle = document.querySelector(".greetings"); // 메인메뉴
const subTitle = document.querySelector(".yourInformation"); // 서브메뉴
const hiddenMainTitle = document.querySelector(".welcome"); // 숨김처리된 메인메뉴
const userWriteId = document.querySelector(".userId"); // 아이디
const userFailIdCheckTrue = document.querySelector(
  ".userIdEffectivenessCheckTrue"
); // 아이디 성공
const userFailIdCheckFalse = document.querySelector(
  ".userIdEffectivenessCheckFalse"
); // 아이디 실패

const userWritePwd = document.querySelector(".userPwd"); //비밀번호
const userFailPwdCheckTrue = document.querySelector(
  ".userPwdEffectivenessCheckTrue"
); // 비밀번호 성공
const userFailPwdCheckFalse = document.querySelector(
  ".userPwdEffectivenessCheckFalse"
); // 비밀번호 실패

const userWritePwd1MoreCheck = document.querySelector(".userPwdCheck"); // 비밀번호 재확인

const userFailPwd1MoreCheckTrue = document.querySelector(
  ".userPwdEffectiveness1MoreChekTrue"
); // 비밀번호 확인 성공
const userFailPwd1MoreCheckFalse = document.querySelector(
  ".userPwdEffectiveness1MoreChekFalse"
); // 비밀번호 확인 실패

const userWriteSubmit = document.querySelector(".userSubmit"); // 제출눌르는 버튼 가져오는 곳

//함수 작성공간

function idCheckFunction(value) {
  var regExp = /^[A-za-z0-9]{6,12}$/;
  return regExp.test(value);
}
function pwdCheckFunction(value) {
  let _regExp = /^[a-zA-Z0-9]{8,16}$/;
  return _regExp.test(value);
}
function userWriteFunction() {
  if (idCheckFunction(userWriteId.value)) {
    userFailIdCheckTrue.classList.remove("hidden");
    userFailIdCheckFalse.classList.add("hidden");
    userWriteId.classList.remove("falseChangeBorder");
    userWriteId.classList.add("trueChangeBorder");
  } else {
    userFailIdCheckTrue.classList.add("hidden");
    userFailIdCheckFalse.classList.remove("hidden");
    userWriteId.classList.remove("trueChangeBorder");
    userWriteId.classList.add("falseChangeBorder");
  }

  if (
    pwdCheckFunction(userWritePwd.value) === true &&
    userWritePwd.value === userWritePwd1MoreCheck.value
  ) {
    userFailPwdCheckTrue.classList.remove("hidden");
    userFailPwdCheckFalse.classList.add("hidden");
    userFailPwd1MoreCheckTrue.classList.remove("hidden");
    userFailPwd1MoreCheckFalse.classList.add("hidden");
    userWritePwd.classList.remove("falseChangeBorder");
    userWritePwd.classList.add("trueChangeBorder");
    userWritePwd1MoreCheck.classList.remove("falseChangeBorder");
    userWritePwd1MoreCheck.classList.add("trueChangeBorder");
  } else if (
    pwdCheckFunction(userWritePwd.value) &&
    userWritePwd.value !== userWritePwd1MoreCheck.value
  ) {
    userFailPwdCheckTrue.classList.remove("hidden");
    userFailPwdCheckFalse.classList.add("hidden");
    userFailPwd1MoreCheckTrue.classList.add("hidden");
    userFailPwd1MoreCheckFalse.classList.remove("hidden");
    userWritePwd.classList.remove("falseChangeBorder");
    userWritePwd.classList.add("trueChangeBorder");
    userWritePwd1MoreCheck.classList.add("falseChangeBorder");
    userWritePwd1MoreCheck.classList.remove("trueChangeBorder");
  } else {
    userFailPwdCheckTrue.classList.add("hidden");
    userFailPwdCheckFalse.classList.remove("hidden");
    userFailPwd1MoreCheckTrue.classList.add("hidden");
    userFailPwd1MoreCheckFalse.classList.remove("hidden");
    userWritePwd.classList.add("falseChangeBorder");
    userWritePwd.classList.remove("trueChangeBorder");
    userWritePwd1MoreCheck.classList.add("falseChangeBorder");
    userWritePwd1MoreCheck.classList.remove("trueChangeBorder");
  }
}

function userSubmitFunction() {
  if (
    userWriteId.value !== "" &&
    userWritePwd.value !== "" &&
    userWritePwd1MoreCheck !== ""
  ) {
    mainTitle.classList.add("hidden");
    subTitle.classList.add("hidden");
    hiddenMainTitle.classList.remove("hidden");
    userWriteMainDiv.classList.add("hidden");
  } else {
    mainTitle.classList.remove("hidden");
    subTitle.classList.remove("hidden");
    hiddenMainTitle.classList.add("hidden");
    userWriteMainDiv.classList.remove("hidden");
  }
}
//이벤트 실행구간

userWriteMainDiv.addEventListener("keyup", userWriteFunction);
userWriteSubmit.addEventListener("click", userSubmitFunction);
// var regExp = /^[a-z]+[a-z0-9]{5,19}$/g  아이디 정규식 체크 영문자로 시작하는 영문자 또는 숫자 6~20자
// var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; 핸드폰 번호 정규식 체크
// var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; 비밀번호 정규식 체크 8~16자 영문 숫자조합
// var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/; 비밀번호 정규식 체크 8~16문자 영문,숫자, 특수문자 최소 한가지씩 조합

// function userIdCheckFunction() {
//   if (userWriteId.value.length >= 4 || userWriteId.value === "") {
//     userFailIdCheck.classList.add("hidden");
//   } else {
//     userFailIdCheck.classList.remove("hidden");
//   }
// }

// function userPwdCheckFunction() {
//   if (userWritePwd.value.length >= 5 || userWritePwd.value === "") {
//     userFailPwdCheck.classList.add("hidden");
//   } else if (userWritePwd.value === "" && userWritePwd1MoreCheck.value !== "") {
//     notUserPwdCheck.classList.add("hidden");
//   } else {
//     if (userWritePwd.value === userWritePwd1MoreCheck.value) {
//       userFailPwdCheck.classList.remove("hidden");
//       userFailPwd1MoreCheck.classList.remove("hidden");
//     } else {
//       userFailPwdCheck.classList.add("hidden");
//       userFailPwd1MoreCheck.classList.add("hidden");
//     }
//   }
// }

// userWriteId.addEventListener("keyup", userIdCheckFunction);
// userWritePwd.addEventListener("keyup", userPwdCheckFunction);

// function userWriteFunction() {
//   if (userWriteId.value.length >= 4 || userWriteId.value === "") {
//     userFailIdCheckTrue.classList.remove("hidden");
//     userFailIdCheckFalse.classList.add("hidden");
//     userWriteId.classList.remove("falseChangeBorder");
//     userWriteId.classList.add("trueChangeBorder");
//   } else {
//     userFailIdCheckTrue.classList.add("hidden");
//     userFailIdCheckFalse.classList.remove("hidden");
//     userWriteId.classList.remove("trueChangeBorder");
//     userWriteId.classList.add("falseChangeBorder");
//   }

//   if (userWritePwd.value.length <= 5 || userWritePwd1MoreCheck.value === "") {
//     userFailPwdCheckTrue.classList.add("hidden");
//     userFailPwdCheckFalse.classList.remove("hidden");
//     userFailPwd1MoreCheckTrue.classList.add("hidden");
//     userFailPwd1MoreCheckFalse.classList.remove("hidden");
//     userWritePwd.classList.add("falseChangeBorder");
//     userWritePwd.classList.remove("trueChangeBorder");
//     userWritePwd1MoreCheck.classList.add("falseChangeBorder");
//     userWritePwd1MoreCheck.classList.remove("trueChangeBorder");
//   } else if (userWritePwd.value === userWritePwd1MoreCheck.value) {
//     userFailPwdCheckTrue.classList.remove("hidden");
//     userFailPwdCheckFalse.classList.add("hidden");
//     userFailPwd1MoreCheckTrue.classList.remove("hidden");
//     userFailPwd1MoreCheckFalse.classList.add("hidden");
//     userWritePwd.classList.remove("falseChangeBorder");
//     userWritePwd.classList.add("trueChangeBorder");
//     userWritePwd1MoreCheck.classList.remove("falseChangeBorder");
//     userWritePwd1MoreCheck.classList.add("trueChangeBorder");
//   }
// }

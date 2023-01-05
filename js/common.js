// 1. searchEl 를 클릭시 searchInputEl에 focus되는 이벤트 핸들러를 등록
// 2. searchInputEl 가 focus 되면,
//     2.1. searchEl 의 속성으로 focused 를 추가하고,
//     2.2. searchInputEl를 선택하여, placeholder 속성의 값으로 '통합검색'을 지정한다.
// 3. searchInputEl 가 blur 되면,
//     3.1. searchEl 의 속성인 focused 를 제거하고,
//     3.2. searchInputEl를 선택하여, placeholder 속성의 값으로 ''을 지정한다.

// ---- HEADER Fn ----
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// ---- FOOTER Fn ----
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

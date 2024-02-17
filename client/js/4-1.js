import { getNode, attr, css, addClass, removeClass } from "./css.js";

const ul = getNode("ul");

function handleTab(e) {
  // li 수집
  const target = e.target.closest("li");
  // console.log(target);

  if (!target) return;

  // index 가져오기
  const index = attr(target, "data-index");
  // const index = target.dataset.index;
  // console.log(index)

  // contents style transform
  // 600만큼 증가

  // css 함수 안 쓰고 만들기

  // contents.style.transform = `translateX(-${600 * (index - 1)}px)`

  // addClass로 클래스 추가

  // 반복문을 돌아서 클래스 제거

  for (let i = 0; i < 4; i++) {
    removeClass(ul, `tab${i}`);
  }

  addClass(ul, `tab${index}`);

  css(".contents", "transform", `translateX(-${600 * (index - 1)}px)`);
}

ul.addEventListener("click", handleTab);

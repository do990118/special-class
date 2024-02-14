// 자바스크립트는 함수를 값처럼 사용함 (ex: 콜백 함수)

// 함수 선언문
function sumA(value) {
  return "a";
}

const a = new sumA();

sumA(10);

// 함수 표현식
const sumB = function (value) {
  return "b";
};

sumB(10);

const b = new sumB();

// 함수 선언문과 함수 표현식의 차이는 호이스팅
// 함수 선언문은 함수 전체가 다 끌올됨 함수 선언 전 호출 가능
// 함수 표현식은 위에서 호출할 수가 없다
// constructor 내장

// 함수 표현식 -> 화살표 함수 constructor 내장 x

const sumC = (value) => "c"; // 화살표 함수는 return과 중괄호 생략 가능, 인수가 하나밖에 없으면 괄호도 생략 가능

sumC(10);

// const c = new sumC();

// 함수 만드는 순서

// 1. 실행부 작성
// 2. 매개 변수
// 3. 리턴 유무
// 4. validation

// getNode

function getNode(node, context = document) {
  // const node = 'h1';

  if (typeof node !== "string") {
    throw new Error("getNode 함수의 첫 번째 인수는 문자형이어야 합니다");
  }

  if (context.nodeType !== 9) {
    context = doucment.querySelector(context);
  }

  return context.querySelector(node);
}

const h1 = getNode("h1");

// console.log(h1)

// addClass

// console.log(h1.classList.add('hello'));

function addClass(node, className) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (typeof className !== "string") {
    throw new TypeError("addClass 함수의 두 번째 인수는 문자형이어야 합니다");
  }
  node.classList.add(className);
}

addClass(h1, "hello");
addClass(h1, "tiger");

// removeClass

h1.classList.remove("hello");

function removeClass(node, cn) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (typeof cn !== "string" && cn !== undefined) {
    throw new TypeError(
      "removeClass 함수의 두 번째 인수는 문자형이어야 합니다"
    );
  }

  if (!cn) {
    node.className = "";
    return;
  }

  // className이 전달되지 않으면 클래스 전체 삭제
  // h1.className = ''

  node.classList.remove(cn);
}

removeClass(h1);

// getCss

function getCss(node, prop) {
  if (node === "string") {
    node = getNode(node);
  }

  if (!(prop in document.body.style)) {
    throw new TypeError(
      "getCss 함수의 두 번째 인수가 유효한 css 속성이 아닙니다"
    );
  }

  return getComputedStyle(node)[prop];
}

// 자바스크립트의 객체 매서드 사용법
// .표기법 (변수로 사용할 수 없음)
// []표기법

const result = getCss(h1, "backgroundColor");

console.log(result);

// setCss

function setCss(node, prop, value) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!value) {
    throw new SyntaxError("setCss 함수의 세 번째 인수는 필수 입력값입니다");
  }
  node.style[prop] = value;
}

setCss("h1", "background", "orange");

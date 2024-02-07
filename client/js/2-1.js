const data = [
  {
    productName: "간장게장",
    price: 25_000,
    saleRadio: 10,
    quantity: 5,
  },
  {
    productName: "장어구이",
    price: 28_500,
    saleRadio: 24,
    quantity: 3,
  },
  {
    productName: "고추잡채",
    price: 17_500,
    saleRadio: 13,
    quantity: 0,
  },
  {
    productName: "안심 스테이크",
    price: 22_900,
    saleRadio: 23,
    quantity: 0,
  },
];

const arr = ["가희", "지성", "도희", "우중", "호영"];

// forEach, mpa, filter, reduce

function f(t, i) {
  // console.log(t, i);
}

// 반복만 처리 / 값 반환 x => 그럼 왜 써요? 배열 반복하려고 씀
arr.forEach((item, index) => {
  // 인자는 정해져 있음. (함수)
  // console.log(item, index);
});

// 새로운 배열의 값 반환 => 그럼 왜 써요? 새로운 배열 데이터를 만들기 위해

// 인자 정해져 있음. (함수)
const map = arr.map((t, i) => {
  return "hello - " + t;
});

// console.log(map);

// 새로운 배열 값을 반환 => 왜 써요? 새로운 배열 데이터를 만들기 위해
const filter = arr.filter((t, i) => {
  return t === "호영";
});

// console.log(filter);

let total = 0;

data.forEach((t) => {
  //   total += t.price;
});

// console.log(total);

// map을 사용하여 productName만 가지고 있는 배열 데이터를 생성

const productName = data.map((t) => {
  return t.productName;
});

// console.log(productName);

// map을 사용하여 [[간장게장, 25000], [장어구이, 28500]] 가지고 있는 배열 데이터를 생성

const menu = data.map((t, i) => {
  return [t.productName, t.price];
});

// console.log(menu);

// reduce는 값을 반환함 => 다양한 자료형(숫자, 문자, 객체, 배열 등)의 값들을 반환
// const result = data.reduce((acc, cur) => {
//   acc.psuh(cur.productName)
//   return acc
// }, [])
// ↑ 초기값. 문자형이 들어갈 수도 있고 다양함

// console.log(result);

// filter를 사용해 수량이 남아있는 항목들만 배열 데이터로 생성

const notSoldOut = data.filter((t, i) => {
  return t.quantity !== 0;
});

console.log(notSoldOut);

// 태그 만들기(세일 가격이 적용된 price만 배열로)

const saleProduct = data.map((t) => {
  return `<li> 할인된 가격: ${
    t.price - t.price * (t.saleRadio * 0.01)
  } 품절 여부: ${t.quantity > 0 ? t.quantity : "품절! 감사합니다"}</li>`;
});

// console.log(saleProduct);

// 바닐라 자바스크립트
saleProduct.forEach(render); // forEach는 값을 반환하지 않아서 데이터를 한 번 가공한 뒤 html 요소로

function render(text) {
  document.body.insertAdjacentHTML("beforeend", text);
}

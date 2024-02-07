const salaries = {
  호영: 150,
  도희: 250,
  경미: 153,
  희선: 175,
  선범: 3000,
};

// 객체의 구조 분해 할당 (안 쓴다고 문제가 생기진 않음.. 그냥 편하려고)

const { 경미: a, 도희: b, 호영: c, 희선: d, 선범 = 5000 } = salaries;

// console.log(a, b, c, d, 선범);
// 원래 객체에 있던 값 가져다 씀

function creatUser({ name, age, nickName = "duck" }) {
  "잘생긴 " + name;
  age + 10;
  console.log(nickName.toUpperCase());
}

const 이경민 = creatUser({
  name: "이경민",
  age: 30,
  salary: 150,
  address: "서울시 어딘가...",
  lat: 30,
  long: 50,
  nickName: "bear",
});

// Promise를 쓰는 이유??

// 자바스크립트는 순서를 보장해 주지 않는다

const result = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("데이터");
  }, 1000);
});

result.then((res) => {
  console.log(res);
});

// 데이터 가져오기 1s

async function getData() {
  const END_POINT =
    "https://jsonplaceholder.typicode.com/photos?_start=106_limit=30";

  const response = await fetch(END_POINT);

  const data = await response.json();
}

// 가져온 데이터 가공하기

data.toLowerCase();

//async await

// await: result를 꺼낼 수 있음, 코드 실행 흐름 제어

// console.log('세수하기')
// setTimeout(()=>{
//     console.log('버스 타기')
// }, 100)
// console.log('컴퓨터 켜기')
// console.log('일하기')
// console.log('퇴근')

// console.log('데이터 받아오기'); // 1s

// console.log('데이터 받아올 때까지 기다리기');

// setTimeout(() => {
//     console.log('받아온 데이터를 가공하기 렌더링하기');
// }, 1000);

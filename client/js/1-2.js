// for, while, do ... while

// let i = 0;

// while(i < 10){
//     console.log(++i)
// }

// let i = 0;

// for(i = 0; i < 10;){
//     console.log(i++)
// }

const data = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  // data 객체의 'website'라는 키가 있어? 를 조회하고 싶음 => if ...

//   console.log('website' in data)

//   console.log(data.hasOwnProperty('toString'))

  // 자신의 프로퍼티를 가지고 있는지 확인하는 방법(hasOwnProperty)

//   console.log(Object.prototype.hasOwnProperty.call(data, 'toString'))

  // call은 누구에게서(Object).prototype.어떤 능력을(hasOwnProperty).빌려쓴다(call).누가(data)

  // for in 문 (객체 안에 해당 키가 있는지? 객체한테 쓸 수 있다)

  //값을 조회하고 싶다면 대괄호 표기법으로 객체명[키]을 조회할 수 있다

//   for(let key in data){
//     const l1 = data[key];

//     if(typeof l1 === 'object'){
//         for(const key in l1){
//             console.log(l1[key])
//         }
//     }
//   }

  // 배열은 for in을 사용하지 못할까?
  // 쓸 수는 있지만 공식 문서에서 하지 말라고 한다. 순서가 중요한 배열 자료는 for in으로 조회하면 순서를 보장해 주지 못한다고 함


  const arr = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
  ]

  // for of => 반복 가능한 요소를 반복 가능함 => symbol.iterator 반복자 프로토콜을 가진다

  const smallArray = ['a', 'b', 'c', 'd', 'e'];

  // for in과 for of는 개수(길이)만큼 반복됨

//   const str = '안녕하세요'

//   for(const value of arr){
//     console.log(value.website)
//   }

  // 객체를 for of에 넣고 돌릴려면... iterator가 필요하다 =>
  //객체를 배열로 만들어 버린다

  const user = {
    name: 'tiger',
    age: 40,
    address: '서울시 중량구 면목동',
  }

//   const keys = Object.keys(user);
   

    //Object.keys: 객체의 '키'를 모아서 새로운 배열로 반환하는 매서드

   //Object.values: 객체의 '값'들을 모아서 새로운 배열로 반환

   //Object.entries: 객체의 '키와 값'들을 모은 하나의 쌍 배열을 묶은 새로운 배열로 반환



//   console.log(keys)

//   for (const key of Object.keys(user)){
//     console.log(key)
//   }


// const values = Object.values(user)

// console.log(values)


// const entries = Object.entries(user);

// console.log(entries)

// for(const keyValue of entries){
//     let key = keyValue[0];
//     let value = keyValue[1];

//     console.log(key, value);
// }

// entries에서 키만 조회하고 싶으면 인덱스 [0] 사용해서 조회

// 값만 조회하고 싶으면 [1] 사용해서 조회

// 결과적으로 객체는 for in과 for of를 쓸 수 있는데... for of를 더 많이 쓴다
//

const salaries = {
    심호영: 150,
    곽도희: 250,
    김경미: 153,
    전희선: 175,
}

// 객체를 for of를 사용하여 모든 월급의 합을 구하시오.

// 객체를 배열로 만들어야 한다
// 배열로 만드는 법...
// Object.keys, Object.values, Object.entries

// const salary = Object.values(salaries)
// let sum = 0;

// for(value of salary){
//     sum += value;
// }

// for(const keyValue of Object.entries(salaries)){
//     const value = keyValue[1];
//     sum += value;
// }

// for(value in salaries){
//     sum += salaries[value];
// }

// for(const key in salaries){
//     if(Object.prototype.hasOwnProperty.call(salaries, key)){
//         sum += salaries[key];
//     }
// }

// console.log(sum);


// 배열의 매서드
// ForEach, reduce, map, filter, find, findIndex ...
// Array.prototype

const value = Object.values(salaries);
let total = 0;

value.forEach((item,index)=>{
    console.log(`${index+1} 번째: ${item}`);

    total += item
});

console.log(total);
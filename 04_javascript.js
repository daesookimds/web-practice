// package : runner, script - code runne
// nodejs : npm 패키지 관리 매니저
// mac : brew install node

  console.log("dss"); // print

// 주석
// 한줄 주석 : // code...
// 여러줄 주석 : /* code...  */

// 변수 선언
  var a = 1;
  var b = 2;
  console.log(a+b);

// 식별자 규칙
// 상수명 : 대문자, 스네이크 케이스
// 변수 : 카멜 케이스
// 모듈 : 파스칼 케이스
// 컨벤션 : google js 컨벤션, airbnb js 컨벤션
// 특수기호 : 파이썬 _, js에서는 $ 사용이 가능
// _name : private, $target : selector

// 연산자
//  +, -, *, /, %, ++, --
   var c = 5;
   var result = c++;
   console.log(c, result); // 6, 5

   var d = 5;
   var result = ++d;
   console.log(d, result); // 6, 6

// 자바스크립트의 데이터 타입
  var a = 1;  // number
  var b = 1.1;  // number
  var c = "dss";  // string
  var d = [1, 2, 3];  // object
  var e = {a:1, b:2}; // object
  var f = true; // boolean
  console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);

// null, undefined, NaN
// null : 변수에 값이 없음을 정의
// undefined : 값이 지정되지 않음을 의미
// NaN : 존재하지 않는 데이터
  var a = null; // a의 할당된 메모리 주소를 없앰
  // GC(Garbage collector) : null로 할당이 끊긴 메모리를 다시 사용할 수 있게 만들어줌
  var b; // undefined
  var c = 0/0; // NaN

  console.log(a, b, c);

// 비교연산자
// <, >, >=, <=, ==, !=, ===, !==
// ==과 ===의 차이
// 결론 : 무조건 === 로 사용하면 된다.

// ==은 데이터의 값만 비교합니다.
  console.log(1 == 1); // true
  console.log(1 == "1"); // true
// ===은 데이터의 값과 데이터의 타입을 비교합니다.
  console.log(1 === 1); //true
  console.log(1 === "1"); //false

// 비교연산에서 NaN
// 비교연산에서 NaN이 들어가면 무조건 false

  console.log(NaN === NaN);
  console.log(NaN == NaN);

// 논리연산자
// &&(and), ||(or)
  console.log(true && true);
  console.log(true && false);

  console.log(true || true);
  console.log(true || false);

// 조건문
// python - if, elif, else
// js - if, else if, else
  if(false){
    console.log("hello");
  } else if (true) {
    console.log("world");
  } else {
    console.log("dss");
  }

// false 로 간주되는 데이터
// null, undefined, NaN, 0, ""

// true 로 간주되는 데이터
// [], {} 비어있는 오브젝트(객체)도 true

// 문제 1. 점수를 입력받아서 학점을 출력하는 코드
  var score = 90;
// todo
  if (score >= 95){
    result = "A+";
  } else if (score >= 90) {
    result = "A";
  } else if (score >= 85) {
    result = "B+";
  } else if (score >= 80) {
    result = "B";
  } else if (score >= 75) {
    result = "C+";
  } else if ( score >= 70) {
    result = "C";
  } else if (score >= 65) {
    result = "D+";
  } else if ( score >= 60) {
    result = "D";
  } else {
    result = "F";
  }

  console.log(result); // print "A~F"

// 반복문
// while, for, do while
  var num = 0;
  while (true) {
    num++;
    if (num === 3){
      continue;
    }
    if (num > 5) {
      break;
    }
    console.log(num);
  }
  console.log(num);

// python - for : iterable data 갯수만큼 반복해서 사용
// js - for(초기값;조건;증감)
// in : es6(버전) - class, 화살표함수(like lambda) 등 추가됨
for (var i = 0; i < 5; i++){
  console.log(i);
}

// 배열
  var arr = ["a", "b", "c", "d", "e"];
  console.log(arr[2]);

// 추가
  arr.push("f"); // 데이터 뒤 추가
  console.log(arr);

  arr.unshift("z"); // 데이터 앞 추가
  console.log(arr);

// 제거
  arr.shift(); // 데이터 앞 제거
  console.log(arr);
  arr.pop(); // 데이터 뒤 제거
  console.log(arr);

// 정렬
  arr.reverse();
  console.log(arr);

  arr.sort();
  console.log(arr);

// 자르기 - splice
  var arr2 = arr.splice(2, 3); // 2번 요소에서 3개 자르기.
  console.log(arr, arr2);

// 객체
// python에서 class로 만드는 객체와 같은 의미
// python에서 dictionary 데이터 타입과도 같은 의미

  var obj = {}; // var obj = new Object();
  obj.name = "daesoo";
  obj['addr'] = "seoul";
  console.log(obj);

  // 객체를 literal로 선언한다.
  // literal? : 변수에 대입해주는 값
  var obj2 = {
    name : "Daesoo",
    addr : "Seoul",
    skill : function(){
      console.log("coding");
    }
  };
  console.log(obj2);
  console.log(obj2.skill());


// function
// hoisting - 변수로 선언하면 최상단으로 올라갑니다. 선언순서 minus -> sum
  function sum(num1, num2){
    return num1 + num2;
  }

  var result = sum(1, 2);
  console.log(result);

  var minus = function(num1, num2){
    return num1 - num2;
  };

  var result = minus(3, 2);
  console.log(result);

// scope(스콥)
  var a = "hello";
  function disp(){
    var a = "world";
    console.log(a); // local a
  }
  disp();
  console.log(a); // 전역 a
//--------------------------------------------
  var b = "hello";
  function disp(){
    b = "world";
    console.log(b); // 전역 b
  }
  disp();
  console.log(b); // 전역 b

// 즉시실행함수, 익명함수
// 자바스크립트는 프론트엔드 언어입니다.
// 프론트엔드 언어는 코드가 브라우저에 공개됩니다.
// 서비스를 접속한 이용자가 전역 함수를 실항핼 수 있습니다.
/* 보안에 문제가 생길수 있기 때문에, 모든 함수나 변수를
   지역변수나 익명함수로 선언 해줍니다.*/
(function(){
    var name = "daesoo";
    function disp(){
      console.log("dss");
    }
    disp();
})();

(function(){

}());

// OOP - 캡슐화, 추상화, 은닉화
// getter, setter
// 실제로 자바스크립트에서 모듈을 사용하는 방법
// 모듈패턴

// PDF 파일에는 없는 내용
// 모듈 변수 선언
// Module 이라는 변수가 있으면 Module에 Module이 대입
// 없으면 빈 객체를 만듭니다.
  var Module = Module || {};
  (function(_Module){
    var _name = "daesoo";

    _Module.getName = function(){
      return _name;
    };

    _Module.setName = function(name){
      _name = name;
    };

  })(Module);

  console.log(Module.getName());
  console.log(Module._name); // undefined

// (clouser?) 클로저, 프로토타입 개념을 추가적으로 공부하면 중급과정
// jquery 를 찾아서 공부하는 것도 좋다.


// 콜백함수
// 함수에서 아규먼트로 함수를 받아서 함수안에 코드가 다 수행된 후에
// 아규먼트로 받은 함수를 수행합니다.
// 여기서 아규먼트로 받은 함수를 콜백 함수라고 합니다.

  function add(callback, n1, n2){
    var result = n1 + n2;
    callback(result);
  }

  function disp(result) {
    console.log(result);
  }

  function sqrt(result){
    console.log(result*result);
  }

  var result = add(disp, 2, 3);
  console.log(result);

  var result = add(sqrt, 2, 3);
  console.log(result);

// api 주고 받을때
// api - request, response -> collback 함수를 수행

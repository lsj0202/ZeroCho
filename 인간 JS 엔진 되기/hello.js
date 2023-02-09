const add = (a, b) => a + b;

/*
const add2 = function (a, b){
    return a + b;
}
*/
function calculator(func, a, b){  // add함수를 불러와서 a + b의 값을 리턴해준다.
    return func(a, b);
}

add(3, 5); // 8 
calculator(add, 3, 5); // 8 

const onClick = () => (event) => {
    console.log('hello');
};

document.querySelector('#header').addEventListener('click', add); // 리턴값을 통해서 함수를 호출할지 결정
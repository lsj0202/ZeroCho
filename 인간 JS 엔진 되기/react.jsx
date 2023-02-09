import { useCallback } from 'react';

export const App = () => {
    const onClick = useCallback(() => (e) => {
        console.log(e.target);
    }, []);

    return (
        <div onClick = {onClick()}></div> // onClick 함수를 호출 했음. 
    )
}



// 함수와 함수호출중 헷갈릴때는 return 값을 통해서 알 수 있다. 
// 함수이름 뒤에 () 붙으면 함수 호출이다. 
// const onClick = () => () => {}; 꼴로 되어 있는것은 함수의 선언이다.
import React, { useState } from 'react'
import CounterInput from './CounterInput';
import CountButton from './CountButton';

function Counter() {
    const [ number, setNumber ] = useState(0);
    const [ count, setCount] = useState(0); 

    const handleOnIncrease = () => {
        setNumber(number + count);
    }

    const handleOnDecrease = () => {
        setNumber(number - count);
    }

    // const handleInputChange = (e) => {
    //     console.log(e);
    //     setInputValue(e.target.value);
    // }

    // --retrun 안에 값
    // <input type="text" onChange={ handleInputChange } value={ inputValue } />
    // <button onClick={handleOnDecrease}>-</button>
    // <button onClick={handleOnIncrease}>+</button>


    return (
        <>
            <h1>{ number }</h1>
            <CounterInput setCount={ setCount }/>
            <CountButton title={ "+" } onClick={ handleOnIncrease } />
            <CountButton title={ "-" } onClick={ handleOnDecrease } />
        </>
    );
}

export default Counter;
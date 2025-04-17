import React from 'react';
import { useState } from 'react';

const Z02 = () => {

    const [count, setCount] = useState(0);

    // const countHandler = (e) => {
    //     setCount(count + 1);
    // }

    // function countHandler(e) {
    //     console.log(e);
    // }

    return (
        <div>
            하이 제로초:{count}
            {/* <input type='button' onClick={(e) => setCount(count+1)} >+ </input> */}
            <button onClick={(e) => setCount(count+1)} >+</button>
        </div>
    );
};

export default Z02;
import React, { useState,useEffect } from 'react'
import './styles.css';

function UseEffect() {
    const [ numb, setNumb] = useState(0)

    useEffect(() => {
       document.title = `Messages(${numb})`
    },)
    return (
        <>
           <div className="container">
            <div className="using-eff">
                <p>{ numb }</p>
                <button className="button3" onClick={() => setNumb(numb + 1)}  >Increment</button>
            </div>
            </div>
        </>
    )
}

export default UseEffect

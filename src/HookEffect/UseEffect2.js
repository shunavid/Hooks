import React, {useState, useEffect} from 'react'

const UseEffect2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)

const actualWidth = () =>{
    setWidthCount(window.innerWidth)
}

useEffect(() =>{
    window.addEventListener('resize', actualWidth);

return () =>{
    window.removeEventListener('resize', actualWidth)
}
})



    return (
        <div className="react-use-effect">
            <h2> The Actual Size of the Window is:</h2>
            <p>{ widthCount }</p>
        </div>
    )
}

export default UseEffect2

import React from 'react'
import { Link } from "react-router-dom";


function Routing() {
    return (
        <>
        <div className="head">
            
            <Link className="order-list" to="/UseState">
            UseState
            </Link>

            <Link className="order-list" to="/UseEffect">
                UseEffect
            </Link>
            <Link className="order-list" to="/UseReducer">
                UseReducer
            </Link>
            <Link className="order-list" to="/UseEffect2">
                UseEffect Cleanup
            </Link>

        </div>
        </>
    )
}
export default Routing
